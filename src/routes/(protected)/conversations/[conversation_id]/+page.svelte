<script lang="ts">
	import { createConversationMessageStore } from '$lib/stores/conversation-message-store';
	import { flip } from 'svelte/animate';
	import ChatBubble from './ChatBubble.svelte';
	import ChatInput from './ChatInput.svelte';
	import { cubicInOut } from 'svelte/easing';

	export let data;

	$: messsagesStore = createConversationMessageStore(
		data.supabase,
		data.conversation.id,
		data.conversation.messages
	);
</script>

<section>
	<ol class="flex flex-col-reverse gap-2 p-4 h-[calc(100vh-2.5rem)] overflow-scroll">
		{#each $messsagesStore as message (message.id)}
			<li animate:flip={{ duration: 100, easing: cubicInOut }}>
				<ChatBubble {message} />
			</li>
		{/each}
	</ol>
	<ChatInput />
</section>
