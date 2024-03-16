import { IOption, ISurvey } from "../interfaces/Survey"

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
        totalRecommendations+=surveys[i].recommendations.length
        
    }

    return totalRecommendations

}