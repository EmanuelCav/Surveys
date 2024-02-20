import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import SurveyList from "../surveys/components/surveyList"

import { ISurvey } from "../../interfaces/Survey"
import { profileSurveyType } from "../../types/auth.types"

import { removeSurveyApi } from '../../server/api/surveys.api';
import { removeSurveyAction } from '../../server/features/surveys.features';

const SurveysProfile = ({ surveys, user }: profileSurveyType) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const redirectCreate = () => {
    navigate('/surveys/create')
  }

  const removeSurveyWithoutOptions = async (survey: ISurvey) => {
    await removeSurveyApi(survey._id, user.user.token)
    dispatch(removeSurveyAction(survey))
  }

  useEffect(() => {
    surveys.find((survey) => {
      if (survey.options.length < 2) {
        if (survey.user._id === user.user.user._id) {
          removeSurveyWithoutOptions(survey)
        }
      }
    })
  }, [surveys])

  return (
    <div className="container-surveys-profile">
      {
        surveys.length === 0 &&
        <>
          {
            user.profile._id === user.user.user._id ? (
              <p className="text-info-getsurvey">You have not posts.
                <span className="start-profile" onClick={redirectCreate}>
                  Start now!
                </span>
              </p>
            ) : (
              <p className="text-info-getsurvey">This user has not posts</p>
            )
          }
        </>
      }
      {
        surveys.map((survey: ISurvey) => {
          return <SurveyList survey={survey} key={survey._id} />
        })
      }
    </div>
  )
}

export default SurveysProfile