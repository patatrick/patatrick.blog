export interface Menu
{
	id: number;
	name: string;
	slug: string;
	icon: string;
}
export interface Entried
{
	name: string;
	user_description: string | null;
	avatar: string;
	occupation: string | null;
	hashtag: string[] | number[];
}
export interface Hashtag
{
	id: number;
	name: string;
    create_by: number;
}
export interface Replies
{
	id: number;
	id_entried: number;
	id_user: number;
	comment: string;
	joined: string;
}
export interface User
{
	id: number;
	named: string;
	description: string | null;
	occupation: string | null;
	avatard: string;
	emaild: string;
	auth0_subd: string;
	typed: string;
	joined: string;
}
export interface UserReplies
{
	id: number;
	id_user: number;
	id_replies: number;
	comment: string;
	joined: string;
}