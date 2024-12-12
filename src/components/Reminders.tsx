import React, { useState } from "react";

import { ListItem } from "./ListItem";

const Reminders: React.FC = () => {
	const [todos, setTodos] = useState<{ id: number, label: string, done: boolean }[]>([]);
	const [counter, setCounter] = useState<number>(1);
	const [todoLabel, setTodoLabel] = useState<string>('');
	const [done, setDone] = useState<number>(0);

	const addItem = () => {
		if ( '' !== todoLabel ) {
			// Add new item to the list
			setTodos( ( v ) => [
				...v,
				{ id: counter, label: todoLabel, done: false }
			]);

			// Increment the counter
			setCounter( prev => prev + 1 );

			// Clear input once item gets added
			setTodoLabel( '' );
		}
	}

	const removeItem = ( e: React.MouseEvent<HTMLButtonElement> ) => {
		const button = e.currentTarget as HTMLButtonElement;
		const parent = button.parentElement;
		const index = null !== parent ? parent.getAttribute( 'data-item-id' ) : null;

		if ( null !== index ) {
			const updatedTodos = todos.filter( todo => todo.id !== parseInt( index ) );
			setTodos( updatedTodos );
			if ( done ) {
				setDone( done - 1 );
			}
		}
	}

	const completeItem = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const input = e.currentTarget as HTMLInputElement;
		const parent = input.parentElement;
		const index = null !== parent ? parent.getAttribute( 'data-item-id' ) : null;

		if ( null !== index ) {
			const todoIndex = todos.findIndex( todo => todo.id === parseInt( index ) );
			const updatedTodos = [ ...todos ];

			updatedTodos[ todoIndex ] = {
				...updatedTodos[ todoIndex ],
				done: input.checked,
			};

			setTodos( updatedTodos );
			setDone( input.checked ? done + 1 : done - 1 );
		}
	}

	const handleEnter = ( e: { key: string; } ) => {
		if ( 'Enter' === e.key ) {
			addItem();
		}
	}

	const handleClear = () => {
		const updatedTodos = todos.filter( todo => todo.done !== true );
		setTodos( updatedTodos );
	}

	const handleInputChange = ( e: { target: { value: React.SetStateAction<string>; }; } ) => {
		setTodoLabel( e.target.value );
	}

	return (
		<div className="lq-reminders">
			<div className="lq-reminders__insert">
				<input
					type="text"
					value={ todoLabel || '' }
					onKeyDown={ handleEnter }
					onChange={ handleInputChange } />

				<button onClick={ addItem }>Add New</button>
			</div>

			<ul className="lq-reminders__list">
				{ todos.map( ( todo, index ) => {
					return (
						<ListItem
							key={ index }
							name={ todo.label }
							itemId={ todo.id }
							done={ todo.done }
							checkHandler={ completeItem }
							clearHandler={ removeItem } />
					);
				}) }
			</ul>

			{ todos.length > 0 &&
				<button
					onClick={ handleClear }
					{ ...( done === 0 && { disabled: true }) }>
					Clear Completed
				</button>
			}
		</div>
	);
}

export { Reminders }
