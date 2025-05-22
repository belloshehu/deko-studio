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
		name: "Saved decorations",
		path: "#",
		active: true,
	},

	{
		name: "Messages",
		path: "#",
		active: false,
	},
	{
		name: "Notifications",
		path: "#",
		active: true,
	},
];

export const studioNavItems: NavigationItemType[] = [
	{
		name: "Decoration",
		path: "/decoration",
	},
	{
		name: "Saved",
		path: "/saved",
	},
	{
		name: "members",
		path: "/members",
	},
];
