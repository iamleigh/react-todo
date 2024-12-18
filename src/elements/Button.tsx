import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string,
	icon?: React.ReactNode,
	lead?: React.ReactNode, // Leading icon
	trail?: React.ReactNode, // Trailing icon
	size?: string,
	design?: string,
};

const Button: React.FC<ButtonProps> = ({ label, icon, lead, trail, size, design, ...props }) => {
	let btnClass = 'lq-button';

	// Set icon button class
	btnClass += icon ? ' lq-button--icon' : '';

	// Set button style class
	switch ( design ) {
		case 'primary':
		case 'secondary':
		case 'tertiary':
			btnClass += ` lq-button--${ design }`;
			break;

		default:
			btnClass += ' lq-button--primary';
			break;
	}

	// Set button size class
	switch ( size ) {
		case 'sm':
		case 'md':
		case 'lg':
			btnClass += ` lq-button--${ size }`;
			break

		default:
			btnClass += ' lq-button--md';
			break;
	}

	return (
		<button className={ btnClass } { ...props }>
			{ icon }
			{ (!icon && lead) && lead }
			<span className={`${ icon ? ' rocketui-screen-reader-only' : '' }`}>{ label }</span>
			{ (!icon && trail) && trail }
		</button>
	);
}

export { Button }
