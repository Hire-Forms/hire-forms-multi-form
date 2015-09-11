import React from "react";

import {castArray} from "hire-forms-utils";

import {stringOrArrayOfString} from "hire-forms-prop-types";

//TODO fix propType for this.props.component
class MultiForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formValue: props.model
		};
	}

	handleSave() {
		let attr = castArray(this.props.attr);
		let index = this.props.values.length;
		let key = attr.concat(index);

		this.props.onChange(key, this.state.formValue);

		this.setState({
			formValue: this.props.model
		});
	}

	handleNewChange(key, value) {
		let nextFormValue = {...this.state.formValue, ...{
			[key]: value
		}};

		this.setState({
			...this.state, ...{
				formValue: nextFormValue
			}
		});
	}

	handleRemoveForm(index) {
		let attr = castArray(this.props.attr);
		let key = attr.concat(index);

		this.props.onDelete(key);
	}

	handleChange(key, value) {
		this.props.onChange(key, value);
	}

	handleDelete(key) {
		this.props.onDelete(key);
	}

	handleInvalid(key) {
		if (this.props.onInvalid != null) {
			this.props.onInvalid(key);
		}
	}

	render() {
		let attr = castArray(this.props.attr);

		let formList = (this.props.values.length) ?
			<ul>{
				this.props.values.map((listItem, index) =>
					<li key={index}>
						<this.props.component
							attr={attr.concat(index)}
							onChange={this.handleChange.bind(this)}
							onDelete={this.handleDelete.bind(this)}
							onInvalid={this.handleInvalid.bind(this)}
							value={listItem} />
						<button
							className="hire-remove-form"
							onClick={this.handleRemoveForm.bind(this, index)}
							title="Remove">
							✕
						</button>
					</li>)
			}</ul> :
			null;

		return (
			<div className="hire-multi-form">
				<this.props.component
					onChange={this.handleNewChange.bind(this)}
					value={this.state.formValue} />
				<button
					className="add"
					onClick={this.handleSave.bind(this)}
					title="Add">
					Add
				</button>
				{formList}
			</div>
		);
	}
}

MultiForm.defaultProps = {
	values: []
};

MultiForm.propTypes = {
	attr: stringOrArrayOfString,
	component: React.PropTypes.func.isRequired,
	model: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func,
	onDelete: React.PropTypes.func,
	onInvalid: React.PropTypes.func,
	values: React.PropTypes.array
};

export default MultiForm;