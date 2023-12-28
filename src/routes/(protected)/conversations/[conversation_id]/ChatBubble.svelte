<script lang="ts">
	import { page } from '$app/stores';
	import type { Table } from '$lib/supabase/types';

	export let message: Table<'messages'>;

	$: ourMessage = message.user_id === $page.data.session?.user.id;
</script>

<div class:ml-auto={ourMessage} class="bg-stone-300 dark:bg-stone-700 p-2 max-w-[33vw]">
	<p class:text-end={ourMessage}>{message.content}</p>
</div>
