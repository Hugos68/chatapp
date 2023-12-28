import { redirect } from '@sveltejs/kit';

export async function load() {
	// TODO: Redirect to last visited chat

	throw redirect(303, '/conversations/1');
}
