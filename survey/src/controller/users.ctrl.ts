import { Request, Response } from "express";

import User from '../database/model/user';

import { hashPassword, comparePassword } from "../helper/encrypt";
import { generateToken } from "../helper/token";
import { infoEmail } from "../helper/mail";

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find()
        .select("-password")
        .limit(5)

        return res.status(200).json({
            users: showUsers.length,
            data: showUsers,
            message: "Get all users"
        })

    } catch (error) {
        throw (error);
    }

}

export const user = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const showUser = await User.findById(id)
        .select("-password")

        if (!showUser) {
            return res.status(400).json({
                message: "User does not exists."
            })
        }

        return res.status(200).json(showUser)

    } catch (error) {
        throw (error);
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { username, email, gender, password } = req.body

    try {

        const pass = await hashPassword(password)

        await infoEmail(email)

        const newUser = new User({
            username,
            gender,
            email,
            password: pass
        })

        const user = await newUser.save()

        return res.status(200).json(user)

    } catch (error) {
        throw (error);
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body

    try {

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "User does not exists"
            })
        }

        const isUserValid = await comparePassword(password, user.password)

        if (!isUserValid) {
            return res.status(400).json({
                message: "Fields do not match"
            })
        }

        const token = generateToken(user)

        return res.status(200).json({
            user,
            token
        })

    } catch (error) {
        throw (error);
    }

}

export const removeUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id)

        if (!user) {
            return res.status(200).json({
                message: "User does not exists"
            })
        }

        await User.findByIdAndDelete(id)

        return res.status(200).json({
            message: "User was removed"
        })

    } catch (error) {
        throw (error);
    }

}

export const followUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const user = await User.findById(id)

        if (!user) {
            return res.status(200).json({
                message: "User does not exists"
            })
        }

        if (user.id == req.user) {
            return res.status(401).json({
                message: "You cannot follow yourself"
            })
        }

        var userFollowed;

        if (user.followers.find((id) => id == req.user)) {

            userFollowed = await User.findByIdAndUpdate(id, {
                $pull: {
                    followers: req.user
                }
            }, {
                new: true
            })

        } else {

            userFollowed = await User.findByIdAndUpdate(id, {
                $push: {
                    followers: req.user
                }
            }, {
                new: true
            })

        }

        return res.status(200).json(userFollowed)

    } catch (error) {
        throw (error);
    }

}

