import { error, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	createPost: async ({ locals: { supabase } }) => {
		const { data: posts, error: createPostError } = await supabase.rpc('create_post');

		if (createPostError) {
			error(400, createPostError.message);
		}

		redirect(303, `/posts/${posts[0].id}`);
	}
};
