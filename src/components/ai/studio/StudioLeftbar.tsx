import { Button } from "@/components/ui/button";

export default function StudioLeftbar() {
	return (
		<aside className="flex flex-col gap-4 items-start justify-start self-start mt-24  min-h-[80vh] h-fit p-5 pt-20 rounded-3xl shadow-sm m-3 w-fit">
			<Button variant={"secondary"}>Workspace</Button>
			<Button variant={"secondary"}>Settings</Button>
			<Button variant={"secondary"}>Members</Button>
			<Button variant={"secondary"}>Saved</Button>
		</aside>
	);
}
