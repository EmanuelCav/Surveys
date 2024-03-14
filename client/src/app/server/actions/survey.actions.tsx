import { createAsyncThunk } from "@reduxjs/toolkit";

import * as surveyApi from '../api/surveys.api';
import * as surveyFeatures from '../features/surveys.features';

import { surveyRemoveType } from "../../types/survey.types";
import { SurveyCreateActionPropsType, SurveyGetPropsType, SurveyOptionActionPropsType } from "../../types/action.types";

import { dangerMessage, successMessage } from "../../helper/message";

export const surveyAll = createAsyncThunk('survey/all', async (_, { dispatch }) => {

    try {

        const { data } = await surveyApi.surveysApi()

        dispatch(surveyFeatures.surveysAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const surveyCreate = createAsyncThunk('survey/create', async (surveyCreateData: SurveyCreateActionPropsType, { dispatch }) => {

    try {

        const createSurveyData = await surveyApi.createSurveyApi(surveyCreateData.surveyData, surveyCreateData.token)
        const createOptionData = await surveyApi.createOptionApi(createSurveyData.data.survey.id, surveyCreateData.token)

        dispatch(surveyFeatures.getSurveyAction(createOptionData.data))

        surveyCreateData.setIsOptions(true)

    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }

})

export const surveyOptions = createAsyncThunk('survey/option', async (surveyOptionData: SurveyOptionActionPropsType, { dispatch }) => {

    try {        

        for (let i = 0; i < surveyOptionData.optionData.length; i++) {
            await surveyApi.updateOptionApi(surveyOptionData.survey.options[i].id, surveyOptionData.optionData[i], surveyOptionData.token)
        }

        const { data } = await surveyApi.getSurveyApi(surveyOptionData.survey.id, surveyOptionData.token)

        dispatch(surveyFeatures.getSurveyAction(data))

        surveyOptionData.navigate(`/surveys/${surveyOptionData.survey.id}`)
        
    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }

})

export const surveyGet = createAsyncThunk('survey/get', async (surveyData: SurveyGetPropsType, { dispatch }) => {

    try {

        const { data } = await surveyApi.getSurveyApi(surveyData.id, surveyData.token)

        dispatch(surveyFeatures.getSurveyAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const surveyRemove = createAsyncThunk('survey/remove', async (surveyData: surveyRemoveType, { dispatch }) => {

    try {

        const { data } = await surveyApi.removeSurveyApi(surveyData.survey.id, surveyData.token)

        dispatch(surveyFeatures.removeSurveyAction(surveyData.survey))

        surveyData.setIsRemove(false)
        surveyData.navigate(`/profile/${surveyData.id}`)
        successMessage(data.message)

    } catch (error) {
        console.log(error);
    }

})

