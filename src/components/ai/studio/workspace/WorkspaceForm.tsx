"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAxios } from "@/hooks/use-axios";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import FormInputField from "@/components/form-fields/FormInput";
import { LoadingDialog } from "@/components/LoadingDialog";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
	IWorkspaceDataType,
	WorkspaceValidationSchema,
} from "@/schemas/workspace.schema";
import { useCreateWorkspace } from "@/hooks/service-hooks/worspace.hook";
import FormTextarea from "@/components/form-fields/FormTextarea";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "@/components/ui/popover";

export default function WorkspaceForm() {
	const { mutate, isPending } = useCreateWorkspace();
	const { protectedRequest } = useAxios();

	const form = useForm({
		resolver: zodResolver(WorkspaceValidationSchema),

		defaultValues: {
			name: "",
			description: "",
		},
	});

	const onSubmit = async (data: IWorkspaceDataType) => {
		mutate({ protectedRequest, payload: data });
	};
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = form;
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button>Create workspace</Button>
			</PopoverTrigger>

			<PopoverContent className="w-80">
				<Form {...form}>
					<LoadingDialog loadingText="Logging in ..." open={isPending}>
						<DotLottieReact src="animations/auth-lock.lottie" loop autoplay />
					</LoadingDialog>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="rounded-md space-y-5 p-5  w-full"
					>
						<FormInputField
							control={control}
							name="name"
							type="text"
							id="name"
							placeholder="Workspace name"
							errorMessage={errors.name?.message}
						/>

						<FormTextarea
							control={control}
							name="description"
							id="description"
							placeholder="Description"
							errorMessage={errors.description?.message}
							className="w-full max-w-full p-2 border-[1px] flex items-center"
							rows={10}
						/>
						<Button
							disabled={isPending}
							className={cn("btn bg-blue-400 w-full", {
								"animate-pulse": isPending,
							})}
							type="submit"
						>
							{isPending ? "Loading..." : "Create"}
						</Button>
					</form>
				</Form>
			</PopoverContent>
		</Popover>
	);
}
