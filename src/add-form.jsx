import React from "react";

import AddButton from "./add-button";

class AddForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: props.model
		};
	}

	handleChange(key, value) {
		let nextFormValue = {...this.state.formData, ...{
			[key]: value
		}};

		this.setState({
			...this.state, ...{
				formData: nextFormValue
			}
		});
	}

	handleAdd() {
		this.props.onChange(this.props.attr, this.state.formData);

		this.resetForm();
	}

	resetForm() {
		this.setState({
			formData: this.props.model
		});
	}

	render() {
		let addButton = <AddButton
			onAdd={this.handleAdd.bind(this)}
			{...this.props} />

		return (
			<this.props.component
				{...this.props}
				addButton={addButton}
				formData={this.state.formData}
				handleChange={this.handleChange.bind(this)}>
			</this.props.component>
		);
	}
}

export default AddForm;