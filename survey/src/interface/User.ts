import { Document, ObjectId } from 'mongoose'

export interface IUser extends Document {
    _id: string;
    username: string;
    email: string;
    gender: string;
    password: string;
    followers: ObjectId[];
    created_at: NativeDate;
    updated_at: NativeDate;
}