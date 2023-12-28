import type { Database } from './database';

export type Table = keyof Database['public']['Tables'];

export type ExtractTableType<TableName extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][TableName]['Row'];
