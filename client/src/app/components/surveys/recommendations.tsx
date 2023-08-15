import SurveyList from "./components/surveyList"

import { ISurvey } from "../../interfaces/Survey"

const Recommendations = ({ surveys }: { surveys: ISurvey[] }) => {
    return (
        <div className="contain-recommendations-list">
            <p className="header-recommendation">Recommendations</p>
            {
                surveys.map((survey: ISurvey) => {
                    return <SurveyList survey={survey} key={survey._id} />
                }).sort()
            }
        </div>
    )
}

export default Recommendations