import { ResponseType } from "./response.types";
import { UserType } from "./user.types";

export interface WorkspaceType {
	_id: string;
	description: string;
	user: UserType;
	name: string;
	createdAt: string;
	updatedAt: string;
}

export type GetWrokspaceResponseType = ResponseType<WorkspaceType>;

export type GetWrokspaceListResponseType = ResponseType<WorkspaceType[]>;
