import { Request, Response, NextFunction } from 'express'

import { prisma } from '../../helper/prisma'

const admin = async (req: Request, res: Response, next: NextFunction) => {

    const user = await prisma.user.findFirst({
        where: {
            id: req.user
        }
    })

    if (!user) {
        return res.status(401).json({
            message: "User does not exists"
        })
    }

    if (user.role !== 'ADMIN') {
        return res.status(401).json({
            message: "Access denied"
        })
    }

    next()

}

export default admin