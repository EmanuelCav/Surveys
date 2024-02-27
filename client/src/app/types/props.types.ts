import { Dispatch } from "@reduxjs/toolkit";
import { Location, NavigateFunction } from "react-router-dom";

export type IconPropsType = {
    isLoggedIn: boolean;
    navigate: NavigateFunction;
    location: Location;
}

export type AuthPropsType = {
    isLoggedIn: boolean;
    setIsLogin: (isLogin: boolean) => void;
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
