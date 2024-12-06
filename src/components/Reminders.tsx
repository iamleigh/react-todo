import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [items, setItems] = useState<{ id: number, name: string }[]>([]);
	const [counter, setCounter] = useState<number>(1);

	const addItem = () => {
		setItems( ( v ) => [
			...v,
			{ id: counter, name: `Sample #${ counter }` }
		]);
		setCounter( prev => prev + 1 ); // Increment the counter
	}

	const handleEnter = ( e: { key: string; } ) => {
		if ( 'Enter' === e.key ) {
			addItem();
		}
	}

	return (
		<div className="lq-reminders">
			<div className="lq-reminders__insert">
				<input type="text" onKeyDown={ handleEnter } />
				<button onClick={ addItem }>Add New</button>
			</div>

			<ul className="lq-reminders__list">
				{ items.map( ( item, index ) => <ListItem key={ index } name={ item.name } /> ) }
			</ul>
		</div>
	);
}

export { Reminders }
