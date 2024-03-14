import { Box } from '@mui/material'

import ShowSurveys from '../general/ShowSurveys'

import { ShowSurveysPropsType } from '../../types/props.types'

const ExploreSurveys = ({ surveys, redirectSurvey }: ShowSurveysPropsType) => {
  return (
    <Box width='100%' sx={{
        marginLeft: '294px'
    }}>
        <ShowSurveys surveys={surveys} redirectSurvey={redirectSurvey} />
    </Box>
  )
}

export default ExploreSurveys