import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { IUpdateCollaboratorUseCase } from "../../../domain/useCases/collaborator/iUpdateCollaboratorUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class UpdateCollaboratorUseCase implements IUpdateCollaboratorUseCase {
	constructor(private repository: CollaboratorRepository) {}

	async execute(
		collaborator: CollaboratorEntity
	): Promise<CollaboratorEntity> {
		try {
			const collaboratorToUpdate =
				await this.repository.updateCollaborator(collaborator);
			return collaboratorToUpdate;
		} catch (error) {
			throw new Error("Error in update collaborator usecase");
		}
	}
}
