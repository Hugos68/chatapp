import type { ConversationWithMessagesWithProfile } from '$lib/supabase/types';
import { error } from '@sveltejs/kit';

export async function load({ params: { conversation_id }, parent }) {
	const { supabase } = await parent();

	const { data: conversation, error: conversationError } = await supabase
		.from('conversations')
		.select('*, messages (*, profile:profiles (*))')
		.eq('id', conversation_id)
		.order('created_at', { referencedTable: 'messages', ascending: false })
		.returns<ConversationWithMessagesWithProfile[]>()
		.limit(1)
		.single();

	if (conversationError) {
		error(400, conversationError.message);
	}

	return { conversation };
}
