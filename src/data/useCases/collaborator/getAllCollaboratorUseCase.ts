import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { IGetAllCollaboratorUseCase } from "../../../domain/useCases/collaborator/iGetAllCollaboratorUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class GetAllCollaboratorsUseCase implements IGetAllCollaboratorUseCase {
	constructor(private repository: CollaboratorRepository) {}

	async execute(): Promise<CollaboratorEntity[]> {
		try {
			return await this.repository.getAllCollaborators();
		} catch (error) {
			throw new Error("ERROR in get all collaborators usecase");
		}
	}
}
