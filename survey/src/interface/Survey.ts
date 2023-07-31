import { Document, ObjectId } from 'mongoose'

export interface ISurvey extends Document {
    _id: string;
    title: string;
    recomendations: ObjectId[];
    options: ObjectId[]
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
}

export interface IComment extends Document {
    _id: string;
    comment: string;
    likes: ObjectId[];
    comments: ObjectId[];
    updated: boolean;
    user: ObjectId;
    created_at: NativeDate;
    updated_at: NativeDate;
}



