import { ReactionEntity } from "./reaction";

export type CollaboratorEntity = {
	regist: number;
	email: string;
	name: string;
	last_name: string;
	departament: string;
	role: string;
	image: string;
	reactions_recived: ReactionEntity[];
	reactions_sended: ReactionEntity[];
	reactions_count: number;
};
