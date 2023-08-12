import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { surveysApi } from '../server/api/surveys.api';
import { surveysAction } from '../server/features/surveys.features';

import { ISurvey } from "../interfaces/Survey";
import { IReducerSurvey } from '../interfaces/Reducer';

const Surveys = () => {

  const { surveys } = useSelector((state: IReducerSurvey) => state)
  const dispatch = useDispatch()

  const getData = async () => {

    try {
      const { data } = await surveysApi()
      dispatch(surveysAction(data.data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [dispatch])


  return (
    <div>
      {
        surveys.surveys.map((survey: ISurvey) => {
          return <p>{survey.title}</p>
        })
      }
    </div>
  )
}

export default Surveys