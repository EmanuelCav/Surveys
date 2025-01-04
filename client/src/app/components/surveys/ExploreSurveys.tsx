import { Box } from '@mui/material'

import ExploreHeader from '../general/ExploreHeader'
import ShowSurveys from '../general/ShowSurveys'

import { ExploreSurveysPropsType } from '../../types/props.types'

const ExploreSurveys = ({ surveys, redirectSurvey, user, handleFilter }: ExploreSurveysPropsType) => {
  return (
    <Box width='100%' p={2} sx={{
      marginLeft: '294px'
    }} className="container-explore">
      <ExploreHeader handleFilter={handleFilter} />
      <ShowSurveys surveys={surveys} redirectSurvey={redirectSurvey} user={user} />
    </Box>
  )
}

export default ExploreSurveys