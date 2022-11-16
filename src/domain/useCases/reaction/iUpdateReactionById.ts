import { ReactionEntity } from "../../Entities/reaction";

export interface IUpdateReactionById {
	execute(id: number): Promise<ReactionEntity>;
}
