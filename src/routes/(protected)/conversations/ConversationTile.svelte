<script lang="ts">
	import { page } from '$app/stores';
	import { createConversationMessageStore } from '$lib/stores/conversation-message-store';
	import type { ExtractTableType } from '$lib/supabase/types';

	export let conversation: ExtractTableType<'conversations'> & {
		messages: (ExtractTableType<'messages'> & { profile: ExtractTableType<'profiles'> })[];
	};

	export let index: number;

	$: messagesStore = createConversationMessageStore(
		$page.data.supabase,
		conversation.id,
		conversation.messages
	);

	$: lastSendMessage = $messagesStore[0];
</script>

<li
	class:border-t={index !== 0}
	class="block p-4 w-full {$page.params.conversation_id === String(conversation.id)
		? 'bg-stone-300 dark:bg-stone-700'
		: 'bg-stone-200 dark:bg-stone-800'}"
>
	<a href="/conversations/{conversation.id}">
		<p>{conversation.title}</p>
		{#if lastSendMessage}
			<p>{lastSendMessage.profile.username}: {lastSendMessage.content}</p>
		{/if}
	</a>
</li>
