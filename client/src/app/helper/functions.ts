import { IOption } from "../interfaces/Survey"

export const totalVotes = (options: IOption[]): number => {

    let total = 0

    for (let i = 0; i < options.length; i++) {
        total += options[i].votes.length
    }

    return total
}