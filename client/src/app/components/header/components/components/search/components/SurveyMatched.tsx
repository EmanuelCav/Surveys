import { Box, Typography } from "@mui/material"

import { SurveyMatchedPropsType } from "../../../../../../types/props.types"

const SurveyMatched = ({ survey, getSurvey }: SurveyMatchedPropsType) => {
    return (
        <Box p={2} bgcolor='#fff' sx={{
            border: '1px solid #ddd', cursor: 'pointer', ":hover": {
                backgroundColor: '#ddd'
            }
        }} onClick={() => getSurvey(survey.id!)}>
            <Typography variant="subtitle1" color='#f64'>{survey.title}</Typography>
        </Box>
    )
}

export default SurveyMatched