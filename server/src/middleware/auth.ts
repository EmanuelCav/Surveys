import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { secret } from '../config/config'

import { IVerification } from '../interface/Verification'

import { prisma } from '../helper/prisma'

const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        return res.status(401).json({
            message: "Token does not exists"
        })
    }

    const verification = jwt.verify(token, `${secret}`) as IVerification

    if(!verification) {
        return res.status(401).json({
            message: "Token is not valid"
        })
    }

    req.user = verification.id

    next()

}

export default auth