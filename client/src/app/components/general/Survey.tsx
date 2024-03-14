import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { SurveyPropsType } from "../../types/props.types"

const Survey = ({ survey, redirectSurvey }: SurveyPropsType) => {
    return (
        <Card sx={{
            maxWidth: 340,
            boxShadow: "0 0 2px 1px #f64 inset",
            p: 1
        }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {survey.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                    {survey.options[0].name}
                </Typography>
                <Typography variant="body2" mt={1}>
                    {survey.options[1].name}
                </Typography>
                <Typography variant="body2" mt={1}>
                    More...
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="warning" size="small" onClick={() => redirectSurvey(survey.id)}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Survey