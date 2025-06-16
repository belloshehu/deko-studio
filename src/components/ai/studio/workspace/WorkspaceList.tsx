import { WorkspaceType } from "@/types/workspace.types";
import Workspace from "@/components/ai/studio/workspace/Workspace";
import NoContent from "@/components/NoContent";
import { Loader } from "lucide-react";

export default function WorkspaceList({
	data,
	isLoading,
}: {
	data: WorkspaceType[];
	isLoading: boolean;
}) {
	if (isLoading)
		return (
			<div className="flex justify-center items-center w-full h-full">
				<Loader className="animate-spin" />
			</div>
		);
	if (!data || data.length === 0)
		return (
			<div className="flex justify-center items-center w-full h-full">
				<NoContent message="No workspace" />;
			</div>
		);

	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full overflow-y-auto max-h-screen">
			{data.map((workspace) => (
				<Workspace {...workspace} key={workspace._id} />
			))}
		</ul>
	);
}
