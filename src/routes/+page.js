// lese av hele databasen for bruk overalt

import { items } from '$lib/database.js'

export function load() {
    return {
        items
    }
}