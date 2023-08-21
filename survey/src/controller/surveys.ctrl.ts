import { Request, Response } from "express";

import Survey from '../database/model/survey';
import Option from '../database/model/option'
import Comment from '../database/model/comment'

export const surveys = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showSurveys = await Survey.find()
            .populate("options", "name votes")
            .populate({
                path: 'comments',
                populate: { path: 'comments' }
            })

        return res.status(200).json({
            posts: showSurveys.length,
            data: showSurveys,
            message: "Get all surveys"
        })

    } catch (error) {
        throw (error);
    }

}

export const surveysProfile = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showSurveys = await Survey.find({ user: id })
            .populate("options", "name votes")
            .populate({
                path: 'comments',
                populate: { path: 'comments' }
            })

        return res.status(200).json(showSurveys)

    } catch (error) {
        throw (error);
    }

}

export const survey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showSurvey = await Survey.findById(id)
            .populate("options", "name votes")
            .populate({
                path: 'comments',
                populate: { path: 'comments' }
            })
            .populate("user")

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

    const { title } = req.body

    try {

        const newSurvey = new Survey({
            title,
            user: req.user
        })

        const surveySaved = await newSurvey.save()

        return res.status(200).json(surveySaved)

    } catch (error) {
        throw (error);
    }

}

export const removeSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const survey = await Survey.findById(id)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey?.user != req.user) {
            return res.status(401).json({
                message: "You cannot remove this survey"
            })
        }

        survey.options.forEach(async (id) => {
            await Option.findByIdAndDelete(id)
        })
        survey.comments.forEach(async (id) => {
            const comment = await Comment.findById(id)
            comment?.comments.forEach(async (commentId) => {
                await Comment.findByIdAndDelete(commentId)
            })
            await Comment.findByIdAndDelete(id)
        })

        await Survey.findByIdAndDelete(id)

        return res.status(200).json({ message: "Survey was removed" })

    } catch (error) {
        throw (error);
    }

}

export const recommendSurvey = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        var survey = await Survey.findById(id)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if (survey?.user == req.user) {
            return res.status(401).json({
                message: "You cannot recommend your own survey"
            })
        }

        var recommendedSurvey;

        if (survey.recommendations.find((id) => id == req.user)) {

            recommendedSurvey = await Survey.findByIdAndUpdate(id, {
                $pull: {
                    recommendations: req.user
                }
            }, {
                new: true
            })

        } else {

            recommendedSurvey = await Survey.findByIdAndUpdate(id, {
                $push: {
                    recommendations: req.user
                }
            }, {
                new: true
            })

        }

        return res.status(200).json(recommendedSurvey)

    } catch (error) {
        throw (error);
    }

}

