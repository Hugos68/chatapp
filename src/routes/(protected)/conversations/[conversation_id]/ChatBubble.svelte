<script lang="ts">
	import { page } from '$app/stores';
	import type { ExtractTableType } from '$lib/supabase/types';

	export let message: ExtractTableType<'messages'> & { profile: ExtractTableType<'profiles'> };

	$: ourMessage = message.user_id === $page.data.session?.user.id;
</script>

<div
	class:ml-auto={ourMessage}
	class:text-end={ourMessage}
	class="bg-stone-300 dark:bg-stone-700 p-2 max-w-[33vw]"
>
	<p class="text-sm opacity-[50%]">{message.profile.username}</p>
	<p>{message.content}</p>
</div>
