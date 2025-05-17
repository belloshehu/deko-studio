import { NavigationItemType } from "@/types/navigation.types";

export const navItems: NavigationItemType[] = [
	{ path: "#features", name: "Features" },
	{ path: "#pricing", name: "Pricing" },
	{ path: "#contact-us", name: "Contact" },
	{ path: "/studio", name: "Studio" },
];

export const adminNavItems: NavigationItemType[] = [
	{
		name: "Studio",
		path: "/studio",
		active: true,
	},
	{
		name: "Users",
		path: "/users",
		active: true,
	},
	{
		name: "Settings",
		path: "/studio/settings",
		active: false,
	},
	{
		name: "Messages",
		path: "/studio/messages",
		active: false,
	},
	{
		name: "Notifications",
		path: "/studio/notifications",
	},
];

export const userNavItems: NavigationItemType[] = [
	{
		name: "Save",
		path: "/dashboard/user/bookings",
		active: true,
	},
	{
		name: "Settings",
		path: "/dashboard/user/settings",
		active: false,
	},
	{
		name: "Messages",
		path: "/dashboard/user/messages",
		active: false,
	},
	{
		name: "Notifications",
		path: "/dashboard/user/notifications",
		active: true,
	},
];

export const studioNavItems: NavigationItemType[] = [
	{
		name: "Workspace",
		path: "/studio",
	},
	{
		name: "Saved",
		path: "/studio/saved",
	},
	{
		name: "members",
		path: "/studio/members",
	},
];
