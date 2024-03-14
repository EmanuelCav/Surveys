import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IReducer } from "../interfaces/Reducer";

import SurveyInfo from "../components/survey/SurveyInfo";
import Comments from "../components/surveys/get/comments";

import { selector } from "../helper/selector";
import { surveyGet } from "../server/actions/survey.actions";
import { Box } from "@mui/material";

const Survey = () => {

  const user = useSelector((state: IReducer) => selector(state).user)
  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const params = useParams()
  const dispatch = useDispatch()

  const getData = async () => {
    dispatch(surveyGet({
      id: Number(params.id),
      token: user.user.token
    }) as any)
  }

  useEffect(() => {
    getData()
  }, [dispatch, params])

  return (
    <Box p={4}>
      {
        surveys.survey.user &&
        <SurveyInfo survey={surveys.survey} user={user.user} />
      }
      <Comments user={user.user} survey={surveys.survey} />
    </Box>
  )
}

export default Survey