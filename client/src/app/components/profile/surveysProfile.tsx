import { Box } from '@mui/material';

import ActionSurveyProfile from './components/surveyProfile/ActionSurveyProfile';
import ShowSurveys from '../general/ShowSurveys';

import { SurveysProfilePropsType } from '../../types/props.types';

const SurveysProfile = ({ user, navigate }: SurveysProfilePropsType) => {

  const redirectCreate = () => {
    navigate('/surveys/create')
  }

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  return (
    <Box mt={2} sx={{
      borderWidth: 1,
      borderColor: '#f64',
      borderStyle: 'solid',
      padding: 3
    }}>
      <ActionSurveyProfile user={user} redirectCreate={redirectCreate} />
      <ShowSurveys surveys={user.profile.surveys} redirectSurvey={redirectSurvey} user={user.user.user} />
    </Box>
  )
}

export default SurveysProfile