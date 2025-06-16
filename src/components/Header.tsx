"use client";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import Brand from "@/components/Brand";
import { cn, isActivePath } from "@/lib/utils";
import NavigationDrawer from "./NavigationDrawer";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navigation";
import useSession from "@/lib/session/use-session";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import { NavButton } from "./NavButton";

export default function Header() {
	const isMobile = useIsMobile();
	const pathname = usePathname();
	const { session } = useSession();

	if (pathname === "/login" || pathname === "/signup") return null;
	return (
		<header
			className={cn(
				"flex items-center justify-between p-0 px-5 gap-10 shadow-none md:px-10 fixed left-0 z-50 bg-white w-screen",
				{ "shadow-none": isMobile }
			)}
		>
			<Brand />

			<nav className="items-center gap-5 hidden md:flex flex-1">
				{navItems.map(({ name, path }) => (
					<Link
						key={path}
						className={cn("hover:bg-white p-2 rounded-md", {
							"bg-blue-100 rounded-sm py-2 px-5": isActivePath(path, pathname),
						})}
						href={path}
					>
						{name}
					</Link>
				))}
			</nav>

			<NavButton
				pathname="/trial"
				currentPathname={pathname}
				className="bg-blue-500 text-white"
			>
				<Link href="/trial">Try Studio now</Link>
			</NavButton>
			{!isMobile &&
				(session?.isLoggedIn ? (
					<ProfileDropdownMenu />
				) : (
					<Link href="/login">
						<Button variant={"default"} size={"lg"} className="bg-blue-500">
							Login
						</Button>
					</Link>
				))}
			{isMobile && (
				// if the user is on mobile, show the main drawer
				// user can open the user drawer from the main drawer
				<NavigationDrawer />
			)}
		</header>
	);
}
