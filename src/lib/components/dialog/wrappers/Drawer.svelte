<script lang="ts">
	import type { DialogInstance } from '$lib/stores/dialog-store';
	import { getContext } from 'svelte';
	import { fade, fly, type FlyParams } from 'svelte/transition';

	export let position: 'top' | 'bottom' | 'left' | 'right' = 'left';

	const { dialog } = getContext<DialogInstance>('dialog');

	const transitionParameters: FlyParams = {
		duration: 250,
		opacity: 1,
		x: position === 'left' ? -1000 : position === 'right' ? 1000 : 0,
		y: position === 'top' ? -1000 : position === 'bottom' ? 1000 : 0
	};
</script>

<div transition:fade|global={{ duration: 250 }} class="fixed inset-0 bg-black bg-opacity-50 z-50" />
<div
	transition:fly|global={transitionParameters}
	class="fixed z-50 p-4 bg-stone-200 dark:bg-stone-800
    {position === 'top'
		? 'w-screen h-[min(75%,40rem)]'
		: position === 'bottom'
			? 'w-screen  h-[min(75%,40rem)]'
			: ''} 
        {position === 'left'
		? 'w-[min(75%,40rem)] h-screen'
		: position === 'right'
			? 'w-[min(75%,40rem)] h-screen'
			: ''}"
	use:dialog.modal
>
	<slot />
</div>
