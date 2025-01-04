import { Request, Response } from "express";

import { IFollow } from "../interface/User";
import { IRecommendation } from "../interface/Survey";

import { prisma } from "../helper/prisma";
import { filterDate, orderSurveys, shuffle } from "../helper/filter";

export const surveys = async (req: Request, res: Response): Promise<Response> => {

    const { order, date } = req.query

    try {

        const dateFiltered = filterDate(date as string)

        const showSurveys = await prisma.survey.findMany({
            where: {
                state: 'PUBLIC',
                userId: {
                    not: req.permission
                },
                createdAt: {
                    gte: dateFiltered
                },
                user: {
                    UserCategory: {
                        every: {
                            isSelect: true
                        }
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
                recommendations: true,
                user: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            },
            take: 25
        })

        const sortedSurveys = orderSurveys(showSurveys as any[], order as string)

        return res.status(200).json(sortedSurveys)

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
                        followerId: true,
                        followingId: true
                    }
                }
            },
        })

        if (!user) {
            return res.status(200).json({ message: "User does not exists" })
        }

        const surveys = await prisma.survey.findMany({
            where: {
                userId: {
                    in: user.following.map((u: IFollow) => u.followerId)
                },
                state: 'PUBLIC'
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
                user: {
                    select: {
                        id: true,
                        username: true
                    }
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
                user: true
            }
        })

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

export const surveySearch = async (req: Request, res: Response): Promise<Response> => {

    const { search } = req.query

    try {

        const surveys = await prisma.survey.findMany({
            where: {
                title: {
                    contains: String(search)
                },
                state: 'PUBLIC',
                userId: {
                    not: req.permission
                }
            },
            take: 10
        })

        const shuffledSearch = shuffle(surveys)

        return res.status(200).json(shuffledSearch)

    } catch (error) {
        throw error
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
                title: String(title).charAt(0).toUpperCase() + String(title).slice(1, String(title).length).toLowerCase(),
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

        if (survey.recommendations.find((s: IRecommendation) => s.userId === req.user)) {

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

        if (!survey) {
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

