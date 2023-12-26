<script lang="ts">
	import { page } from '$app/stores';
	import { getMarkdownStore } from '$lib/contexts/markdown';
	import { Loader, Check } from 'lucide-svelte';

	const markdownStore = getMarkdownStore();

	let saving = false;
	let timer: ReturnType<typeof setTimeout> | null = null;
	async function saveDebounced() {
		if (timer) clearTimeout(timer);
		saving = true;
		timer = setTimeout(async () => {
			await $page.data.supabase
				.from('posts')
				.update({
					content: $markdownStore
				})
				.eq('id', $page.params.post_id);
			saving = false;
		}, 1000);
	}
</script>

<div class="relative">
	{#if saving}
		<Loader class="absolute top-3 right-3 animate-spin" size="18" />
	{:else}
		<Check class="absolute top-3 right-3" size="18" />
	{/if}

	<textarea
		on:keydown={saveDebounced}
		bind:value={$markdownStore}
		class="bg-stone-100 dark:bg-stone-900 w-full"
	/>
</div>
