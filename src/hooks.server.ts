import { sequence } from '@sveltejs/kit/hooks';
import { supabase } from '$lib/hooks/supabase';
import { authGuards } from '$lib/hooks/auth-guards';
import { lang } from '$lib/hooks/lang';

export const handle = sequence(supabase, authGuards, lang);
