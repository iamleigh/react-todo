import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ChildProps = {
	name: string
}

const ListItem: React.FC<ChildProps> = ({ name }) => {
	return (
		<li className="lq-item">
			<input type="checkbox" className="lq-item__check" />
			<span className="lq-item__name">{ name }</span>
			<button className="lq-item__remove">
				<FontAwesomeIcon icon={ faXmark } />
				<span>Delete Item</span>
			</button>
		</li>
	);
};

export { ListItem };