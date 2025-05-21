"use client";

import { useState } from "react";
import { GenerateContentResponse } from "@google/genai";
import DecorationGnerationForm from "./DecorationGenerationForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { Share2 } from "lucide-react";
import { useGetWorkspaces } from "@/hooks/service-hooks/worspace.hook";

export default function StudioGenerateDecoration() {
	const { data, isLoading } = useGetWorkspaces();
	const [contents, setContents] = useState<GenerateContentResponse | null>(
		null
	);

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
		<div className="flex flex-col gap-4">
			<DecorationGnerationForm setContents={setContents} />
			{contents?.candidates && (
				<div className="w-full justify-center items-center flex flex-col gap-4">
					{contents.candidates[0].content?.parts?.map((part, index: number) => {
						if (part.text) {
							return (
								<div key={index} className="mb-4">
									<ReactMarkdown>{part.text}</ReactMarkdown>
								</div>
							);
						} else {
							const imageData = part.inlineData?.data;
							const buffer = Buffer.from(imageData!, "base64");
							const image = `data:image/png;base64,${buffer.toString(
								"base64"
							)}`;
							return (
								<div
									key={index}
									className="mb-4 w-full my-10 flex flex-col gap-5"
								>
									{/* <h1>Decorated hall by AI</h1> */}
									<Image
										src={image}
										alt="Decoration"
										className="h-auto object-cover w-full md:w-3/5 "
										width={500}
										height={500}
									/>
									{/* download image file when click */}
									<div className="flex gap-2 mb-8">
										<Button
											onClick={() => handleImageDownload(image)}
											className="w-fit"
										>
											Download
										</Button>
										<Button
											onClick={() => handleImageDownload(image)}
											className="w-fit bg-blue-400"
										>
											Save
										</Button>
										<Button variant={"secondary"} className="p-0">
											<Share2 className="text-blue-400" size={50} />
										</Button>
									</div>
								</div>
							);
						}
					})}
				</div>
			)}
		</div>
	);
}
