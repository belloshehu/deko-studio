import { NavButton } from "@/components/NavButton";
import { studioNavItems } from "@/constants/navigation";
import { useRenderIcon } from "./use-render-icon";
import { iconType } from "@/types/icon.types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Folder, Loader } from "lucide-react";
import { WorkspaceType } from "@/types/workspace.types";
import { cn } from "@/lib/utils";

export const useWorkspaceMenu = ({
	pathname,
	id,
	isMenu = false,
	isloadingWorkspace,
	workspace,
	buttonStyle,
	onClick,
}: {
	pathname: string;
	id?: null | string;
	isMenu: boolean;
	isloadingWorkspace: boolean;
	workspace: WorkspaceType;
	buttonStyle?: string;
	onClick?: () => void;
}) => {
	const renderIcon = useRenderIcon();
	const renderWorkspaceLink = () => {
		return (
			<div
				className={cn(" w-full cursor-pointer ", {
					"": pathname !== "/studio",
				})}
			>
				{/* Only visible inside a workspace */}
				{id ? (
					isloadingWorkspace ? (
						<Loader className="animate-spin" />
					) : (
						<div className="flex items-center gap-2">
							{workspace && (
								<>
									<Folder /> <small>{workspace?.name}</small>
								</>
							)}
						</div>
					)
				) : null}
				<Link href={`/studio`} className="w-full" onClick={onClick}>
					<NavButton
						pathname={"/studio"}
						currentPathname={"/studio"}
						className={cn(
							"bg-slate-100 capitalize w-full text-left ",
							{
								"mt-auto": pathname !== "/studio",
							},
							buttonStyle
						)}
					>
						Workspaces
					</NavButton>
				</Link>
			</div>
		);
	};
	const renderMenuItems = () => {
		if (pathname === "/studio" && !id) return null;
		return (
			<>
				{studioNavItems.map((item) => {
					if (isMenu) {
						<DropdownMenuItem key={item.name}>
							return (
							<Link
								href={`/studio/${id}/${item.path}`}
								className="w-full"
								onClick={onClick}
							>
								<NavButton
									pathname={`/studio/${id}${item.path}`}
									currentPathname={pathname}
									className={cn(
										"bg-slate-100 capitalize w-full text-left justify-start",
										buttonStyle
									)}
									key={item.path}
								>
									{renderIcon(item.name as iconType)} {item.name}
								</NavButton>
							</Link>
							);
						</DropdownMenuItem>;
					}
					return (
						<Link
							href={`/studio/${id}/${item.path}`}
							className="w-full"
							key={item.name}
							onClick={onClick}
						>
							<NavButton
								pathname={`/studio/${id}${item.path}`}
								currentPathname={pathname}
								className={cn(
									"bg-slate-100 capitalize w-full text-left justify-start",
									buttonStyle
								)}
								key={item.path}
							>
								{renderIcon(item.name as iconType)} {item.name}
							</NavButton>
						</Link>
					);
				})}
			</>
		);
	};
	return { renderMenuItems, renderWorkspaceLink };
};
