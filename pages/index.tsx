import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import TextArea from "../components/TextArea";
import { context } from "../lib/context";
import getLSRL from "../util/getLSRL";
import getMean from "../util/getMean";
import getStandardDeviation from "../util/getStandardDeviation";

export default function Home() {
	const {
		input1,
		setInput1,
		input2,
		setInput2,
	} = useContext(context);

	const pattern = /([\d\.]+)/g;
	const domain: Array<number> = input1
		.match(pattern)
		.map((v: string) => parseFloat(v));
	const range: Array<number> = input2
		.match(pattern)
		.map((v: string) => parseFloat(v));
	const lsrl = getLSRL(domain, range);

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

				<p className="text-white w-96">
					{`Domain: [${domain.join(",")}]`}
					<br />
					{`Domain Mean: ${getMean(domain)}`}
					<br />
					{`Domain Standard Deviation: ${getStandardDeviation(domain)}`}
					<br />
					{`Range: [${range.join(",")}]`}
					<br />
					{`Range Mean: ${getMean(range)}`}
					<br />
					{`Range Standard Deviation: ${getStandardDeviation(range)}`}
					<br />
					<br />
					{`LSRL: y hat = ${lsrl.intercept} + ${lsrl.b}x`}
				</p>
			</motion.div>
		</>
	);
}
