<script lang="ts">
	import CreateConversationDialog from '$lib/components/dialog/implementations/CreateConversationDialog.svelte';
	import ConversationTile from './ConversationTile.svelte';
	import { dialogStore } from '$lib/stores/dialog-store';

	export let data;
</script>

<div class="grid grid-cols-[25%_1fr]">
	<aside class="h-screen bg-stone-200 dark:bg-stone-800">
		<header class="flex justify-between p-2">
			<p class="text-3xl font-bold">Conversations</p>
			<button
				class="btn"
				on:click={() => dialogStore.trigger({ component: CreateConversationDialog })}
				>Start new conversation</button
			>
		</header>
		<ul>
			{#each data.conversations as conversation, index}
				<ConversationTile {conversation} {index} />
			{/each}
		</ul>
	</aside>
	<div>
		<slot />
	</div>
</div>
