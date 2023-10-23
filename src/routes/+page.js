// lese av hele databasen for bruk for front

import { items } from '$lib/database.js'

export function load() {

    items.forEach(item => {
        // lag array med alle scores fra 0 til 1
        let scores = []
        item.reviews.forEach(review => {
            scores.push(review.score / review.maxScore)
        });

        // regne ut snittet av alle poengene
        item.totalScore = scores.reduce((a, b) => a + b, 0) / scores.length // https://www.logilax.com/javascript-calculate-average/        

    })

    return {
        items
    }
}