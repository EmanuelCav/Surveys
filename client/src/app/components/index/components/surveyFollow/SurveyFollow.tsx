import { Card, CardContent, Typography } from '@mui/material'

import ButtonCard from '../../../general/ButtonCard'
import ListOptionsSurvey from '../../../general/components/survey/components/ListOptionsSurvey'
import InfoShowSurvey from '../../../general/components/survey/components/InfoShowSurvey'

import { SurveyFollowPropsType } from '../../../../types/props.types'

const SurveyFollow = ({ survey, redirectSurvey, user }: SurveyFollowPropsType) => {
    return (
        <Card sx={{
            boxShadow: "0 0 2px 1px #f76 inset",
            p: 2,
            my: 4,
            width: 400
        }}>
            <CardContent>
                <Typography noWrap variant="h6" component="div">
                    {survey.user.username}
                </Typography>
                <Typography noWrap variant="h6" align="center" component="div">
                    {survey.title}
                </Typography>
                <ListOptionsSurvey options={survey.options} />
                <Typography variant="subtitle1">
                    More...
                </Typography>
                <InfoShowSurvey survey={survey} user={user} />
            </CardContent>
            <ButtonCard id={survey.id} func={redirectSurvey} text="Take part" />
        </Card>
    )
}

export default SurveyFollow