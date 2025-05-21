"use client";

import { useGetWorkspaces } from "@/hooks/service-hooks/worspace.hook";
import WorkspaceList from "./workspace/WorkspaceList";
import { cn } from "@/lib/utils";
import Title from "@/components/Title";
import WorkspaceForm from "./workspace/WorkspaceForm";

export default function StudioPageWrapper({
	className,
}: {
	className?: string;
}) {
	const { isLoading, data } = useGetWorkspaces();

	return (
		<div
			className={cn(
				"flex flex-col items-start justify-start h-full pt-20 gap-5",
				className
			)}
		>
			<div className="flex items-center justify-between w-full">
				<Title
					title="Workspaces"
					description="Workspaces you have created so far"
				/>
				<WorkspaceForm />
			</div>
			<WorkspaceList data={data} isLoading={isLoading} />
		</div>
	);
}
