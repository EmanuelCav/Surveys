import { ICategory, IOption, ISurvey, IVote } from "../interfaces/Survey"
import { IUser } from "../interfaces/User"

export const totalVotes = (options: IOption[]): number => {

    let total = 0

    for (let i = 0; i < options.length; i++) {
        total += options[i].votes.length
    }

    return total
}

export const recommendationSurveysUser = (surveys: ISurvey[]) => {

    let totalRecommendations = 0

    for (let i = 0; i < surveys.length; i++) {
        totalRecommendations+=surveys[i].recommendations!.length
        
    }

    return totalRecommendations

}

export const hasUserParticipate = (options: IOption[], user: IUser): boolean => {

    for (let i = 0; i < options.length; i++) {
        const isFound = options[i].votes.find((vote: IVote) => vote.userId === user.id)

        if(isFound) return true
    }

    return false

}

export const isCategorySelected = (user: IUser, category: ICategory): boolean => {

    const categoryUser = user.UserCategory?.find((userCategory) => userCategory.categoryId === category.id)

    if(!categoryUser) {
        return false
    }

    return categoryUser.isSelect

}