import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

import { registerSchema } from '../schemas/user.schema'

import { prisma } from '../../../helper/prisma'

const registerValid = async (req: Request, res: Response, next: NextFunction) => {

    const { email, username } = req.body

    try {

        registerSchema.parse(req.body)

        const emailExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (emailExists) {
            return res.status(400).json({ message: "The email has been already registered" })
        }

        const usernameExists = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (usernameExists) {
            return res.status(400).json({ message: "The username has been already registered" })
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