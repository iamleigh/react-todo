import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [items, setItems] = useState<number[]>([]);

	const addItem = () => {
		const newItem = Date.now();
		setItems( v => [ ...v, newItem ] );
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
