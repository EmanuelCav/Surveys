import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Box, Button, SelectChangeEvent, TextField } from '@mui/material';

import FormHeader from '../general/FormHeader';
import FormTitle from '../general/FormTitle';
import SelectCategoryInput from './components/SelectCategoryInput';
import SelectStateInput from './components/SelectStateInput';

import { ICreateSurvey } from '../../interfaces/Survey';
import { CreateSurveyPropsType } from '../../types/props.types';

import { surveyCreate } from '../../server/actions/survey.actions';
import { categoriesApi } from '../../server/api/surveys.api';
import { categoriesAction } from '../../server/features/surveys.features';

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
            token: user.token!
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

    const getCategories = async () => {
        const { data } = await categoriesApi()
        dispatch(categoriesAction(data))
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Box component="form" noValidate sx={{
            mt: { xs: 10, md: 1},
            width: {xs: '95%', md: '50%'}
        }}
            onSubmit={handleSumbit}>
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
                inputProps={{ maxLength: 50 }}
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