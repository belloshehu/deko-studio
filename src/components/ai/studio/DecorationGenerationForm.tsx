"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAxios } from "@/hooks/use-axios";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import FormTextarea from "@/components/form-fields/FormTextarea";
import FormImagesUploader from "@/components/form-fields/FormImagesUploader";
import { toast } from "sonner";
import { LoadingDialog } from "@/components/LoadingDialog";
import {
	decorationGenerationSchema,
	DecorationGenerationSchemaType,
} from "@/schemas/ai/decoration-generation.schema";
import { useState } from "react";
import { GenerateContentResponse } from "@google/genai";
import FormMultiSelect from "@/components/form-fields/FormMultiSelect";
import { NEXT_PUBLIC_PROD_BASE_URL } from "@/config";
import { Loader } from "lucide-react";
import { colors } from "@/constants/colors";
import FormSelect from "@/components/form-fields/FormSelect";
import { eventTypes } from "@/constants/event-types";

export default function DecorationGnerationForm({
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
		resolver: zodResolver(decorationGenerationSchema),
		defaultValues: {},
	});

	const onSubmit = async (data: DecorationGenerationSchemaType) => {
		const formData = new FormData();
		// if image is provided, append it to the form data
		if (data.image && data.image.length > 0) {
			formData.append("image", data.image[0].data_url);
		}
		const colors = data.colors ? data.colors.join(", ") : "any color";
		formData.append(
			"prompt",
			`Generate decoration for the ${data.eventType} event hall. Suggested colors: ${colors}`
		);
		setIsPending(true);
		try {
			const uploadedImage = await publicRequest.post(
				`${NEXT_PUBLIC_PROD_BASE_URL}/api/ai/generate`,
				formData
			);
			setContents(uploadedImage.data.data);

			// eslint-disable @typescript-eslint/no-explicit-any
		} catch (error: any) {
			// eslint-disable @typescript-eslint/no-explicit-any
			toast.error(error?.response?.data?.message || "Error generating image");
		} finally {
			setIsPending(false);
		}
	};

	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = form;

	return (
		<Form {...form}>
			<LoadingDialog loadingText="Decorating event hall ..." open={isPending} />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn(
					"flex flex-col justify-center items-center text-left w-full gap-3",
					className
				)}
			>
				{/* images */}
				<h2>What do you want to decorate today?</h2>
				<div className="relative flex items-center justify-center h-24 p-0 rounded-3xl w-full md:w-1/2 bg-white">
					<div className="absolute bottom-2  left-4 flex flex-row w-fit gap-2 justify-center items-center flex-wrap">
						<FormSelect
							control={control}
							options={eventTypes}
							register={register("eventType")}
							placeholder="Select Event "
						/>
						<FormMultiSelect
							label=""
							name="colors"
							control={control}
							options={colors}
							placeholder={"Select colors"}
							emptyMessage="No events found"
						/>
						<FormImagesUploader
							control={control}
							name="image"
							//   label="Event center Image"
							maxImageSize={1000000}
						/>
					</div>
					<FormTextarea
						control={control}
						name="description"
						id="description"
						placeholder="Type prompt (optional)"
						errorMessage={errors.description?.message}
						className="w-full max-w-full h-24 p-8 pt-3 rounded-3xl border-[1px] flex items-center align-middle bg-white"
					/>

					<Button
						disabled={isPending}
						className={cn(
							"btn btn-primary bg-blue-300 rounded-full right-3 top-8 w-8 h-8 absolute",
							{
								"animate-pulse": isPending,
							}
						)}
						type="submit"
					>
						{isPending ? <Loader className="animate-spin text-white" /> : "Go"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
