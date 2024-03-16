import { Box, Typography } from '@mui/material'
import { AiOutlineStar } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

import { ISurvey } from '../../../../../interfaces/Survey'

import { totalVotes } from '../../../../../helper/functions'

const InfoShowSurvey = ({ survey }: { survey: ISurvey }) => {
    return (
        <Box display="flex" justifyContent='flex-start' alignItems='center'>
            <Box display="flex" justifyContent='flex-start' alignItems='center'>
                <BiUser size={20} color={'#f64'} />
                <Typography variant='subtitle1' ml={1}>
                    {totalVotes(survey.options)}
                </Typography>
            </Box>
            <Box display="flex" justifyContent='flex-start' alignItems='center' ml={4}>
                <AiOutlineStar size={20} color={'#f64'} />
                <Typography variant='subtitle1' ml={1}>
                    {survey.recommendations.length}
                </Typography>
            </Box>
        </Box>
    )
}

export default InfoShowSurvey