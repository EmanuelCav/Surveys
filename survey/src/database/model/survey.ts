import { Schema, model, Types } from "mongoose";

import { ISurvey } from "../../interface/Survey";

const { ObjectId } = Types

const surveySchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    options: [{
        type: ObjectId,
        ref: 'Option'
    }],
    recommendations: [{
        type: ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],
    user: {
        type: ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<ISurvey>('Survey', surveySchema)