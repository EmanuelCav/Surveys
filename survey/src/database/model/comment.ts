import { Schema, model, Types } from "mongoose";

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
    comments: [{
        type: ObjectId,
        ref: 'Comment'
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

export default model('Comment', commentSchema)