import { NavigateFunction } from "react-router-dom";

export type cardType = {
    header: string; 
    text: string; 
    card: boolean;
}
export type logoHeaderType = {
    navigate: NavigateFunction;
    isLoggedIn: boolean;
}
