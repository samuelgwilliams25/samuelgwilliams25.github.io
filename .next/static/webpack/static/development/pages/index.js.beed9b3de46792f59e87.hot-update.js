webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contactForm.js":
/*!***********************************!*\
  !*** ./components/contactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utilities_mailer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/mailer */ "./utilities/mailer.js");
/* harmony import */ var _utilities_mailer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utilities_mailer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "/Users/Roodey/Documents/Professional/Willent/willent/components/contactForm.js";




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "contactForm__Wrapper",
  componentId: "sc-1aonc4b-0"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
var TextLine = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].input.withConfig({
  displayName: "contactForm__TextLine",
  componentId: "sc-1aonc4b-1"
})(["display:block;"]);
var TextBox = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].textarea.withConfig({
  displayName: "contactForm__TextBox",
  componentId: "sc-1aonc4b-2"
})([""]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].label.withConfig({
  displayName: "contactForm__Label",
  componentId: "sc-1aonc4b-3"
})([""]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].form.withConfig({
  displayName: "contactForm__Form",
  componentId: "sc-1aonc4b-4"
})([""]);

var ContactForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ContactForm, _Component);

  function ContactForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ContactForm).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm, [{
    key: "sendMail",
    value: function sendMail() {
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.post('http://localhost:1337/mail', {
        user: {
          first: this.state.first,
          last: this.state.last,
          email: this.state.email,
          phone: this.state.phone,
          company: this.state.company
        },
        inquiry: this.state.inquiry
      }).then(function (response) {
        console.log(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Form, {
        method: "post",
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    console.log(_this2.state);
                    console.log('submitting');

                    _this2.sendMail();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "first",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "First Name", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextLine, {
        name: "first",
        value: this.state.first,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "last",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Last Name", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextLine, {
        name: "last",
        value: this.state.last,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Company", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextLine, {
        name: "company",
        value: this.state.company,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Email", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextLine, {
        name: "email",
        type: "email",
        value: this.state.email,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Phone Number", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextLine, {
        name: "phone",
        value: this.state.phone,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Label, {
        htmlFor: "inquiry",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Inquiry", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TextBox, {
        name: "inquiry",
        value: this.state.inquiry,
        onChange: this.saveToState,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Send"))));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=index.js.beed9b3de46792f59e87.hot-update.js.map