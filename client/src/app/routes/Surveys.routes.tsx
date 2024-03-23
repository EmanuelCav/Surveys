import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Box } from "@mui/material";

import Navigation from "../components/general/Navigation";
import ExploreSurveys from "../components/surveys/ExploreSurveys";
import FilterSurvey from "../components/general/components/filter/FilterSurvey";

import { surveyAll } from "../server/actions/survey.actions";

import { IReducer } from '../interfaces/Reducer';
import { DateTypeKey, OrderTypeKey } from "../types/key.types";

import { selector } from "../helper/selector";

const Surveys = () => {

  const surveys = useSelector((state: IReducer) => selector(state).surveys)
  const user = useSelector((state: IReducer) => selector(state).user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [isSumbitFilter, setIsSumbitFilter] = useState<boolean>(false)

  const [order, setOrder] = useState<OrderTypeKey>('random')
  const [date, setDate] = useState<DateTypeKey>('total')

  const handleFilter = () => {
    setIsFilter(!isFilter)
  }

  const handleSumbitFilter = () => {
    setIsSumbitFilter(!isSumbitFilter)
    setIsFilter(false)
  }

  const handleOrder = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setOrder(value as OrderTypeKey)
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setDate(value as DateTypeKey)
  };

  const redirectSurvey = (id: number) => {
    navigate(`/surveys/${id}`)
  }

  const getData = async () => {
    dispatch(surveyAll({
      user,
      order,
      date
    }) as any)
  }

  useEffect(() => {
    getData()
  }, [isSumbitFilter])

  return (
    <Box position='relative' display='flex' justifyContent='flex-end' alignItems='center'>
      {
        isFilter && <FilterSurvey handleFilter={handleFilter} handleOrder={handleOrder} order={order} handleDate={handleDate} date={date} handleSumbitFilter={handleSumbitFilter!} />
      }
      <Navigation isCategories={false} isUsers={false} isSurveys={true} navigate={navigate} />
      <ExploreSurveys surveys={surveys.surveys} redirectSurvey={redirectSurvey} user={user.user} handleFilter={handleFilter} />
    </Box>
  )
}

export default Surveys