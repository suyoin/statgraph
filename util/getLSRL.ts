//returns the values of the variables of the LSRL

import getCorrelation from "./getCorrelation";
import getMean from "./getMean";
import getStandardDeviation from "./getStandardDeviation";

interface LSRL {
	/** The slope of the LSRL. */
	b: number;

	/** The y-intercept of the LSRl. */
	intercept: number;
}

export default (arX: Array<number>, arY: Array<number>): LSRL => {
	const mX = getMean(arX);
	const mY = getMean(arY);

	const sX = getStandardDeviation(arX);
	const sY = getStandardDeviation(arY);

	const r = getCorrelation(arX, arY);
	const b = r * (sY / sX);

	return {
		b: b,
		intercept: mY - b * mX,
	};
};
