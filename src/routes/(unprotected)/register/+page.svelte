<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance>
	<input name="email" type="email" placeholder="Email" />
	<input name="password" type="password" placeholder="Password" />
	<input name="confirmPassword" type="password" placeholder="Confirm Password" />
	<button>Register</button>
</form>
