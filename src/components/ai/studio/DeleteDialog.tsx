import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

interface DeleteDialogProps {
	// Define any props you need here
	headerText: string;
	descriptionText?: string;
	onDelete: () => void;
	onClose?: () => void;
}
export default function DeleteDialog({
	headerText,
	onDelete,
	descriptionText,
}: DeleteDialogProps) {
	return (
		<Dialog>
			<DialogTrigger className="flex items-center gap-2 text-red-500 bg-gray-100 hover:bg-gray-200 p-1 px-2 rounded">
				<Trash className="text-xl" /> Delete
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<h2>{headerText}</h2>
				</DialogHeader>
				<p>{descriptionText}</p>
				<DialogFooter>
					<Button variant={"destructive"} onClick={onDelete}>
						Delete
					</Button>
					<Button>Cancel</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
