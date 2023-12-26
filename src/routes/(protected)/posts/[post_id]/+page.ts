import { error } from '@sveltejs/kit';

export async function load({ parent, params: { post_id } }) {
	const { supabase } = await parent();

	const { data: post, error: postError } = await supabase
		.from('posts')
		.select('*')
		.eq('id', post_id)
		.limit(1)
		.single();

	if (postError) {
		error(400, postError.message);
	}

	return { post };
}
