import { items } from '$lib/database.js'

// lese av hele databasen for bruk for front
console.log("👌 lasta:", items)
    export function load() {
        return {
            items
        }
}