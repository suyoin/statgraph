import { createContext, useState } from "react";

const context = createContext(null);

const ContextProvider = (props) => {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");

	return (
		<context.Provider value={{ input1, setInput1, input2, setInput2 }}>
			{props.children}
		</context.Provider>
	);
};

const ContextConsumer = context.Consumer;
export { ContextProvider, ContextConsumer, context };
