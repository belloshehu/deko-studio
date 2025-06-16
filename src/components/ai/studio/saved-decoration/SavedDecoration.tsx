"use client";
import { formatDate } from "@/lib/timedate";
import { DecorationType } from "@/types/decoration.types";
import ShareDialog from "../ShareDialog";
import DeleteDialog from "../DeleteDialog";
import {
	useDeleteDecoration,
	useUpdateDecoration,
} from "@/hooks/service-hooks/decoration.hooks";
import { useAxios } from "@/hooks/use-axios";
import DecorationUpdateForm from "./DecorationUpdateForm";

interface SavedDecorationProps {
	decoration: DecorationType;
	className?: string;
}
export default function SavedDecoration({ decoration }: SavedDecorationProps) {
	const { mutateAsync } = useDeleteDecoration();
	const { protectedRequest } = useAxios();
	const { name, image, description, createdAt, _id } = decoration;

	const handleDelete = async () => {
		await mutateAsync({ decorationId: decoration._id, protectedRequest });
	};

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
				<ShareDialog
					url={image}
					socialTypes={["whatsapp", "facebook", "twitter", "linkedin"]}
					name={name}
				/>
				<DecorationUpdateForm data={{ _id, name, description }} />
				<DeleteDialog
					headerText="Delelte Decoration"
					descriptionText="Are you sure to delete this decoration?"
					onDelete={handleDelete}
				/>
			</div>
		</div>
	);
}
