import { registerSchema } from '$lib/schemas/register-form';
import { error, type Actions, redirect } from '@sveltejs/kit';
import { safeParse } from 'valibot';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const validation = safeParse(registerSchema, Object.fromEntries(formData.entries()));

		if (!validation.success) {
			error(400, validation.issues[0]);
		}

		const { email, password, username } = validation.output;

		const { error: signUpError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					username
				}
			}
		});

		if (signUpError) {
			error(400, signUpError.message);
		}

		redirect(301, '/conversations');
	}
};
