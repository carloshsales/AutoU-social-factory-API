import { Request, Response } from "express";

export class CollaboratorController {
	constructor(
		private createCollaboratorUseCase: any,
		private updateCollaboratorUseCase: any,
		private deleteCollaboratorUseCase: any,
		private getAllCollaboratorUseCase: any,
		private getCollaboratorByRegistUseCase: any,
		private getCollaboratorRankUseCase: any
	) {}

	createCollaboratorController(
		req: Request,
		res: Response
	): Promise<Response> {
		try {
			const newCollaborator = req.body;
			return this.createCollaboratorUseCase.execute(newCollaborator);
		} catch (error) {
			throw new Error("Error controller create");
		}
	}
}
