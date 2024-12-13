import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

test( 'Input: Render element', () => {
	render ( <Input data-testid="input-test-render" /> );
	const element = screen.getByTestId( 'input-test-render' );
	expect( element ).toBeInTheDocument();
});

test( 'Input: Pass value', () => {
	const onChange = jest.fn();
	render( <Input defaultValue="Hello Input" data-testid="input-test" onChange={ onChange } /> );
	expect( screen.getByTestId( 'input-test' ) ).toHaveValue( 'Hello Input' );
});

test( 'Input: Limit type options', () => {
	render( <Input type="radio" data-testid="input-test-radio" /> );
	const radioInput = screen.getByTestId( 'input-test-radio' );
	expect( radioInput ).toHaveProperty( 'type', 'text' );

	render( <Input type="checkbox" data-testid="input-test-checkbox" /> );
	const checkInput = screen.getByTestId( 'input-test-checkbox' );
	expect( checkInput ).toHaveProperty( 'type', 'text' );
});
