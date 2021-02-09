export default (ar: Array<number>): number => {
	return (
		ar.reduce((a, b) => {
			return a + b;
		}) / ar.length
	);
};
