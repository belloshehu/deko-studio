import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Share2 } from "lucide-react";
import { ShareSocial } from "react-share-social";

type SocialTypes = "whatsapp" | "facebook" | "twitter" | "linkedin";
export default function ShareDialog({
	url,
	socialTypes = ["whatsapp"],
	name,
}: {
	url: string;
	socialTypes: SocialTypes[];
	name?: string;
}) {
	return (
		<Dialog>
			<DialogTrigger>
				<button>
					<Share2 className="text-blue-500" />
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex flex-row items-center">
					<Share2 className="text-blue-500" />
					Share <q>{name ? name : "this content"}</q>
				</DialogHeader>
				<ShareSocial url={url} socialTypes={socialTypes} />
			</DialogContent>
		</Dialog>
	);
}
