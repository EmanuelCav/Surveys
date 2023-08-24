import { ISurvey } from "../interfaces/Survey";
import { userReducerType } from "./auth.types";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
}

export type getSurveyType = {
    survey: ISurvey;
    user: userReducerType;
}