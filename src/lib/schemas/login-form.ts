import { object, string, email } from 'valibot';

export const loginSchema = object(
	{
		email: string([email()]),
		password: string()
	}
);
