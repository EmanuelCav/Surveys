import axios from 'axios';

import { ICreateOption, ICreateSurvey } from '../../interfaces/Survey';

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const surveysApi = async () => {
    return await api.get('/surveys')
}

export const createSurveyApi = async (surveyData: ICreateSurvey, token: string) => {
    return await api.post('/surveys', surveyData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const createOptionApi = async (optionData: ICreateOption, id: string, token: string) => {
    return await api.patch(`/options/${id}`, optionData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}