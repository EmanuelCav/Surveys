import { Request, Response } from "express";

import Comment from '../database/model/comment'
import Survey from '../database/model/survey'

export const createComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params
    const { comment } = req.body

    try {

        const survey = await Survey.findById(id)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        const newComment = new Comment({
            comment,
            user: req.user,
            survey: survey._id
        })

        const commentSaved = await newComment.save()

        const surveyComment = await Survey.findByIdAndUpdate(id, {
            $push: {
                comments: commentSaved._id
            }
        }, {
            new: true
        })
            .populate("options", "name votes")
            .populate({
                path: "comments",
                populate: {
                    path: "user",
                    select: "-password"
                }
            })
            .populate("user", "-password")

        return res.status(200).json(surveyComment)

    } catch (error) {
        throw (error);
    }

}

export const removeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const comment = await Comment.findById(id)

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (req.user != comment.user) {
            return res.status(400).json({
                message: "You cannot remove this comment"
            })
        }

        const removeSurvey = await Survey.findByIdAndUpdate(comment.survey, {
            $pull: {
                comments: id
            }
        }, {
            new: true
        })
            .populate("options", "name votes")
            .populate({
                path: "comments",
                populate: {
                    path: "user",
                    select: "-password"
                }
            })
            .populate("user", "-password")

        await Comment.findByIdAndDelete(id)

        return res.status(200).json(removeSurvey)

    } catch (error) {
        throw (error);
    }

}

export const likeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        const comment = await Comment.findById(id)

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (comment.likes.find(id => id == req.user)) {
            await Comment.findByIdAndUpdate(id, {
                $pull: {
                    likes: req.user
                }
            }, {
                new: true
            })
        } else {
            await Comment.findByIdAndUpdate(id, {
                $push: {
                    likes: req.user
                }
            }, {
                new: true
            })
        }

        const survey = await Survey.findById(comment.survey)
            .populate("options", "name votes")
            .populate({
                path: "comments",
                populate: {
                    path: "user",
                    select: "-password"
                }
            })
            .populate("user", "-password")

        if (!survey) {
            return res.status(400).json({ message: "Survey does not exists" })
        }

        return res.status(200).json(survey)

    } catch (error) {
        throw (error);
    }

}