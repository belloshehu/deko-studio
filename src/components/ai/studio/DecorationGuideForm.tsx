"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAxios } from "@/hooks/use-axios";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import FormTextarea from "@/components/form-fields/FormTextarea";
import { toast } from "sonner";
import { LoadingDialog } from "@/components/LoadingDialog";
import {
	DecorationGuideSchemaType,
	decorationGuideSchema,
} from "@/schemas/ai/decoration-guide.schema";
import { useState } from "react";
import { GenerateContentResponse } from "@google/genai";
import { NEXT_PUBLIC_PROD_BASE_URL } from "@/config";
import { Plus } from "lucide-react";

export default function EventCenterDecorationForm({
	setContents,
	className,
}: {
	onClose?: () => void;
	setContents: (contents: GenerateContentResponse) => void;
	className?: string;
}) {
	const [isPending, setIsPending] = useState(false);
	const { publicRequest } = useAxios();

	const form = useForm({
		resolver: zodResolver(decorationGuideSchema),
		defaultValues: {},
	});

	const onSubmit = async (data: DecorationGuideSchemaType) => {
		// upload the images to cloudinary
		setIsPending(true);
		try {
			const colors = data.colors ? data.colors.join(", ") : "any color";
			const uploadedImage = await publicRequest.post(
				`${NEXT_PUBLIC_PROD_BASE_URL}/api/ai`,
				{
					prompt: `Generate decoration for the ${data.eventType} event hall. Suggested colors: ${colors}`,
				}
			);
			setContents(uploadedImage.data.data);
		} catch (error: any) {
			// eslint-disable @typescript-eslint/no-explicit-any
			toast.error(error?.response?.data?.message || "Error generating image");
			console.error("Error generating image", error);
		} finally {
			setIsPending(false);
		}
	};

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = form;

	return (
		<Form {...form}>
			<LoadingDialog loadingText="Generating decoration ..." open={isPending} />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn(
					"flex justify-center items-center text-left w-full self-start",
					className
				)}
			>
				<div className="relative flex items-center justify-center  h-fit p-0 rounded-full w-[80%] mt-14 ">
					<FormTextarea
						control={control}
						name="description"
						id="description"
						placeholder="Optional prompt for the event center decoration"
						errorMessage={errors.description?.message}
						className="w-full max-w-full h-full p-2 rounded-full border-[1px] flex items-center"
					/>
					<Button
						size={"icon"}
						variant={"ghost"}
						className="rounded-full absolute top-4 right-16"
					>
						<Plus className="w-4 h-4 bg-slate-200 rounded-full"></Plus>
					</Button>
					<Button
						disabled={isPending}
						className={cn(
							"btn btn-primary bg-blue-300 rounded-full right-2 top-4 absolute",
							{
								"animate-pulse": isPending,
							}
						)}
						type="submit"
					>
						Start
						{/* {isPending ? "Generating decorations... " : "Generate Decoration"} */}
					</Button>
				</div>
			</form>
		</Form>
	);
}
