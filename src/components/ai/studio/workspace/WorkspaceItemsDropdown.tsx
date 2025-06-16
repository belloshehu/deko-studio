import { useWorkspaceMenu } from "@/hooks/use-workspace-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useGetWorkspace } from "@/hooks/service-hooks/worspace.hook";
import { Separator } from "@/components/ui/separator";
import { WorkspaceType } from "@/types/workspace.types";

export default function WorkspaceItemsDropdown({
	pathname,
	workspaceId,
}: {
	pathname: string;
	workspaceId?: string;
}) {
	const { data, isLoading } = useGetWorkspace(workspaceId as string);
	const { renderMenuItems, renderWorkspaceLink } = useWorkspaceMenu({
		pathname,
		id: workspaceId,
		isloadingWorkspace: isLoading,
		isMenu: false,
		workspace: data as WorkspaceType,
	});
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="absolute top-14 left-0">
				<Menu className="text-blue-500" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className=" p-5 flex flex-col gap-2">
				{renderMenuItems && renderMenuItems()}
				<Separator className="mt-10" />
				{renderWorkspaceLink && renderWorkspaceLink()}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
