import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { key_persist } from "../config/import";

import surveyReducer from './features/surveys.features';
import userReducer from './features/user.features';

const reducers = combineReducers({
    surveys: surveyReducer,
    user: userReducer
})

const persistedReducer = persistReducer({
    key: `${key_persist}`,
    version: 1,
    storage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})