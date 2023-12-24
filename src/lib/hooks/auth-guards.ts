import { redirect, type Handle } from '@sveltejs/kit';

export const authGuards: Handle = async ({ event, resolve }) => {
	const authenticated = !!(await event.locals.getSession());
;	const accessingProtectedPage = event.route.id?.startsWith('/(app)/(protected)/');
	const accessingUnprotectedPage = event.route.id?.startsWith('/(app)/(unprotected)/');
    
	if (!authenticated && accessingProtectedPage) {
		redirect(301, '/login');
	}

	if (authenticated && accessingUnprotectedPage) {
		redirect(301, '/chats');
	}

	return await resolve(event);
};
