import { Request, Response } from "express";

import { createCategoryUser, exclude, excludeArray, prisma } from "../helper/prisma";

import { hashPassword, comparePassword } from "../helper/encrypt";
import { generateToken } from "../helper/token";
import { infoEmail, resetPassword } from "../helper/mail";
import { generateUsers } from "../helper/mocks";
import { orderUsers } from "../helper/filter";

export const users = async (req: Request, res: Response): Promise<Response> => {

    const { page = "0", order } = req.query

    try {

        const allUsers = await prisma.user.findMany()

        const showUsers = await prisma.user.findMany({
            where: {
                id: {
                    not: req.permission
                }
            },
            skip: Number(page),
            take: Number(page) + 30,
            select: {
                id: true,
                username: true,
                followers: {
                    select: {
                        followerId: true
                    }
                },
                surveys: {
                    select: {
                        id: true,
                        recommendations: {
                            select: {
                                userId: true
                            }
                        }
                    }
                }
            }
        })

        const sortedUsers = orderUsers(showUsers as any[], order as string)

        return res.status(200).json({
            users: sortedUsers,
            length: allUsers.length
        })

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
                surveys: {
                    include: {
                        options: {
                            select: {
                                id: true,
                                name: true,
                                votes: true
                            }
                        },
                        recommendations: true
                    }
                },
                country: true,
                followers: {
                    select: {
                        followerId: true,
                        followingId: true
                    }
                },
                following: {
                    select: {
                        followerId: true,
                        followingId: true
                    }
                }
            }
        })

        if (!showUser) {
            return res.status(400).json({
                message: "User does not exists."
            })
        }

        const showUserFilter = exclude(showUser, ['password', 'role', 'email'])

        return res.status(200).json(showUserFilter)

    } catch (error) {
        throw (error);
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { username, email, gender, password, role } = req.body

    try {

        const pass = await hashPassword(password)

        await infoEmail(email)

        const user = await prisma.user.create({
            data: {
                username,
                gender,
                email,
                password: pass,
                role: role ? role : 'USER'
            }
        })

        return res.status(200).json({
            message: "Check your email",
            id: user.id
        })

    } catch (error) {
        throw (error);
    }

}

export const addCategories = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!user) {
            return res.status(400).json({
                message: "User does not exists"
            })
        }

        const categories = await prisma.category.findMany()

        for (let i = 0; i < categories.length; i++) {
            await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    UserCategory: {
                        create: {
                            categoryId: categories[i].id
                        }
                    }
                }
            })
        }

        const userUpdated = await prisma.user.findFirst({
            include: {
                country: true,
                following: {
                    select: {
                        followingId: true
                    }
                },
                UserCategory: {
                    select: {
                        categoryId: true,
                        userId: true,
                        isSelect: true
                    }
                }
            }
        })

        const userRegistered = exclude(userUpdated, ['password', 'role', 'email'])

        return res.status(200).json(userRegistered)

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

        if (!user.status) {
            await infoEmail(email)
            return res.status(400).json({
                message: "You have to verify your user. Check yuor email"
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
            },
            include: {
                country: true,
                following: {
                    select: {
                        followingId: true
                    }
                },
                UserCategory: {
                    select: {
                        categoryId: true,
                        userId: true,
                        isSelect: true
                    }
                }
            }
        })

        const showUserFilter = exclude(userLoggedIn, ['password', 'role', 'email'])

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
                        followerId: true,
                        followingId: true
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

        let userUpdated

        if (user.followers.find((follow) => follow.followingId === req.user)) {

            userUpdated = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    followers: {
                        deleteMany: {
                            followerId: Number(id),
                            followingId: req.user
                        }
                    }
                },
                include: {
                    surveys: {
                        include: {
                            options: {
                                select: {
                                    id: true,
                                    name: true,
                                    votes: true
                                }
                            },
                            recommendations: true
                        }
                    },
                    country: true,
                    followers: {
                        select: {
                            followerId: true,
                            followingId: true
                        }
                    },
                    following: {
                        select: {
                            followerId: true,
                            followingId: true
                        }
                    }
                }
            })

        } else {

            userUpdated = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    followers: {
                        create: {
                            followingId: req.user
                        }
                    }
                },
                include: {
                    surveys: {
                        include: {
                            options: {
                                select: {
                                    id: true,
                                    name: true,
                                    votes: true
                                }
                            },
                            recommendations: true
                        }
                    },
                    country: true,
                    followers: {
                        select: {
                            followerId: true,
                            followingId: true
                        }
                    },
                    following: {
                        select: {
                            followerId: true,
                            followingId: true
                        }
                    }
                }
            })
        }

        const userLoggedIn = await prisma.user.findUnique({
            where: {
                id: req.user
            },
            include: {
                country: true,
                following: {
                    select: {
                        followingId: true
                    }
                }
            }
        })

        return res.status(200).json({
            user: userUpdated,
            userLoggedIn
        })

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
            },
            include: {
                country: true,
                following: {
                    select: {
                        followingId: true
                    }
                },
                UserCategory: {
                    select: {
                        categoryId: true,
                        userId: true,
                        isSelect: true
                    }
                }
            }
        })

        const showUserFilter = exclude(userUpdated, ['password', 'role', 'email'])

        const token = generateToken(user.id)

        return res.status(200).json({
            user: {
                token,
                user: showUserFilter
            },
            message: "Welcome to Surfrage!"
        })

    } catch (error) {
        throw (error);
    }

}

export const changeProfile = async (req: Request, res: Response): Promise<Response> => {

    const { username, description, country } = req.body

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: req.user
            }
        })

        if (!user) {
            return res.status(400).json({
                message: "User does not exists."
            })
        }

        let countryUpdated

        if (country) {

            countryUpdated = await prisma.country.findFirst({
                where: {
                    country
                }
            })

            if (!countryUpdated) {
                return res.status(400).json({
                    message: "Country does not exists."
                })
            }

        }

        const userUpdated = await prisma.user.update({
            where: {
                id: req.user
            },
            data: {
                username,
                description: description ? description : null,
                countryId: country ? countryUpdated?.id : null
            },
            include: {
                surveys: {
                    include: {
                        options: {
                            select: {
                                id: true,
                                name: true,
                                votes: true
                            }
                        },
                        recommendations: true
                    }
                },
                country: true,
                followers: {
                    select: {
                        followerId: true
                    }
                },
                following: {
                    select: {
                        followingId: true
                    }
                }
            }
        })

        const showUserFilter = exclude(userUpdated, ['password', 'role', 'email'])

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

export const emailPassword = async (req: Request, res: Response): Promise<Response> => {

    const { email } = req.body

    try {

        const user = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                id: true,
                email: true
            }
        })

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        await resetPassword(email)

        return res.status(200).json({
            message: "Check your email",
            user
        })

    } catch (error) {
        throw error
    }

}

export const updatePassword = async (req: Request, res: Response): Promise<Response> => {

    const { email } = req.params
    const { password } = req.body

    try {

        const hashedPassword = await hashPassword(password)

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(400).json({ message: "User does not exists" })
        }

        await prisma.user.update({
            where: {
                email
            },
            data: {
                password: hashedPassword
            }
        })

        return res.status(200).json({
            message: "Password updated successfully"
        })

    } catch (error) {
        throw error
    }

}