import { configureStore } from "@reduxjs/toolkit";

import surveyReducer from './features/surveys.features';

export const store = configureStore({
    reducer: {
        surveys: surveyReducer
    }
})