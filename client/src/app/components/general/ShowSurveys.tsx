import { Grid } from "@mui/material"

import Survey from "./components/survey/Survey"

import { ISurvey } from "../../interfaces/Survey"
import { ShowSurveysPropsType } from "../../types/props.types"

const ShowSurveys = ({ surveys, redirectSurvey }: ShowSurveysPropsType) => {
    return (
        <Grid container spacing={1} p={4}>
            <Grid container spacing={2}>
                {
                    surveys.map((survey: ISurvey) => {
                        return <Survey survey={survey} redirectSurvey={redirectSurvey} key={survey.id} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ShowSurveys