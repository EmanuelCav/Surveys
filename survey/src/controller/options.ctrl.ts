import { Request, Response } from "express";

import Option from '../database/model/option'
import Survey from '../database/model/survey'

export const createOption = async (req: Request, res: Response): Promise<Response> => {

    const { name } = req.body;
    const { id } = req.params;

    try {

        const survey = await Survey.findById(id)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if(survey?.user != req.user) {
            return res.status(401).json({
                message: "You cannot add an option"
            })
        }

        const newOption = new Option({
            name
        })

        const optionSaved = await newOption.save()

        const surveyOption = await Survey.findByIdAndUpdate(id, {
            $push: {
                options: optionSaved._id
            }
        }, {
            new: true
        })
        .populate("options", "name votes")

        return res.status(200).json(surveyOption)

    } catch (error) {
        throw (error);
    }

}

export const removeOption = async (req: Request, res: Response): Promise<Response> => {

    const { id, surveyid } = req.params

    try {

        const option = await Option.findById(id)

        if (!option) {
            return res.status(400).json({
                message: "Option does not exists"
            })
        }

        const survey = await Survey.findById(surveyid)

        if (!survey) {
            return res.status(400).json({
                message: "Survey does not exists"
            })
        }

        if(survey?.user != req.user) {
            return res.status(401).json({
                message: "You cannot remove an option"
            })
        }

        await Survey.findByIdAndUpdate(surveyid, {
            $pull: {
                options: id
            }
        }, {
            new: true
        })

        await Option.findByIdAndDelete(id)

        return res.status(200).json({ message: "Option was removed" })

    } catch (error) {
        throw (error);
    }

}

export const vote = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const option = await Option.findById(id)

        if(!option) {
            return res.status(200).json({
                message: "Option does not exists"
            })
        }

        if(option.votes.find(id => id == req.user)) {
            return res.status(200).json({
                message: "You have already vote"
            })
        }

        const optionVoted = await Option.findByIdAndUpdate(id, {
            $push: {
                votes: req.user
            }
        })

        return res.status(200).json(optionVoted)

    } catch (error) {
        throw (error);
    }

}

