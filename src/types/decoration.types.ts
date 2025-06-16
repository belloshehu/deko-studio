import { ResponseType } from "./response.types";

export interface DecorationPayloadType {
	workspace: string;
	name: string;
	description: string;
	image: string;
}

export interface DecorationType {
	_id: string;
	name: string;
	description: string;
	image: string;
	workspace: string;
	createdAt: string;
	updatedAt: string;
	createdBy: string;
	updatedBy: string;
}

export interface GetDecorationResponseType
	extends ResponseType<DecorationType> {
	data: DecorationType;
}

export interface GetDecorationListResponseType
	extends ResponseType<DecorationType[]> {
	data: DecorationType[];
}
