import { ReactionEntity } from "../../Entities/reaction";

export type ReactionInput = {
	reactionName: string;
	description: string;
	point: number;
	collaboratorReceivedRegist: number;
	collaboratorSendedRegist: number;
};

export interface ICreateReactionToCollaboratorRegist {
	execute(reaction: ReactionInput): Promise<ReactionEntity>;
}
