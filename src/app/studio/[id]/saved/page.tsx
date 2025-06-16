"use client";

import SaveDecorationList from "@/components/ai/studio/saved-decoration/SaveDecorationList";
import PageWrapper from "@/components/page/PageWrapper";
import Title from "@/components/Title";
import { useGetDecorations } from "@/hooks/service-hooks/decoration.hooks";
import { DecorationType } from "@/types/decoration.types";
import { Loader } from "lucide-react";

import { useParams } from "next/navigation";

export default function SavePage() {
	const { id } = useParams();
	const { data, isLoading } = useGetDecorations(id as string);
	return (
		<PageWrapper className="md:px-0">
			<Title
				title="Save Decorations"
				description="Your decorations saved from workspace "
				className=""
				size="2xl"
			/>

			<div className="w-full">
				{isLoading && (
					<Loader className="animate-spin text-blue-500 w-10 h-10 mx-auto my-20" />
				)}
				{!isLoading && <SaveDecorationList data={data as DecorationType[]} />}
			</div>
		</PageWrapper>
	);
}
