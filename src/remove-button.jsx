import React from "react";

class RemoveButton extends React.Component {
	render() {
		return (
			<button
				className="hire-remove-form"
				onClick={() =>
					this.props.onDelete(this.props.attr)
				}
				title="Remove">
				{this.props.removeButtonValue}
			</button>
		);
	}
}

export default RemoveButton;