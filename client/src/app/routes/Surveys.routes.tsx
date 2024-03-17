import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreSurveys from "../components/surveys/ExploreSurveys";

import { surveyAll } from "../server/actions/survey.actions";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";

const Surveys = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  const getData = async () => {
    dispatch(surveyAll() as any)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
      <Navigation isCategories={false} isUsers={false} isSurveys={true} navigate={navigate} />
      <ExploreSurveys surveys={surveys.surveys} redirectSurvey={redirectSurvey} user={user.user.user} />
    </Box>
  )
}

export default Surveys