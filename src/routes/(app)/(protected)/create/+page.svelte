<script lang="ts">
	import { micromark } from 'micromark';

	let value: string;
</script>

<textarea class="input" bind:value />

<article class="prose">
	{@html micromark(value)}
</article>

<style>
</style>
