<script lang="ts">
	import { dialogStore } from '$lib/stores/dialogStore';
	import DialogShell from './DialogShell.svelte';
</script>

{#each $dialogStore as dialog}
	<DialogShell {dialog} />
{/each}
