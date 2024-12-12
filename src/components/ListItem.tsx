import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../elements/Button";

type ChildProps = {
	name: string,
	itemId: number,
	done: boolean,
	checkHandler?: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
	clearHandler?: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
}

const ListItem: React.FC<ChildProps> = ({ name, itemId, done, checkHandler, clearHandler }) => {
	return (
		<li
			className={ `lq-item${ done ? ' lq-item--done' : '' }` }
			data-item-id={ itemId }>
			<input
				type="checkbox"
				id={ `todo-item--${ itemId }` }
				className="lq-item__check"
				checked={ done }
				onChange={ checkHandler } />

			<label
				htmlFor={ `todo-item--${ itemId }` }
				className="lq-item__name">
				{ name }
			</label>

			{ clearHandler &&
				<Button
					label="Delete Item"
					lead={ <FontAwesomeIcon icon={ faXmark } /> }
					onClick={ clearHandler }/>
			}
		</li>
	);
};

export { ListItem };