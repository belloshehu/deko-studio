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
import FormInputField from "@/components/form-fields/FormInput";
import { GenerateContentResponse } from "@google/genai";
import FormMultiSelect from "@/components/form-fields/FormMultiSelect";
import { NEXT_PUBLIC_PROD_BASE_URL } from "@/config";
import { Loader } from "lucide-react";

export default function DecorationGnerationForm({
	onClose,
	setContents,
	className,
	setShowForm,
}: {
	onClose?: () => void;
	setContents: (contents: GenerateContentResponse) => void;
	className?: string;
	setShowForm?: (showForm: boolean) => void;
}) {
	const [isPending, setIsPending] = useState(false);
	const { publicRequest } = useAxios();

	const form = useForm({
		resolver: zodResolver(decorationGenerationSchema),
		defaultValues: {},
	});

	const onSubmit = async (data: DecorationGenerationSchemaType) => {
		// upload the images to cloudinary
		const image = data.image[0].data_url;
		const formData = new FormData();
		formData.append("image", data.image[0].data_url);
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
			setShowForm && setShowForm(false); // hide the form
			console.log(formData);
		} catch (error: any) {
			toast.error(error?.response?.data?.message || "Error generating image");
			console.error("Error generating image", error);
		} finally {
			setIsPending(false);
		}
		// close modal
		onClose && onClose();
	};

	const {
		handleSubmit,
		control,
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
				<div className="flex flex-col md:flex-row w-full gap-2 justify-center items-center flex-wrap">
					<FormInputField
						control={control}
						name="eventType"
						type="text"
						id="eventType"
						placeholder="Event type"
						//errorMessage={errors.eventType?.message}
					/>
					<FormMultiSelect
						label=""
						name="colors"
						control={control}
						options={[
							{ label: "red", value: "red" },
							{ label: "blue", value: "blue" },
							{ label: "green", value: "green" },
						]}
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

				<div className="relative flex items-center justify-center h-fit p-0 rounded-full w-[80%]">
					<FormTextarea
						control={control}
						name="description"
						id="description"
						placeholder="Optional prompt for the event center decoration"
						errorMessage={errors.description?.message}
						className="w-full max-w-full h-full p-4 rounded-full border-[1px] flex items-center align-middle"
					/>

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
						{isPending ? (
							<Loader className="animate-spin text-white" />
						) : (
							"Start"
						)}
					</Button>
				</div>
			</form>
		</Form>
	);
}
