import { object, string } from 'valibot';

export const sendMessageSchema = object({
	message: string()
});