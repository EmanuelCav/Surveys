import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICounterSurvey, ISurvey } from '../../interfaces/Survey';

const initialState: ICounterSurvey = {
    surveys: [],
    survey: {}
}

export const counterSliceSurvey = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        surveysAction: (state, action: PayloadAction<ISurvey[]>) => {
            state.surveys = action.payload
        },
        createSurveyAction: (state, action: PayloadAction<ISurvey>) => {
            state.surveys = [...state.surveys, action.payload]
        },
        createOptionAction: (state, action: PayloadAction<ISurvey>) => {
            state.surveys = state.surveys.map((survey: ISurvey) => survey._id === action.payload._id ? action.payload : survey)
        },
        getSurveyAction: (state, action: PayloadAction<ISurvey>) => {
            state.survey = action.payload
        },
        surveysProfileAction: (state, action: PayloadAction<ISurvey[]>) => {
            state.surveys = action.payload
        }
    }
})

export const { surveysAction, createSurveyAction, createOptionAction, getSurveyAction, surveysProfileAction } = counterSliceSurvey.actions

export default counterSliceSurvey.reducer

