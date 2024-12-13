import React from "react";
import { TodoList } from "../elements/TodoList";
import { TodoItem } from "../elements/TodoItem";

interface TodosProps extends React.HTMLAttributes<HTMLUListElement> {
	items: ItemsData[];
	checkHandler: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
	clearHandler: ( e: React.MouseEvent<HTMLButtonElement> ) => void,
}

interface ItemsData {
	id: number,
	label: string,
	done: boolean,
}

const Todos: React.FC<TodosProps> = ({ items, checkHandler, clearHandler, ...props }) => {
	return (
		<TodoList { ...props }>
			{ items.map( ( item, index ) => {
				return (
					<TodoItem
						key={ index }
						name={ item.label }
						itemId={ item.id }
						done={ item.done }
						checkHandler={ checkHandler }
						clearHandler={ clearHandler } />
				);
			}) }
		</TodoList>
	);
}

export { Todos }
