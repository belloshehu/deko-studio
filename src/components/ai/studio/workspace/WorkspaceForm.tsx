"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAxios } from "@/hooks/use-axios";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import FormInputField from "@/components/form-fields/FormInput";
import {
	IWorkspaceDataType,
	WorkspaceValidationSchema,
} from "@/schemas/workspace.schema";
import {
	useCreateWorkspace,
	useUpdateWorkspace,
} from "@/hooks/service-hooks/worspace.hook";
import FormTextarea from "@/components/form-fields/FormTextarea";
import { Edit3 } from "lucide-react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";

interface WorkspaceFormProps {
	// Define any props you need here
	defaultValues?: {
		name?: string;
		description?: string;
		_id?: string;
	} | null;
}
export default function WorkspaceForm({
	defaultValues = null,
}: WorkspaceFormProps) {
	const { mutateAsync, isPending } = useCreateWorkspace();
	const { mutateAsync: updateWorkspace, isPending: isUpdating } =
		useUpdateWorkspace();
	const { protectedRequest } = useAxios();
	const closeBtnRef = useRef<HTMLButtonElement>(null);

	const form = useForm({
		resolver: zodResolver(WorkspaceValidationSchema),
		defaultValues: {
			name: defaultValues?.name || "",
			description: defaultValues?.description || "",
		},
	});

	const onSubmit = async (data: IWorkspaceDataType) => {
		if (defaultValues) {
			await updateWorkspace({
				protectedRequest,
				payload: data,
				id: defaultValues._id as string,
			});
		} else {
			await mutateAsync({ protectedRequest, payload: data });
		}
		if (closeBtnRef.current) {
			closeBtnRef.current.click();
		}
	};
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = form;
	return (
		<Dialog>
			<DialogTrigger asChild>
				{defaultValues?._id ? (
					<button className="rounded-full h-8 w-8 p-1 bg-slate-200">
						<Edit3 className="text-gray-500" />
					</button>
				) : (
					<button>Create</button>
				)}
			</DialogTrigger>

			<DialogContent className="w-full md:w-1/2 lg:w-1/3">
				<DialogHeader>
					<DialogTitle>
						Workspace {defaultValues?._id ? "update" : "create"}
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
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
						{defaultValues?._id ? (
							<Button
								disabled={isPending}
								className={cn("btn bg-blue-400 w-full", {
									"animate-pulse": isUpdating,
								})}
								type="submit"
							>
								{isUpdating ? "Updating" : "Update"}
							</Button>
						) : (
							<Button
								disabled={isPending}
								className={cn("btn bg-blue-400 w-full", {
									"animate-pulse": isPending,
								})}
								type="submit"
							>
								{isPending ? "Saving" : "Save"}
							</Button>
						)}
					</form>
				</Form>
				<DialogClose asChild>
					<button ref={closeBtnRef} hidden></button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
}
