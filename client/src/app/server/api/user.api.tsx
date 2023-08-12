import axios from 'axios';

import { IUser } from '../../interfaces/User';

const api = axios.create({ baseURL: 'http://localhost:4000' })

export const login = async (userData: IUser) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}