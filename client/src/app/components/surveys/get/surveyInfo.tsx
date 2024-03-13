import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import ShowOption from "./components/showOptions"
import InfoSurvey from "./components/infoSurvey"
import Remove from "./components/remove";

import { IOption } from "../../../interfaces/Survey"
import { SurveyInfoPropsType } from "../../../types/props.types";

const SurveyInfo = ({ survey, user }: SurveyInfoPropsType) => {

  const [isRemove, setIsRemove] = useState<boolean>(false)
  const [isVoted, setIsVoted] = useState<boolean>(false)
  const [totalVotes, setTotalVotes] = useState<number>(0)

  const removeSurvey = () => {
    setIsRemove(!isRemove)
  }

  useEffect(() => {

    for (let i = 0; i < survey.options.length; i++) {
      survey.options[i].votes.find((userId) => {
        if (userId === user.user.id) {
          setIsVoted(true)
          return
        }
      })
    }

  }, [isVoted])

  useEffect(() => {

    let total = 0

    for (let i = 0; i < survey.options.length; i++) {
      for (let j = 0; j < survey.options[i].votes.length; j++) {
        total++
      }
    }

    setTotalVotes(total)

  }, [isVoted, totalVotes])

  return (
    <div className="container-survey-info">
      {
        isRemove && <Remove setIsRemove={setIsRemove} survey={survey} user={user} />
      }
      <h1 className="text-survey-info">{survey.title}</h1>
      {
        user.user.id === survey.user.id && <AiOutlineDelete size={18} className="remove-icon" onClick={removeSurvey} />
      }
      <div className="container-options-survey">
        {
          survey.options.map((option: IOption) => {
            return <ShowOption survey={survey} user={user} option={option}
              isVoted={isVoted} setIsVoted={setIsVoted} totalVotes={totalVotes} key={option.id} />
          })
        }
      </div>
      <InfoSurvey survey={survey} user={user} />
      <p className="text-info-getsurvey" style={{ marginTop: '10px' }}>Votes: {totalVotes}</p>
    </div>
  )
}

export default SurveyInfo