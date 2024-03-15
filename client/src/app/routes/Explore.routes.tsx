import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/surveys/Navigation";
import ExploreSurveys from "../components/surveys/ExploreSurveys";
import ExploreUsers from "../components/surveys/ExploreUsers";
import ExploreCategories from "../components/surveys/ExploreCategories";

import { categoriesApi } from '../server/api/surveys.api';
import { categoriesAction } from '../server/features/surveys.features';
import { surveyAll } from "../server/actions/survey.actions";

import { IReducer } from '../interfaces/Reducer';

import { selector } from "../helper/selector";

const Explore = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isCategories, setIsCategories] = useState<boolean>(false)
  const [isUsers, setIsUsers] = useState<boolean>(false)
  const [isSurveys, setIsSurveys] = useState<boolean>(true)

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
      <Navigation isCategories={isCategories} isUsers={isUsers} isSurveys={isSurveys} setIsCategories={setIsCategories} setIsUsers={setIsUsers} setIsSurveys={setIsSurveys} navigate={navigate} />
      {
        isSurveys && <ExploreSurveys surveys={surveys.surveys} redirectSurvey={redirectSurvey} />
      }
      {
        isUsers && <ExploreUsers users={user.users} />
      }
      {
        isCategories && <ExploreCategories categories={surveys.categories} />
      }
    </Box>
  )
}

export default Explore