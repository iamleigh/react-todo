import React, { useState, useEffect } from "react";

interface useMousePositionState {
	x: number;
	y: number;
}

// React.Dispatch<React.SetStateAction<T>>
// Use that instead of an empty function (() => void)
const useMousePosition = (): [useMousePositionState, React.Dispatch<React.SetStateAction<useMousePositionState>>] => {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect( () => {
		const mousePosition = ( e: MouseEvent ) => {
			setPosition({
				x: e.clientX,
				y: e.clientY,
			});
		}

		window.addEventListener( 'mousemove', mousePosition );

		// Remove event listener to avoid memory leak
		return () => {
			window.removeEventListener( 'mousemove', mousePosition );
		}
	}, [] );

	return [position, setPosition];
}

const MousePosition: React.FC = () => {
	const [position] = useMousePosition();

	return (
		<>
			<p>X: { position.x }</p>
			<p>Y: { position.y }</p>
		</>
	);
}

export { MousePosition }