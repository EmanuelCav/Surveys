import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { secret } from "../../config/config";

import { IVerification } from "interface/Verification";

const permission = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]
    
    if(token === undefined) {
        req.permission = undefined
        next()
    }

    const verification = jwt.verify(token!, `${secret}`) as IVerification

    if (!verification) {
        return res.status(401).json({
            message: "Token is not valid"
        })
    }

    req.permission = verification.id

    next()

}

export default permission