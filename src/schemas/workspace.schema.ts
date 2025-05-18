import { z } from "zod";

export const WorkspaceValidationSchema = z.object({
	name: z.string().min(5, "Name must be at least 5 characters long"),
	description: z.string(),
});

export type IWorkspaceDataType = z.infer<typeof WorkspaceValidationSchema>;
