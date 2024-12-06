import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ChildProps = {
	name: string,
	itemId: number,
	clearHandler: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
}

const ListItem: React.FC<ChildProps> = ({ name, itemId, clearHandler }) => {
	return (
		<li className="lq-item">
			<input type="checkbox" className="lq-item__check" />
			<span className="lq-item__name">{ name }</span>
			<button className="lq-item__remove" data-item-id={ itemId } onClick={ clearHandler }>
				<FontAwesomeIcon icon={ faXmark } />
				<span>Delete Item</span>
			</button>
		</li>
	);
};

export { ListItem };