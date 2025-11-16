import { z } from "zod";

export const WorkspaceValidationSchema = z.object({
	name: z.string().min(5, "Name must be at least 5 characters long"),
	description: z.string(),
});

export type IWorkspaceDataType = z.infer<typeof WorkspaceValidationSchema>;

export const WorkspaceInviteValidationSchema = z.object({
	email: z.string().email(),
	message: z.string(),
});

export type IWorkspaceInviteDataType = z.infer<
	typeof WorkspaceInviteValidationSchema
>;

// // Schema for workspace invitation
export const WorkspaceInvitationValidationSchema = z.object({
	name: z.string().min(5, "Name must be at least 5 characters long"),
	message: z.string().min(5, "Message must be at least 5 characters long"),
	receiverEmail: z.string().email("Invalid email format"),
});
export type IWorkspaceInvitationDataType = z.infer<
	typeof WorkspaceInvitationValidationSchema
>;
