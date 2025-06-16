import { GetWrokspaceResponseType } from "@/types/workspace.types";
import { AxiosInstance } from "axios";

class WorkspaceServiceAPI {
	static async createWorkspace({
		protectedRequest,
		payload,
	}: {
		protectedRequest: AxiosInstance;
		payload: { name: string; description: string };
	}) {
		const { data } = await protectedRequest.post("/workspaces", payload);
		return data.data;
	}
	static async gtWorkspaces({
		protectedRequest,
	}: {
		protectedRequest: AxiosInstance;
	}) {
		const { data } = await protectedRequest.get("/workspaces");
		return data.data;
	}
	static async getWorkspaceById({
		protectedRequest,
		id,
	}: {
		protectedRequest: AxiosInstance;
		id: string;
	}) {
		const { data } = await protectedRequest.get<GetWrokspaceResponseType>(
			`/workspaces/${id}`
		);
		return data.data;
	}
	static async updateWorkspace({
		protectedRequest,
		payload,
	}: {
		protectedRequest: AxiosInstance;
		payload: { id: string; name: string; description: string };
	}) {
		const { data } = await protectedRequest.patch(
			`/workspaces/${payload.id}`,
			payload
		);
		return data.data;
	}
	static async deleteWorkspace({
		protectedRequest,
		payload,
	}: {
		protectedRequest: AxiosInstance;
		payload: { id: string };
	}) {
		const { data } = await protectedRequest.delete(`/workspaces/${payload.id}`);
		return data.data;
	}
}

export default WorkspaceServiceAPI;
