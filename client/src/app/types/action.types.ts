import { ChangeEvent } from "react";
import { NavigateFunction } from "react-router-dom";

import { ICountry, ILogin, IRegister, IUpdateProfile, IUser } from "../interfaces/User";
import { ICreateOption, ICreateSurvey, ISurvey } from "../interfaces/Survey";

export type userType = {
    user: userReducerType;
    isLoggedIn: boolean;
    profile: IUser;
    users: IUser[];
    countries: ICountry[];
}

export type isAccountType = {
    typeAuth: string;
    textAccount: string;
    setIsLogin: (isLogin: boolean) => void;
    isLogin: boolean;
}

export type genderType = {
    gender: string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type userReducerType = {
    user: IUser;
    token: string;
}

export type UserLoginActionPropsType = {
    userData: ILogin;   
    navigate: NavigateFunction;
    handleIsAuth: () => void;
}

export type UserRegisterActionPropsType = {
    userData: IRegister;
    navigate: NavigateFunction;   
    handleIsAuth: () => void;
}

export type SurveyCreateActionPropsType = {
    token: string;
    setIsOptions: (isOptions: boolean) => void;
    surveyData: ICreateSurvey
}

export type SurveyOptionActionPropsType = {
    token: string;
    optionData: ICreateOption[];
    survey: ISurvey;
    navigate: NavigateFunction;
}

export type SurveyGetPropsType = {
    id: number;
    token: string;
}

export type UserAllActionPropsType = {
    page: number;
}

export type UserProfileActionPropsType = {
    token: string;
    id: number;
}

export type UpdateProfileActionPropsType = {
    profileData: IUpdateProfile;
    token: string;
    setIsEditProfile: (isEditProfile: boolean) => void;
}