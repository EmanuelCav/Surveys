import { NavigateFunction } from "react-router-dom";

import { ICategory, ISurvey } from "../interfaces/Survey";

export type surveyType = {
    surveys: ISurvey[];
    survey: ISurvey;
    categories: ICategory[];
}

export type surveyRemoveType = {
    survey: ISurvey;
    token: string;
    setIsRemove: (isRemove: boolean) => void;
    navigate: NavigateFunction;
    id: number;
}