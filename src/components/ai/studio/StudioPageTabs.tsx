import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudioDecorationGuide from "./StudioDecorationGuide";
import StudioGenerateDecoration from "./StudioGenerateDecoration";
import { cn } from "@/lib/utils";

// EventTabs component
export default function StudionPageTabs({ className }: { className?: string }) {
	return (
		<Tabs
			className={cn(
				"w-full h-full flex flex-col justify-start items-start pt-20",
				className
			)}
			defaultValue="guide"
		>
			<TabsList className="flex justify-center items-center bg-blue-100 w-full rounded-full">
				<TabsTrigger value="guide" className="rounded-full">
					Decoration guide
				</TabsTrigger>
				<TabsTrigger value="generation" className="rounded-full">
					Generate decoration
				</TabsTrigger>
			</TabsList>
			<TabsContent value="guide">
				<StudioDecorationGuide />
			</TabsContent>
			<TabsContent value="generation">
				<StudioGenerateDecoration />
			</TabsContent>
		</Tabs>
	);
}
