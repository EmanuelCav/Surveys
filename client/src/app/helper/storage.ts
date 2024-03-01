import { key_persist } from "../config/import";

export const isStorage = (): boolean => {

    const value = JSON.parse(localStorage.getItem(`${key_persist}`) as string)

    if(value) {
        return JSON.parse(value.user).isLoggedIn
    }

    return false
}