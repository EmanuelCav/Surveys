import { ChangeEvent } from "react";
import { NavigateFunction } from "react-router-dom";

import { ICounterUser, ICountry, ILogin, IRegister, IUpdateProfile, IUser } from "../interfaces/User";
import { ICreateOption, ICreateSurvey, ISurvey, IUpdateState } from "../interfaces/Survey";
import { DateTypeKey, OrderTypeKey, OrderUserTypeKey } from "./key.types";

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
    user?: IUser;
    token?: string;
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

export type SurveyDataActionPropsType = {
    user: ICounterUser;
    order: OrderTypeKey;
    date: DateTypeKey;
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

export type SurveyGetActionPropsType = {
    id: number;
    token: string;
}

export type UserAllActionPropsType = {
    page: number;
    order: OrderUserTypeKey;
    token: string | undefined;
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

export type UpdateStateActionPropsType = {
    token: string;
    stateData: IUpdateState;
    id: number;
    setIsState: (isState: boolean) => void;
}