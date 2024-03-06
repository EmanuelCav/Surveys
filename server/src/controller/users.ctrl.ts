import { Request, Response } from "express";

import { exclude, excludeArray, prisma } from "../helper/prisma";

import { hashPassword, comparePassword } from "../helper/encrypt";
import { generateToken } from "../helper/token";
import { infoEmail } from "../helper/mail";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await prisma.user.findMany({
            take: 10
        })

        const showUsersFilter = excludeArray(showUsers, ['password', 'role'])

        return res.status(200).json(showUsersFilter)

    } catch (error) {
        throw (error);
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await prisma.user.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                surveys: true,
                followers: {
                    select: {
                        userId: true
                    }
                },
                following: {
                    select: {
                        userId: true
                    }
                }
            }
        })

        if (!showUser) {
            return res.status(400).json({
                message: "User does not exists."
            })
        }

        const showUserFilter = exclude(showUser, ['password', 'role'])

        return res.status(200).json(showUserFilter)

    } catch (error) {
        throw (error);
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { username, email, gender, password, role } = req.body

    try {

        const pass = await hashPassword(password)

        // await infoEmail(email)

        const user = await prisma.user.create({
            data: {
                username,
                gender,
                email,
                password: pass,
                role: role && role
            }
        })

        return res.status(200).json({
            message: "Check your email",
            user
        })

    } catch (error) {
        throw (error);
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body

    try {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(400).json({
                message: "User does not exists"
            })
        }

        const isUserValid = await comparePassword(password, user.password)

        if (!isUserValid) {
            return res.status(400).json({
                message: "Fields do not match"
            })
        }

        const token = generateToken(user.id)

        const userLoggedIn = await prisma.user.findUnique({
            where: {
                email
            }
        })

        const showUserFilter = exclude(userLoggedIn, ['password', 'role'])

        return res.status(200).json({
            user: showUserFilter,
            token
        })

    } catch (error) {
        throw (error);
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!user) {
            return res.status(200).json({
                message: "User does not exists"
            })
        }

        await prisma.survey.deleteMany({
            where: {
                userId: Number(id)
            }
        })

        await prisma.survey.deleteMany({
            where: {
                userId: Number(id)
            }
        })

        await prisma.survey.deleteMany({
            where: {
                userId: Number(id)
            }
        })

        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({
            message: "User was removed"
        })

    } catch (error) {
        throw (error);
    }

}

export const followUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                followers: {
                    select: {
                        userId: true
                    }
                }
            }
        })

        if (!user) {
            return res.status(200).json({
                message: "User does not exists"
            })
        }

        if (user.id === req.user) {
            return res.status(401).json({
                message: "You cannot follow yourself"
            })
        }

        let userFollowed;

        if (user.followers.find((u) => Number(u.userId) === req.user)) {

            await prisma.user.update({
                where: {
                    id: req.user
                },
                data: {
                    following: {
                        delete: [{
                            userId: Number(id)
                        }]
                    }
                }
            })

            userFollowed = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    followers: {
                        delete: [{
                            userId: req.user
                        }]
                    }
                }
            })

        } else {

            await prisma.user.update({
                where: {
                    id: req.user
                },
                data: {
                    following: {
                        create: [{
                            userId: Number(id)
                        }]
                    }
                }
            })


            await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    followers: {
                        create: [{
                            userId: req.user
                        }]
                    }
                }
            })

        }

        return res.status(200).json(userFollowed)

    } catch (error) {
        throw (error);
    }

}

export const changeStatus = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!user) {
            return res.status(400).json({
                message: "User does not exists."
            })
        }

        const userUpdated = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                status: true
            }
        })

        const showUserFilter = exclude(userUpdated, ['password', 'role'])

        const token = generateToken(user.id)

        return res.status(200).json({
            token,
            user: showUserFilter,
            message: "Welcome to Surfrage!"
        })

    } catch (error) {
        throw (error);
    }

}

