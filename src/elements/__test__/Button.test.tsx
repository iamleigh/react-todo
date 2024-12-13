import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../Button';

test( 'Button: Rendering with required props', () => {
	render( <Button label="Hello Button" /> );
	const element = screen.getByText( 'Hello Button' );
	expect( element ).toBeInTheDocument();
});

test( 'Button: Pass onClick prop when clicked', () => {
	const onClick = jest.fn();
	render( <Button label="Hello Button" onClick={ onClick } /> );
	fireEvent.click( screen.getByText( /Hello Button/i ) );
	expect( onClick ).toHaveBeenCalledTimes(1);
});
