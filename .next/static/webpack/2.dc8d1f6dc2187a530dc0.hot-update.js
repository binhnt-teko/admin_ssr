webpackHotUpdate_N_E(2, {
  /***/ './src/components/Test/CustomNodeFactory.tsx':
    /*!***************************************************!*\
  !*** ./src/components/Test/CustomNodeFactory.tsx ***!
  \***************************************************/
    /*! exports provided: CustomNodeFactory */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomNodeFactory", function() { return CustomNodeFactory; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");\n/* harmony import */ var _CustomNodeWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomNodeWidget */ "./src/components/Test/CustomNodeWidget.tsx");\n/* harmony import */ var _CustomNodeModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomNodeModel */ "./src/components/Test/CustomNodeModel.ts");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @projectstorm/react-canvas-core */ "./node_modules/@projectstorm/react-canvas-core/dist/es/index.js");\n/* harmony import */ var _projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = "/home/tuanquang/admin_ssr/src/components/Test/CustomNodeFactory.tsx";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar CustomNodeFactory = /*#__PURE__*/function (_AbstractReactFactory) {\n  Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomNodeFactory, _AbstractReactFactory);\n\n  var _super = _createSuper(CustomNodeFactory);\n\n  function CustomNodeFactory() {\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CustomNodeFactory);\n\n    return _super.call(this, \'custom\');\n  }\n\n  Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomNodeFactory, [{\n    key: "generateReactWidget",\n    value: function generateReactWidget(event) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomNodeWidget__WEBPACK_IMPORTED_MODULE_6__["CustomNodeWidget"], {\n        engine: this.engine,\n        size: 160,\n        node: event.model\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 12\n      }, this);\n    }\n  }, {\n    key: "generateModel",\n    value: function generateModel(event) {\n      return new _CustomNodeModel__WEBPACK_IMPORTED_MODULE_7__["CustomNodeModel"](event);\n    }\n  }]);\n\n  return CustomNodeFactory;\n}(_projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_9__["AbstractReactFactory"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdC9DdXN0b21Ob2RlRmFjdG9yeS50c3g/OTNjNSJdLCJuYW1lcyI6WyJDdXN0b21Ob2RlRmFjdG9yeSIsImV2ZW50IiwiZW5naW5lIiwibW9kZWwiLCJDdXN0b21Ob2RlTW9kZWwiLCJBYnN0cmFjdFJlYWN0RmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxpQkFBYjtBQUFBOztBQUFBOztBQUNFLCtCQUFjO0FBQUE7O0FBQUEsNkJBQ04sUUFETTtBQUViOztBQUhIO0FBQUE7QUFBQSx3Q0FLc0JDLEtBTHRCLEVBSzBDO0FBQ3RDLDBCQUFPLHFFQUFDLGtFQUFEO0FBQWtCLGNBQU0sRUFBRSxLQUFLQyxNQUEvQjtBQUF1QyxZQUFJLEVBQUUsR0FBN0M7QUFBa0QsWUFBSSxFQUFFRCxLQUFLLENBQUNFO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNEO0FBUEg7QUFBQTtBQUFBLGtDQVNnQkYsS0FUaEIsRUFTdUI7QUFDbkIsYUFBTyxJQUFJRyxnRUFBSixDQUFvQkgsS0FBcEIsQ0FBUDtBQUNEO0FBWEg7O0FBQUE7QUFBQSxFQUF1Q0ksb0ZBQXZDIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGVzdC9DdXN0b21Ob2RlRmFjdG9yeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21Ob2RlV2lkZ2V0IH0gZnJvbSAnLi9DdXN0b21Ob2RlV2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbU5vZGVNb2RlbCB9IGZyb20gJy4vQ3VzdG9tTm9kZU1vZGVsJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFic3RyYWN0UmVhY3RGYWN0b3J5IH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC1jYW52YXMtY29yZSc7XG5pbXBvcnQgeyBEaWFncmFtRW5naW5lIH0gZnJvbSAnQHByb2plY3RzdG9ybS9yZWFjdC1kaWFncmFtcy1jb3JlJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbU5vZGVGYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RSZWFjdEZhY3Rvcnk8Q3VzdG9tTm9kZU1vZGVsLCBEaWFncmFtRW5naW5lPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdjdXN0b20nKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmVhY3RXaWRnZXQoZXZlbnQpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDdXN0b21Ob2RlV2lkZ2V0IGVuZ2luZT17dGhpcy5lbmdpbmV9IHNpemU9ezE2MH0gbm9kZT17ZXZlbnQubW9kZWx9IC8+O1xuICB9XG5cbiAgZ2VuZXJhdGVNb2RlbChldmVudCkge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tTm9kZU1vZGVsKGV2ZW50KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Test/CustomNodeFactory.tsx\n'
      );

      /***/
    },
});
