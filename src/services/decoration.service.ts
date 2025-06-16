import {
	DecorationPayloadType,
	GetDecorationListResponseType,
	GetDecorationResponseType,
} from "@/types/decoration.types";
import { AxiosInstance } from "axios";

class DecorationServiceAPI {
	static async getDecorationById({
		protectedRequest,
		decorationId,
	}: {
		protectedRequest: AxiosInstance;
		decorationId: string;
	}) {
		const { data } = await protectedRequest.get<GetDecorationResponseType>(
			`/api/decorations/${decorationId}`
		);
		return data.data;
	}

	static async getDecorations({
		protectedRequest,
	}: {
		protectedRequest: AxiosInstance;
	}) {
		const { data } = await protectedRequest.get<GetDecorationListResponseType>(
			`/decorations`
		);
		return data.data;
	}

	// save new decoration
	static async saveDecoration({
		protectedRequest,
		payload,
	}: {
		protectedRequest: AxiosInstance;
		payload: DecorationPayloadType;
	}) {
		const { data } = await protectedRequest.post<GetDecorationResponseType>(
			`/decorations`,
			payload
		);
		return data.data;
	}

	// delete decoration
	static async deleteDecoration({
		protectedRequest,
		decorationId,
	}: {
		protectedRequest: AxiosInstance;
		decorationId: string;
	}) {
		const { data } = await protectedRequest.delete(
			`/decorations/${decorationId}`
		);
		return data.data;
	}

	// update decoration
	static async updateDecoration({
		protectedRequest,
		payload,
		id,
	}: {
		protectedRequest: AxiosInstance;
		payload: { name: string; description: string };
		id: string;
	}) {
		const { data } = await protectedRequest.patch<GetDecorationResponseType>(
			`/decorations/${id}`,
			payload
		);
		return data.data;
	}
}

export default DecorationServiceAPI;
