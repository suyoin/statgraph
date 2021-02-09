import getMean from "./getMean";
import getStandardDeviation from "./getStandardDeviation";

//returns the coefficient of correlation
export default (ar1: Array<number>, ar2: Array<number>): number => {
	const m1 = getMean(ar1);
	const m2 = getMean(ar2);

	const std1 = getStandardDeviation(ar1);
	const std2 = getStandardDeviation(ar2);

	return (
		ar1
			.map((a, index) => {
				return ((a - m1) / std1) * ((ar2[index] - m2) / std2);
			})
			.reduce((a, b) => {
				return a + b;
			}) /
		(ar1.length - 1)
	);
};
