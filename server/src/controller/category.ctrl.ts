import { Request, Response } from "express";

import { prisma } from "../helper/prisma";

export const categories = async (req: Request, res: Response): Promise<Response> => {

    try {

        const categories = await prisma.category.findMany()

        return res.status(200).json(categories)

    } catch (error) {
        throw error
    }

}

export const categoriesSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const category = await prisma.category.findFirst({
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
                        comments: {
                            select: {
                                id: true,
                                comment: true,
                                user: {
                                    select: {
                                        id: true,
                                        username: true
                                    }
                                },
                                likes: {
                                    select: {
                                        userId: true,
                                        commentId: true
                                    }
                                }
                            }
                        },
                        user: true,
                        recommendations: true
                    }
                }
            }
        })

        if(!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        return res.status(200).json(category.surveys)

    } catch (error) {
        throw error
    }

}

export const createCategory = async (req: Request, res: Response): Promise<Response> => {

    const { category, icon } = req.body

    try {

        const categoryFound = await prisma.category.findFirst({
            where: {
                category
            }
        })

        if (categoryFound) {
            return res.status(400).json({ message: "Category already exists" })
        }

        await prisma.category.create({
            data: {
                category,
                iconCategory: icon
            }
        })

        return res.status(200).json({
            message: "Category created successfully"
        })

    } catch (error) {
        throw error
    }

}

export const removeCategory = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const category = await prisma.category.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!category) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        await prisma.category.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({
            message: "Category removed successfully"
        })

    } catch (error) {
        throw error
    }

}

