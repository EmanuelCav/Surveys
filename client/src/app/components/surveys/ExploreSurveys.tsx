import { Box } from '@mui/material'

import ExploreHeader from '../general/ExploreHeader'
import ShowSurveys from '../general/ShowSurveys'

import { ShowSurveysPropsType } from '../../types/props.types'

const ExploreSurveys = ({ surveys, redirectSurvey }: ShowSurveysPropsType) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }}>
      <ExploreHeader />
      <ShowSurveys surveys={surveys} redirectSurvey={redirectSurvey} />
    </Box>
  )
}

export default ExploreSurveys