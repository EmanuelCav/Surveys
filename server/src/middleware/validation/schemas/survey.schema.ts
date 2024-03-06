import { z } from "zod";

export const createSurveySchema = z.object({
    title: z.string().min(1, {
        message: "There are empty fields"
    }).trim(),
    category: z.string().min(1, {
        message: "There are empty fields"
    }).trim()
})

export const createCategorySchema = z.object({
    category: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[a-zA-Z]+$/.test(value)),
    icon: z.string().min(1, {
        message: "There are empty fields"
    }).trim().refine((value) => /^[a-zA-Z]+$/.test(value)),
})