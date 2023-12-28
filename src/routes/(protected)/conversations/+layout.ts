import type { QueryData } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

export async function load({ parent }) {
	const { supabase } = await parent();

	const conversationWithMessagesQuery = supabase
		.from('conversations')
		.select('*, messages (*, profile:profiles (*))')
		.order('created_at', { referencedTable: 'messages', ascending: false });

	type ConversationWithMessageAndProfile = QueryData<typeof conversationWithMessagesQuery>;

	const { data: conversations, error: conversationsError } = await conversationWithMessagesQuery;

	if (conversationsError) {
		error(400, conversationsError.message);
	}

	return {
		conversations: conversations as ConversationWithMessageAndProfile
	};
}
