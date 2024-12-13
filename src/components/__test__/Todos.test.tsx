import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Todos } from '../Todos';

test( 'ToDos: Render element', () => {
	const todos = [{
		id: 1,
		label: 'Cookies',
		done: false,
	}];

	const checkHandler = jest.fn();
	const clearHandler = jest.fn();

	render ( <Todos items={ todos } checkHandler={ checkHandler } clearHandler={ clearHandler } data-testid="todo-test-render" /> );
	const element = screen.getByTestId( 'todo-test-render' );
	expect( element ).toBeInTheDocument();
});
