import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@mui/material";

import Data from "../components/index/data"
import Start from "../components/index/start"

import { categoriesAction } from '../../app/server/features/surveys.features'
import { categoriesApi } from "../server/api/surveys.api";

import { IReducer } from "../interfaces/Reducer";

import { isStorage } from "../helper/storage";
import { selector } from "../helper/selector";

const Index = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getData = async () => {
    const { data } = await categoriesApi()
    dispatch(categoriesAction(data) as any)
  }

  useEffect(() => {

    (async () => {
      if (isStorage()) {
        navigate('/surveys')
      }
    })()

  }, [])

  useEffect(() => {
    getData()
  }, [dispatch])

  return (
    <Box>
      <Start />
      <Data />
    </Box>
  )
}

export default Index