<script lang="ts">
	import type { DialogInstance } from '$lib/stores/dialog-store';
	import { getContext } from 'svelte';
	import Modal from '../wrappers/Modal.svelte';

	const { close } = getContext<DialogInstance>('dialog');

	let type: 'private' | 'group' = 'private';
</script>

<Modal>
	<div class="flex flex-col gap-6">
		<p class="text-3xl font-bold">Create conversation</p>
		<form class="flex flex-col gap-4">
			<label class="flex flex-col gap-2">
				<span class="text-sm font-bold">Type</span>
				<select bind:value={type} class="input">
					<option value="private">Private</option>
					<option value="group">Group</option>
				</select>
			</label>
			{#if type === 'group'}
				<label class="flex flex-col gap-2">
					<span class="text-sm font-bold">Title</span>
					<input required class="input" type="text" placeholder="Group Title" />
				</label>
			{:else if type === 'private'}
				<label class="flex flex-col gap-2">
					<span class="text-sm font-bold">User</span>
					<input required class="input" type="text" placeholder="Username" />
				</label>
			{/if}
			<div class="w-fit ml-auto flex gap-4">
				<button class="btn">Cancel</button>
				<button class="btn" on:click={close}>Create</button>
			</div>
		</form>
	</div>
</Modal>
