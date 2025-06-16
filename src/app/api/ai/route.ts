import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function POST(request: Request) {
	console.log("Received request to generate decoration", GEMINI_API_KEY);
	const { prompt } = await request.json();
	// validate the request
	try {
		if (!prompt) {
			return NextResponse.json(
				{
					error: "Please provide a prompt for the decoration",
				},
				{
					status: 400,
				}
			);
		}

		// Prepare the content parts
		const contents = prompt;

		// Generate the content
		const result = await ai.models.generateContent({
			model: "gemini-2.0-flash-exp-image-generation",
			contents: contents,
			config: {
				responseModalities: ["Text", "Image"],
				temperature: 0.5,
			},
		});
		console.log("result", result);
		if (!result) {
			return NextResponse.json(
				{
					error: "An error occurred while generating the decoration",
				},
				{
					status: 500,
				}
			);
		}

		return NextResponse.json(
			{
				data: result,
				message: "Decoration generated successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error generating decoration", error);
		return NextResponse.json(
			{
				error: "An error occurred while generating the decoration" + error,
			},
			{
				status: 500,
			}
		);
	}
}
