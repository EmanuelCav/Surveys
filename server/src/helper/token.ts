import jwt from 'jsonwebtoken';
import { Document } from 'mongoose'

import { secret } from '../config/config';
import { IUser } from '../interface/User';

export const generateToken = (user: Document<unknown, {}, IUser>): string => {

    const token: string = jwt.sign({ id: user._id }, `${secret}`, {
        expiresIn: '7d'
    })

    return token
}