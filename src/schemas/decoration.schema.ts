import { z } from "zod";

export const DecorationValidationSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters long"),
	description: z
		.string()
		.min(5, "Description must be at least 5 characters long"),
});

export type IDecorationDataType = z.infer<typeof DecorationValidationSchema>;
