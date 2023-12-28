<script lang="ts">
	import ConversationTile from './ConversationTile.svelte';

	export let data;
</script>

<div class="grid grid-cols-[25%_1fr]">
	<aside class="h-screen bg-stone-200 dark:bg-stone-800">
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
