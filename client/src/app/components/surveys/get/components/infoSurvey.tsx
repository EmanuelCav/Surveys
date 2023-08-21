import { useNavigate } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiCommentDetail, BiUser } from "react-icons/bi";

import { ISurvey } from "../../../../interfaces/Survey"

const InfoSurvey = ({ survey }: { survey: ISurvey }) => {

    const navigate = useNavigate()

    const redirectProfile = () => {
        navigate(`/profile/${survey.user._id}`)
    }

    return (
        <div className="container-info-getsurvey">
            <div className="container-icon-info">
                <AiOutlineStar size={28} />
                <p className='text-info-getsurvey'>Recommendations: {survey.recommendations.length}</p>
            </div>
            <div className="container-icon-info">
                <BiCommentDetail size={28} />
                <p className='text-info-getsurvey'>Comments: {survey.comments.length}</p>
            </div>
            <div className="container-icon-info" onClick={redirectProfile}>
                <BiUser size={28} />
                <p className='text-info-getsurvey'>From: {survey.user.username}</p>
            </div>
            <p className='text-info-getsurvey'>Creation date: {survey.createdAt.split("T")[0]}</p>
        </div>
    )
}

export default InfoSurvey