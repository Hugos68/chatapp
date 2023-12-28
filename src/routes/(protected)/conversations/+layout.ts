import type { Table } from '$lib/supabase/types';
import { error } from '@sveltejs/kit';

export async function load({ parent }) {
	const { supabase } = await parent();
	const { data: conversations, error: conversationsError } = await supabase
		.from('conversations')
		.select('*')
		.returns<Table<'conversations'>>();

	if (conversationsError) {
		error(400, conversationsError.message);
	}

	return { conversations };
}
