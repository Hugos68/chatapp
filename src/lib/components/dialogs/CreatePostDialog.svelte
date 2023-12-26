<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Dialog } from '$lib/stores/dialogStore';
	import type { SubmitFunction } from '@sveltejs/kit';

	export let dialog: Dialog;

	export const createPost: SubmitFunction = () => {
		return async ({ result, update }) => {
			if (result.type === 'redirect') {
				dialog.close();
				await update();
			}
		};
	};
</script>

<form
	class="bg-stone-300 dark:bg-stone-700 rounde-md p-8"
	method="post"
	action="/?/createPost"
	use:enhance={createPost}
>
	<h1>Create Post</h1>

	<p>Are you sure you want to create a new post?</p>
	<button on:click={dialog.close}>Close</button>

	<button>Create</button>
</form>
