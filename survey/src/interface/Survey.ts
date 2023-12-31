import { Document, ObjectId } from 'mongoose'

export interface ISurvey extends Document {
    _id: string;
    title: string;
    recommendations: ObjectId[];
    options: ObjectId[];
    comments: ObjectId[];
    user: ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}

export interface IOption extends Document {
    _id: string;
    name: string;
    votes: ObjectId[];
    created_at: NativeDate;
    updated_at: NativeDate;
    user: ObjectId;
}

export interface IComment extends Document {
    _id: string;
    comment: string;
    likes: ObjectId[];
    user: ObjectId;
    survey: ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}



