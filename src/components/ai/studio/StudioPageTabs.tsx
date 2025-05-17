import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudioDecorationGuide from "./StudioDecorationGuide";
import StudioGenerateDecoration from "./StudioGenerateDecoration";
import { cn } from "@/lib/utils";

// EventTabs component
export default function StudionPageTabs({ className }: { className?: string }) {
	return (
		<Tabs
			className={cn(
				"w-full h-full flex flex-col justify-center items-center pt-20",
				className
			)}
			defaultValue="decoration"
		>
			<TabsList className="flex justify-center items-center bg-blue-100 w-full rounded-full">
				<TabsTrigger value="decoration" className="rounded-full">
					Generate decoration
				</TabsTrigger>
				<TabsTrigger value="guide" className="rounded-full">
					Guide
				</TabsTrigger>
			</TabsList>
			<TabsContent value="decoration" className="w-full">
				<StudioGenerateDecoration />
			</TabsContent>
			<TabsContent value="guide" className="w-full">
				<StudioDecorationGuide />
			</TabsContent>
		</Tabs>
	);
}
