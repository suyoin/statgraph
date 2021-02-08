import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import TextArea from "../components/TextArea";
import { context } from "../lib/context";

export default function Home() {
	const { input1, setInput1, input2, setInput2 } = useContext(context);

	return (
		<>
			<motion.div
				className="absolute flex flex-col space-y-6 items-center justify-center h-screen w-screen pointer-events-none"
				initial={{ opacity: 0.5, scale: 0.5, y: "0%" }}
				animate={{ opacity: 1, scale: 1, y: "-40%" }}
				transition={{
					opacity: { duration: 0.5 },
					scale: { duration: 0.5 },
					y: { duration: 0.5, delay: 0.5 },
				}}
			>
				<a
					href="#"
					className="text-5xl font-custom transition duration-150 ease-out text-red-400 hover:underline"
				>
					statgraph
				</a>
			</motion.div>
			<motion.div
				className="flex flex-col space-y-2 items-center justify-center h-screen w-screen"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				<div className="flex flex-row space-x-2 items-center justify-center w-screen">
					<div className="flex flex-col">
						<label className="text-white">domain</label>
						<TextArea value={input1} setValue={setInput1}></TextArea>
					</div>

					<div className="flex flex-col">
						<label className="text-white">range</label>
						<TextArea value={input2} setValue={setInput2}></TextArea>
					</div>
				</div>
				<p className="text-white italic">
					Numbers can be delimited by any character that isn't a number.
				</p>
				<button
					className="rounded-full border-2 px-4 py-1 border-red-500 bg-opacity-0 text-red-500 transition duration-300 ease-out bg-red-500 hover:bg-opacity-100 hover:text-gray-800"
					onClick={() => {
						const pattern = /([\d\.]+)/g;

						console.log(
							"X",
							input1.match(pattern).map((v) => parseFloat(v))
						);
						console.log(
							"Y",
							input2.match(pattern).map((v) => parseFloat(v))
						);
					}}
				>
					Submit
				</button>
			</motion.div>
		</>
	);
}
