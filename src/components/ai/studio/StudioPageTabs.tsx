"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudioDecorationGuide from "./StudioDecorationGuide";
import StudioGenerateDecoration from "./StudioGenerateDecoration";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import {
	useGetWorkspace,
	useGetWorkspaces,
} from "@/hooks/service-hooks/worspace.hook";
import WorkspaceList from "./workspace/WorkspaceList";
import { Folders, Group } from "lucide-react";
import WorkspaceItemsDropdown from "./workspace/WorkspaceItemsDropdown";

// EventTabs component
export default function StudionPageTabs({ className }: { className?: string }) {
	const { id } = useParams();
	const pathname = usePathname();
	const { data, isLoading } = useGetWorkspace(id as string);
	const { data: workspaces, isLoading: isLoadingWorkspaces } =
		useGetWorkspaces();
	return (
		<Tabs
			className={cn(
				"w-full h-full flex flex-col justify-center items-center pt-20",
				className
			)}
			defaultValue="decoration"
		>
			<TabsList className="flex justify-center items-center bg-blue-400 w-full rounded-full">
				<TabsTrigger value="decoration" className="rounded-full">
					<Group className="text-blue-500" />{" "}
					{isLoading ? "Loading..." : data?.name}
				</TabsTrigger>
				<TabsTrigger value="guide" className="rounded-full">
					<Folders /> Workspaces
				</TabsTrigger>
			</TabsList>
			<TabsContent value="decoration" className="w-full">
				<StudioGenerateDecoration />
			</TabsContent>
			<TabsContent value="guide" className="w-full">
				{/* <StudioDecorationGuide /> */}
				<WorkspaceList isLoading={isLoadingWorkspaces} data={workspaces} />
			</TabsContent>
		</Tabs>
	);
}
