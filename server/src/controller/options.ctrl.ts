import { Request, Response } from "express";

import { prisma } from "../helper/prisma";

export const createOption = async (req: Request, res: Response): Promise<Response> => {

    const { name } = req.body;
    const { id } = req.params;

    try {

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
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
                        name,
                        userId: req.user
                    }
                }
            },
            include: {
                options: {
                    select: {
                        name: true,
                        votes: true
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

        await prisma.survey.update({
            where: {
                id: Number(surveyId)
            },
            data: {
                options: {
                    delete: {
                        id: Number(id)
                    }
                }
            }
        })

        await prisma.option.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({ message: "Option was removed" })

    } catch (error) {
        throw (error);
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
                        name: true,
                        votes: true
                    }
                },
                comments: true,
                user: {
                    select: {
                        password: false
                    }
                }
            }
        })

        return res.status(200).json(surveyVoted)

    } catch (error) {
        throw (error);
    }

}

