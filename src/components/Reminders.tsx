import React from "react";

const Reminders: React.FC = () => {
	return (
		<div className="lq-reminders">
			<div className="lq-reminders__insert">
				<input />
				<button>Add New</button>
			</div>

			<ul className="lq-reminders__list">
				<li>Item 1 <button>Remove</button></li>
			</ul>
		</div>
	);
}

export { Reminders }
