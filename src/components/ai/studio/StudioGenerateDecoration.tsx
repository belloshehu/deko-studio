"use client";

import { useState } from "react";
import { GenerateContentResponse } from "@google/genai";
import DecorationGnerationForm from "./DecorationGenerationForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Share2 } from "lucide-react";
import axios from "axios";
import fileDownload from "js-file-download";

export default function StudioGenerateDecoration() {
	const [contents, setContents] = useState<GenerateContentResponse | null>(
		null
	);

	// handle image download
	const handleImageDownload = (imageData: string) => {
		axios
			.get(imageData, {
				responseType: "blob",
			})
			.then((res) => {
				fileDownload(res.data, "decoration_" + Date.now() + ".png");
				toast.success("Image saved successfully");
			})
			.catch((error) => {
				toast.error("Error saving image");
			});
	};
	return (
		<div className="flex flex-col gap-4 relative">
			<DecorationGnerationForm
				setContents={setContents}
				className="fixed bottom-10 left-2 right-2"
			/>
			{contents?.candidates && (
				<div className="w-full justify-center items-center flex flex-col gap-4">
					{contents.candidates[0].content?.parts?.map((part, index: number) => {
						if (part.text) {
							return null; // dont show text
							// return (
							// 	<div key={index} className="mb-4">
							// 		<ReactMarkdown>{part.text}</ReactMarkdown>
							// 	</div>
							// );
						} else {
							const imageData = part.inlineData?.data;
							const buffer = Buffer.from(imageData!, "base64");
							const image = `data:image/png;base64,${buffer.toString(
								"base64"
							)}`;
							return (
								<div
									key={index}
									className="mb-4 w-full my-10 flex flex-col md:flex-row gap-5"
								>
									{/* <h1>Decorated hall by AI</h1> */}
									<Image
										src={image}
										alt="Decoration"
										className="h-auto object-contain aspect-square rounded-2xl w-full md:w-3/5 "
										width={500}
										height={500}
									/>
									{/* download image file when click */}
									<div className="flex gap-2 mb-8">
										<Button
											onClick={() => handleImageDownload(image)}
											className="w-fit cursor-pointer"
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
