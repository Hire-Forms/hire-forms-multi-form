import React from "react";
import cx from "classnames";

import {castArray} from "hire-forms-utils";

import {stringOrArrayOfString} from "hire-forms-prop-types";

import RemoveButton from "./remove-button";

// <DateAndLocalityForm
// 	attr={"origin"}
// 	onChange={this.props.handleChange}
// 	onInvalid={this.props.handleInvalid}
// 	formData={model.origin} />

//TODO fix propType for this.props.component
class MultiForm extends React.Component {
	handleRemoveForm(index) {
		let attr = castArray(this.props.attr);
		let key = attr.concat(index);

		this.props.onDelete(key);
	}

	handleInvalid(key) {
		if (this.props.onInvalid != null) {
			this.props.onInvalid(key);
		}
	}

	handleAdd() {
		let values = castArray(this.props.model).concat(this.props.values);
		// let key = castArray(this.props.attr).concat(this.props.values.length);
		this.props.onChange(this.props.attr, values);
	}



	render() {
		let attr = castArray(this.props.attr);

		let formList = (this.props.values.length) ?
			<ul className="form-list">{
				this.props.values.map((listItem, index) =>
					<li className={cx(
						"form",
						{"new": (listItem === this.props.model)}
						)}
						key={index}>
						<this.props.component
							{...this.props}
							attr={attr.concat(index)}
							formData={listItem}
							onInvalid={this.handleInvalid.bind(this)}/>
						<RemoveButton
							{...this.props}
							attr={attr.concat(index)} />
					</li>)
			}</ul> :
			null;

		return (
			<div className="hire-multi-form">
				<button onClick={this.handleAdd.bind(this)}>
					Add new
				</button>
				{/*<AddForm
					{...this.props}
					attr={attr.concat(this.props.values.length)}/>*/}
				{formList}
			</div>
		);
	}
}

MultiForm.defaultProps = {
	addButtonValue: "Add",
	removeButtonValue: "✕",
	values: []
};

MultiForm.propTypes = {
	addButtonValue: React.PropTypes.string,
	attr: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.array
	]),
	component: React.PropTypes.func.isRequired,
	model: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired,
	onDelete: React.PropTypes.func.isRequired,
	onInvalid: React.PropTypes.func,
	removeButtonValue: React.PropTypes.string,
	values: React.PropTypes.array
};

export default MultiForm;