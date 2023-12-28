<script lang="ts">
	import ChatBubble from './ChatBubble.svelte';
	import ChatInput from './ChatInput.svelte';

	export let data;

	$: ({
		conversation: { messages }
	} = data);
</script>

<section>
	<header class="h-20 w-full bg-red-600"></header>

	<ol class="flex flex-col-reverse gap-2 p-4 h-[calc(100vh-7.5rem)] overflow-scroll">
		{#each messages as message}
			<li>
				<ChatBubble {message} />
			</li>
		{/each}
	</ol>

	<ChatInput />
</section>
