import { userType } from "../types/auth.types";
import { surveyType } from "../types/survey.types";

export interface IReducer {
    surveys: surveyType;
    user: userType
}
