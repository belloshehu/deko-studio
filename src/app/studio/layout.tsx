import StudioLeftbar from "@/components/ai/studio/StudioLeftbar";

export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-cols-6 w-full h-full bg-slate-50">
			<StudioLeftbar />
			<div className="w-full col-span-5">{children}</div>
		</div>
	);
}
