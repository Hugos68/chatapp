<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1 class="text-center text-2xl my-16">Register</h1>
<form class="flex flex-col items-center gap-4 max-w-sm mx-auto" method="post" use:enhance>
	<input
		class="bg-stone-300 dark:bg-stone-700"
		name="username"
		type="text"
		placeholder="Username"
	/>
	<input class="bg-stone-300 dark:bg-stone-700" name="email" type="email" placeholder="Email" />
	<input
		class="bg-stone-300 dark:bg-stone-700"
		name="password"
		type="password"
		placeholder="Password"
	/>
	<input
		class="bg-stone-300 dark:bg-stone-700"
		name="confirmPassword"
		type="password"
		placeholder="Confirm Password"
	/>
	<p>Already have an account? <a class="underline" href="/login">Login</a></p>
	<button class="bg-stone-300 dark:bg-stone-700 px-3 py-1.5">Register</button>
</form>
