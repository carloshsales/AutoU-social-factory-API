import { CollaboratorEntity } from "../../../domain/entities/collaborator";
import { IGetCollaboratorRankUseCase } from "../../../domain/useCases/collaborator/iGetCollaboratorRankUseCase";
import { CollaboratorRepository } from "../../../infra/repositories/collaboratorRepository";

export class GetCollaboratorRankUseCase implements IGetCollaboratorRankUseCase {
	constructor(private repository: CollaboratorRepository) {}

	async execute(): Promise<CollaboratorEntity[]> {
		try {
			return await this.repository.getCollaboratorRank();
		} catch (error) {
			throw new Error("ERROR in get collaborator rank usecase");
		}
	}
}
