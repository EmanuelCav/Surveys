import { Box } from '@mui/material';

import NoSurveys from './components/surveyProfile/NoSuveys'
import Survey from '../general/Survey';

import { ISurvey } from "../../interfaces/Survey"
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
      {
        user.profile.surveys.length === 0 &&
        <Box width='100%'>
          {
            user.profile.id === user.user.user.id ? (
              <NoSurveys isUser={user.profile.id === user.user.user.id} redirectCreate={redirectCreate} />
            ) : (
              <NoSurveys isUser={user.profile.id === user.user.user.id} redirectCreate={redirectCreate} />
            )
          }
        </Box>
      }
      {
        user.profile.surveys.map((survey: ISurvey) => {
          return <Survey survey={survey} redirectSurvey={redirectSurvey} key={survey.id} />
        })
      }
    </Box>
  )
}

export default SurveysProfile