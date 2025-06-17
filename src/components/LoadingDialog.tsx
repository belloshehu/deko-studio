import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import Loader from "@/components/Loader";

export function LoadingDialog({
	open,
	children,
	loadingText = "Loading...",
	className,
}: {
	open: boolean;
	children?: React.ReactNode;
	loadingText?: string;
	className?: string;
}) {
	return (
		<Dialog open={open} modal={true}>
			<DialogContent className="flex flex-col items-center justify-center bg-white/0 border-none">
				<DialogHeader className={cn("text-center text-white", className)}>
					<DialogTitle> {loadingText}</DialogTitle>
				</DialogHeader>
				<Loader />
				{/* <h3 className={cn("text-white font-medium text-center animate-pulse")}></h3> */}
				{children && children}
			</DialogContent>
		</Dialog>
	);
}
