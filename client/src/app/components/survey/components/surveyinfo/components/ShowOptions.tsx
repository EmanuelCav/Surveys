import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";

import { voteSurveyApi } from '../../../../../server/api/surveys.api'
import { updateSurveyAction } from '../../../../../server/features/surveys.features'

import { ShowOptionPropsType } from "../../../../../types/props.types";

const ShowOption = ({ survey, user, option, isVoted, setIsVoted, totalVotes }: ShowOptionPropsType) => {

  const dispatch = useDispatch()

  const voteOption = async () => {

    try {
      const { data } = await voteSurveyApi(option.id, survey.id, user.token)
      dispatch(updateSurveyAction(data))
      setIsVoted(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" width='100%' padding={2} mt={2} sx={{
      background: isVoted ? '#ddd' : '#fff',
      cursor: isVoted ? 'default' : 'pointer',
      border: "1px solid #f64",
      ":hover": {
        background: '#ddd'
      },
      ":active": {
        background: isVoted ? '#ddd' : '#fff'
      }
    }} onClick={isVoted ? () => { } : voteOption} >
      <Typography variant="h6" color="#f64">
        {option.name}
      </Typography>
      {
        isVoted && <Typography variant="h6" color="#f64">Votes
          ({totalVotes === 0 ? (option.votes.length * 100) / 1 : (option.votes.length * 100) / totalVotes}%)
        </Typography>
      }
    </Box >
  )
}

export default ShowOption