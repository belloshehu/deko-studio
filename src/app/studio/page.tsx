import StudioPageWrapper from "@/components/ai/studio/StudioPageWrapper";
import StudioRightbar from "@/components/ai/studio/StudioRightbar";
import PageWrapper from "@/components/page/PageWrapper";

// Page for generating decoration for the event center hall
// and also for the entertainers
export default function StudioPage() {
	return (
		<PageWrapper className="grid gap-2 grid-cols-1 md:grid-cols-5 p-0 md:p-0">
			{/* <StudioLeftbar /> */}
			{/* <StudionPageTabs className="md:col-span-4 w-full" /> */}
			<StudioPageWrapper className="md:col-span-5 w-full" />
			{/* <StudioRightbar /> */}
		</PageWrapper>
	);
}
