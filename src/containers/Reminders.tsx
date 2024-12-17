import React, { useState } from "react";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { Todos } from "../components/Todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";

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
		setDone( 0 );
	}

	const handleInputChange = ( e: { target: { value: React.SetStateAction<string>; }; } ) => {
		setTodoLabel( e.target.value );
	}

	return (
		<>
			<div className="rocketui-todo__form">
				<Input
					value={ todoLabel || '' }
					onKeyDown={ handleEnter }
					onChange={ handleInputChange } />

				<Button
					icon={<FontAwesomeIcon icon={ faAdd } />}
					label="Add New"
					onClick={ addItem } />
			</div>

			{ todos.length > 0 && (
				<div className="todo-clearBox">
					{ done } Completed • <button type="button" className="" disabled={!( done > 0 )} onClick={ handleClear }>Clear</button>
				</div>
			)}

			<Todos
				items={ todos }
				checkHandler={ completeItem }
				clearHandler={ removeItem } />
		</>
	);
}

export { Reminders }
