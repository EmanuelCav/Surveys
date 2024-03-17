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
    })
}).superRefine(({ password, confirm }, ctx) => {

    if (password !== confirm) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords do not match",
            path: ["password"]
        })
    }

})

export const loginSchema = z.object({
    email: z.string().min(1, {
        message: "Email field is required"
    }).trim().email({
        message: "Email is not valid"
    }),
    password: z.string().trim().min(1, {
        message: "Password field is required"
    })
}).required({ email: true, password: true })

export const updateProfileSchema = z.object({
    username: z.string().min(3, {
        message: "Username must have at least 3 characters"
    }).max(35, {
        message: "Username must have less than 35 characters"
    }).trim().refine((value) => /^[a-zA-Z0-9ñÑ]+$/.test(value), {
        message: "Username only accepts letters and numbers continuously"
    }),
    description: z.string().trim().max(200, {
        message: "The description must have less than 200 characters"
    }).refine((value) => /[^<>]/g.test(value), {
        message: "Characters like <, > are not allowed in description field"
    }).optional().or(z.literal('')),
    country: z.string().trim()
})