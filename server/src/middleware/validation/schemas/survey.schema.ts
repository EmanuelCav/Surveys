import { z } from "zod";

export const createSurveySchema = z.object({
    title: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[^<>]+$/.test(value), {
        message: "Characters like <, > are not allowed"
    }),
    category: z.string().min(1, {
        message: "There are empty fields"
    }).trim(),
    state: z.string().min(1, {
        message: "There are empty fields"
    }).trim()
})

export const createCategorySchema = z.object({
    category: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[a-zA-Z]+$/.test(value), {
        message: "Only letters are allowed"
    }),
    icon: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[a-zA-Z]+$/.test(value), {
        message: "Only letters are allowed"
    }),
})

export const updateOptionsSchema = z.object({
    name: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[^<>]+$/.test(value), {
        message: "Characters like <, > are not allowed"
    })
})