import React from "react";

class AddButton extends React.Component {
	render() {
		return (
			<button
				className="add"
				onClick={this.props.onAdd}
				title="Add">
				{this.props.addButtonValue}
			</button>
		);
	}
}

export default AddButton;