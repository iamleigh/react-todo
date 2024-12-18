import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

type ChildProps = {
	name: string,
	itemId: number,
	done: boolean,
	checkHandler?: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
	clearHandler?: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
}

const TodoItem: React.FC<ChildProps> = ({ name, itemId, done, checkHandler, clearHandler }) => {
	const [hover, setHover] = useState<boolean>(false);

	return (
		<li
			className={ `rocketui-todo-item${ done ? ' rocketui-todo-item--done' : '' }${ hover ? ' rocketui-todo-item--hover' : '' }` }
			data-item-id={ itemId }
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<span className="rocketui-todo-item__label">
				{ name }
			</span>

			<input
				type="checkbox"
				id={ `todo-item--${ itemId }` }
				className="rocketui-todo-item__check"
				aria-label={ `${ done ? 'Complete' : 'Uncomplete' } ${ name }` }
				checked={ done }
				onChange={ checkHandler } />

			{ clearHandler &&
				<Button
					type="button"
					label="Delete Item"
					icon={ <FontAwesomeIcon icon={ faXmark } /> }
					className="rocketui-todo-item__remove" // Overwrite all styles from component
					onClick={ clearHandler } />
			}
		</li>
	);
};

export { TodoItem };
