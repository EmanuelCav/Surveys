import { Box } from "@mui/material"

import SurveyFollow from "./components/surveyFollow/SurveyFollow"

import { ISurvey } from "../../interfaces/Survey"
import { SurveysFollowPropsType } from "../../types/props.types"

const SurveysFollow = ({ surveys, redirectSurvey, user }: SurveysFollowPropsType) => {
    return (
        <Box display="flex" justifyContent='center' alignItems='center' flexDirection='column'>
            {
                surveys.map((survey: ISurvey) => {
                    return <SurveyFollow survey={survey} redirectSurvey={redirectSurvey} user={user} key={survey.id} />
                })
            }
        </Box>
    )
}

export default SurveysFollow