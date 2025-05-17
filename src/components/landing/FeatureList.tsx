import { features } from "@/constants/features";
import Feature from "./Feature";
import Title from "@/components/Title";

export default function FeatureList() {
	return (
		<section
			id="features"
			className="px-5 md:p-20 rounded-md flex flex-col items-center justify-center w-full h-fit gap-10"
		>
			<Title title="Features" size="7xl" />
			<p className="text-lg">Explore the features of Deko Studio</p>
			<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{features.map((feature) => (
					<Feature {...feature} key={feature.title} />
				))}
			</ul>
		</section>
	);
}
