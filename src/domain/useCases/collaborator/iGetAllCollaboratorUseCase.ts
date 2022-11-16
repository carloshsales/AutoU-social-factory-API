import { CollaboratorEntity } from "../../Entities/collaborator";

export interface IGetAllCollaboratorUseCase {
	execute(): Promise<CollaboratorEntity[]>;
}
