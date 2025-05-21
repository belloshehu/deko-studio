"use client";
import { features } from "@/constants/features";
import Feature from "./Feature";
import Title from "@/components/Title";
import { motion } from "motion/react";

export default function FeatureList() {
	return (
		<section
			id="features"
			className="px-5 md:p-20 rounded-md flex flex-col items-center justify-center w-full h-fit gap-10"
		>
			<Title title="Features" size="7xl" />
			<motion.p
				className="text-lg"
				initial={{ transform: "translateX(-100%)", scale: 0.9, opacity: 1 }}
				whileInView={{ transform: "translateX(0)", scale: 1, opacity: 1 }}
				exit={{ transform: "translateX(-100%)", scale: 0.6, opacity: 0.1 }}
			>
				Explore the features of Deko Studio
			</motion.p>
			<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{features.map((feature) => (
					<Feature {...feature} key={feature.title} />
				))}
			</ul>
		</section>
	);
}
