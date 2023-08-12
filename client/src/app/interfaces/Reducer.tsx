import { userType } from "../types/auth.types";
import { surveyType } from "../types/survey.types";

export interface IReducerSurvey {
    surveys: surveyType;
}

export interface IReducerUser {
    user: userType
}