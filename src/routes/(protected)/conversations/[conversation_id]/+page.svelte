<script lang="ts">
	import { createConversationMessageStore } from '$lib/stores/conversation-message-store';
	import ChatBubble from './ChatBubble.svelte';
	import ChatInput from './ChatInput.svelte';

	export let data;

	const messsagesStore = createConversationMessageStore(
		data.supabase,
		data.conversation.id,
		data.conversation.messages
	);
</script>

<section>
	<ol class="flex flex-col-reverse gap-2 p-4 h-[calc(100vh-2.5rem)] overflow-scroll">
		{#each $messsagesStore as message}
			<li>
				<ChatBubble {message} />
			</li>
		{/each}
	</ol>
	<ChatInput />
</section>
