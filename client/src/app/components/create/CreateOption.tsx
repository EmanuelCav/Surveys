import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ICreateOption, IOption } from "../../interfaces/Survey";
import { CreateOptionPropsType } from "../../types/props.types";

import InputOption from "./components/InputOption";
import ActionOption from "./components/ActionOption";

import { createOptionApi, removeOptionApi } from "../../server/api/surveys.api";
import { getSurveyAction } from "../../server/features/surveys.features";
import { surveyOptions } from "../../server/actions/survey.actions";

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

    const { data } = await createOptionApi(survey.id, user.token)
    dispatch(getSurveyAction(data))
  }

  const removeOption = async () => {
    const { data } = await removeOptionApi(survey.options[survey.options.length - 1].id, survey.id, user.token)
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
    let item = {...items[index]};
    item.name = e.target.value;
    items[index] = item;
    setOptionData(items);
  }

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    surveyOptions({
      token: user.token,
      optionData,
      survey,
      navigate
    })
  }

  useEffect(() => {
    console.log(optionData);
  }, [optionData])

  return (
    <Box component='form' p={3} justifyContent='center' alignItems='center' flexDirection='column' display='flex' sx={{
      width: '37.33%',
      height: '100%'
    }} noValidate onSubmit={handleSumbit}>
      <ToastContainer />
      <Box width='100%' flex={1} display='flex' justifyContent='flex-start' alignItems='center' flexDirection='column'>
        {
          survey.options.map((option: IOption, index: number) => {
            return <InputOption option={option} index={index} value={optionData[index].name} handleChange={handleChange} key={option.id} />
          })
        }
      </Box>
      <Box height='30%' width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <ActionOption text="Add an option" handleOptionAction={handleOptionAction} disabled={survey.options.length >= 6} />
        <ActionOption text="Remove an option" handleOptionAction={handleOptionAction} disabled={survey.options.length <= 1} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: 2, fontSize: '1.225em' }}
          color='warning'
          size='large'
        >
          Create Survey
        </Button>
      </Box>
    </Box>
  )
}

export default CreateOption