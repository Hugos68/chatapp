import type { ConversationWithMessagesWithProfile } from '$lib/supabase/types.js';
import { error } from '@sveltejs/kit';

export async function load({ parent }) {
	const { supabase } = await parent();

	const { data: conversations, error: conversationsError } = await supabase
		.from('conversations')
		.select('*, messages (*, profile:profiles (*))')
		.order('created_at', { referencedTable: 'messages', ascending: false })
		.returns<ConversationWithMessagesWithProfile[]>();

	if (conversationsError) {
		error(400, conversationsError.message);
	}

	return { conversations };
}
