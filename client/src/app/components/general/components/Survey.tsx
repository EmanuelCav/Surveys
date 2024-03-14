import { Button, Card, CardActions, CardContent, Grid, List, ListItemText, Typography } from "@mui/material"

import { SurveyPropsType } from "../../../types/props.types"

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
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        {survey.options.map((s) => {
                            return <ListItemText sx={{ display: 'list-item' }} primary={s.name} key={s.id} />
                        }).slice(0, 2)}
                    </List>
                    <Typography variant="subtitle1" mt={1}>
                        More...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="warning" fullWidth size="medium" onClick={() => redirectSurvey(survey.id)}>Take part</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Survey