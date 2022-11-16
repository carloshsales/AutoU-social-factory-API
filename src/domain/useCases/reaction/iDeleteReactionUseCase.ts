import { ReactionEntity } from "../../Entities/reaction";

export interface IDeleteReactionUseCase {
	execute(id: number): Promise<ReactionEntity>;
}
