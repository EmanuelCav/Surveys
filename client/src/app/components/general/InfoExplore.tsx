import { Box, Typography } from "@mui/material";
import { RiSurveyLine } from "react-icons/ri";
import { AiOutlineStar } from 'react-icons/ai';
import { BiUser } from "react-icons/bi";

import { IUser } from "../../interfaces/User";

import { recommendationSurveysUser } from "../../helper/functions";

const InfoExplore = ({ data }: { data: IUser }) => {
    return (
        <Box display='flex' justifyContent='space-around' alignItems='flex-start' flexDirection='column'>
            <Box display='inline-flex' mt={1}>
                <RiSurveyLine size={22} color={'#f64'} />
                <Typography ml={1}>{data.surveys.length}</Typography>
            </Box>
            <Box display='inline-flex' mt={1}>
                <BiUser size={22} color={'#f64'} />
                <Typography ml={1}>{data.followers.length}</Typography>
            </Box>
            <Box display='inline-flex' mt={1}>
                <AiOutlineStar size={22} color={'#f64'} />
                <Typography ml={1}>{recommendationSurveysUser(data.surveys)}</Typography>
            </Box>
        </Box>
    )
}

export default InfoExplore