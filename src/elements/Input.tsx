import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type?: string
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
	let inputType;

	switch ( type ) {
		case 'text':
		case 'tel':
		case 'email':
		case 'number':
		case 'password':
			inputType = type;
			break;

		default:
			inputType = 'text';
			break;
	}

	return (
		<input
			type={ inputType }
			className="rocketui-input"
			{ ...props } />
	);
}

export { Input }
