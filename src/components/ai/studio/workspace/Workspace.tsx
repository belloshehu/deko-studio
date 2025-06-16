"use client";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/timedate";
import { WorkspaceType } from "@/types/workspace.types";
import Link from "next/link";

interface WorkspaceProps extends WorkspaceType {}

export default function Workspace({
	_id,
	description,
	user,
	name,
	createdAt,
}: WorkspaceProps) {
	return (
		<article className="flex flex-col gap-2 justify-start items-start p-3 rounded-md w-full bg-white">
			<h3 className="font-semibold ">{name}</h3>
			<p>{description}</p>
			<small>{formatDate(createdAt)}</small>
			<Link
				className="bg-blue-400 p-2 px-3 rounded-md text-white"
				href={`/studio/${_id}/decoration`}
			>
				View workspace
			</Link>
		</article>
	);
}
