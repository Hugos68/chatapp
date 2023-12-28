import type { Database } from './database';

export type Table<TableName extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][TableName]['Row'];
