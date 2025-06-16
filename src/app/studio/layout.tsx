import StudioLeftbar from "@/components/ai/studio/StudioLeftbar";

export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full h-full bg-slate-50 px-5 relative">
			<StudioLeftbar />
			<div className="w-full col-span-1 md:col-span-5">{children}</div>
		</div>
	);
}
