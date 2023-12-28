import { readable } from 'svelte/store';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'lucide-svelte';
import type { Message, MessageWithProfile } from '$lib/supabase/types';

export function createConversationMessageStore(
	supabase: SupabaseClient<Database>,
	conversationID: number,
	init: MessageWithProfile[] = []
) {
	return readable<MessageWithProfile[]>(init, (_set, update) => {
		const channel = supabase
			.channel('messages')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'messages',
					filter: `conversation_id=eq.${conversationID}`
				},
				async (payload) => {
					const newMessage = payload.new as Message;

					const { data: profile } = await supabase
						.from('profiles')
						.select('*')
						.eq('id', newMessage.user_id)
						.limit(1)
						.single();

					const newMessageWithProfile: MessageWithProfile = {
						...newMessage,
						profile
					};

					update((messages) => {
						const existingMessageIndex = messages.findIndex(
							(message) => message.id === newMessageWithProfile.id
						);
						if (existingMessageIndex !== -1) {
							messages[existingMessageIndex] = newMessageWithProfile;
						} else {
							messages.unshift(newMessageWithProfile);
						}

						return messages;
					});
				}
			)
			.subscribe();

		return () => channel.unsubscribe();
	});
}

export function createConversationLastSendMessageStore(
	supabase: SupabaseClient<Database>,
	conversationID: number,
	init: MessageWithProfile
) {
	return readable<MessageWithProfile>(init, (set) => {
		const channel = supabase
			.channel('messages')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
					table: 'messages',
					filter: `conversation_id=eq.${conversationID}`
				},
				(payload) => set(payload.new as MessageWithProfile)
			)
			.subscribe();

		return () => channel.unsubscribe();
	});
}
