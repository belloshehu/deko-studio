"use client";

import SaveDecorationList from "@/components/ai/studio/saved-decoration/SaveDecorationList";
import Loader from "@/components/Loader";
import PageWrapper from "@/components/page/PageWrapper";
import Title from "@/components/Title";
import { useGetDecorations } from "@/hooks/service-hooks/decoration.hooks";
import { useGetWorkspace } from "@/hooks/service-hooks/worspace.hook";
import { DecorationType } from "@/types/decoration.types";

import { useParams } from "next/navigation";

export default function SavePage() {
	const { id } = useParams();
	const { data, isLoading } = useGetDecorations(id as string);
	const { data: workspace, isLoading: loading } = useGetWorkspace(id as string);
	return (
		<PageWrapper className="p-2 pt-20 md:px-5">
			<div className="w-full">
				<Title
					title="Save Decorations"
					description="Your decorations saved from workspace "
					className=""
					size="2xl"
				/>
				{!loading && (
					<small className="text-lg text-gray-500 mt-5 bg-blue-300 px-2 rounded-2xl">
						Workspace: {workspace?.name}
					</small>
				)}
			</div>

			<div className="w-full">
				{isLoading && <Loader message="loading decorations" />}
				{!isLoading && <SaveDecorationList data={data as DecorationType[]} />}
			</div>
		</PageWrapper>
	);
}
