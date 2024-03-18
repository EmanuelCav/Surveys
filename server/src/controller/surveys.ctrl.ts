import { Request, Response } from "express";

import { prisma } from "../helper/prisma";

export const surveys = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showSurveys = await prisma.survey.findMany({
            include: {
                options: {
                    select: {
                        id: true,
                        name: true,
                        votes: true
                    }
                },
                recommendations: true
            },
            take: 25
        })

        return res.status(200).json(showSurveys)

    } catch (error) {
        throw (error);
    }

}

export const surveysFollow = async (req: Request, res: Response): Promise<Response> => {

    try {

        const user = await prisma.user.findFirst({
            where: {
                id: req.user
            },
            include: {
                following: {
                    select: {
                        userId: true
                    }
                }
            }
        })

        if (!user) {
            return res.status(200).json({ message: "User does not exists" })
        }

        const surveys = await prisma.survey.findMany({
            where: {
                userId: {
                    in: user.following.map(u => u.userId)
                }
            }
        })

        return res.status(200).json(surveys)

    } catch (error) {
        throw error
    }
}

export const survey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showSurvey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true,
                        votes: true
                    }
                },
                recommendations: true,
                comments: {
                    include: {
                        user: true
                    }
                },
                user: true
            }
        })

        // const showSurveyFilter = exclude(showSurvey, ['password', 'role'])

        if (!showSurvey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        return res.status(200).json(showSurvey)

    } catch (error) {
        throw (error);
    }

}

export const createSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { title, category, state } = req.body

    try {

        const surveyCategory = await prisma.category.findFirst({
            where: {
                category
            }
        })

        if (!surveyCategory) {
            return res.status(400).json({ message: "Category does not exists" })
        }

        const newSurvey = await prisma.survey.create({
            data: {
                title,
                userId: req.user,
                categoryId: surveyCategory.id,
                state
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true,
                        votes: true
                    }
                }
            }
        })

        return res.status(200).json({
            survey: newSurvey,
            message: "Survey creted successfully"
        })

    } catch (error) {
        throw (error);
    }

}

export const removeSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {
        
        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey.userId !== req.user) {
            return res.status(401).json({
                message: "You cannot remove this survey"
            })
        }

        await prisma.survey.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({ message: "Survey was removed" })

    } catch (error) {
        throw (error);
    }

}

export const recommendSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                recommendations: true
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        let recommendedSurvey;

        if (survey.recommendations.find((s) => s.userId === req.user)) {

            recommendedSurvey = await prisma.survey.update({
                where: {
                    id: Number(id)
                },
                data: {
                    recommendations: {
                        deleteMany: {
                            userId: req.user
                        }
                    }
                },
                include: {
                    options: {
                        select: {
                            id: true,
                            name: true,
                            votes: true
                        }
                    },
                    comments: {
                        include: {
                            user: true
                        }
                    },
                    user: true,
                    recommendations: true
                }
            })

        } else {

            recommendedSurvey = await prisma.survey.update({
                where: {
                    id: Number(id)
                },
                data: {
                    recommendations: {
                        create: {
                            userId: req.user
                        }
                    }
                },
                include: {
                    options: {
                        select: {
                            id: true,
                            name: true,
                            votes: true
                        }
                    },
                    comments: {
                        include: {
                            user: true
                        }
                    },
                    user: true,
                    recommendations: true
                }
            })

        }

        return res.status(200).json(recommendedSurvey)

    } catch (error) {
        throw (error);
    }

}

export const changeState = async (req: Request, res: Response): Promise<Response> => {

    const { state } = req.body
    const { id } = req.params

    try {

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            }
        })

        if(!survey) {
            return res.status(400).json(({
                message: "Survey does not exists"
            }))
        }

        const surveyUpdated = await prisma.survey.update({
            where: {
                id: Number(id)
            },
            data: {
                state
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true,
                        votes: true
                    }
                },
                recommendations: true,
                comments: {
                    include: {
                        user: true
                    }
                },
                user: true
            }
        })

        return res.status(200).json({
            message: "Survey updated successfully",
            survey: surveyUpdated
        })

    } catch (error) {
        throw (error);
    }

}

