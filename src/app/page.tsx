import FeatureList from "@/components/landing/FeatureList";
import Hero from "@/components/landing/Hero";

export default function Home() {
	return (
		<main className="relative flex flex-col items-center justify-start  gap-40 py-72 pb-20 md:gap-0 w-full md:p-0 text-center">
			<Hero />
			<FeatureList />
		</main>
	);
}
