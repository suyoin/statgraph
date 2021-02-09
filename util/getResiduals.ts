import getPredicted from "./getPredicted";

export default (arX: Array<number>, arY: Array<number>) => {
	return arY.map((y, index) => {
		return y - getPredicted(arX, arY, arX[index]);
	});
};
