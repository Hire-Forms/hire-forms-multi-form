import React from "react";

import {castArray} from "hire-forms-utils";

import {stringOrArrayOfString} from "hire-forms-prop-types";

import AddForm from "./add-form";
import RemoveButton from "./remove-button";

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

	render() {
		let attr = castArray(this.props.attr);

		let formList = (this.props.values.length) ?
			<ul className="form-list">{
				this.props.values.map((listItem, index) =>
					<li className="form" key={index}>
						<this.props.component
							{...this.props}
							attr={attr.concat(index)}
							onChange={this.props.onChange}
							onDelete={this.props.onDelete}
							onInvalid={this.handleInvalid.bind(this)}
							formData={listItem} />
						<RemoveButton
							{...this.props}
							attr={attr.concat(index)} />
					</li>)
			}</ul> :
			null;

		return (
			<div className="hire-multi-form">
				<AddForm
					{...this.props}
					attr={attr.concat(this.props.values.length)}/>
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
	attr: stringOrArrayOfString,
	component: React.PropTypes.func.isRequired,
	model: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired,
	onDelete: React.PropTypes.func.isRequired,
	onInvalid: React.PropTypes.func,
	removeButtonValue: React.PropTypes.string,
	values: React.PropTypes.array
};

export default MultiForm;