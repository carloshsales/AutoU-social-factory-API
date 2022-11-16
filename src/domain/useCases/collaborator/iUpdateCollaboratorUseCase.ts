import { CollaboratorEntity } from "../../Entities/collaborator";

export interface IUpdateCollaboratorUseCase {
	execute(collaborator: CollaboratorEntity): Promise<CollaboratorEntity>;
}
