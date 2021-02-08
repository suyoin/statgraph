import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<motion.div
				className="absolute flex flex-col space-y-6 items-center justify-center h-screen w-screen"
				initial={{ opacity: 0.5, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1, y: "-40%" }}
				transition={{
					opacity: { duration: 0.5 },
					scale: { duration: 0.5 },
					y: { duration: 0.5, delay: 0.5 },
				}}
			>
				<a
					href="#"
					className="text-5xl text-white font-custom transition duration-150 ease-out text-red-400 hover:underline"
				>
					statgraph
				</a>
			</motion.div>
			<motion.div
				className="flex flex-col space-y-6 items-center justify-center h-screen w-screen"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
			>
				<form>
					<label htmlFor="x" className="text-white">
						X
					</label>
					<br />
					<input type="text" name="x"></input>
					<br />
					<input type="submit" value="Submit"></input>
				</form>
			</motion.div>
		</>
	);
}
