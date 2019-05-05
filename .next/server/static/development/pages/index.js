module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/services.js":
/*!**************************!*\
  !*** ./apis/services.js ***!
  \**************************/
/*! exports provided: VOUCHER, TSHIRT, MUG, getServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOUCHER", function() { return VOUCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSHIRT", function() { return TSHIRT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUG", function() { return MUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
var VOUCHER = {
  id: 'VOUCHER',
  value: 'VOUCHER',
  title: 'Cabify Voucher',
  price: 5
};
var TSHIRT = {
  id: 'TSHIRT',
  value: 'TSHIRT',
  title: 'Cabify T-Shirt',
  price: 20
};
var MUG = {
  id: 'MUG',
  value: 'MUG',
  title: 'Cafify Coffee Mug',
  price: 7.50
};
var getServices = function getServices() {
  return [VOUCHER, TSHIRT, MUG];
};

/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.scss */ "./components/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/lucasgiuri/Desktop/Cabify/components/Button/Button.js";




var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      classes = _ref.classes,
      isDisabled = _ref.isDisabled;
  var buttonClasses = ['button'];

  if (classes) {
    buttonClasses = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(buttonClasses), [classes]);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onClick,
    className: buttonClasses.join(' '),
    disabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, text);
};

Button.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
Button.defaultProps = {
  onClick: function onClick() {
    return '';
  },
  classes: [''],
  isDisabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/Button.scss":
/*!***************************************!*\
  !*** ./components/Button/Button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/Form.js":
/*!*********************************!*\
  !*** ./components/Form/Form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.scss */ "./components/Form/Form.scss");
/* harmony import */ var _Form_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Selectors_Selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Selectors/Selectors */ "./components/Selectors/Selectors.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
var _jsxFileName = "/Users/lucasgiuri/Desktop/Cabify/components/Form/Form.js";






var Form = function Form(_ref) {
  var selectors = _ref.selectors,
      total = _ref.total,
      onAddClick = _ref.onAddClick,
      onRemoveClick = _ref.onRemoveClick,
      onSelectChange = _ref.onSelectChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Selectors_Selectors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectors: selectors,
    onChange: onSelectChange,
    onClick: onRemoveClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form--add-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Add",
    onClick: onAddClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Total: ", total));
};

Form.propTypes = {
  selectors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onAddClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRemoveClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelectChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Form.defaultProps = {
  onAddClick: function onAddClick() {
    return '';
  },
  onRemoveClick: function onRemoveClick() {
    return '';
  },
  onSelectChange: function onSelectChange() {
    return '';
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/Form/Form.scss":
/*!***********************************!*\
  !*** ./components/Form/Form.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Selectors/Selectors.js":
/*!*******************************************!*\
  !*** ./components/Selectors/Selectors.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _Selectors_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selectors.scss */ "./components/Selectors/Selectors.scss");
/* harmony import */ var _Selectors_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Selectors_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/lucasgiuri/Desktop/Cabify/components/Selectors/Selectors.js";





var Selectors = function Selectors(_ref) {
  var selectors = _ref.selectors,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, selectors.map(function (selector) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "selectors__selector",
      key: selector.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "selectors__selector--select",
      onChange: function onChange() {
        return _onChange(selector.id, event.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Choose a service..."), selector.services.map(function (service) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: "s-".concat(selector.id, "-o-").concat(service.id),
        value: service.value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, service.value);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: "Remove",
      classes: ['button-danger'],
      onClick: function onClick() {
        return _onClick(selector.id);
      },
      isDisabled: selectors.length === 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }));
};

Selectors.propTypes = {
  selectors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Selectors.defaultProps = {
  onChange: function onChange() {
    return '';
  },
  onClick: function onClick() {
    return '';
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Selectors);

/***/ }),

/***/ "./components/Selectors/Selectors.scss":
/*!*********************************************!*\
  !*** ./components/Selectors/Selectors.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Rules_Rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Rules/Rules */ "./utils/Rules/Rules.js");
/* harmony import */ var _store_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/operations */ "./store/operations.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors */ "./store/selectors.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apis_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/services */ "./apis/services.js");
/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form/Form */ "./components/Form/Form.js");

var _jsxFileName = "/Users/lucasgiuri/Desktop/Cabify/pages/index.js";








var App = function App(_ref) {
  var combos = _ref.combos,
      services = _ref.services,
      addCombo = _ref.addCombo,
      removeCombo = _ref.removeCombo,
      updateCombo = _ref.updateCombo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      total = _useState2[0],
      setTotal = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    addCombo();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTotal(Object(_utils_Rules_Rules__WEBPACK_IMPORTED_MODULE_2__["applyRules"])(services));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Cabify combos !"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Form_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectors: combos,
    total: total,
    onAddClick: addCombo,
    onRemoveClick: removeCombo,
    onSelectChange: updateCombo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

var mapStateToPros = function mapStateToPros(state) {
  return {
    combos: _store_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllCombos"](state),
    services: _store_selectors__WEBPACK_IMPORTED_MODULE_4__["getServicesByCombo"](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var services = Object(_apis_services__WEBPACK_IMPORTED_MODULE_6__["getServices"])();
  return {
    addCombo: function addCombo() {
      return dispatch(_store_operations__WEBPACK_IMPORTED_MODULE_3__["addCombo"](services));
    },
    removeCombo: function removeCombo(comboId) {
      return dispatch(_store_operations__WEBPACK_IMPORTED_MODULE_3__["removeCombo"](comboId));
    },
    updateCombo: function updateCombo(comboId, serviceSelected) {
      return dispatch(_store_operations__WEBPACK_IMPORTED_MODULE_3__["updateCombo"](comboId, serviceSelected));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToPros, mapDispatchToProps)(App));

/***/ }),

/***/ "./store/combos/operations.js":
/*!************************************!*\
  !*** ./store/combos/operations.js ***!
  \************************************/
/*! exports provided: addCombo, removeCombo, updateCombo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCombo", function() { return addCombo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCombo", function() { return removeCombo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCombo", function() { return updateCombo; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/combos/types.js");

var addCombo = function addCombo(services) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["ADD_COMBO"],
    services: services
  };
};
var removeCombo = function removeCombo(comboId) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_COMBO"],
    comboId: comboId
  };
};
var updateCombo = function updateCombo(comboId, serviceSelected) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_COMBO"],
    comboId: comboId,
    serviceSelected: serviceSelected
  };
};

/***/ }),

/***/ "./store/combos/selectors.js":
/*!***********************************!*\
  !*** ./store/combos/selectors.js ***!
  \***********************************/
/*! exports provided: getServicesByCombo, getAllCombos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicesByCombo", function() { return getServicesByCombo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCombos", function() { return getAllCombos; });
var getServicesByCombo = function getServicesByCombo(combos) {
  var services = combos.comboById.map(function (comboNum) {
    return combos.byCombo[comboNum].serviceSelected;
  });
  return services.filter(function (service) {
    return service;
  });
};
var getAllCombos = function getAllCombos(combos) {
  return combos.comboById.map(function (comboNum) {
    return combos.byCombo[comboNum];
  });
};

/***/ }),

/***/ "./store/combos/types.js":
/*!*******************************!*\
  !*** ./store/combos/types.js ***!
  \*******************************/
/*! exports provided: ADD_COMBO, UPDATE_COMBO, REMOVE_COMBO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMBO", function() { return ADD_COMBO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMBO", function() { return UPDATE_COMBO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMBO", function() { return REMOVE_COMBO; });
var ADD_COMBO = 'ADD_COMBO';
var UPDATE_COMBO = "UPDATE_COMBO";
var REMOVE_COMBO = "REMOVE_COMBO";

/***/ }),

/***/ "./store/operations.js":
/*!*****************************!*\
  !*** ./store/operations.js ***!
  \*****************************/
/*! exports provided: addCombo, removeCombo, updateCombo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combos_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combos/operations */ "./store/combos/operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCombo", function() { return _combos_operations__WEBPACK_IMPORTED_MODULE_0__["addCombo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeCombo", function() { return _combos_operations__WEBPACK_IMPORTED_MODULE_0__["removeCombo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateCombo", function() { return _combos_operations__WEBPACK_IMPORTED_MODULE_0__["updateCombo"]; });



/***/ }),

/***/ "./store/selectors.js":
/*!****************************!*\
  !*** ./store/selectors.js ***!
  \****************************/
/*! exports provided: getAllCombos, getServicesByCombo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCombos", function() { return getAllCombos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServicesByCombo", function() { return getServicesByCombo; });
/* harmony import */ var _combos_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combos/selectors */ "./store/combos/selectors.js");

var getAllCombos = function getAllCombos(state) {
  return _combos_selectors__WEBPACK_IMPORTED_MODULE_0__["getAllCombos"](state.combos);
};
var getServicesByCombo = function getServicesByCombo(state) {
  return _combos_selectors__WEBPACK_IMPORTED_MODULE_0__["getServicesByCombo"](state.combos);
};

/***/ }),

/***/ "./utils/Offers/MugOffers/mugsBasicOffer.js":
/*!**************************************************!*\
  !*** ./utils/Offers/MugOffers/mugsBasicOffer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var mugsBasicOffer = function mugsBasicOffer(mugs, mugPrice) {
  return mugs * mugPrice;
};

mugsBasicOffer.propTypes = {
  mugs: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  mugPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (mugsBasicOffer);

/***/ }),

/***/ "./utils/Offers/Offers.js":
/*!********************************!*\
  !*** ./utils/Offers/Offers.js ***!
  \********************************/
/*! exports provided: voucherOffers, tshirtOffers, mugOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voucherOffers", function() { return voucherOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tshirtOffers", function() { return tshirtOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mugOffers", function() { return mugOffers; });
/* harmony import */ var _apis_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/services */ "./apis/services.js");
/* harmony import */ var _VoucherOffers_vouchers2for1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoucherOffers/vouchers2for1 */ "./utils/Offers/VoucherOffers/vouchers2for1.js");
/* harmony import */ var _TshirtOffers_tshirtsMoreThan3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TshirtOffers/tshirtsMoreThan3 */ "./utils/Offers/TshirtOffers/tshirtsMoreThan3.js");
/* harmony import */ var _MugOffers_mugsBasicOffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MugOffers/mugsBasicOffer */ "./utils/Offers/MugOffers/mugsBasicOffer.js");




var voucherOffers = function voucherOffers(vouchers) {
  if (!vouchers) {
    return 0;
  }

  var voucherPrice = _apis_services__WEBPACK_IMPORTED_MODULE_0__["VOUCHER"].price;
  return Object(_VoucherOffers_vouchers2for1__WEBPACK_IMPORTED_MODULE_1__["default"])(vouchers, voucherPrice);
};
var tshirtOffers = function tshirtOffers(tshirts) {
  if (!tshirts) {
    return 0;
  }

  var tshirtSpecialPrice = 19;
  var tshirtPrice = _apis_services__WEBPACK_IMPORTED_MODULE_0__["TSHIRT"].price;
  return Object(_TshirtOffers_tshirtsMoreThan3__WEBPACK_IMPORTED_MODULE_2__["default"])(tshirts, tshirtPrice, tshirtSpecialPrice);
};
var mugOffers = function mugOffers(mugs) {
  if (!mugs) {
    return 0;
  }

  var mugPrice = _apis_services__WEBPACK_IMPORTED_MODULE_0__["MUG"].price;
  return Object(_MugOffers_mugsBasicOffer__WEBPACK_IMPORTED_MODULE_3__["default"])(mugs, mugPrice);
};

/***/ }),

/***/ "./utils/Offers/TshirtOffers/tshirtsMoreThan3.js":
/*!*******************************************************!*\
  !*** ./utils/Offers/TshirtOffers/tshirtsMoreThan3.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var tshirtsMoreThan3 = function tshirtsMoreThan3(tshirts, tshirtPrice, tshirtSpecialPrice) {
  var price = tshirtPrice;

  if (tshirts >= 3) {
    price = tshirtSpecialPrice;
  }

  return tshirts * price;
};

tshirtsMoreThan3.propTypes = {
  tshirts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  tshirtPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  tshirtSpecialPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (tshirtsMoreThan3);

/***/ }),

/***/ "./utils/Offers/VoucherOffers/vouchers2for1.js":
/*!*****************************************************!*\
  !*** ./utils/Offers/VoucherOffers/vouchers2for1.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var vouchers2for1 = function vouchers2for1(vouchers, voucherPrice) {
  var total = vouchers * voucherPrice;

  if (vouchers > 1) {
    total = vouchers % 2 === 0 ? total / 2 : total / 2 + voucherPrice / 2;
  }

  return total;
};

vouchers2for1.propTypes = {
  vouchers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  voucherPrice: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (vouchers2for1);

/***/ }),

/***/ "./utils/Rules/Rules.js":
/*!******************************!*\
  !*** ./utils/Rules/Rules.js ***!
  \******************************/
/*! exports provided: applyRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRules", function() { return applyRules; });
/* harmony import */ var _apis_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/services */ "./apis/services.js");
/* harmony import */ var _Offers_Offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Offers/Offers */ "./utils/Offers/Offers.js");



var filterById = function filterById(services, id) {
  if (!services) {
    return 0;
  }

  return services.filter(function (service) {
    return service === id;
  }).length;
};

var applyRules = function applyRules(services) {
  var totalVoucherServices = Object(_Offers_Offers__WEBPACK_IMPORTED_MODULE_1__["voucherOffers"])(filterById(services, _apis_services__WEBPACK_IMPORTED_MODULE_0__["VOUCHER"].value));
  var totalTshirtServices = Object(_Offers_Offers__WEBPACK_IMPORTED_MODULE_1__["tshirtOffers"])(filterById(services, _apis_services__WEBPACK_IMPORTED_MODULE_0__["TSHIRT"].value));
  var totalMugServices = Object(_Offers_Offers__WEBPACK_IMPORTED_MODULE_1__["mugOffers"])(filterById(services, _apis_services__WEBPACK_IMPORTED_MODULE_0__["MUG"].value));
  return totalVoucherServices + totalTshirtServices + totalMugServices;
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lucasgiuri/Desktop/Cabify/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map