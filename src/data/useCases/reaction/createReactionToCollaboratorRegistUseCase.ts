import { ReactionEntity } from "../../../domain/entities/reaction";
import {
	ICreateReactionToCollaboratorRegist,
	ReactionInput,
} from "../../../domain/useCases/reaction/iCreateReationToCollaboratorRegistUseCase";
import { ReactionRepository } from "../../../infra/repositories/reactionRepository";

export class CreateReactionUseCase
	implements ICreateReactionToCollaboratorRegist
{
	constructor(private repository: ReactionRepository) {}

	async execute(reaction: ReactionInput): Promise<ReactionEntity> {
		try {
			const newReaction =
				await this.repository.createReactionToCollaboratorRegist(
					reaction
				);
			return newReaction;
		} catch (error) {
			throw new Error("ERROR in create reaction usecase");
		}
	}
}
