import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@mui/material";

import Data from "../components/index/Data"
import Start from "../components/index/Start"
import SurveySlider from "../components/index/SurveySlider";
import UserSlider from "../components/index/UserSlider";
import ShowSurveys from "../components/general/ShowSurveys";
import SurveysFollow from "../components/index/SurveysFollow";
import DontFollow from "../components/index/DontFollow";

import { usersApi } from "../server/api/user.api";
import { surveysApi, surveysFollowApi } from "../server/api/surveys.api";
import { surveysAction, surveysFollowAction } from "../server/features/surveys.features";
import { usersAction } from "../server/features/user.features";

import { IReducer } from "../interfaces/Reducer";

import { selector } from "../helper/selector";

const Index = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [amountUsers, setAmountUsers] = useState<number>(0)

  const getData = async () => {
    const surveysData = await surveysApi(user.isLoggedIn ? user.user.token! : undefined, 'random')
    const usersData = await usersApi(0, user.isLoggedIn ? user.user.token! : undefined)

    if(user.isLoggedIn) {
        const surveysFollowData = await surveysFollowApi(user.user.token!)
        dispatch(surveysFollowAction(surveysFollowData.data))
    }

    dispatch(surveysAction(surveysData.data))
    dispatch(usersAction(usersData.data.users))

    setAmountUsers(usersData.data.length)
  }

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  const redirectSurveys = () => {
    navigate(`/explore/surveys`)
  }

  const redirectUsers = () => {
    navigate(`/explore/users`)
  }

  const redirectUser = (id: number) => {
    navigate(`/profile/${id}`)
  }

  useEffect(() => {
    getData()
  }, [dispatch])

  return (
    <Box position="relative" my={4}>
      {
        user.isLoggedIn && 
        <>
          {
            user.user.user?.following.length! > 0 ? <SurveysFollow surveys={surveys.surveysFollowing} redirectSurvey={redirectSurvey} user={user.user} />
            : <DontFollow redirectUsers={redirectUsers} />
          }
        </>
      }
      {
        !user.isLoggedIn && <Start navigate={navigate} />
      }
      {
        surveys.surveys.length > 0 && <SurveySlider redirectSurvey={redirectSurvey} user={user.user} surveys={surveys.surveys} redirectSurveys={redirectSurveys} />
      }
      {
        !user.isLoggedIn && <Data amountUsers={amountUsers} amountSurveys={surveys.surveys.length} />
      }
      {
        user.users.length > 0 && <UserSlider user={user} redirectUsers={redirectUsers} redirectUser={redirectUser} />
      }
      {
        surveys.surveys.length > 0 && <ShowSurveys redirectSurvey={redirectSurvey} surveys={surveys.surveys} user={user.user} />
      }
    </Box>
  )
}

export default Index