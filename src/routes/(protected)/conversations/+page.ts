import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { conversations } = await parent();

	if (conversations.length > 0) {
		throw redirect(303, `/conversations/${conversations[0].id}`);
	}
}
