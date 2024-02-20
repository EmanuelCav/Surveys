import { NavigateFunction } from "react-router-dom";

import { IComment, ICreateSurvey, IOption, ISurvey } from "../interfaces/Survey";
import { userReducerType } from "./auth.types";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
    follow: ISurvey[];
}

export type getSurveyType = {
    survey: ISurvey;
    user: userReducerType;
}

export type removeSurveyType = {
    survey: ISurvey;
    user: userReducerType;
    setIsRemove: (isRemove: boolean) => void;
}

export type optionSurveyType = {
    user: userReducerType;
    survey: ISurvey;
    option: IOption;
    isVoted: boolean;
    setIsVoted: (isVoted: boolean) => void;
    totalVotes: number;
}

export type commentSurveyType = {
    comment: IComment;
    user: userReducerType;
}

export type surveyCreateType = {
    token: string;
    surveyData: ICreateSurvey;
    setIsOptions: (isOptions: boolean) => void;
}

export type surveyGetType = {
    id: string;
    token: string;
}

export type surveyRemoveType = {
    survey: ISurvey;
    token: string;
    setIsRemove: (isRemove: boolean) => void;
    navigate: NavigateFunction;
    id: string;
}