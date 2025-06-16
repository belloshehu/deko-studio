"use client";
import { NavButton } from "@/components/NavButton";
import { studioNavItems } from "@/constants/navigation";
import { useGetWorkspace } from "@/hooks/service-hooks/worspace.hook";
import { cn } from "@/lib/utils";
import { FileWarning, Flower, Folder, Loader, Users } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function StudioLeftbar() {
	const pathname = usePathname();

	const { id } = useParams();
	const { data, isLoading } = useGetWorkspace(id as string);

	const renderIcon = (name: string) => {
		switch (name.toLowerCase()) {
			case "decoration":
				return <Flower className="text-blue-500" />;
			case "members":
				return <Users className="text-blue-500" />;
			case "saved":
				return <Folder className="text-blue-500" />;
			default:
				return <FileWarning className="text-red-400" />;
		}
	};

	const renderNavItems = () => {
		if (pathname === "/studio" && !id) return null;
		return (
			<>
				{studioNavItems.map((item) => {
					return (
						<Link href={`/studio/${id}/${item.path}`} className="w-full">
							<NavButton
								pathname={`/studio/${id}${item.path}`}
								currentPathname={pathname}
								className="bg-slate-100 capitalize w-full text-left justify-start"
								key={item.path}
							>
								{renderIcon(item.name)} {item.name}
							</NavButton>
						</Link>
					);
				})}
			</>
		);
	};

	return (
		<aside className="flex flex-col gap-4 items-start justify-start  mt-24  min-h-[80vh] bg-blue-400 h-fit p-5 pt-20 rounded-3xl border-[1px]   w-full ">
			{renderNavItems()}
			<div
				className={cn(" w-full cursor-pointer ", {
					"mt-auto": pathname !== "/studio",
				})}
			>
				{isLoading ? (
					<Loader className="animate-spin" />
				) : (
					<div className="flex items-center gap-2">
						<Folder /> <small>{data?.name}</small>
					</div>
				)}
				<Link href={`/studio`} className="w-full">
					<NavButton
						pathname={"/studio"}
						currentPathname={"/studio"}
						className={cn("bg-slate-100 capitalize w-full text-left ", {
							"mt-auto": pathname !== "/studio",
						})}
					>
						Workspaces
					</NavButton>
				</Link>
			</div>
		</aside>
	);
}
