import { Schema, model, Types } from "mongoose";

import { IUser } from "../../interface/User";

const { ObjectId } = Types

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    followers: [{
        type: ObjectId,
        ref: 'User'
    }],
    following: [{
        type: ObjectId,
        ref: 'User'
    }]

}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)