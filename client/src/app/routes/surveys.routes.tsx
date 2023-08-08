import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { surveysApi } from '../server/api/surveys.api';
import { surveysAction } from '../server/features/surveys.features';

import { ISurvey } from "../interfaces/Survey";
import { IReducer } from '../interfaces/Reducer';

const Surveys = () => {

  const { surveys } = useSelector((state: IReducer) => state)
  const dispatch = useDispatch()

  const getData = async () => {
    const { data } = await surveysApi()
    dispatch(surveysAction(data.data))
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