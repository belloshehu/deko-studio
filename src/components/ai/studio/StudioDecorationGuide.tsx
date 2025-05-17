"use client";

import { useState } from "react";
import DecorationGuideForm from "@/components/ai/studio/DecorationGuideForm";
import Title from "@/components/Title";
import { GenerateContentResponse } from "@google/genai";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function StudioDecorationGuide() {
	const [contents, setContents] = useState<GenerateContentResponse | null>(
		null
	);
	const [showForm, setShowForm] = useState(true);

	// handle image download
	const handleImageDownload = (imageData: string) => {
		const link = document.createElement("a");
		link.href = `data:image/png;base64,${imageData}`;
		link.download = new Date().toISOString() + ".png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success("Image saved successfully");
	};

	return (
		<div className="flex flex-col justify-start items-start gap-4 h-full w-full">
			<Title
				title="Decoration Guide"
				description="Get decoration guide by speciying an event type, e.g, birthday, wedding and prefered colors."
			/>
		</div>
	);
}
