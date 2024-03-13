import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICategory, ICounterSurvey, ISurvey } from '../../interfaces/Survey';

const initialState: ICounterSurvey = {
    surveys: [],
    follow: [],
    survey: {},
    categories: []
}

export const counterSliceSurvey = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        surveysAction: (state, action: PayloadAction<ISurvey[]>) => {
            state.surveys = action.payload
            state.survey = {}
        },
        surveysFollowAction: (state, action: PayloadAction<ISurvey[]>) => {
            state.follow = action.payload
            state.survey = {}
        },
        getSurveyAction: (state, action: PayloadAction<ISurvey>) => {
            state.survey = action.payload
        },
        removeSurveyAction: (state, action: PayloadAction<ISurvey>) => {
            state.surveys = state.surveys.filter((survey: ISurvey) => survey.id !== action.payload.id)
        },
        recommendSurveyAction: (state, action: PayloadAction<ISurvey>) => {
            state.surveys = state.surveys.map((survey: ISurvey) => survey.id === action.payload.id ? action.payload : survey)
            state.survey = action.payload
        },
        categoriesAction: (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload
        }
    }
})

export const { surveysAction, getSurveyAction,
    removeSurveyAction, recommendSurveyAction, surveysFollowAction, categoriesAction } = counterSliceSurvey.actions

export default counterSliceSurvey.reducer

