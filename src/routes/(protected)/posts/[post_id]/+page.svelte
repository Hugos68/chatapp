<script lang="ts">
	import { createTabs } from 'svelte-headlessui';
	import Editor from './Editor.svelte';
	import Preview from './Preview.svelte';
	import { setMarkdownStore } from '$lib/contexts/markdown';
	import { writable } from 'svelte/store';

	export let data;

	setMarkdownStore(writable(data.post.content));

	const tabs = createTabs({ selected: 'editor' });
</script>

<div class="flex gap-4 p-2" use:tabs.list>
	<button
		class:border-2={$tabs.selected === 'editor'}
		class="flex-1 bg-stone-200 dark:bg-stone-800 rounded-md px-3 py-1.5 border-stone-800 dark:border-stone-200"
		use:tabs.tab={{ value: 'editor' }}>Editor</button
	>
	<button
		class:border-2={$tabs.selected === 'preview'}
		class="flex-1 bg-stone-200 dark:bg-stone-800 rounded-md px-3 py-1.5 border-stone-800 dark:border-stone-200"
		use:tabs.tab={{ value: 'preview' }}>Preview</button
	>
</div>

<div class="mt-16">
	{#if $tabs.selected === 'editor'}
		<Editor />
	{:else}
		<Preview />
	{/if}
</div>
