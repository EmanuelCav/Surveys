import { Schema, model, Types } from "mongoose";

import { IComment } from "../../interface/Survey";

const { ObjectId } = Types

const commentSchema = new Schema({

    comment: {
        type: String,
        required: true,
        trim: true
    },
    likes: [{
        type: ObjectId,
        ref: 'User'
    }],
    updated: {
        type: Boolean,
        default: false
    },
    user: {
        type: ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true,
    versionKey: false
})

export default model<IComment>('Comment', commentSchema)