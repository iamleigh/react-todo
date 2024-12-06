import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [items, setItems] = useState<number[]>([]);
	const [counter, setCounter] = useState<number>(1);

	const addItem = () => {
		setItems( v => [ ...v, counter ] );
		setCounter( prev => prev + 1 ); // Increment the counter
	}

	return (
		<div className="lq-reminders">
			<div className="lq-reminders__insert">
				<input type="text" />
				<button onClick={ addItem }>Add New</button>
			</div>

			<ul className="lq-reminders__list">
				{ items.map( () => <ListItem name="text" /> ) }
			</ul>
		</div>
	);
}

export { Reminders }
