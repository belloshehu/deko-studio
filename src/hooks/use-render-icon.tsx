import { iconType } from "@/types/icon.types";
import { FileWarning, Flower, Folder, Users } from "lucide-react";

/*
Hook to render a lucide-react icon from a given name
*/

export const useRenderIcon = () => {
	const renderIcon = (name: iconType) => {
		switch (name.toLowerCase()) {
			case "decoration":
				return <Flower className="text-blue-500" />;
			case "members":
				return <Users className="text-blue-500" />;
			case "saved":
				return <Folder className="text-blue-500" />;
			default:
				return <FileWarning className="text-red-400" />;
		}
	};
	return renderIcon;
};
