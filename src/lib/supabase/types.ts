import type { Tables } from './database';

export type Message = Tables<'messages'>;
export type Profile = Tables<'profiles'>;
export type Conversation = Tables<'conversations'>;
export type ConversationUser = Tables<'conversation_users'>;

export type MessageWithProfile = Message & { profile: Profile };
export type ConversationWithMessages = Conversation & { messages: Message[] };
export type ConversationWithMessagesWithProfile = Conversation & { messages: MessageWithProfile[] };
