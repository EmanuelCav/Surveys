import { Box } from '@mui/material';

import ShowSurveysProfile from './components/surveyProfile/ShowSurveysProfile';

import { SurveysProfilePropsType } from '../../types/props.types';
import ActionSurveyProfile from './components/surveyProfile/ActionSurveyProfile';

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
      <ShowSurveysProfile user={user} redirectSurvey={redirectSurvey} />
    </Box>
  )
}

export default SurveysProfile