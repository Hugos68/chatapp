import { sendMessageSchema } from '$lib/schemas/send-message';
import { error } from '@sveltejs/kit';
import { safeParse } from 'valibot';

export const actions = {
	sendMessage: async ({
		request,
		params: { conversation_id },
		locals: { supabase, getSession }
	}) => {
		const formData = await request.formData();

		const validation = safeParse(sendMessageSchema, Object.fromEntries(formData.entries()));

		if (!validation.success) {
			error(400, validation.issues[0]);
		}

		const session = await getSession();

		if (!session) {
			error(401);
		}

		const { error: sendMessageError } = await supabase.from('messages').insert({
			user_id: session.user.id,
			conversation_id: Number(conversation_id),
			content: validation.output.message
		});

		if (sendMessageError) {
			error(400, sendMessageError.message);
		}

		return { success: true };
	}
};
