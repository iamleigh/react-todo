import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [todos, setTodos] = useState<{ id: number, name: string }[]>([]);
	const [counter, setCounter] = useState<number>(1);

	const addItem = () => {
		setTodos( ( v ) => [
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
				{ todos.map( ( todo, index ) => <ListItem key={ index } name={ todo.name } /> ) }
			</ul>
		</div>
	);
}

export { Reminders }
