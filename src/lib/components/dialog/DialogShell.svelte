<script lang="ts">
	import { type Dialog } from '$lib/stores/dialogStore';
	import { click_outside, focus_trap, portal } from 'action-archive';

	export let dialog: Dialog;

	let disabled = true;

	setTimeout(() => {
		disabled = false;
	}, 0);
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && dialog.close()} />

<div use:portal={{ target: document.body }}>
	<div class="fixed h-screen w-screen top-0 left-0 bg-black opacity-25 z-50" />
	<div
		class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
		use:click_outside={{ disabled }}
		on:aa_click_outside={dialog.close}
		use:focus_trap={{ disabled }}
	>
		<svelte:component this={dialog.component} {...dialog.props} {dialog} />
	</div>
</div>
