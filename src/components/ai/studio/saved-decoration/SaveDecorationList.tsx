import { cn } from "@/lib/utils";
import { DecorationType } from "@/types/decoration.types";
import SavedDecoration from "./SavedDecoration";

interface SaveDecorationListProps {
	// Define any props if needed
	data: DecorationType[] | null;
	className?: string;
}
export default function SaveDecorationList({
	data,
	className,
}: SaveDecorationListProps) {
	if (!data || data.length === 0) {
		return (
			<div className="text-center text-gray-500">No decorations saved.</div>
		);
	}

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4",
				className
			)}
		>
			{data.map((decoration) => (
				<SavedDecoration decoration={decoration} key={decoration._id} />
			))}
		</div>
	);
}
