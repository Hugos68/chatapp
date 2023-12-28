import { minLength, object, string } from 'valibot';

export const sendMessageSchema = object({
	message: string([minLength(1)])
});
