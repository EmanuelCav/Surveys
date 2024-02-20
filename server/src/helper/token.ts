import jwt from 'jsonwebtoken';

import { secret } from '../config/config';

export const generateToken = (id: number): string => {

    const token: string = jwt.sign({ id }, `${secret}`, {
        expiresIn: '7d'
    })

    return token
}