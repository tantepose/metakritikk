// lese av hele databasen for bruk for front

import { items } from '$lib/database.js'

export function load() {
    return {
        items
    }
}