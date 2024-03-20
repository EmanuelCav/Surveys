import { Request, Response } from "express";

import { prisma } from "../helper/prisma";

export const createOption = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey.userId !== req.user) {
            return res.status(401).json({
                message: "You cannot add an option"
            })
        }

        const surveyOption = await prisma.survey.update({
            where: {
                id: Number(id)
            },
            data: {
                options: {
                    create: {
                        name: "",
                        userId: req.user
                    }
                }
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return res.status(200).json(surveyOption)

    } catch (error) {
        throw (error);
    }

}

export const removeOption = async (req: Request, res: Response): Promise<Response> => {

    const { id, surveyId } = req.params

    try {

        const option = await prisma.option.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!option) {
            return res.status(400).json({
                message: "Option does not exists"
            })
        }

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(surveyId)
            },
            select: {
                userId: true
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey.userId !== req.user) {
            return res.status(401).json({
                message: "You cannot remove an option"
            })
        }

        const surveyUpdated = await prisma.survey.update({
            where: {
                id: Number(surveyId)
            },
            data: {
                options: {
                    delete: {
                        id: Number(id)
                    }
                }
            },
            include: {
                options: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return res.status(200).json(surveyUpdated)

    } catch (error) {
        throw (error);
    }

}

export const updateOptions = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { name } = req.body

    try {

        const option = await prisma.option.findFirst({
            where: {
                id: Number(id)
            }
        })

        if (!option) {
            return res.status(400).json({ message: "Option does not exists" })
        }

        await prisma.option.update({
            where: {
                id: Number(id)
            },
            data: {
                name
            }
        })

        return res.status(200).json({
            message: "Option updated successfully"
        })

    } catch (error) {
        throw error
    }

}

export const vote = async (req: Request, res: Response): Promise<Response> => {

    const { id, surveyId } = req.params

    try {

        const option = await prisma.option.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                votes: true
            }
        })

        if (!option) {
            return res.status(400).json({
                message: "Option does not exists"
            })
        }

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(surveyId)
            },
            select: {
                userId: true
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (option.votes.find(v => v.userId === req.user)) {
            return res.status(200).json({
                message: "You have already vote"
            })
        }

        await prisma.option.update({
            where: {
                id: Number(id)
            },
            data: {
                votes: {
                    create: {
                        userId: req.user
                    }
                }
            }
        })

        const surveyVoted = await prisma.survey.findFirst({
            where: {
                id: Number(surveyId)
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
        
        return res.status(200).json(surveyVoted)

    } catch (error) {
        throw (error);
    }

}

export const removeAllOptions = async (req: Request, res: Response): Promise<Response> => {

    try {

        await prisma.vote.deleteMany()
        await prisma.option.deleteMany()
        await prisma.recommendation.deleteMany()
        await prisma.follow.deleteMany()
        
        return res.status(200).json("json")

    } catch (error) {
        throw (error);
    }

}




