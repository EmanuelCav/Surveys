import { NavigateFunction } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from '../api/user.api';
import * as userFeatures from '../features/user.features';

import { UserRegisterActionPropsType, UserLoginActionPropsType } from "../../types/auth.types";

import { dangerMessage, successMessage } from "../../helper/message";

export const userLogin = createAsyncThunk('user/login', async (userLoginData: UserLoginActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userLoginData.userData)

        dispatch(userFeatures.authAction(data))

        userLoginData.handleIsAuth()

        userLoginData.navigate('/surveys')

    } catch (error: any) {
        dangerMessage(error.response.data[0].message)
    }


})

export const userRegister = createAsyncThunk('user/register', async (userRegisterData: UserRegisterActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.loginApi(userRegisterData.userData)

        dispatch(userFeatures.authAction(data.user))

        userRegisterData.handleIsAuth()

        successMessage(data.message)

    } catch (error: any) {
        dangerMessage(error.response.data.message)
    }


})

export const userAll = createAsyncThunk('user/all', async (token: string, { dispatch }) => {

    try {

        const { data } = await userApi.usersApi(token)

        dispatch(userFeatures.usersAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const userProfile = createAsyncThunk('user/profile', async (id: string, { dispatch }) => {

    try {

        const { data } = await userApi.getUserApi(id)

        dispatch(userFeatures.getUserAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const userLogout = createAsyncThunk('user/logout', async (navigate: NavigateFunction, { dispatch }) => {

    try {

        dispatch(userFeatures.logoutAction())

        navigate('/auth')

    } catch (error) {
        console.log(error);
    }

})