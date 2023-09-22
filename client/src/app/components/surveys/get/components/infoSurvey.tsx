import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiCommentDetail, BiUser } from "react-icons/bi";

import { getSurveyType } from "../../../../types/survey.types";

import { recommendSurveyApi } from "../../../../server/api/surveys.api";
import { recommendSurveyAction } from "../../../../server/features/surveys.features";

const InfoSurvey = ({ survey, user }: getSurveyType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLiked, setIsLiked] = useState<boolean>(false)

    const getData = async () => {

        try {
            const { data } = await recommendSurveyApi(survey._id, user.token)
            dispatch(recommendSurveyAction(data))
        } catch (error) {
            console.log(error);
        }
    }

    const likeSurvey = () => {
        getData()
        setIsLiked(!isLiked)
    }

    const redirectProfile = () => {
        navigate(`/profile/${survey.user._id}`)
    }

    useEffect(() => {
        survey.recommendations.find((userId: string) => {
            if (userId === user.user._id) {
                setIsLiked(true)
            }
        })
    }, [dispatch, survey.recommendations])


    return (
        <div className="container-info-getsurvey">
            <div className="container-icon-info">
                {
                    isLiked ? (
                        <AiFillStar size={28} color={'#f64'} onClick={likeSurvey} />
                    ) : (
                        <AiOutlineStar size={28} color={'#f64'} onClick={likeSurvey} />
                    )
                }
                <p className='text-info-getsurvey' onClick={likeSurvey}>Recommendations: {survey.recommendations.length}</p>
            </div>
            <div className="container-icon-info-comment">
                <BiCommentDetail size={28} color={'#f64'} />
                <p className='text-info-getsurvey'>Comments: {survey.comments.length}</p>
            </div>
            <div className="container-icon-info" onClick={redirectProfile}>
                <BiUser size={28} color={'#f64'} />
                <p className='text-info-getsurvey'>From: {survey.user.username}</p>
            </div>
            <p className='text-info-getsurvey'>Creation date: {survey.createdAt.split("T")[0]}</p>
        </div>
    )
}

export default InfoSurvey