import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSurveyApi } from "../server/api/surveys.api";
import { getSurveyAction } from "../server/features/surveys.features";

import { IReducer } from "../interfaces/Reducer";

import SurveyInfo from "../components/surveys/get/surveyInfo";
import Comments from "../components/surveys/get/comments";
import { selector } from "../helper/selector";

const Survey = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const params = useParams()
  const dispatch = useDispatch()

  const getData = async () => {

    try {
      const { data } = await getSurveyApi(params.id as string, user.user.token)
      dispatch(getSurveyAction(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [dispatch, params])

  return (
    <div className="container-getsurvey">
      {
        surveys.survey.user &&
        <SurveyInfo survey={surveys.survey} user={user.user} />
      }
      <Comments />
    </div>
  )
}

export default Survey