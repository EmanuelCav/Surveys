import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@mui/material";

import Data from "../components/index/Data"
import Start from "../components/index/Start"
import SurveySlider from "../components/index/SurveySlider";

import { categoriesAction } from '../../app/server/features/surveys.features'
import { categoriesApi } from "../server/api/surveys.api";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";

const Index = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getData = async () => {
    const { data } = await categoriesApi()
    dispatch(categoriesAction(data) as any)
  }

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  const redirectSurveys = () => {
    navigate(`/explore/surveys`)
  }

  useEffect(() => {
    getData()
  }, [dispatch])

  return (
    <Box position="relative" my={4}>
      <Start navigate={navigate} />
      <SurveySlider redirectSurvey={redirectSurvey} user={user.user} surveys={surveys.surveys} redirectSurveys={redirectSurveys} />
      <Data />
    </Box>
  )
}

export default Index