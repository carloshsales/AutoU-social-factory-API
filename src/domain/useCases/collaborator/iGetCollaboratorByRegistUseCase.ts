import { CollaboratorEntity } from "../../Entities/collaborator";

export interface IGetCollaboratorByRegistUseCase {
	execute(regist: number): Promise<CollaboratorEntity>;
}
