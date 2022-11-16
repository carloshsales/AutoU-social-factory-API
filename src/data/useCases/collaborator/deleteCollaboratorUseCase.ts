import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { IDeleteCollaboratorUseCase } from "../../../domain/useCases/collaborator/iDeleteCollaboratorUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class DeleteCollaboratorUseCase implements IDeleteCollaboratorUseCase {
	constructor(private repository: CollaboratorRepository) {}
	async execute(regist: number): Promise<CollaboratorEntity> {
		try {
			const deleted = await this.repository.deleteCollaborator(regist);
			return deleted;
		} catch (error) {
			throw new Error("Error delete collaborator usecase");
		}
	}
}
