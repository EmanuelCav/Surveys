import { Schema, model, Types } from "mongoose";

const { ObjectId } = Types

const optionSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    votes: [{
        type: ObjectId,
        ref: 'User'
    }],

}, {
    timestamps: true,
    versionKey: false
})

export default model('Option', optionSchema)