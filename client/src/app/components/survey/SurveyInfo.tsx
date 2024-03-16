import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Box, Typography } from "@mui/material";

import InfoSurvey from "./components/surveyinfo/components/InfoSurvey";
import OptionsSurvey from "./components/surveyinfo/OptionsSurvey";
import Remove from "./components/surveyinfo/components/Remove";

import { IVote } from "../../interfaces/Survey";
import { SurveyInfoPropsType } from "../../types/props.types";

import { totalVotes } from "../../helper/functions";

const SurveyInfo = ({ survey, user }: SurveyInfoPropsType) => {

  const [isRemove, setIsRemove] = useState<boolean>(false)
  const [isVoted, setIsVoted] = useState<boolean>(false)

  const removeSurvey = () => {
    setIsRemove(!isRemove)
  }

  useEffect(() => {

    for (let i = 0; i < survey.options.length; i++) {
      survey.options[i].votes.find((vote: IVote) => {
        if (vote.userId === user.user.id) {
          setIsVoted(true)
          return
        }
      })
    }

  }, [isVoted])

  return (
    <Box position="relative" p={2} sx={{
      borderWidth: 1,
      borderColor: '#f64',
      borderStyle: 'solid',
      textAlign: 'center'
    }}>
      {
        isRemove && <Remove setIsRemove={setIsRemove} survey={survey} user={user} />
      }
      <Typography variant="h5">{survey.title}</Typography>
      {
        user.user.id === survey.user.id && <AiOutlineDelete size={18} className="remove-icon" onClick={removeSurvey} />
      }
      <OptionsSurvey survey={survey} isVoted={isVoted} setIsVoted={setIsVoted} totalVotes={totalVotes(survey.options)} user={user} />
      <InfoSurvey survey={survey} user={user} />
      <Typography variant="h6" align="center" mt={2} color="#f64">
        Votes: {totalVotes(survey.options)}
      </Typography>
    </Box>
  )
}

export default SurveyInfo