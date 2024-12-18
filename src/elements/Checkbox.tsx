import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type Props = {
	uniqueId: string | undefined,
	label: string,
	changeHandler: () => void
}

const Checkbox: React.FC<Props> = ({
	uniqueId,
	label,
	changeHandler
}) => {
	const inputProps = {
		type: 'checkbox',
		id: uniqueId,
		className: 'rocketui-screen-reader-only',
		onChange: changeHandler
	}

	return (
		<label htmlFor={ uniqueId } className="rocketui-checkbox">
			<input { ...inputProps } />

			<div className="rocketui-checkbox__box">
				<FontAwesomeIcon icon={ faCheck } />
			</div>

			<span className="rocketui-screen-reader-only">
				{ label }
			</span>
		</label>
	);
}

export { Checkbox }
