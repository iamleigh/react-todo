import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [todos, setTodos] = useState<{ id: number, label: string }[]>([]);
	const [counter, setCounter] = useState<number>(1);
	const [todoLabel, setTodoLabel] = useState<string>('');

	const addItem = () => {
		if ( '' !== todoLabel ) {
			// Add new item to the list
			setTodos( ( v ) => [
				...v,
				{ id: counter, label: todoLabel }
			]);

			// Increment the counter
			setCounter( prev => prev + 1 );

			// Clear input once item gets added
			setTodoLabel( '' );
		}
	}

	const removeItem = ( event: React.MouseEvent<HTMLButtonElement> ) => {
		const button = event.target as HTMLButtonElement;
		const index = button.getAttribute( 'data-item-id' );

		if ( null !== index && '' !== index ) {
			const updatedTodos = todos.filter( todo => todo.id !== parseInt( index ) );
			setTodos( updatedTodos );
		}
	}

	const handleEnter = ( e: { key: string; } ) => {
		if ( 'Enter' === e.key ) {
			addItem();
		}
	}

	const handleInputChange = ( e: { target: { value: React.SetStateAction<string>; }; } ) => {
		setTodoLabel( e.target.value );
	}

	return (
		<div className="lq-reminders">
			<div className="lq-reminders__insert">
				<input type="text" value={ todoLabel } onKeyDown={ handleEnter } onChange={ handleInputChange } />
				<button onClick={ addItem }>Add New</button>
			</div>

			<ul className="lq-reminders__list">
				{ todos.map( ( todo, index ) => {
					return (
						<ListItem
							key={ index }
							name={ todo.label }
							itemId={ todo.id }
							clearHandler={ removeItem } />
					);
				}) }
			</ul>
		</div>
	);
}

export { Reminders }
