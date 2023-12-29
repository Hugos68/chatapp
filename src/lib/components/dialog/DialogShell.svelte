<script lang="ts">
	import type { DialogInstance } from '$lib/stores/dialog-store';
	import { setContext } from 'svelte';

	export let dialogInstance: DialogInstance;

	$: ({ dialog, close, component, props } = setContext('dialog', dialogInstance));

	$: if (!$dialog.expanded) close();
</script>

<svelte:component this={component} {...props} />
