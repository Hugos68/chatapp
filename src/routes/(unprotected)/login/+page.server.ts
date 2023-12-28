import { loginSchema } from '$lib/schemas/login-form';
import { error, type Actions, redirect } from '@sveltejs/kit';
import { safeParse } from 'valibot';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const validation = safeParse(loginSchema, Object.fromEntries(formData.entries()));

		if (!validation.success) {
			error(400, validation.issues[0]);
		}

		const { error: signInError } = await supabase.auth.signInWithPassword(validation.output);

		if (signInError) {
			error(400, signInError.message);
		}

		redirect(301, '/conversations');
	}
};
