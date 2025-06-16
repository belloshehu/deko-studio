import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/timedate";
import { DecorationType } from "@/types/decoration.types";
import { Share2, Trash } from "lucide-react";
import Image from "next/image";

interface SavedDecorationProps {
	decoration: DecorationType;
	className?: string;
}
export default function SavedDecoration({ decoration }: SavedDecorationProps) {
	const { name, image, description, createdAt } = decoration;
	return (
		<div key={decoration._id} className="bg-white p-4 rounded-lg shadow-md">
			{/* <Image
				width={300}
				height={200}
				src={image}
				alt={name}
				className="w-full h-48 object-cover rounded-lg mb-2"
			/> */}
			<small className="px-2 bg-slate-100 rounded-2xl">
				{formatDate(createdAt)}
			</small>
			<h3 className="text-lg font-semibold">{name}</h3>
			<p className="text-gray-600">{description}</p>
			<div className="flex items-center justify-between mt-4">
				<Button variant={"secondary"}>
					<Share2 className="text-blue-400 text-2xl" />
				</Button>
				<Button variant={"destructive"}>
					{" "}
					<Trash />
					Delete
				</Button>
			</div>
		</div>
	);
}
