import { ICollaboratorModel } from "../../data/models/collaboratorModel";
import { ICollaboratorRepository } from "../../data/repositories/iColaboratorRepository";

import { prisma } from "../../../prisma/prismaClient";

export class CollaboratorRepository implements ICollaboratorRepository {
	async createCollaborator({
		regist,
		email,
		name,
		last_name,
		departament,
		role,
		image,
		reactions_count,
	}: ICollaboratorModel): Promise<any> {
		try {
			return await prisma.collaborator.create({
				data: {
					regist: regist,
					email: email,
					name: name,
					last_name: last_name,
					departament: departament,
					role: role,
					image: image,
					reactions_count: reactions_count,
				},
			});
			// return newCollaborator;
		} catch (error) {
			throw new Error("Erro ao criar!");
		}
	}

	async updateCollaborator({
		regist,
		email,
		name,
		last_name,
		departament,
		role,
		image,
		reactions_count,
	}: ICollaboratorModel): Promise<ICollaboratorModel> {
		try {
			return await prisma.collaborator.update({
				where: { regist: regist },
				data: {
					regist: regist,
					email: email,
					name: name,
					last_name: last_name,
					departament: departament,
					role: role,
					image: image,
					reactions_count: reactions_count,
				},
				include: {
					reactions_recived: true,
					reactions_sended: true,
				},
			});

			// return {
			// 	regist: collaborator.regist,
			// 	email: collaborator.email,
			// 	name: collaborator.name,
			// 	last_name: collaborator.last_name,
			// 	departament: collaborator.departament,
			// 	role: collaborator.role,
			// 	image: collaborator.image,
			// 	reactions_recived: collaborator.reactions_recived,
			// 	reactions_sended: collaborator.reactions_sended,
			// 	reactions_count: collaborator.reactions_count,
			// };
		} catch (error) {
			throw new Error("Erro ao editar!");
		}
	}

	async deleteCollaborator(regist: number): Promise<ICollaboratorModel> {
		try {
			return await prisma.collaborator.delete({
				where: { regist: regist },
				include: {
					reactions_recived: true,
					reactions_sended: true,
				},
			});
		} catch (error) {
			throw new Error("Falha ao deletar");
		}
	}

	async getAllCollaborators(): Promise<ICollaboratorModel[]> {
		try {
			return await prisma.collaborator.findMany({
				include: {
					reactions_recived: true,
					reactions_sended: true,
				},
			});
		} catch (error) {
			throw new Error("Erro: getAll");
		}
	}

	async getCollaboratorByRegist(regist: number): Promise<ICollaboratorModel> {
		try {
			const collaborator = await prisma.collaborator.findFirst({
				where: {
					regist: regist,
				},
				include: {
					reactions_recived: true,
					reactions_sended: true,
				},
			});

			if (collaborator) {
				return collaborator;
			}

			throw new Error("Colaborador não encontrado!");
		} catch (error) {
			throw new Error("Colaborador não encontrado!");
		}
	}

	async getCollaboratorRank(): Promise<ICollaboratorModel[]> {
		try {
			const collaborators = await prisma.collaborator.findMany({
				orderBy: {
					reactions_count: "asc",
				},
				include: {
					reactions_recived: true,
					reactions_sended: true,
				},
			});
			return collaborators;
		} catch (error) {
			throw new Error("Error");
		}
	}
}
