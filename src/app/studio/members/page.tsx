import PageWrapper from "@/components/page/PageWrapper";
import Title from "@/components/Title";

export default function MembersPage() {
	return (
		<PageWrapper className="md:px-0">
			<Title
				title="Members"
				description="Members who have access to your workspace"
				className=""
				size="2xl"
			/>
		</PageWrapper>
	);
}
