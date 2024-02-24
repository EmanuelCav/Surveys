import { NavigateFunction } from "react-router-dom";

import { userType } from "./auth.types";

export type cardType = {
    header: string; 
    text: string; 
    card: boolean;
}

export type userNavigationType = {
    user: userType;
    redirectAuth: () => void;
    redirectCreate: () => void;
    redirectProfile: () => void;
    navigate: NavigateFunction;
}