import { useCallback, useState } from "react";

interface TextAreaProps {
	value: string;
	setValue: Function;
}

const TextArea = (props: TextAreaProps) => {
	const handleChange = useCallback((e) => {
		props.setValue(e.target.value);
	}, []);

	return (
		<textarea
			className="bg-transparent p-1 text-red-400 rounded-lg border-2 border-red-400"
			rows={12}
			cols={20}
			value={props.value}
			onChange={handleChange}
		></textarea>
	);
};
export default TextArea;
