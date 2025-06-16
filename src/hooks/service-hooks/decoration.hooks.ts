import DecorationServiceAPI from "@/services/decoration.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAxios } from "../use-axios";

export const useSaveDecoration = (workspaceId: string) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: DecorationServiceAPI.saveDecoration,
		onSuccess: () => {
			toast.success("Decoration saved successfully");
			queryClient.invalidateQueries({ queryKey: ["decorations"] });
		},
		onError: (error: any) => {
			toast.error("Failed to save the decoration");
		},
	});
};

export const useGetDecorationById = (workspaceId: string, id: string) => {
	const { protectedRequest } = useAxios();
	return useQuery({
		queryFn: async () =>
			DecorationServiceAPI.getDecorationById({
				protectedRequest,
				decorationId: id,
			}),
		queryKey: ["decorations", workspaceId],
	});
};

export const useGetDecorations = (workspaceId: string) => {
	const { protectedRequest } = useAxios();
	return useQuery({
		queryFn: async () =>
			DecorationServiceAPI.getDecorations({ protectedRequest }),
		queryKey: ["decorations", workspaceId],
	});
};

export const useDeleteDecoration = () => {
	const queryClient = useQueryClient();
	const { protectedRequest } = useAxios();
	return useMutation({
		mutationFn: DecorationServiceAPI.deleteDecoration,
		onSuccess: () => {
			toast.success("Decoration deleted successfully");
			queryClient.invalidateQueries({ queryKey: ["decorations"] });
		},
		onError: (error: any) => {
			toast.error("Failed to delete the decoration");
		},
	});
};

export const useUpdateDecoration = () => {
	const queryClient = useQueryClient();
	const { protectedRequest } = useAxios();
	return useMutation({
		mutationFn: DecorationServiceAPI.updateDecoration,
		onSuccess: () => {
			toast.success("Decoration updated successfully");
			queryClient.invalidateQueries({ queryKey: ["decorations"] });
		},
		onError: (error: any) => {
			toast.error("Failed to update the decoration");
		},
	});
};
