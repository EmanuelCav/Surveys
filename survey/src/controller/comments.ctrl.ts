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
            user: req.user
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
            .populate("comments")
            .populate("user")

        return res.status(200).json(surveyComment)

    } catch (error) {
        throw (error);
    }

}

export const removeComment = async (req: Request, res: Response): Promise<Response> => {

    const { id, surveyid } = req.params

    try {

        const comment = await Comment.findById(id)

        if (!comment) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        const survey = await Survey.findById(surveyid)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (req.user != comment.user) {
            return res.status(400).json({
                message: "You cannot remove this comment"
            })
        }

        await Survey.findByIdAndUpdate(surveyid, {
            $pull: {
                comments: id
            }
        })

        await Comment.findByIdAndDelete(id)

        return res.status(200).json({ message: "Comment was removed" })

    } catch (error) {
        throw (error);
    }

}

export const updateComment = async (req: Request, res: Response): Promise<Response> => {

    const { comment } = req.body;
    const { id } = req.params;

    try {

        const commentData = await Comment.findById(id)

        if (!commentData) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        if (req.user != commentData.user) {
            return res.status(400).json({
                message: "You cannot update this comment"
            })
        }

        const update = {
            comment,
            updated: true
        }

        const commentUpdated = await Comment.findByIdAndUpdate(id, update, {
            new: true
        })

        return res.status(200).json(commentUpdated)

    } catch (error) {
        throw (error);
    }

}

export const pushComment = async (req: Request, res: Response): Promise<Response> => {

    const { comment } = req.body;
    const { id } = req.params;

    try {

        const commentData = await Comment.findById(id)

        if (!commentData) {
            return res.status(400).json({
                message: "Comment does not exists"
            })
        }

        const newComment = new Comment({
            comment,
            user: req.user
        })

        const commentSaved = await newComment.save()

        const pushComment = await Comment.findByIdAndUpdate(id, {
            $push: {
                comments: commentSaved._id
            }
        }, {
            new: true
        })
            .populate("comments")

        return res.status(200).json(pushComment)

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

        var likedComment;

        if (comment.likes.find(id => id == req.user)) {
            likedComment = await Comment.findByIdAndUpdate(id, {
                $pull: {
                    likes: req.user
                }
            }, {
                new: true
            })
        } else {
            likedComment = await Comment.findByIdAndUpdate(id, {
                $push: {
                    likes: req.user
                }
            }, {
                new: true
            })
        }

        return res.status(200).json(likedComment)

    } catch (error) {
        throw (error);
    }

}