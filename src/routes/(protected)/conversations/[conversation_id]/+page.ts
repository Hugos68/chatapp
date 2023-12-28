import type { QueryData } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

export async function load({ params: { conversation_id }, parent }) {
	const { supabase } = await parent();

	const conversationWithMessagesQuery = supabase
		.from('conversations')
		.select('*, messages (*)')
		.eq('id', conversation_id)
		.order('created_at', { referencedTable: 'messages', ascending: false })
		.limit(1)
		.single();

	type ConversationWithMessage = QueryData<typeof conversationWithMessagesQuery>;

	const { data: conversation, error: conversationError } = await conversationWithMessagesQuery;

	if (conversationError) {
		error(400, conversationError.message);
	}

	return {
		conversation: conversation as ConversationWithMessage
	};
}
