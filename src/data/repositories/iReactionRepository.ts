import { IReactionInputModel, IReactionModel } from "../models/reactionModel";

export interface IReactionRepository {
	createReactionToCollaboratorRegist(
		reaction: IReactionInputModel
	): Promise<IReactionModel>;

	updateReactionById(reaction: IReactionModel): Promise<IReactionModel>;

	deleteReaction(id: number): Promise<IReactionModel>;

	getAllReactionsReceivedToCollaboratorRegist(
		regist: number
	): Promise<IReactionModel[]>;

	getAllReactionsSendedByRegist(regist: number): Promise<IReactionModel[]>;
}
