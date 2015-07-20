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
//TODO fix propType for this.props.view
//TODO rename this.props.value to this.props.values

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsUtils = require("hire-forms-utils");

var _hireFormsPropTypes = require("hire-forms-prop-types");

var MultiForm = (function (_React$Component) {
	function MultiForm() {
		_classCallCheck(this, MultiForm);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(MultiForm, _React$Component);

	_createClass(MultiForm, [{
		key: "handleAddForm",

		/**
   * Add a form.
   *
   * The key is the Immutable.List size (equal to highest index + 1).
   * The value is an Immutable.Map. The form will extend/merge the map
   * with default values.
   *
   * @method
   */
		value: function handleAddForm() {
			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);
			var index = this.props.values.size;
			var key = attr.concat(index);

			this.props.onChange(key, new _immutable2["default"].Map());
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
			this.props.onInvalid(key);
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);

			var forms = this.props.values.map(function (listItem, index) {
				return _react2["default"].createElement(
					"li",
					{ key: index },
					_react2["default"].createElement(_this.props.component, {
						attr: attr.concat(index),
						onChange: _this.handleChange.bind(_this),
						onDelete: _this.handleDelete.bind(_this),
						onInvalid: _this.handleInvalid.bind(_this),
						value: listItem }),
					_react2["default"].createElement(
						"button",
						{
							className: "hire-remove-form",
							onClick: _this.handleRemoveForm.bind(_this, index),
							title: "Remove" },
						"-"
					)
				);
			});

			return _react2["default"].createElement(
				"div",
				{ className: "hire-multi-form" },
				_react2["default"].createElement(
					"ul",
					null,
					forms
				),
				_react2["default"].createElement(
					"button",
					{
						className: (0, _classnames2["default"])("hire-add-form", { first: this.props.value.size === 0 }),
						onClick: this.handleAddForm.bind(this),
						title: "Add" },
					"+"
				)
			);
		}
	}]);

	return MultiForm;
})(_react2["default"].Component);

MultiForm.defaultProps = {
	value: new _immutable2["default"].List()
};

// view: React.PropTypes.element.isRequired
MultiForm.propTypes = {
	attr: _hireFormsPropTypes.stringOrArrayOfString,
	onChange: _react2["default"].PropTypes.func,
	onDelete: _react2["default"].PropTypes.func,
	onInvalid: _react2["default"].PropTypes.func,
	values: _react2["default"].PropTypes.instanceOf(_immutable2["default"].List),
	component: _react2["default"].PropTypes.func
};

exports["default"] = MultiForm;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-prop-types":1,"hire-forms-utils":3,"immutable":"immutable","react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var castArray = function castArray(array) {
	return Array.isArray(array) ? array : [array];
};
exports.castArray = castArray;

},{}]},{},[2])(2)
});