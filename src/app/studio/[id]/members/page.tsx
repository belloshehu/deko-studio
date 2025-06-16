"use client";
import WorkspaceInviteForm from "@/components/ai/studio/workspace/InviteForm";
import PageWrapper from "@/components/page/PageWrapper";
import Title from "@/components/Title";

export default function MembersPage() {
	const invites = [];
	return (
		<PageWrapper className="p-2 pt-20 md:px-5">
			<header className="flex flex-col gap-5 md:flex-row justify-between w-full ">
				<Title
					title="Members"
					description="Members who have access to your workspace"
					className=""
					size="2xl"
				/>
				<WorkspaceInviteForm />
			</header>

			<div className="w-full">
				{invites.length === 0 ? (
					<h2 className="bg-red-300 p-5">No members in this workspace</h2>
				) : null}
			</div>
		</PageWrapper>
	);
}
