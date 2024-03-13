import { useNavigate } from "react-router-dom";

import { ISurvey } from '../../../interfaces/Survey'

const SurveyList = ({ survey }: { survey: ISurvey }) => {

    const navigate = useNavigate()

    const redirectSurvey = () => {
        navigate(`/surveys/${survey.id}`)
    }

    return (
        <></>
        // <div className='card-survey' onClick={redirectSurvey}>
        //     <h1 className='title-survey-list'>{survey.title}</h1>
        //     <p className='option-survey-list'>1. {survey.options[0] && survey.options[0].name}</p>
        //     <p className='option-survey-list'>2. {survey.options[1] && survey.options[1].name}</p>
        //     <p className='option-survey-list'>More ...</p>
        //     <p className='option-survey-list' style={{ fontWeight: '800' }}>recommendations:
        //         <span className='recommendations-survey-list'>
        //             {survey.recommendations.length}
        //         </span>
        //     </p>
        // </div>
    )
}

export default SurveyList