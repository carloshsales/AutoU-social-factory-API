import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { IGetCollaboratorByRegistUseCase } from "../../../domain/useCases/collaborator/iGetCollaboratorByRegistUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class GetCollaboratorByRegistUseCase
	implements IGetCollaboratorByRegistUseCase
{
	constructor(private repository: CollaboratorRepository) {}
	async execute(regist: number): Promise<CollaboratorEntity> {
		try {
			const collaborator = await this.repository.getCollaboratorByRegist(
				regist
			);
			return collaborator;
		} catch (error) {
			throw new Error("ERROR in get collaborator by regist usecase");
		}
	}
}
