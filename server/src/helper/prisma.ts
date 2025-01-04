import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export function excludeArray(arr: any[], keys: string[]) {

    let usersArray = []

    for (let i = 0; i < arr.length; i++) {
        usersArray[i] = Object.fromEntries(
            Object.entries(arr[i]).filter(([key]) => !keys.includes(key))
        )
    }

    return usersArray
}

export function exclude(object: any, keys: string[]) {
    return Object.fromEntries(
        Object.entries(object).filter(([key]) => !keys.includes(key))
    )
}