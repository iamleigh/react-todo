import React from "react";

const TodoList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
	return <ul className="lq-todo-list" { ...props }>{ props.children }</ul>;
};

export { TodoList };
