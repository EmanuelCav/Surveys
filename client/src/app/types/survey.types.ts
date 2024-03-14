import { NavigateFunction } from "react-router-dom";

import { ICategory, IComment, ISurvey } from "../interfaces/Survey";
import { userReducerType } from "./action.types";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
    follow: ISurvey[];
    categories: ICategory[];
}

export type commentSurveyType = {
    comment: IComment;
    user: userReducerType;
}

export type surveyRemoveType = {
    survey: ISurvey;
    token: string;
    setIsRemove: (isRemove: boolean) => void;
    navigate: NavigateFunction;
    id: number;
}