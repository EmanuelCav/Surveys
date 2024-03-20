import { ChangeEvent, FormEvent, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ICreateOption } from "../../interfaces/Survey";
import { CreateOptionPropsType } from "../../types/props.types";

import ActionsOption from "./components/ActionsOption";
import ShowOptions from "./components/ShowOptions";

import { createOptionApi, removeOptionApi } from "../../server/api/surveys.api";
import { getSurveyAction } from "../../server/features/surveys.features";
import { surveyOptions } from "../../server/actions/survey.actions";

import { dangerMessage } from "../../helper/message";

const CreateOption = ({ user, survey, navigate }: CreateOptionPropsType) => {

  const dispatch = useDispatch()

  const initialState: ICreateOption[] = [{
    name: ""
  }]

  const [optionData, setOptionData] = useState<ICreateOption[]>(initialState)

  const addOption = async () => {
    setOptionData([...optionData, {
      name: ""
    }])

    const { data } = await createOptionApi(survey.id!, user.token!)
    dispatch(getSurveyAction(data))
  }

  const removeOption = async () => {
    const { data } = await removeOptionApi(survey.options![survey.options!.length - 1].id, survey.id!, user.token!)
    dispatch(getSurveyAction(data))

    setOptionData(optionData.slice(0, -1))
  }

  const handleOptionAction = (isAdd: boolean) => {
    if (isAdd) {
      addOption()
    } else {
      removeOption()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    let items = [...optionData];
    let item = { ...items[index] };
    item.name = e.target.value;
    items[index] = item;
    setOptionData(items);
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (survey.options!.length < 2) {
      dangerMessage("You must to upload at least two options")
      return
    }

    dispatch(surveyOptions({
      token: user.token!,
      optionData,
      survey,
      navigate
    }) as any)
  }

  return (
    <Box component='form' p={3} justifyContent='center' alignItems='center' flexDirection='column' display='flex' sx={{
      width: '37.33%',
      height: '100%'
    }} noValidate onSubmit={handleSumbit}>
      <ToastContainer />
      <ShowOptions optionData={optionData} handleChange={handleChange} options={survey.options!} />
      <ActionsOption handleOptionAction={handleOptionAction} options={survey.options!} />
    </Box>
  )
}

export default CreateOption