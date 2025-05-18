import WorkspaceServiceAPI from "@/services/workspace.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "../use-axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useGetWorkspaces = () => {
	const { protectedRequest } = useAxios();
	return useQuery({
		queryFn: () => WorkspaceServiceAPI.gtWorkspaces({ protectedRequest }),
		queryKey: ["workspaces"],
	});
};

// create workspace
export const useCreateWorkspace = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: WorkspaceServiceAPI.createWorkspace,
		onSuccess: () => {
			toast.success("Workspace successfully");
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
		},
		onError: (error: AxiosError<{ message: string }>) => {
			toast.error(error.response?.data.message || "Failed to create workspace");
		},
	});
};

// get workspace hook

export const useGetWorkspace = (workspaceId: string) => {
	const { protectedRequest } = useAxios();
	return useQuery({
		queryFn: () =>
			WorkspaceServiceAPI.getWorkspaceById({
				protectedRequest,
				id: workspaceId,
			}),
		queryKey: ["workspace", workspaceId],
	});
};
