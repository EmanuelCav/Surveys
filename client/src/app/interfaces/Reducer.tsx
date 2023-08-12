import { surveyType } from "../types/survey.types";

export interface IReducerSurvey {
    surveys: surveyType;
}

export interface IReducerUser {
    user: object;
    isLoggedIn: boolean;
}