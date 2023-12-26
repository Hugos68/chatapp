import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseAuthClientOptions;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			supabase: SupabaseClient;
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}
