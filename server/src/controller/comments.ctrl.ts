import { Request, Response } from "express";

import { IComment, ILike } from "../interface/Survey";

import { prisma } from "../helper/prisma";

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { comment } = req.body

    try {

        const survey = await prisma.survey.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                comments: true
            }
        })

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey.comments.filter((c: IComment) => c.userId === req.user).length >= 2) {
            return res.status(400).json({
                message: "You cannot upload more than 2 comments"
            })
        }

        const surveyUpdated = await prisma.survey.update({
            where: {
                id: Number(id)
            },
            data: {
                comments: {
                    create: {
                        comment,
                        userId: Number(req.user)
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

        return res.status(200).json(surveyUpdated)

    } catch (error) {
        throw (error);
    }

}

export const removeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const comment = await prisma.comment.findFirst({
            where: {
                id: Number(id)
            },
        })

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (req.user !== comment.userId) {
            return res.status(400).json({
                message: "You cannot remove this comment"
            })
        }

        const surveyUpdated = await prisma.survey.update({
            where: {
                id: comment.surveyId
            },
            data: {
                comments: {
                    delete: {
                        id: Number(id)
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
            message: "Comment removed successfully",
            survey: surveyUpdated
        })

    } catch (error) {
        throw (error);
    }

}

export const likeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const comment = await prisma.comment.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                likes: {
                    select: {
                        userId: true,
                        commentId: true
                    }
                }
            }
        })

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (comment.likes.find((u: ILike) => u.userId === req.user)) {
            await prisma.comment.update({
                where: {
                    id: Number(id)
                },
                data: {
                    likes: {
                        deleteMany: {
                            userId: req.user,
                            commentId: Number(id)
                        }
                    }
                }
            })
        } else {
            await prisma.comment.update({
                where: {
                    id: Number(id)
                },
                data: {
                    likes: {
                        create: {
                            userId: req.user
                        }
                    }
                }
            })
        }

        const survey = await prisma.survey.findFirst({
            where: {
                id: comment.surveyId
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

        if (!survey) {
            return res.status(400).json({ message: "Survey does not exists" })
        }

        return res.status(200).json(survey)

    } catch (error) {
        throw (error);
    }

}