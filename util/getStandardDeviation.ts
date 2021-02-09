import getMean from "./getMean";

export default (ar: Array<number>): number => {
	const mean = getMean(ar);

	return Math.sqrt(
		ar
			.map((a) => {
				return Math.pow(a - mean, 2);
			})
			.reduce((a, b) => {
				return a + b;
			}) /
			(ar.length - 1)
	);
};
