webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contactForm.js":
/*!***********************************!*\
  !*** ./components/contactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/Roodey/Documents/Professional/Willent/willent/components/contactForm.js";


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "contactForm__Wrapper",
  componentId: "sc-1aonc4b-0"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
var TextLine = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "contactForm__TextLine",
  componentId: "sc-1aonc4b-1"
})(["display:block;width:80%;margin-left:10%;height:20px;border-radius:4px;border-style:solid;border-color:#DEDEDE;border-width:1px;margin-bottom:20px;margin-top:5px;padding:5px;font-family:'Blinker',sans-serif;font-size:14px;"]);
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].textarea.withConfig({
  displayName: "contactForm__TextBox",
  componentId: "sc-1aonc4b-2"
})(["display:block;margin-left:10%;width:80%;height:80px;border-radius:4px;border-style:solid;border-color:#DEDEDE;border-width:1px;margin-top:5px;padding:5px;font-family:'Blinker',sans-serif;font-size:14px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].label.withConfig({
  displayName: "contactForm__Label",
  componentId: "sc-1aonc4b-3"
})(["margin-left:10%;font-size:18px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "contactForm__Button",
  componentId: "sc-1aonc4b-4"
})(["display:block;position:absolute;right:20px;bottom:10px;margin-bottom:5px;height:40px;width:60px;border:1px solid #DEDEDE;border-radius:4px;background-color:rgb(22,42,62);color:white;font-size:16px;font-family:'Blinker',sans-serif"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "contactForm__Form",
  componentId: "sc-1aonc4b-5"
})(["min-width:80%;"]);
var Fieldset = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].fieldset.withConfig({
  displayName: "contactForm__Fieldset",
  componentId: "sc-1aonc4b-6"
})(["position:relative;padding-bottom:60px;padding-top:40px;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "contactForm__HeaderWrapper",
  componentId: "sc-1aonc4b-7"
})(["min-width:80%;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "contactForm__Header",
  componentId: "sc-1aonc4b-8"
})([""]);

var ContactForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactForm, _Component);

  function ContactForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    _this.state = {
      first: '',
      last: '',
      company: '',
      email: '',
      phone: '',
      inquiry: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeaderWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Contact Willient")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Form, {
        action: "https://formspree.io/info@willient.com",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Fieldset, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "First Name", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextLine, {
        name: "first",
        value: this.state.first,
        placeholder: "First Name",
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "last",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Last Name", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextLine, {
        name: "last",
        value: this.state.last,
        placeholder: "Last Name",
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Company", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextLine, {
        name: "company",
        placeholder: "Company",
        value: this.state.company,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Email", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextLine, {
        name: "email",
        placeholder: "Email",
        type: "email",
        value: this.state.email,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Phone Number", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextLine, {
        name: "phone",
        placeholder: "Phone Number",
        value: this.state.phone,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "inquiry",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Inquiry", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TextBox, {
        name: "inquiry",
        placeholder: "Inquiry for Willient",
        value: this.state.inquiry,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Send"))));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.1b1be2d4d8e05c394f75.hot-update.js.map