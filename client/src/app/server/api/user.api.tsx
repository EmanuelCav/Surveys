import axios from 'axios';

import { ILogin, IRegister } from '../../interfaces/User';

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const loginApi = async (userData: ILogin) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const registerApi = async (userData: IRegister) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}