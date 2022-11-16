import { CollaboratorEntity } from "../../entities/collaborator";

export interface IGetCollaboratorRankUseCase {
	execute(): Promise<CollaboratorEntity[]>;
}
