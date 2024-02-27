import { Location, NavigateFunction } from "react-router-dom";

export type IconPropsType = {
    isLoggedIn: boolean;
    navigate: NavigateFunction;
    location: Location;
}

export type AuthPropsType = {
    isLoggedIn: boolean;
    setIsLogin: (isLogin: boolean) => void
}