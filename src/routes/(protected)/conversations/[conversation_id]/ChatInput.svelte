<script lang="ts">
	import { enhance } from '$app/forms';
	import { Loader } from 'lucide-svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let sending = false;

	const sendMessage: SubmitFunction = () => {
		sending = true;
		return async ({ update }) => {
			await update();
			sending = false;
		};
	};
</script>

<form
	class="h-10 grid grid-cols-[1fr_10%]"
	method="post"
	action="?/sendMessage"
	use:enhance={sendMessage}
>
	<input
		class="bg-stone-300 dark:bg-stone-700 border-none"
		placeholder="Enter a message..."
		name="message"
	/>
	<button
		class="bg-stone-400 dark:bg-stone-600 flex justify-center items-center"
		disabled={sending}
	>
		{#if sending}
			<span class="animate-spin"><Loader /></span>
		{:else}
			Send
		{/if}
	</button>
</form>
