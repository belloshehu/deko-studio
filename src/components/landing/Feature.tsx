import getIcon from "@/lib/icons";

export default function Feature({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<div className="flex flex-col items-center justify-center gap-2 p-4 text-center border-2 border-blue-400 transition-all hover:scale-105">
			{getIcon({ iconName: icon })}
			<h3 className="text-lg font-semibold text-blue-400">{title}</h3>
			<p className="text-sm text-gray-600">{description}</p>
		</div>
	);
}
