"use client";
import { NavButton } from "@/components/NavButton";
import { studioNavItems } from "@/constants/navigation";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function StudioLeftbar() {
	const pathname = usePathname();

	const { id } = useParams();
	console.log(pathname);

	const renderNavItems = () => {
		if (pathname === "/studio" && !id)
			return (
				<NavButton
					pathname={"/studio"}
					currentPathname={"/studio"}
					className="bg-slate-100 capitalize w-full text-left"
				>
					<Link href={`/studio`}>Workspaces</Link>
				</NavButton>
			);
		return (
			<>
				<NavButton
					pathname={"/"}
					currentPathname={"/"}
					className="bg-slate-100 capitalize w-full text-left"
				>
					<Link href={`/studio`}>Workspaces</Link>
				</NavButton>
				{studioNavItems.map((item) => {
					console.log(`/studio/${id}/${item.path}`, pathname);
					return (
						<NavButton
							pathname={`/studio/${id}/${item.path}`}
							currentPathname={pathname}
							className="bg-slate-100 capitalize w-full text-left"
							key={item.path}
						>
							<Link href={`/studio/${id}/${item.path}`}>{item.name}</Link>
						</NavButton>
					);
				})}
			</>
		);
	};

	return (
		<aside className="flex flex-col gap-4 items-start justify-start  mt-24  min-h-[80vh] h-fit p-5 pt-20 rounded-3xl border-[1px]   w-full ">
			{renderNavItems()}
		</aside>
	);
}
