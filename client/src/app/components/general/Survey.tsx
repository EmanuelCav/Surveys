import { Box, Typography } from "@mui/material"
import { SurveyPropsType } from "../../types/props.types"

const Survey = ({ survey, redirectSurvey }: SurveyPropsType) => {
    return (
        <Box onClick={() => redirectSurvey(survey.id)}>
            <Typography>{survey.title}</Typography>
            <Typography>1. {survey.options[0] && survey.options[0].name}</Typography>
            <Typography>2. {survey.options[1] && survey.options[1].name}</Typography>
            <Typography>More ...</Typography>
            <Typography>recommendations:
                <Typography>
                    {survey.recommendations.length}
                </Typography>
            </Typography>
        </Box>
    )
}

export default Survey