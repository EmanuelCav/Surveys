import { faker } from '@faker-js/faker'

export const generateUsers = () => {
    return {
        id: faker.number.int({
            min: 0,
            max: 100000
        }),
        username: faker.person.firstName()
    }
}