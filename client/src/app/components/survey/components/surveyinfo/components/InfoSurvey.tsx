import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BiCommentDetail, BiUser } from "react-icons/bi";

import ActionSurvey from "./components/ActionSurvey";

import { InfoSurveyPropsType } from "../../../../../types/props.types";

import { recommendSurveyApi } from "../../../../../server/api/surveys.api";
import { recommendSurveyAction } from "../../../../../server/features/surveys.features";

const InfoSurvey = ({ survey, user }: InfoSurveyPropsType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLiked, setIsLiked] = useState<boolean>(false)

    const getData = async () => {

        try {
            const { data } = await recommendSurveyApi(survey.id, user.token)
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
        navigate(`/profile/${survey.user.id}`)
    }

    useEffect(() => {
        survey.recommendations.find((userId: number) => {
            if (userId === user.user.id) {
                setIsLiked(true)
            }
        })
    }, [dispatch, survey.recommendations])

    return (
        <Box display="flex" justifyContent='space-evenly' alignItems='center' width='100%' p={1} mt={1} bgcolor='#ffffff' sx={{
            borderRadius: '4px',
            wordWrap: 'break-word',
            outline: "2px solid var(--main-color)"
        }}>
            {
                isLiked ? (
                    <ActionSurvey data={`Recommendations: ${survey.recommendations.length}`} Icon={AiFillStar} func={likeSurvey} />
                ) : (
                    <ActionSurvey data={`Recommendations: ${survey.comments.length}`} Icon={AiOutlineStar} func={likeSurvey} />
                )
            }
            <ActionSurvey data={`Comments: ${survey.comments.length}`} Icon={BiCommentDetail} func={likeSurvey} />
            <ActionSurvey data={`From: ${survey.user.username}`} Icon={BiUser} func={redirectProfile} />
            <Typography variant="h6">
                Creation date: {survey.createdAt.split("T")[0]}
            </Typography>
        </Box>
    )
}

export default InfoSurvey