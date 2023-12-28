import { redirect, type Handle } from '@sveltejs/kit';

export const authGuards: Handle = async ({ event, resolve }) => {
	const authenticated = !!(await event.locals.getSession());
	const accessingProtectedPage = event.route.id?.startsWith('/(protected)/');
	const accessingUnprotectedPage = event.route.id?.startsWith('/(unprotected)/');

	if (!authenticated && accessingProtectedPage) {
		redirect(301, '/login');
	}

	if (authenticated && accessingUnprotectedPage) {
		redirect(301, '/conversations');
	}

	return await resolve(event);
};
