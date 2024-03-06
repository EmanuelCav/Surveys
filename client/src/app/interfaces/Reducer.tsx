import { userType } from "../types/action.types";
import { surveyType } from "../types/survey.types";
import { IResponse } from "./Response";

export interface IReducer {
    surveys: surveyType;
    user: userType;
    response: IResponse
}
