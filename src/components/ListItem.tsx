import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ChildProps = {
	name: string,
	itemId: number,
	clearHandler: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
}

const ListItem: React.FC<ChildProps> = ({ name, itemId, clearHandler }) => {
	const [completed, setCompleted] = useState<boolean>(false);

	const completeItem = () => {
		setCompleted( ! completed );
	}

	return (
		<li className={ `lq-item${ completed ? ' lq-item--done' : '' }` }>
			<input
				type="checkbox"
				id={ `todo-item--${ itemId }` }
				className="lq-item__check"
				checked={ completed }
				onClick={ completeItem } />

			<label htmlFor={ `todo-item--${ itemId }` } className="lq-item__name">{ name }</label>

			<button
				className="lq-item__remove"
				data-item-id={ itemId }
				onClick={ clearHandler }>
				<FontAwesomeIcon icon={ faXmark } />
				<span>Delete Item</span>
			</button>
		</li>
	);
};

export { ListItem };