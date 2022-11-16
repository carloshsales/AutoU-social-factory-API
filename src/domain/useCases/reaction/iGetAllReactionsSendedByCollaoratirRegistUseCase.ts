import { ReactionEntity } from "../../Entities/reaction";

export interface IGetAllSendedReactionsByRegistUseCase {
	execute(regist: number): Promise<ReactionEntity>;
}
