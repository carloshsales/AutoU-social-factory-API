import { ICollaboratorModel } from "../models/collaboratorModel";

export interface ICollaboratorRepository {
	createCollaborator(
		collaborator: ICollaboratorModel
	): Promise<ICollaboratorModel>;

	updateCollaborator(
		collaborator: ICollaboratorModel
	): Promise<ICollaboratorModel>;

	deleteCollaborator(regist: number): Promise<ICollaboratorModel>;

	getAllCollaborators(): Promise<ICollaboratorModel[]>;

	getCollaboratorByRegist(regist: number): Promise<ICollaboratorModel>;

	getCollaboratorRank(): Promise<ICollaboratorModel[]>;
}
