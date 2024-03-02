import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string().min(3, {
        message: "Username must have at least 3 characters"
    }).max(35, {
        message: "Username must have less than 35 characters"
    }).trim().refine((value) => /^[a-zA-Z0-9ñÑ]+$/.test(value), {
        message: "Username only accepts letters and numbers continuously"
    }),
    email: z.string().min(1, {
        message: "Email field is required"
    }).trim().email({
        message: "Email is invalid"
    }),
    gender: z.string().trim().min(1, {
        message: "Gender field is required"
    }),
    password: z.string().min(7, {
        message: "Password must have more than 6 characters"
    }).trim(),
    confirm: z.string().trim().min(1, {
        message: "Confirm password field is required"
    }),
}).required({username: true, email: true, gender: true, password: true, confirm: true})

export const loginSchema = z.object({
    email: z.string().min(1, {
        message: "Email field is required"
    }).trim().email({
        message: "Email is not valid"
    }),
    password: z.string().trim().min(1, {
        message: "Password field is required"
    })
}).required({email: true, password: true })