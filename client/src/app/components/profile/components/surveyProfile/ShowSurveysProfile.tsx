import { Grid } from "@mui/material"

import Survey from "../../../general/Survey"

import { ISurvey } from "../../../../interfaces/Survey"
import { ShowSurveysProfilePropsType } from "../../../../types/props.types"

const ShowSurveysProfile = ({ user, redirectSurvey }: ShowSurveysProfilePropsType) => {
    return (
        <Grid container spacing={3} p={4}>
            {
                user.profile.surveys.map((survey: ISurvey) => {
                    return <Survey survey={survey} redirectSurvey={redirectSurvey} key={survey.id} />
                })
            }
        </Grid>
    )
}

export default ShowSurveysProfile