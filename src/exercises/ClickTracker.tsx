import React, { useState, useCallback } from "react";

interface UseClickTrackerState {
	count: number;
	lastClicked: string | null;
}

const useClickTracker = (): [UseClickTrackerState, () => void] => {
	const [state, setState] = useState<UseClickTrackerState>({
		count: 0,
		lastClicked: null,
	});

	const incrementCount = useCallback( () => {
		setState(prev => ({
			count: prev.count + 1,
			lastClicked: new Date( Date.now() ).toLocaleString(),
		}));
	}, [setState]);

	return [state, incrementCount] as const;
}

const ClickTracker: React.FC = () => {
	const [state, setState] = useClickTracker();

	return (
		<>
			<p>Button has been clicked {state.count || 0} times</p>
			<p>Last clicked at: { state.lastClicked || 'Never' }</p>
			<button onClick={ setState }>Click Me</button>
		</>
	);
}

export { ClickTracker }