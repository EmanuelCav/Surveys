import { Box, Typography } from '@mui/material'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { MdDone } from "react-icons/md";

import { InfoSurveyPropsType } from '../../../../../types/props.types'
import { IRecommendation } from '../../../../../interfaces/Survey'

import { hasUserParticipate, totalVotes } from '../../../../../helper/functions'

const InfoShowSurvey = ({ survey, user }: InfoSurveyPropsType) => {
    return (
        <Box display="flex" justifyContent='flex-start' alignItems='center' mt={1}>
            {
                hasUserParticipate(survey.options, user) && <MdDone size={24} color={'#f64'} />
            }
            <Box display="flex" justifyContent='flex-start' alignItems='center' ml={4}>
                <BiUser size={20} color={'#f64'} />
                <Typography variant='subtitle1' ml={1}>
                    {totalVotes(survey.options)}
                </Typography>
            </Box>
            <Box display="flex" justifyContent='flex-start' alignItems='center' ml={4}>
                {
                    survey.recommendations.find((recommendation: IRecommendation) => recommendation.userId === user.id) ?
                        <AiFillStar size={20} color={'#f64'} /> :
                        <AiOutlineStar size={20} color={'#f64'} />
                }
                <Typography variant='subtitle1' ml={1}>
                    {survey.recommendations.length}
                </Typography>
            </Box>
        </Box>
    )
}

export default InfoShowSurvey