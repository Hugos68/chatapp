<script lang="ts">
	import type { DialogInstance } from '$lib/stores/dialog-store';
	import { getContext } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const { dialog } = getContext<DialogInstance>('dialog');
</script>

<div transition:fade|global={{ duration: 250 }} class="fixed inset-0 bg-black bg-opacity-50 z-50" />
<div
	transition:fly|global={{ duration: 250, y: 50 }}
	class="fixed z-50 py-12 px-12 max-w-lg w-full bg-stone-200 dark:bg-stone-800 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
	use:dialog.modal
>
	<slot />
</div>
