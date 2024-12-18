import React from "react";

const TodoList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
	return <ul className="rocketui-todo__list" { ...props }>{ props.children }</ul>;
};

export { TodoList };
