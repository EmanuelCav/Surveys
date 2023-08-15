import SurveyList from './components/surveyList'

import { ISurvey } from '../../interfaces/Survey'

const List = ({ surveys }: { surveys: ISurvey[] }) => {
    return (
        <div className="contain-surveys-list">
            {
                surveys.map((survey: ISurvey) => {
                    return <SurveyList survey={survey} key={survey._id} />
                })
            }
        </div>
    )
}

export default List