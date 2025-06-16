"use client";
import { formatDate } from "@/lib/timedate";
import { WorkspaceType } from "@/types/workspace.types";
import Link from "next/link";
import WorkspaceForm from "./WorkspaceForm";
import { Calendar } from "lucide-react";
import DeleteDialog from "../DeleteDialog";
import { useDeleteWorkspace } from "@/hooks/service-hooks/worspace.hook";
import { useAxios } from "@/hooks/use-axios";

interface WorkspaceProps extends WorkspaceType {}

export default function Workspace({
	_id,
	description,
	user,
	name,
	createdAt,
}: WorkspaceProps) {
	const { mutate, isPending } = useDeleteWorkspace();
	const { protectedRequest } = useAxios();

	const handleDelete = () => {
		mutate({ id: _id, protectedRequest });
	};
	return (
		<article className="flex flex-col gap-2 justify-start items-start p-3 py-5 rounded-md w-full bg-white shadow-sm">
			<h3 className="font-semibold ">{name}</h3>
			<p>{description}</p>
			<div className="bg-gray-100 p-1 px-2 rounded-2xl flex items-center gap-2">
				<Calendar size={20} className="text-blue-500" />
				<small>{formatDate(createdAt)}</small>
			</div>
			<div className="mt-5 flex items-center gap-3 justify-between w-full">
				<Link
					className="bg-blue-400 p-2 px-3 rounded-md text-white"
					href={`/studio/${_id}/decoration`}
				>
					View workspace
				</Link>
				<DeleteDialog
					headerText={"Delete " + name}
					descriptionText="The workspace and its contents will be delete permanently"
					onDelete={handleDelete}
				/>

				<WorkspaceForm defaultValues={{ name, _id, description }} />
			</div>
		</article>
	);
}
