import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { surveysApi } from '../server/api/surveys.api';
import { surveysAction } from '../server/features/surveys.features';

import { IReducer } from '../interfaces/Reducer';

import List from "../components/surveys/list";
import Recommendations from "../components/surveys/recommendations";

const Surveys = () => {

  const { surveys } = useSelector((state: IReducer) => state)
  const dispatch = useDispatch()

  const getData = async () => {

    try {
      const { data } = await surveysApi()
      dispatch(surveysAction(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [dispatch])

  return (
    <div className="container-surveys">
      <List surveys={surveys.surveys} />
      <Recommendations surveys={surveys.surveys} />
    </div>
  )
}

export default Surveys