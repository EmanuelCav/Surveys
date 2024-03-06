import { NavigateFunction } from "react-router-dom";

import { ICategory, IComment, IOption, ISurvey } from "../interfaces/Survey";
import { userReducerType } from "./action.types";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
    follow: ISurvey[];
    categories: ICategory[];
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