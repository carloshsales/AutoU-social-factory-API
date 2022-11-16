import { CollaboratorEntity } from "../../Entities/collaborator";

export interface IDeleteCollaboratorUseCase {
	execute(regist: number): Promise<CollaboratorEntity>;
}
