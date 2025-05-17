import Brand from "./Brand";

export default function Footer() {
	return (
		<footer className="p-5 bg-gray-900 text-white">
			<Brand />
			<div className="flex items-center justify-between">
				<p>&copy; {new Date().getFullYear()} dekostudio</p>
				<p>
					Created by{" "}
					<a href=" " className="text-green-500">
						Sightek
					</a>
				</p>
			</div>
		</footer>
	);
}
