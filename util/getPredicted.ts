import getLSRL from "./getLSRL";

//get the predicted value from the LSRl
export default (arX: Array<number>, arY: Array<number>, x: number): number => {
	const { b, intercept } = getLSRL(arX, arY);

	return intercept + b * x;
};
