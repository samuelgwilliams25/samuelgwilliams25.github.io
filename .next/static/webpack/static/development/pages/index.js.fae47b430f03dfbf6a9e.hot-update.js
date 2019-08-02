webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/splash.js":
/*!******************************!*\
  !*** ./components/splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _assets_splash_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/splash.gif */ "./assets/splash.gif");
/* harmony import */ var _assets_splash_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_splash_gif__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/Roodey/Documents/Professional/Willent/willent/components/splash.js";



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "splash__Wrapper",
  componentId: "sc-16pddj9-0"
})(["width:100vw;height:100vh;top:0px;left:0px;position:fixed;display:", ";justify-content:center;align-items:center;"], function (props) {
  return props.hasPlayed ? 'none' : 'flex';
});
var SplashLogo = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].img.withConfig({
  displayName: "splash__SplashLogo",
  componentId: "sc-16pddj9-1"
})(["max-height:300px;position:fixed;z-index:3;display:", ";"], function (props) {
  return props.hasPlayed ? 'none' : 'block';
});
var LeftSlide = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "splash__LeftSlide",
  componentId: "sc-16pddj9-2"
})(["@keyframes slideLeft{from{transform:translateX(0vw);}to{transform:translateX(-50vw);}}animation:slideLeft 1000ms linear 2990ms 1 normal none;height:100vh;width:50vw;display:", ";border-right:1px solid black;background-color:white;"], function (props) {
  return props.hasPlayed ? 'none' : 'block';
});
var RightSlide = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "splash__RightSlide",
  componentId: "sc-16pddj9-3"
})(["@keyframes slideRight{from{transform:translateX(0vw);}to{transform:translateX(50vw);}}height:100vh;width:50vw;animation:slideRight 1000ms linear 2990ms 1 normal none;display:", ";background-color:white;border-left:1px solid black;"], function (props) {
  return props.hasPlayed ? 'none' : 'block';
});

var Splash =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Splash, _Component);

  function Splash(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Splash);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Splash).call(this, props));
    _this.state = {
      imgHasPlayed: false,
      hasPlayed: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Splash, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState(function (prevState) {
          return {
            imgHasPlayed: true
          };
        });
      }, 3000);
      setTimeout(function () {
        _this2.setState(function (prevState) {
          return {
            hasPlayed: true
          };
        });
      }, 3900);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
        hasPlayed: this.state.hasPlayed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LeftSlide, {
        hasPlayed: this.state.hasPlayed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SplashLogo, {
        src: _assets_splash_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
        hasPlayed: this.state.imgHasPlayed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RightSlide, {
        hasPlayed: this.state.hasPlayed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    }
  }]);

  return Splash;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Splash);

/***/ })

})
//# sourceMappingURL=index.js.fae47b430f03dfbf6a9e.hot-update.js.map