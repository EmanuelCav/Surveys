import SurveyList from "../surveys/components/surveyList"

import { ISurvey } from "../../interfaces/Survey"

const SurveysProfile = ({ surveys }: { surveys: ISurvey[] }) => {
  return (
    <div className="container-surveys-profile">
        {
          surveys.map((survey: ISurvey) => {
            return <SurveyList survey={survey} key={survey._id} />
          })
        }
    </div>
  )
}

export default SurveysProfile