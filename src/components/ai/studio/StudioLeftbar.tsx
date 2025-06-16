"use client";

import { useGetWorkspace } from "@/hooks/service-hooks/worspace.hook";
import { useWorkspaceMenu } from "@/hooks/use-workspace-menu";
import { WorkspaceType } from "@/types/workspace.types";
import { useParams, usePathname } from "next/navigation";

export default function StudioLeftbar() {
	const pathname = usePathname();

	const { id } = useParams();
	const { data, isLoading } = useGetWorkspace(id as string);
	const { renderMenuItems, renderWorkspaceLink } = useWorkspaceMenu({
		pathname,
		workspace: data as WorkspaceType,
		isloadingWorkspace: isLoading,
		isMenu: true,
		id: id as string,
		buttonStyle: "bg-white",
		onClick: () => {},
		className: "mt-auto",
	});

	return (
		<aside className="hidden md:flex flex-col gap-4 items-start justify-start  mt-24  min-h-[80vh] bg-blue-400 h-fit p-5 pt-20 rounded-3xl border-[1px]   w-full ">
			{renderMenuItems && renderMenuItems()}
			{renderWorkspaceLink && renderWorkspaceLink()}
		</aside>
	);
}
