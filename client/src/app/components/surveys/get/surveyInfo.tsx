import ShowOption from "./components/showOptions"
import InfoSurvey from "./components/infoSurvey"

import { IOption, ISurvey } from "../../../interfaces/Survey"

const SurveyInfo = ({ survey }: { survey: ISurvey }) => {
  return (
    <div className="container-survey-info">
      <h1 className="text-survey-info">{survey.title}</h1>
      {
        survey.options.map((option: IOption) => {
          return <ShowOption option={option} key={option._id} />
        })
      }
      <InfoSurvey survey={survey} />
    </div>
  )
}

export default SurveyInfo