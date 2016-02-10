(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsMultiForm = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireFormsOptions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var keyValueMap = _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
});

exports.keyValueMap = keyValueMap;
// ARRAY OF

var arrayOfKeyValueMaps = _react2["default"].PropTypes.arrayOf(keyValueMap);

exports.arrayOfKeyValueMaps = arrayOfKeyValueMaps;
var arrayOfStrings = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string);

exports.arrayOfStrings = arrayOfStrings;
var arrayOfElements = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element);

exports.arrayOfElements = arrayOfElements;
// OR

var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrKeyValueMap = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, keyValueMap]);

exports.stringOrKeyValueMap = stringOrKeyValueMap;
var stringOrArrayOfStrings = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, arrayOfStrings]);

exports.stringOrArrayOfStrings = stringOrArrayOfStrings;
var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, arrayOfElements]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
var arrayOfStringsOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([arrayOfStrings, arrayOfKeyValueMaps]);

exports.arrayOfStringsOrArrayOfKeyValueMaps = arrayOfStringsOrArrayOfKeyValueMaps;
var keyValueMapOrArrayOfKeyValueMaps = _react2["default"].PropTypes.oneOfType([keyValueMap, arrayOfKeyValueMaps]);
exports.keyValueMapOrArrayOfKeyValueMaps = keyValueMapOrArrayOfKeyValueMaps;

},{"react":"react"}]},{},[1])(1)
});
},{"react":"react"}],2:[function(_dereq_,module,exports){

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

},{}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsUtils = _dereq_("hire-forms-utils");

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var _removeButton = _dereq_("./remove-button");

var _removeButton2 = _interopRequireDefault(_removeButton);

// <DateAndLocalityForm
// 	attr={"origin"}
// 	onChange={this.props.handleChange}
// 	onInvalid={this.props.handleInvalid}
// 	formData={model.origin} />

//TODO fix propType for this.props.component

var MultiForm = (function (_React$Component) {
	_inherits(MultiForm, _React$Component);

	function MultiForm() {
		_classCallCheck(this, MultiForm);

		_get(Object.getPrototypeOf(MultiForm.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(MultiForm, [{
		key: "handleRemoveForm",
		value: function handleRemoveForm(index) {
			var attr = (0, _hireFormsUtils.castArray)(this.props.attr);
			var key = attr.concat(index);

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
		key: "handleAdd",
		value: function handleAdd() {
			var values = (0, _hireFormsUtils.castArray)(this.props.model).concat(this.props.values);
			// let key = castArray(this.props.attr).concat(this.props.values.length);
			this.props.onChange(this.props.attr, values);
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
						{ className: (0, _classnames2["default"])("form", { "new": listItem === _this.props.model }),
							key: index },
						_react2["default"].createElement(_this.props.component, _extends({}, _this.props, {
							attr: attr.concat(index),
							formData: listItem,
							onInvalid: _this.handleInvalid.bind(_this) })),
						_react2["default"].createElement(_removeButton2["default"], _extends({}, _this.props, {
							attr: attr.concat(index) }))
					);
				})
			) : null;

			return _react2["default"].createElement(
				"div",
				{ className: "hire-multi-form" },
				_react2["default"].createElement(
					"button",
					{ onClick: this.handleAdd.bind(this) },
					"Add new"
				),
				formList
			);
		}
	}]);

	return MultiForm;
})(_react2["default"].Component);

MultiForm.defaultProps = {
	addButtonValue: "Add",
	removeButtonValue: "✕",
	values: []
};

MultiForm.propTypes = {
	addButtonValue: _react2["default"].PropTypes.string,
	attr: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]),
	component: _react2["default"].PropTypes.func.isRequired,
	model: _react2["default"].PropTypes.object.isRequired,
	onChange: _react2["default"].PropTypes.func.isRequired,
	onDelete: _react2["default"].PropTypes.func.isRequired,
	onInvalid: _react2["default"].PropTypes.func,
	removeButtonValue: _react2["default"].PropTypes.string,
	values: _react2["default"].PropTypes.array
};

exports["default"] = MultiForm;
module.exports = exports["default"];
/*<AddForm
{...this.props}
attr={attr.concat(this.props.values.length)}/>*/

},{"./remove-button":4,"classnames":"classnames","hire-forms-prop-types":1,"hire-forms-utils":2,"react":"react"}],4:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var RemoveButton = (function (_React$Component) {
	_inherits(RemoveButton, _React$Component);

	function RemoveButton() {
		_classCallCheck(this, RemoveButton);

		_get(Object.getPrototypeOf(RemoveButton.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(RemoveButton, [{
		key: "render",
		value: function render() {
			var _this = this;

			return _react2["default"].createElement(
				"button",
				{
					className: "hire-remove-form",
					onClick: function () {
						return _this.props.onDelete(_this.props.attr);
					},
					title: "Remove" },
				this.props.removeButtonValue
			);
		}
	}]);

	return RemoveButton;
})(_react2["default"].Component);

exports["default"] = RemoveButton;
module.exports = exports["default"];

},{"react":"react"}]},{},[3])(3)
});