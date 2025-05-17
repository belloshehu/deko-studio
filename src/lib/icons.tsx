import {
	BellIcon,
	BookTemplate,
	CalendarIcon,
	Cloud,
	FileWarning,
	Flower,
	Image,
	MessageCircle,
	Settings,
	SettingsIcon,
	StarIcon,
	Upload,
	User,
	UserIcon,
	Users,
} from "lucide-react";

export default function getIcon({ iconName }: { iconName: string }) {
	switch (iconName) {
		case "flower":
			return <Flower className="w-6 h-6 text-blue-400" />;
		case "user":
			return <UserIcon className="w-6 h-6 text-blue-400" />;
		case "settings":
			return <SettingsIcon className="w-6 h-6 text-blue-400" />;
		case "bell":
			return <BellIcon className="w-6 h-6 text-blue-400" />;
		case "message":
			return <MessageCircle className="w-6 h-6 text-blue-400" />;
		case "calendar":
			return <CalendarIcon className="w-6 h-6 text-blue-400" />;
		case "star":
			return <StarIcon className="w-6 h-6 text-blue-400" />;
		case "cloud":
			return <Cloud className="w-6 h-6 text-blue-400" />;
		case "image":
			return <Image className="w-6 h-6 text-blue-400" />;
		case "users":
			return <Users className="w-6 h-6 text-blue-400" />;
		case "upload":
			return <Upload className="w-6 h-6 text-blue-400" />;
		case "template":
			return <BookTemplate className="w-6 h-6 text-blue-400" />;
		default:
			return <FileWarning className="w-6 h-6 text-blue-400" />;
	}
}
