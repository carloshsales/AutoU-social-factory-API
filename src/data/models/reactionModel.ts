import { ReactionEntity } from "../../domain/entities/reaction";
import { ReactionInput } from "../../domain/useCases/reaction/iCreateReationToCollaboratorRegist";

export interface IReactionModel extends ReactionEntity {}
export interface IReactionInputModel extends ReactionInput {}
