"use client";
import getIcon from "@/lib/icons";
import { motion } from "motion/react";

export default function Feature({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<motion.div
			initial={{
				transform: "translateY(-100%)",
				scale: 0.9,
			}}
			whileInView={{ transform: "translate(0)", scale: 1, opacity: 1 }}
			exit={{ transform: "translate(-100%)", scale: 0.6, opacity: 0.1 }}
			transition={{ duration: 0.3 }}
			className="flex flex-col items-center justify-center gap-2 p-4 text-center border-2 border-blue-400 transition-all hover:scale-105"
		>
			{getIcon({ iconName: icon })}
			<motion.h3
				className="text-lg font-semibold text-blue-400"
				initial={{ transform: "translateX(-20%)", scale: 0.9, opacity: 1 }}
				whileInView={{ transform: "translateX(0)", scale: 1, opacity: 1 }}
				exit={{ transform: "translateX(-10%)", scale: 0.6, opacity: 0.1 }}
				transition={{ delay: 0.5 }}
			>
				{title}
			</motion.h3>
			<motion.p
				className="text-sm text-gray-600"
				initial={{ transform: "translateX(20%)", scale: 0.9, opacity: 1 }}
				whileInView={{ transform: "translateX(0)", scale: 1, opacity: 1 }}
				exit={{ transform: "translateX(20%)", scale: 0.6, opacity: 0.1 }}
				transition={{ delay: 0.6 }}
			>
				{description}
			</motion.p>
		</motion.div>
	);
}
