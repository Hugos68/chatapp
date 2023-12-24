import { sequence } from '@sveltejs/kit/hooks';
import { authGuards } from '$lib/hooks/auth-guards';
import { supabase } from '$lib/hooks/supabase';

export const handle = sequence(supabase, authGuards);
