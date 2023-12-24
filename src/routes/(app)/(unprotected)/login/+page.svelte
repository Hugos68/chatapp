<script lang="ts">
	import { enhance } from '$app/forms';
	import * as m from '$paraglide/messages';
</script>

<form method="post" use:enhance>
	<input name="email" type="email" placeholder="Email" />
	<input name="password" type="password" placeholder="Password" />
	<button>{m.login()}</button>
</form>
