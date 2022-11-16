export enum ReactName {
	LIKE = "LIKE",
	ORGULHO = "ORGULHO",
	EXCELENTE_TRABALHO = "EXCELENTE TRABALHO",
	COLABORACAO = "COLABORACAO",
}

export type ReactionEntity = {
	id: number;
	reactionName: string;
	description: string;
	point: number;
	collaboratorReceivedRegist: number;
	collaboratorSendedRegist: number;
};
