import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { ICreateCollaboratorUseCase } from "../../../domain/useCases/collaborator/iCreateCollaboratorUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class CreateCollaboratorUseCase implements ICreateCollaboratorUseCase {
	constructor(private repository: CollaboratorRepository) {}
	async execute(
		collaborator: CollaboratorEntity
	): Promise<CollaboratorEntity> {
		try {
			const newCollaborator = await this.repository.createCollaborator(
				collaborator
			);
			return newCollaborator;
		} catch (error) {
			throw new Error("Error execute create usecase");
		}
	}
}
