import { cn } from "@/lib/utils";

export default function Title({
	title,
	description,
	className,
	textClassName,
	children,
	size,
}: {
	title: string;
	description?: string;
	className?: string;
	textClassName?: string;
	children?: React.ReactNode;
	size?:
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl";
}) {
	return (
		<div
			className={cn(
				"flex flex-col gap-2 justify-start items-start w-full",

				className
			)}
		>
			<h1
				className={cn(
					"text-center font-bold text-blue-400",
					{
						"text-sm": size === "sm",
						"text-base": size === "md",
						"text-lg": size === "lg",
						"text-xl": size === "xl",
						"text-2xl": size === "2xl",
						"text-3xl": size === "3xl",
						"text-4xl": size === "4xl",
						"text-5xl": size === "5xl",
						"text-6xl": size === "6xl",
						"text-7xl": size === "7xl",
						"text-8xl font-extrabold": size === "8xl",
						"text-9xl font-extrabold": size === "9xl",
					},
					textClassName
				)}
			>
				{title}
			</h1>
			{description && <p className="text-sm text-gray-600">{description}</p>}
			{children && children}
		</div>
	);
}
