import FeatureList from "@/components/landing/FeatureList";
import Hero from "@/components/landing/Hero";

export default function Home() {
	return (
		<main className="relative flex flex-col items-center justify-start py-2 gap-0 w-full p-0 md:p-0 text-center">
			<Hero />
			<FeatureList />
		</main>
	);
}
