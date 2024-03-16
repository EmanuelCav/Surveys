import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, SelectChangeEvent, TextField } from '@mui/material';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import FormHeader from '../general/FormHeader';
import FormTitle from '../general/FormTitle';
import SelectCategoryInput from './components/SelectCategoryInput';
import SelectStateInput from './components/SelectStateInput';

import { ICreateSurvey } from '../../interfaces/Survey';
import { CreateSurveyPropsType } from '../../types/props.types';

import { surveyCreate } from '../../server/actions/survey.actions';

import { states } from '../../helper/properties';

const CreateSurvey = ({ user, setIsOptions, dispatch, categories }: CreateSurveyPropsType) => {

    const initialState: ICreateSurvey = {
        title: "",
        category: "",
        state: ""
    }

    const [surveyData, setSurveyData] = useState<ICreateSurvey>(initialState)

    const { title, category, state } = surveyData

    const getData = async () => {
        dispatch(surveyCreate({
            setIsOptions,
            surveyData,
            token: user.token
        }) as any)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSurveyData({ ...surveyData, [name]: value })
    }

    const handleSelect = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target
        setSurveyData({ ...surveyData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getData()
    }

    return (
        <Box component="form" noValidate sx={{
            mt: 1,
            width: '50%'
        }}
            onSubmit={handleSumbit}>
            <ToastContainer />
            <FormHeader />
            <FormTitle title="Create a survey" />
            <TextField
                margin="normal"
                fullWidth
                label="Title"
                name="title"
                autoComplete="title"
                value={title}
                autoFocus
                color='warning'
                sx={{
                    '&:hover fieldset': {
                        borderColor: '#f64 !important',
                    },
                }}
                onChange={handleChange}
            />
            <SelectCategoryInput value={category} array={categories} text='Category' handleChange={handleSelect} />
            <SelectStateInput value={state} array={states} text='State' handleChange={handleSelect} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, fontSize: '1.225em' }}
                color='warning'
                size='large'
            >
                Next
            </Button>
        </Box>
    )
}

export default CreateSurvey