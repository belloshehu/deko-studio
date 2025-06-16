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
import { useCreateWorkspace } from "@/hooks/service-hooks/worspace.hook";
import FormTextarea from "@/components/form-fields/FormTextarea";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "@/components/ui/popover";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Edit2, Edit3 } from "lucide-react";
import {
	DecorationValidationSchema,
	IDecorationDataType,
} from "@/schemas/decoration.schema";
import { useUpdateDecoration } from "@/hooks/service-hooks/decoration.hooks";
import { useRef } from "react";

interface DecorationUpdateFormProps {
	// Define any props you need here
	data: {
		name: string;
		description?: string;
		_id: string;
	};
}
export default function DecorationUpdateForm({
	data: defaultData,
}: DecorationUpdateFormProps) {
	const { mutateAsync, isPending } = useUpdateDecoration();
	const { protectedRequest } = useAxios();
	const closeBtnRef = useRef<HTMLButtonElement>(null);

	const form = useForm({
		resolver: zodResolver(DecorationValidationSchema),

		defaultValues: {
			name: defaultData.name,
			description: defaultData.description || "",
		},
	});

	const onSubmit = async (data: IDecorationDataType) => {
		await mutateAsync({ protectedRequest, payload: data, id: defaultData._id });
		closeBtnRef.current?.click();
	};
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = form;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="rounded-full h-8 w-8 p-1 bg-slate-200">
					<Edit3 className="text-gray-500" />
				</button>
			</DialogTrigger>

			<DialogContent className="w-full md:w-1/2 lg:w-1/3">
				<DialogHeader>
					<DialogTitle>Decoration update</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="rounded-md space-y-5 p-5 w-full"
					>
						<FormInputField
							control={control}
							name="name"
							type="text"
							id="name"
							placeholder="Decoration name"
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
							{isPending ? "Saving..." : "Save"}
						</Button>
					</form>
				</Form>
				<DialogClose asChild>
					<button ref={closeBtnRef} hidden></button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	);
}
