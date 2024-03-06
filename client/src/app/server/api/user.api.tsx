import axios from 'axios';

import { ILogin, IRegister } from '../../interfaces/User';

import { host } from '../../config/import';

const api = axios.create({ baseURL: `${host}` })

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

export const getUserApi = async (id: string) => {
    return await api.get(`/users/${id}`)
}

export const usersApi = async (token: string) => {
    return await api.get('/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const followApi = async (id: number, token: string) => {
    return await api.patch(`/users/follow/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}