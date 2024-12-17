import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Logo: React.FC = () => {
	return (
		<div className="rocketui-logo">
			<div className="rocketui-logo__icon" aria-hidden="true">
				<FontAwesomeIcon icon={ faRocket } />
			</div>

			<h1 className="rocketui-logo__name">Rocket Games</h1>
		</div>
	);
}

export { Logo }
