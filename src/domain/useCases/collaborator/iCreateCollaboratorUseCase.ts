import { CollaboratorEntity } from "../../Entities/collaborator";

export interface ICreateCollaboratorUseCase {
	execute(collaborator: CollaboratorEntity): Promise<CollaboratorEntity>;
}
