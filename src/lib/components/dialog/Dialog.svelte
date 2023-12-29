<script lang="ts">
	import DialogShell from './DialogShell.svelte';
	import { dialogStore } from '$lib/stores/dialog-store';
</script>

{#each $dialogStore as dialogInstance (dialogInstance.id)}
	<DialogShell {dialogInstance} />
{/each}
