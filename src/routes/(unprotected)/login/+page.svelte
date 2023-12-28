<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="text-center text-2xl my-16">Login</h1>
<form class="flex flex-col items-center gap-4 max-w-sm mx-auto" method="post" use:enhance>
	<input class="bg-stone-300 dark:bg-stone-700" name="email" type="email" placeholder="Email" />
	<input
		class="bg-stone-300 dark:bg-stone-700"
		name="password"
		type="password"
		placeholder="Password"
	/>
	<p>Don't have an account? <a class="underline" href="/register">Register</a></p>

	<button class="bg-stone-300 dark:bg-stone-700 px-3 py-1.5">Login</button>
</form>
