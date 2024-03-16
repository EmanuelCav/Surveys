import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"

import InfoShowSurvey from "./components/InfoShowSurvey"

import { SurveyPropsType } from "../../../../types/props.types"
import ListOptionsSurvey from "./components/ListOptionsSurvey"

const Survey = ({ survey, redirectSurvey }: SurveyPropsType) => {
    return (
        <Grid item xs={6}>
            <Card sx={{
                boxShadow: "0 0 2px 1px #f76 inset",
                p: 2
            }}>
                <CardContent>
                    <Typography noWrap variant="h6" align="center" component="div">
                        {survey.title}
                    </Typography>
                    <ListOptionsSurvey options={survey.options} />
                    <Typography variant="subtitle1" mt={1}>
                        More...
                    </Typography>
                    <InfoShowSurvey survey={survey} />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="warning" fullWidth size="medium" onClick={() => redirectSurvey(survey.id)}>Take part</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Survey