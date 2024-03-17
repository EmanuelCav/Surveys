import { NavigateFunction } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as userApi from '../api/user.api';
import * as userFeatures from '../features/user.features';

import { UserRegisterActionPropsType, UserLoginActionPropsType, UserAllActionPropsType, UserProfileActionPropsType, UpdateProfileActionPropsType } from "../../types/action.types";

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

export const userAll = createAsyncThunk('user/all', async (userData: UserAllActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.usersApi(userData.page)

        dispatch(userFeatures.usersAction(data.users))

    } catch (error) {
        console.log(error);
    }

})

export const userProfile = createAsyncThunk('user/profile', async (userData: UserProfileActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.getUserApi(userData.id, userData.token)

        dispatch(userFeatures.getUserAction(data))

    } catch (error) {
        console.log(error);
    }

})

export const userLogout = createAsyncThunk('user/logout', async (navigate: NavigateFunction, { dispatch }) => {

    try {

        dispatch(userFeatures.logoutAction())

        navigate('/')

    } catch (error) {
        console.log(error);
    }

})

export const updateProfile = createAsyncThunk('user/update', async (userData: UpdateProfileActionPropsType, { dispatch }) => {

    try {

        const { data } = await userApi.updateProfileApi(userData.profileData, userData.token)

        userData.setIsEditProfile(false)

        dispatch(userFeatures.getUserAction(data.user))
        
    } catch (error) {
        console.log(error);
    }

})