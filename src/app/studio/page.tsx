import StudioLeftbar from "@/components/ai/studio/StudioLeftbar";
import StudionPageTabs from "@/components/ai/studio/StudioPageTabs";
import StudioRightbar from "@/components/ai/studio/StudioRightbar";
import PageWrapper from "@/components/page/PageWrapper";

// Page for generating decoration for the event center hall
// and also for the entertainers
export default function StudioPage() {
	return (
		<PageWrapper className="grid gap-2 grid-cols-1 md:grid-cols-6 p-0 md:p-0">
			<StudioLeftbar />
			<StudionPageTabs className="col-span-4" />
			<StudioRightbar />
		</PageWrapper>
	);
}
