<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import DialogRenderer from '$lib/components/dialog/DialogRenderer.svelte';
</script>

<DialogRenderer />

<Header />

<main class="prose dark:prose-invert max-w-none px-[clamp(4rem,25vw,40rem)] py-32">
	<slot />
</main>

<Footer />
