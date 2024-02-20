import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { surveysFollowApi } from '../server/api/surveys.api';
import { surveysFollowAction } from '../server/features/surveys.features';

import { IReducer } from '../interfaces/Reducer';

import List from "../components/surveys/list";
import Recommendations from "../components/surveys/recommendations";

import { selector } from "../helper/selector";
import { surveyAll } from "../server/actions/survey.actions";

const Surveys = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()

  const getData = async () => {
    dispatch(surveyAll() as any)
  }

  const getDataFollow = async () => {

    try {

      const { data } = await surveysFollowApi(user.user.token)

      dispatch(surveysFollowAction(data))

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()

    if (user.isLoggedIn) {
      getDataFollow()
    }

  }, [dispatch])

  return (
    <div className="container-surveys">
      <List surveys={user.isLoggedIn ? surveys.follow : surveys.surveys} />
      {
        user.isLoggedIn &&
        <Recommendations surveys={surveys.surveys} />
      }
    </div>
  )
}

export default Surveys