import { useNavigate } from "react-router-dom";

import SurveyList from './components/surveyList'

import { ISurvey } from '../../interfaces/Survey'

const List = ({ surveys }: { surveys: ISurvey[] }) => {

    const navigate = useNavigate()

    const redirectUsers = () => {
        navigate('/users')
    }

    return (
        <div className="contain-surveys-list">
            {
                surveys.length === 0 &&
                <p className='text-info-getsurvey'>You don't follow any user.
                    <span className='start-profile' onClick={redirectUsers}>
                        Show Users
                    </span>
                </p>
            }
            {
                surveys.map((survey: ISurvey) => {
                    return <SurveyList survey={survey} key={survey._id} />
                })
            }
        </div>
    )
}

export default List