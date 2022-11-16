import { ReactionEntity } from "../../Entities/reaction";

export interface IGetAllReactionsReceivedByCollaboratorRegistUseCase {
	execute(regist: number): Promise<ReactionEntity[]>;
}
