# Hire-Forms Multi Form

React Component for showing a list of (the same) forms.

## Example

	<MultiForm
		attr={"addresses"}
		onChange={this.handleChange}
		onDelete={this.handleDelete}
		values={model.get("addresses")}
		component = {AddressForm} />