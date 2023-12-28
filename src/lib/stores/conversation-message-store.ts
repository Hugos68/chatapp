import { readable } from 'svelte/store';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'lucide-svelte';
import type { ExtractTableType } from '$lib/supabase/types';

type Message = ExtractTableType<'messages'>;

export function createConversationMessageStore(
	supabase: SupabaseClient<Database>,
	conversationID: number,
	init: Message[] = []
) {
	return readable<Message[]>(init, (_set, update) => {
		const channel = supabase
			.channel('messages')
			.on(
				'postgres_changes',
				{
					event: 'INSERT',
					schema: 'public',
					table: 'messages',
					filter: `conversation_id=eq.${conversationID}`
				},
				(payload) => update((messages) => [payload.new as Message, ...messages])
			)
			.subscribe();

		return () => channel.unsubscribe();
	});
}
