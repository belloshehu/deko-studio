"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "motion/react";
import { alfa_Slab_One } from "@/app/fonts";
import Image from "next/image";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
	return (
		<section className="flex flex-col items-center rounded-none justify-center h-screen  md:pt-10 gap-10 w-full text-center">
			<div className="px-5 md:p-20 rounded-md flex flex-col items-center justify-center w-full h-fit gap-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center justify-center ">
					<div className=" flex flex-col gap-5 items-center text-center md:text-left justify-center md:items-start md:justify-start w-full">
						<motion.h1
							initial={{
								transform: "translateY(-100%)",
								scale: 0.7,
								opacity: 0.4,
							}}
							whileInView={{ transform: "translate(0)", scale: 1, opacity: 1 }}
							exit={{ transform: "translate(-100%)", scale: 0.6, opacity: 0.1 }}
							transition={{ duration: 0.6, type: "spring" }}
							className={cn(
								`${alfa_Slab_One.className} font-extrabold text-3xl md:text-7xl text-blue-500 leading-[1.3] text-center md:text-left w-full capitalize`
							)}
						>
							Event decoration with AI
						</motion.h1>
						<motion.p
							initial={{ transform: "translateY(-100%)" }}
							whileInView={{ transform: "translate(0)" }}
							exit={{ transform: "translate(-100%), rotate(180deg)" }}
							transition={{ duration: 0.4, type: "spring" }}
							className="text-slate-600"
						>
							Decorating your event should not be a hassle, it should be a
							breeze.
						</motion.p>
						<motion.p
							initial={{ transform: "translateY(-100%)" }}
							whileInView={{ transform: "translate(0)" }}
							exit={{ transform: "translate(-100%), rotate(180deg)" }}
							transition={{ duration: 0.6, type: "spring" }}
							className="text-slate-500"
						>
							Let enjoy creative decoration with dekostudio
						</motion.p>
						<Link href="/event-centers">
							<Button
								variant={"secondary"}
								className="bg-blue-400 text-white"
								size={"lg"}
							>
								Get Started
							</Button>
						</Link>
					</div>
					<div className="w-full relative h-screen bg-blue-500 flex justify-center items-center rounded-full">
						<Image
							src="/event-deco.jpg"
							alt="hero image"
							width={300}
							height={300}
							className="object-cover h-1/2 w-1/2 md:w-2/3 border-2 border-blue-400 rounded-md absolute top-20 left-0"
						/>
						<Image
							src="/event-deco2.jpg"
							alt="hero image"
							width={300}
							height={300}
							className="object-cover rounded-md absolute  w-full md:w-1/2 top-22 right-0 border-4 border-blue-400"
						/>
						<Image
							src="/event-deco3.jpg"
							alt="hero image"
							width={300}
							height={300}
							className="object-cover rounded-md absolute h-1/2 md:w-1/2 bottom-16 left-2 border-4 border-blue-400"
						/>
					</div>
					{/* <DotLottieReact
						src="animations/super-man.lottie"
						loop
						autoplay
						className="order-1 md:order-2"
					/> */}
				</div>
			</div>
		</section>
	);
}
