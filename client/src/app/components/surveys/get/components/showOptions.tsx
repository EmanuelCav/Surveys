import { useDispatch } from "react-redux";

import { voteSurveyApi } from '../../../../server/api/surveys.api'
import { voteSurveyAction } from '../../../../server/features/surveys.features'

import { optionSurveyType } from "../../../../types/survey.types"

const ShowOption = ({ survey, user, option, isVoted, setIsVoted, totalVotes }: optionSurveyType) => {

  const dispatch = useDispatch()

  const voteOption = async () => {

    try {
      const { data } = await voteSurveyApi(option._id, survey._id, user.token)
      dispatch(voteSurveyAction(data))
      setIsVoted(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button className="button-option-survey" style={isVoted ? { background: '#ddd', cursor: 'default' } : {}}
      onClick={isVoted ? () => console.log("You have voted") : voteOption} >
      {option.name}
      {
        isVoted && <p className="text-percetage">{option.votes.length} votes
          ({totalVotes === 0 ? (option.votes.length * 100) / 1 : (option.votes.length * 100) / totalVotes}%)</p>
      }
    </button>
  )
}

export default ShowOption