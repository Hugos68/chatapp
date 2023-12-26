<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { CircleUser, Heading, PlusCircle } from 'lucide-svelte';
</script>

<header
	class="bg-stone-800 h-20 w-full sticky top-0 px-[clamp(4rem,25vw,40rem)] flex items-center justify-between"
>
	<nav class="flex items-center gap-8">
		<a aria-label="Home" href="/"><Heading size="32" /></a>
	</nav>
	<nav class="flex items-center gap-8">
		{#if !!$page.data.session}
			<form method="post" action="?/createPost" use:enhance>
				<button aria-label="Create"><PlusCircle size="32" /></button>
			</form>
			<a aria-label="Account" href="/account"><CircleUser size="32" /></a>
		{:else}
			<a href="/login">Login</a>
			<a href="/register">Register</a>
		{/if}
	</nav>
</header>
