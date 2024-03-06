import { Dispatch } from "@reduxjs/toolkit";
import { Location, NavigateFunction } from "react-router-dom";

import { userReducerType, userType } from "./action.types";
import { ICategory, ISurvey } from "../interfaces/Survey";
import { IUser } from "../interfaces/User";
import { SelectChangeEvent } from "@mui/material";

export type IconPropsType = {
    isLoggedIn: boolean;
    navigate: NavigateFunction;
    location: Location;
}

export type AuthPropsType = {
    user: userType;
    setIsLogin: (isLogin: boolean) => void;
    navigate: NavigateFunction;
}

export type ContainerAuthPropsType = {
    navigate: NavigateFunction; 
    setIsLogin: (isLogin: boolean) => void;
    setIsRegister: (isRegister: boolean) => void;
    isLogin: boolean;
    isRegister: boolean;
}

export type LoginPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
    registerVisibility: () => void;
}

export type RegisterPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type FormLAuthPropsType = {
    handleIsAuth: () => void;
    navigate: NavigateFunction;
    dispatch: Dispatch;
}

export type ButtonNavPropsType = {
    func: () => void;
    ComponentIcon: any;
    text: string;
}

export type NavIsAuthPropsType = {
    id: number;
    navigate: NavigateFunction
}

export type FollowPropsType = {
    text: string;
    number: number;
    ml: number;
}

export type SurveyPropsType = {
    survey: ISurvey;
    redirectSurvey: (id: number) => void;
}

export type NoSuveysPropsType = {
    redirectCreate: () => void;
    isUser: boolean;
}

export type InfoProfilePropsType = {
    user: IUser;
    loggedUser: userReducerType;
    dispatch: Dispatch;
    navigate: NavigateFunction;
}

export type SurveysProfilePropsType = {
    user: userType;
    navigate: NavigateFunction;
}

export type CreateSurveyPropsType = {
    setIsOptions: (isOption: boolean) => void;
    user: userReducerType;
    dispatch: Dispatch;
    categories: ICategory[];
}

export type SelectPropsType = {
    text: string; 
    value: string; 
    handleChange: (e: SelectChangeEvent<string>) => void;
    array: any[];
}