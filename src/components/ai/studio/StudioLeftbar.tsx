"use client";
import { NavButton } from "@/components/NavButton";
import { studioNavItems } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudioLeftbar() {
	const pathname = usePathname();
	return (
		<aside className="flex flex-col gap-4 items-start justify-start  mt-24  min-h-[80vh] h-fit p-5 pt-20 rounded-3xl shadow-sm m-3 w-fit">
			{studioNavItems.map((item) => (
				<NavButton
					pathname={item.path}
					currentPathname={pathname}
					className="bg-slate-100 capitalize w-full text-left"
				>
					<Link href={item.path}>{item.name}</Link>
				</NavButton>
			))}
		</aside>
	);
}
