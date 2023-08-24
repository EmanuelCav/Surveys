import { AiOutlineDelete } from "react-icons/ai";

import ShowOption from "./components/showOptions"
import InfoSurvey from "./components/infoSurvey"

import { IOption } from "../../../interfaces/Survey"
import { getSurveyType } from "../../../types/survey.types";

const SurveyInfo = ({ survey, user }: getSurveyType) => {
  return (
    <div className="container-survey-info">
      <h1 className="text-survey-info">{survey.title}</h1>
      {
        user.user._id === survey.user._id && <AiOutlineDelete size={18} className="remove-icon" />
      }
      {
        survey.options.map((option: IOption) => {
          return <ShowOption option={option} key={option._id} />
        })
      }
      <InfoSurvey survey={survey} user={user} />
    </div>
  )
}

export default SurveyInfo