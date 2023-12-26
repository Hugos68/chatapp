<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form method="post" use:enhance>
	<input name="email" type="email" placeholder="Email" />
	<input name="password" type="password" placeholder="Password" />
	<button>Login</button>
</form>
