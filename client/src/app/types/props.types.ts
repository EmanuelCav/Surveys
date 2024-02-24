import { Location, NavigateFunction } from "react-router-dom";

export type IconPropsType = {
    isLoggedIn: boolean;
    navigate: NavigateFunction;
    location: Location;
}