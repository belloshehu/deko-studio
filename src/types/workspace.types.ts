import { DecorationType } from "./decoration.types";
import { ResponseType } from "./response.types";
import { UserType } from "./user.types";

export interface WorkspaceType {
	_id: string;
	description: string;
	user: UserType;
	name: string;
	createdAt: string;
	updatedAt: string;
	decorations?: DecorationType[]; // Array of decoration IDs
}

export type GetWrokspaceResponseType = ResponseType<WorkspaceType>;

export type GetWrokspaceListResponseType = ResponseType<WorkspaceType[]>;
