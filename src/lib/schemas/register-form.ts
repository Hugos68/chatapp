import { object, string, email, custom } from 'valibot';

export const registerSchema = object(
	{
		username: string(),
		email: string([email()]),
		password: string(),
		confirmPassword: string()
	},
	[
		custom(
			({ password, confirmPassword }) => password === confirmPassword,
			'The passwords do not match.'
		)
	]
);
