import { Request, Response } from "express";

import { prisma } from "../helper/prisma";

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { comment } = req.body

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

        const surveyUpdated = await prisma.survey.update({
            where: {
                id: Number(id)
            },
            data: {
                comments: {
                    create: [{
                        comment,
                        userId: Number(req.user)
                    }]
                }
            },
            include: {
                options: {
                    select: {
                        name: true,
                        votes: true
                    }
                },
                comments: {
                    include: {
                        user: {
                            select: {
                                password: false
                            }
                        }
                    }
                },
                user: {
                    select: {
                        password: false
                    }
                }
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

        await prisma.survey.update({
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
                        name: true,
                        votes: true
                    }
                },
                comments: {
                    include: {
                        user: {
                            select: {
                                password: false
                            }
                        }
                    }
                },
                user: {
                    select: {
                        password: false
                    }
                }
            }
        })

        await prisma.comment.delete({
            where: {
                id: Number(id)
            }
        })

        return res.status(200).json({ message: "Comment removed successfully" })

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
                        userId: true
                    }
                }
            }
        })

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (comment.likes.find((u) => u.userId === req.user)) {
            // await prisma.comment.update({
            //     where: {
            //         id: Number(id)
            //     },
            //     data: {
            //         likes: {
            //             delete: {
            //                 userId: req.user
            //             }
            //         }
            //     }
            // })
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
                        name: true,
                        votes: true
                    }
                },
                comments: {
                    include: {
                        user: {
                            select: {
                                password: false
                            }
                        }
                    }
                },
                user: {
                    select: {
                        password: false
                    }
                }
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