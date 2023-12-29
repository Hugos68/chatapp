import type { DialogInstance } from '$lib/stores/dialog-store';
import type { Database } from '$lib/supabase/database';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			supabase: SupabaseClient<Database>;
			session: Session | null;
		}
		interface PageState {
			dialogInstances: DialogInstance[];
		}
		// interface Error {}
		// interface Platform {}
	}
}
