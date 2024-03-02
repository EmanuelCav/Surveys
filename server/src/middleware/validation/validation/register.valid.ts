import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import { registerSchema } from '../schemas/user.schema'

import { prisma } from '../../../helper/prisma'

export const registerValid = async (req: Request, res: Response, next: NextFunction) => {

    const { username, email, password, confirm } = req.body
    
    try {

        registerSchema.parse(req.body)

        if(password !== confirm) {
            return res.status(400).json({
                message: "Passwords do no match"
            })
        }

        const emailExists = await prisma.user.findUnique({
            where: {
                email
            }
        })
    
        if (emailExists) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        const usernameExists = await prisma.user.findUnique({
            where: {
                username
            }
        })
    
        if (usernameExists) {
            return res.status(400).json({
                message: "user name already exists"
            })
        }

        next()

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json(error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path
            })))
        }
        return res.status(500).json({ message: "Error to connect server" })
    }

}

export default registerValid