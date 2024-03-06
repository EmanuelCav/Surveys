import { createAsyncThunk } from "@reduxjs/toolkit";

import * as surveyApi from '../api/surveys.api';
import * as surveyFeatures from '../features/surveys.features';

import { surveyGetType, surveyRemoveType } from "../../types/survey.types";

import { dangerMessage, successMessage } from "../../helper/message";
import { SurveyCreateActionPropsType } from "../../types/action.types";

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

        const { data } = await surveyApi.createSurveyApi(surveyCreateData.surveyData, surveyCreateData.token)

        dispatch(surveyFeatures.getSurveyAction(data))

        surveyCreateData.setIsOptions(true)

    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }

})

export const surveyGet = createAsyncThunk('survey/get', async (surveyData: surveyGetType, { dispatch }) => {

    try {

        const { data } = await surveyApi.getSurveyApi(surveyData.id as string, surveyData.token)

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

