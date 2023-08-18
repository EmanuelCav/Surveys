import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSurveyApi } from "../server/api/surveys.api";
import { getSurveyAction } from "../server/features/surveys.features";

import { IReducer } from "../interfaces/Reducer";

import SurveyInfo from "../components/surveys/get/surveyInfo";
import Comments from "../components/surveys/get/comments";

const Survey = () => {

  const { user, surveys } = useSelector((state: IReducer) => state)

  const params = useParams()
  const dispatch = useDispatch()

  const getData = async () => {
    const { data } = await getSurveyApi(params.id as string, user.user.token)
    dispatch(getSurveyAction(data))
  }

  useEffect(() => {
    getData()
  }, [dispatch, params])

  return (
    <div className="container-getsurvey">
      {
        surveys.survey.user &&
        <SurveyInfo survey={surveys.survey} />
      }
      <Comments />
    </div>
  )
}

export default Survey