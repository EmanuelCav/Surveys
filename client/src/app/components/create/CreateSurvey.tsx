import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Button, SelectChangeEvent, TextField } from '@mui/material';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import FormHeader from '../general/FormHeader';
import FormTitle from '../general/FormTitle';
import SelectInput from '../general/SelectInput';

import { ICreateSurvey } from '../../interfaces/Survey';
import { CreateSurveyPropsType } from '../../types/props.types';

import { surveyCreate } from '../../server/actions/survey.actions';

const CreateSurvey = ({ user, setIsOptions, dispatch, categories }: CreateSurveyPropsType) => {

    const initialState: ICreateSurvey = {
        title: "",
        category: ""
    }

    const [surveyData, setSurveyData] = useState<ICreateSurvey>(initialState)

    const { title, category } = surveyData

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
            <SelectInput value={category} array={categories} text='Category' handleChange={handleSelect} />
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