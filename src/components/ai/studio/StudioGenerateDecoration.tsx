"use client";

import { useState } from "react";
import { GenerateContentResponse } from "@google/genai";
import DecorationGnerationForm from "./DecorationGenerationForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import fileDownload from "js-file-download";
import useFileUpload from "@/hooks/use-file-upload";
import { useSaveDecoration } from "@/hooks/service-hooks/decoration.hooks";
import { DecorationPayloadType } from "@/types/decoration.types";
import { useParams } from "next/navigation";
import useSession from "@/lib/session/use-session";
import { useAxios } from "@/hooks/use-axios";
import { Download, Save } from "lucide-react";

export default function StudioGenerateDecoration() {
	const [contents, setContents] = useState<GenerateContentResponse | null>(
		null
	);
	const { uploadToCloudinary } = useFileUpload();
	const { id } = useParams();
	const { mutateAsync, isPending } = useSaveDecoration(id as string);
	const { protectedRequest } = useAxios();
	const {
		session: { isLoggedIn },
	} = useSession();

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

	const handleSave = async (imageData: string) => {
		const response = await uploadToCloudinary(imageData);
		if (response?.secure_url) {
			const decorationData: DecorationPayloadType = {
				image: response.secure_url,
				name: "Decoration " + Date.now(),
				description: "Generated decoration for the event hall",
				workspace: id as string,
				// add other decoration data if needed
			};
			await mutateAsync({ payload: decorationData, protectedRequest });
		}
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
											variant={"outline"}
										>
											<Download /> Download
										</Button>
										{/* Rendered when logged in and in workspace */}
										{isLoggedIn && (
											<Button
												onClick={() => handleSave(image)}
												className="w-fit bg-blue-400"
												disabled={isPending}
											>
												<Save /> {isPending ? "Saving..." : "Save Decoration"}
											</Button>
										)}
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
