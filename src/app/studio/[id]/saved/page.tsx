import PageWrapper from "@/components/page/PageWrapper";
import Title from "@/components/Title";

export default function SavePage() {
	const saveItems = [];
	return (
		<PageWrapper className="md:px-0">
			<Title
				title="Save Decorations"
				description="Your decorations saved from workspace "
				className=""
				size="2xl"
			/>
			<div className="w-full">
				{saveItems.length === 0 ? (
					<h2 className="bg-red-300 p-5">
						No saved decorations in this workspace
					</h2>
				) : null}
			</div>
		</PageWrapper>
	);
}
