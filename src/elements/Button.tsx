import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: String,
	lead?: React.ReactNode,
	trail?: React.ReactNode,
	design?: String,
	hideLabel?: Boolean,
};

const Button: React.FC<ButtonProps> = ({ label, lead, trail, design, hideLabel, ...props }) => {
	let type;

	// Limit button design options
	switch ( design ) {
		case 'primary':
		case 'secondary':
		case 'tertiary':
			type = ` lq-button--${design}`;
			break;

		default:
			type = ' lq-button--primary';
			break;
	}

	return (
		<button className={`lq-button${ type }`} { ...props }>
			{ lead }
			<span className={`${ hideLabel ? ' lq-sronly' : '' }`}>{ label }</span>
			{ trail }
		</button>
	);
}

export { Button }