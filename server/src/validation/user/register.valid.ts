import { Request, Response, NextFunction } from 'express';

import { prisma } from '../../helper/prisma'

const registerValid = async (req: Request, res: Response, next: NextFunction) => {

    const { username, email, gender, password, confirm } = req.body

    var userWords = /[^a-zA-Z0-9]/

    if (!username || !email || !gender || !password || !confirm) {
        return res.status(400).json({
            message: "There are empty fields"
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

    if (username.length < 3 || username.length > 30) {
        return res.status(400).json({
            message: "Username must be between 3 and 30 characters"
        })
    }

    if (userWords.test(username)) {
        return res.status(400).json({
            message: "Symbols are not allowed in an username field"
        })
    }

    if (!validateEmail) {
        return res.status(400).json({
            message: "Email is not valid"
        })
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        })
    }

    if (password !== confirm) {
        return res.status(400).json({
            message: "Passwords do not match"
        })
    }


    next()

}

const validateEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default registerValid