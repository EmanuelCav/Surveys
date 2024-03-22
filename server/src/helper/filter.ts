import { ISurvey } from "interface/Survey";

export const filterDate = (date: string): Date => {

    switch (date) {
        case 'total':
            const total = new Date('January 1, 2024, 00:00:00');
            return total

        case 'year':
            const year = new Date(new Date().getTime() - (365 * 24 * 60 * 60 * 1000));
            return year

        case 'month':
            const month = new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000));
            return month

        case 'week':
            const week = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
            return week

        case 'day':
            const day = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
            return day

        default:
            break;
    }

    return new Date('January 1, 2024, 00:00:00');

}

export const orderSurveys = (surveys: ISurvey[], order: string): ISurvey[] => {

    switch (order) {
        case 'random':
            return shuffle(surveys)

        case 'recent':
            return surveys.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        case 'older':
            return surveys.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

        case 'recommendations':
            return surveys.sort((a, b) => b.recommendations.length - a.recommendations.length)

        case 'votes':

            let positions = []

            for (let i = 0; i < surveys.length; i++) {

                let sum = 0

                for (let j = 0; j < surveys[i].options.length; j++) {
                    sum += surveys[i].options[j].votes.length;
                }

                positions.push({
                    position: i,
                    sum
                });

            }

            const sortedPositions = positions.sort((a, b) => b.sum - a.sum)

            let order = []

            for (let i = 0; i < sortedPositions.length; i++) {
                order.push(surveys[sortedPositions[i].position])
            }

            return order

        default:
            break;
    }

    return shuffle(surveys)

}

function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

