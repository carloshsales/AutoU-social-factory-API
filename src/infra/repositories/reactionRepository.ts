import {
	IReactionInputModel,
	IReactionModel,
} from "../../data/models/reactionModel";
import { IReactionRepository } from "../../data/repositories/IreactionRepository";

import { prisma } from "../../../prisma/prismaClient";

export class ReactionRepository implements IReactionRepository {
	async createReactionToCollaboratorRegist(
		reaction: IReactionInputModel
	): Promise<IReactionModel> {
		try {
			return await prisma.reaction.create({
				data: {
					point: reaction.point,
					description: reaction.description,
					reactionName: reaction.reactionName,
					collaboratorReceivedRegist:
						reaction.collaboratorReceivedRegist,
					collaboratorSendedRegist: reaction.collaboratorSendedRegist,
				},
			});
		} catch (error) {
			throw new Error("ERROR create reaction");
		}
	}

	async updateReactionById(
		reaction: IReactionModel
	): Promise<IReactionModel> {
		try {
			return await prisma.reaction.update({
				where: { id: reaction.id },
				data: {
					point: reaction.point,
					description: reaction.description,
					reactionName: reaction.reactionName,
					collaboratorReceivedRegist:
						reaction.collaboratorReceivedRegist,
					collaboratorSendedRegist: reaction.collaboratorSendedRegist,
				},
			});
		} catch (error) {
			throw new Error("ERROR update reaction");
		}
	}

	async deleteReaction(id: number): Promise<IReactionModel> {
		try {
			return prisma.reaction.delete({ where: { id: id } });
		} catch (error) {
			throw new Error("ERROR delete reaction");
		}
	}

	async getAllReactionsReceivedToCollaboratorRegist(
		regist: number
	): Promise<IReactionModel[]> {
		try {
			return prisma.reaction.findMany({
				where: { collaboratorReceivedRegist: regist },
			});
		} catch (error) {
			throw new Error("Error get all reactions to regist");
		}
	}

	async getAllReactionsSendedByRegist(
		regist: number
	): Promise<IReactionModel[]> {
		try {
			return prisma.reaction.findMany({
				where: { collaboratorSendedRegist: regist },
			});
		} catch (error) {
			throw new Error("Error get all reactions to regist");
		}
	}
}
