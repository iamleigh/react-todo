import React, { useState } from "react";

const useClickCounter = (): [number, () => void] => {
	const [count, setCount] = useState<number>(0);

	const counterIncrement = () => {
		setCount( prev => prev + 1 );
	}

	return [count, counterIncrement];
}

const ClickCounter: React.FC = () => {
	const [clicks, setClicks] = useClickCounter();

	return (
		<>
			<p>Button has been clicked { clicks } times</p>
			<button onClick={ setClicks }>Click Me</button>
		</>
	);
};

export { ClickCounter };