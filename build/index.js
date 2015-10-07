(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsTextarea = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsUtils = require("hire-forms-utils");

var _hireFormsPropTypes = require("hire-forms-prop-types");

//TODO fix propType for this.props.component

var MultiForm = (function (_React$Component) {
	_inherits(MultiForm, _React$Component);

	function MultiForm(props) {
		_classCallCheck(this, MultiForm);

		_get(Object.getPrototypeOf(MultiForm.prototype), "constructor", this).call(this, props);

		this.state = {
			formValue: props.model
		};
	}

	_createClass(MultiForm, [{
		key: "handleSave",
		value: function handleSave() {
			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);
			var index = this.props.values.length;
			var key = attr.concat(index);

			this.props.onChange(key, this.state.formValue);

			this.setState({
				formValue: this.props.model
			});
		}
	}, {
		key: "handleNewChange",
		value: function handleNewChange(key, value) {
			var nextFormValue = _extends({}, this.state.formValue, _defineProperty({}, key, value));

			this.setState(_extends({}, this.state, {
				formValue: nextFormValue
			}));
		}
	}, {
		key: "handleRemoveForm",
		value: function handleRemoveForm(index) {
			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);
			var key = attr.concat(index);

			this.props.onDelete(key);
		}
	}, {
		key: "handleChange",
		value: function handleChange(key, value) {
			this.props.onChange(key, value);
		}
	}, {
		key: "handleDelete",
		value: function handleDelete(key) {
			this.props.onDelete(key);
		}
	}, {
		key: "handleInvalid",
		value: function handleInvalid(key) {
			if (this.props.onInvalid != null) {
				this.props.onInvalid(key);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

			var formList = this.props.values.length ? _react2["default"].createElement(
				"ul",
				{ className: "form-list" },
				this.props.values.map(function (listItem, index) {
					return _react2["default"].createElement(
						"li",
						{ className: "form", key: index },
						_react2["default"].createElement(_this.props.component, _extends({}, _this.props, {
							attr: attr.concat(index),
							onChange: _this.handleChange.bind(_this),
							onDelete: _this.handleDelete.bind(_this),
							onInvalid: _this.handleInvalid.bind(_this),
							value: listItem })),
						_react2["default"].createElement(
							"button",
							{
								className: "hire-remove-form",
								onClick: _this.handleRemoveForm.bind(_this, index),
								title: "Remove" },
							_this.props.removeButtonValue
						)
					);
				})
			) : null;

			return _react2["default"].createElement(
				"div",
				{ className: "hire-multi-form" },
				_react2["default"].createElement(this.props.component, _extends({}, this.props, {
					className: "add-form",
					onChange: this.handleNewChange.bind(this),
					value: this.state.formValue })),
				_react2["default"].createElement(
					"button",
					{
						className: "add",
						onClick: this.handleSave.bind(this),
						title: "Add" },
					this.props.addButtonValue
				),
				formList
			);
		}
	}]);

	return MultiForm;
})(_react2["default"].Component);

MultiForm.defaultProps = {
	addButtonValue: "Save",
	removeButtonValue: "✕",
	values: []
};

MultiForm.propTypes = {
	addButtonValue: _react2["default"].PropTypes.string,
	attr: _hireFormsPropTypes.stringOrArrayOfString,
	component: _react2["default"].PropTypes.func.isRequired,
	model: _react2["default"].PropTypes.object.isRequired,
	onChange: _react2["default"].PropTypes.func,
	onDelete: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	removeButtonValue: _react2["default"].PropTypes.string,
	values: _react2["default"].PropTypes.array
};

exports["default"] = MultiForm;
module.exports = exports["default"];

},{"hire-forms-prop-types":1,"hire-forms-utils":3,"react":"react"}],3:[function(require,module,exports){

/*
 * @param {Array} list
 * @returns {Boolean}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isListOfStrings = isListOfStrings;
exports.isKeyValueMap = isKeyValueMap;
exports.castArray = castArray;
exports.castKeyValue = castKeyValue;
exports.castKeyValueArray = castKeyValueArray;

function isListOfStrings(list) {
  if (!Array.isArray(list) || !list.length) {
    return false;
  }

  return list.every(function (item) {
    return typeof item === "string";
  });
}

/*
 * @param {Object} map
 * @returns {Boolean}
 */

function isKeyValueMap(map) {
  if (map == null) {
    return false;
  }

  return map.hasOwnProperty("key") && map.hasOwnProperty("value");
}

/*
 * Always return an array.
 *
 * @param {String|Array} arr
 * @returns {Array}
 */

function castArray(arr) {
  return Array.isArray(arr) ? arr : [arr];
}

;

/*
 * Always return a key/value map.
 *
 * @param {Number|String|Boolean|Object} item
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValue(item) {
  return isKeyValueMap(item) ? item : {
    key: item,
    value: item
  };
}

/*
 * Always return an array of key/value maps.
 *
 * @param {Number|String|Boolean|Array|Object} list
 * @returns {Array} Array of key value maps, ie: [{key: "A", value: "A"}, {key: "B", value: "B"}, ...]
 */

function castKeyValueArray(list) {
  list = castArray(list);

  return list.map(castKeyValue);
}

},{}]},{},[2])(2)
});