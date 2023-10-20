import { error } from '@sveltejs/kit';
import { items } from '$lib/database.js'

// lese av tittel i url, returnere tittel fra database
export function load({ params }) {
	if (params.slug) {
        const title = items.find(({ title }) => title === params.slug);
        console.log(title)
		return title
	}

	throw error(404, 'Not found');
}