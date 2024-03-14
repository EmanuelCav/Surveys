import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/navigation/Navigation";
import ExploreSurveys from "../components/surveys/ExploreSurveys";

import { categoriesApi } from '../server/api/surveys.api';
import { categoriesAction } from '../server/features/surveys.features';
import { surveyAll } from "../server/actions/survey.actions";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";

const Explore = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  const getData = async () => {

    const { data } = await categoriesApi()

    dispatch(surveyAll() as any)
    dispatch(categoriesAction(data) as any)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
      <Navigation />
      <ExploreSurveys surveys={surveys.surveys} redirectSurvey={redirectSurvey} />
    </Box>
  )
}

export default Explore