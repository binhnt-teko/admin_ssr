webpackHotUpdate_N_E(2,{

/***/ "./src/components/Test/CustomPortModel.ts":
/*!************************************************!*\
  !*** ./src/components/Test/CustomPortModel.ts ***!
  \************************************************/
/*! exports provided: PortModelAlignment, CustomPortModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortModelAlignment\", function() { return PortModelAlignment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomPortModel\", function() { return CustomPortModel; });\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/get */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/get.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _projectstorm_geometry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @projectstorm/geometry */ \"./node_modules/@projectstorm/geometry/dist/es/index.js\");\n/* harmony import */ var _projectstorm_geometry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_projectstorm_geometry__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @projectstorm/react-canvas-core */ \"./node_modules/@projectstorm/react-canvas-core/dist/es/index.js\");\n/* harmony import */ var _projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar PortModelAlignment;\n\n(function (PortModelAlignment) {\n  PortModelAlignment[\"TOP\"] = \"top\";\n  PortModelAlignment[\"LEFT\"] = \"left\";\n  PortModelAlignment[\"BOTTOM\"] = \"bottom\";\n  PortModelAlignment[\"RIGHT\"] = \"right\";\n})(PortModelAlignment || (PortModelAlignment = {}));\n\nvar CustomPortModel = /*#__PURE__*/function (_BasePositionModel) {\n  Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CustomPortModel, _BasePositionModel);\n\n  var _super = _createSuper(CustomPortModel);\n\n  // calculated post rendering so routing can be done correctly\n  function CustomPortModel(name, type, key) {\n    var _this;\n\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CustomPortModel);\n\n    _this = _super.call(this, {\n      name: v4(),\n      extras: {\n        name: name,\n        type: type,\n        key: key\n      }\n    });\n\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"links\", void 0);\n\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"width\", void 0);\n\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"height\", void 0);\n\n    Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"reportedPosition\", void 0);\n\n    _this.links = {};\n    _this.reportedPosition = false;\n    return _this;\n  }\n\n  Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CustomPortModel, [{\n    key: \"deserialize\",\n    value: function deserialize(event) {\n      Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CustomPortModel.prototype), \"deserialize\", this).call(this, event);\n\n      this.reportedPosition = false;\n      this.options.name = event.data.name;\n      this.options.alignment = event.data.alignment;\n    }\n  }, {\n    key: \"serialize\",\n    value: function serialize() {\n      return _objectSpread(_objectSpread({}, Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CustomPortModel.prototype), \"serialize\", this).call(this)), {}, {\n        name: this.options.name,\n        alignment: this.options.alignment,\n        parentNode: this.parent.getID(),\n        links: lodash__WEBPACK_IMPORTED_MODULE_8__[\"map\"](this.links, function (link) {\n          return link.getID();\n        })\n      });\n    }\n  }, {\n    key: \"setPosition\",\n    value: function setPosition(x, y) {\n      var _this2 = this;\n\n      var old = this.position;\n\n      Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CustomPortModel.prototype), \"setPosition\", this).call(this, x, y);\n\n      lodash__WEBPACK_IMPORTED_MODULE_8__[\"forEach\"](this.getLinks(), function (link) {\n        var point = link.getPointForPort(_this2);\n        point.setPosition(point.getX() + x - old.x, point.getY() + y - old.y);\n      });\n    }\n  }, {\n    key: \"doClone\",\n    value: function doClone() {\n      var lookupTable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var clone = arguments.length > 1 ? arguments[1] : undefined;\n      clone.links = {};\n      clone.parentNode = this.getParent().clone(lookupTable);\n    }\n  }, {\n    key: \"getNode\",\n    value: function getNode() {\n      return this.getParent();\n    }\n  }, {\n    key: \"getName\",\n    value: function getName() {\n      return this.options.name;\n    }\n  }, {\n    key: \"getMaximumLinks\",\n    value: function getMaximumLinks() {\n      return this.options.maximumLinks;\n    }\n  }, {\n    key: \"setMaximumLinks\",\n    value: function setMaximumLinks(maximumLinks) {\n      this.options.maximumLinks = maximumLinks;\n    }\n  }, {\n    key: \"removeLink\",\n    value: function removeLink(link) {\n      delete this.links[link.getID()];\n    }\n  }, {\n    key: \"addLink\",\n    value: function addLink(link) {\n      this.links[link.getID()] = link;\n    }\n  }, {\n    key: \"getLinks\",\n    value: function getLinks() {\n      return this.links;\n    }\n  }, {\n    key: \"createLinkModel\",\n    value: function createLinkModel() {\n      if (lodash__WEBPACK_IMPORTED_MODULE_8__[\"isFinite\"](this.options.maximumLinks)) {\n        var numberOfLinks = lodash__WEBPACK_IMPORTED_MODULE_8__[\"size\"](this.links);\n\n        if (this.options.maximumLinks === 1 && numberOfLinks >= 1) {\n          return lodash__WEBPACK_IMPORTED_MODULE_8__[\"values\"](this.links)[0];\n        } else if (numberOfLinks >= this.options.maximumLinks) {\n          return null;\n        }\n      }\n\n      return null;\n    }\n  }, {\n    key: \"reportPosition\",\n    value: function reportPosition() {\n      var _this3 = this;\n\n      lodash__WEBPACK_IMPORTED_MODULE_8__[\"forEach\"](this.getLinks(), function (link) {\n        link.getPointForPort(_this3).setPosition(_this3.getCenter());\n      });\n\n      this.fireEvent({\n        entity: this\n      }, 'reportInitialPosition');\n    }\n  }, {\n    key: \"getCenter\",\n    value: function getCenter() {\n      return new _projectstorm_geometry__WEBPACK_IMPORTED_MODULE_9__[\"Point\"](this.getX() + this.width / 2, this.getY() + this.height / 2);\n    }\n  }, {\n    key: \"updateCoords\",\n    value: function updateCoords(coords) {\n      this.width = coords.getWidth();\n      this.height = coords.getHeight();\n      this.setPosition(coords.getTopLeft());\n      this.reportedPosition = true;\n      this.reportPosition();\n    }\n  }, {\n    key: \"canLinkToPort\",\n    value: function canLinkToPort(port) {\n      return true;\n    }\n  }, {\n    key: \"isLocked\",\n    value: function isLocked() {\n      return Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Object(_home_tuanquang_admin_ssr_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CustomPortModel.prototype), \"isLocked\", this).call(this) || this.getParent().isLocked();\n    }\n  }]);\n\n  return CustomPortModel;\n}(_projectstorm_react_canvas_core__WEBPACK_IMPORTED_MODULE_10__[\"BasePositionModel\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVzdC9DdXN0b21Qb3J0TW9kZWwudHM/NTE5MSJdLCJuYW1lcyI6WyJQb3J0TW9kZWxBbGlnbm1lbnQiLCJDdXN0b21Qb3J0TW9kZWwiLCJuYW1lIiwidHlwZSIsImtleSIsInY0IiwiZXh0cmFzIiwibGlua3MiLCJyZXBvcnRlZFBvc2l0aW9uIiwiZXZlbnQiLCJvcHRpb25zIiwiZGF0YSIsImFsaWdubWVudCIsInBhcmVudE5vZGUiLCJwYXJlbnQiLCJnZXRJRCIsIl8iLCJsaW5rIiwieCIsInkiLCJvbGQiLCJwb3NpdGlvbiIsImdldExpbmtzIiwicG9pbnQiLCJnZXRQb2ludEZvclBvcnQiLCJzZXRQb3NpdGlvbiIsImdldFgiLCJnZXRZIiwibG9va3VwVGFibGUiLCJjbG9uZSIsImdldFBhcmVudCIsIm1heGltdW1MaW5rcyIsIm51bWJlck9mTGlua3MiLCJnZXRDZW50ZXIiLCJmaXJlRXZlbnQiLCJlbnRpdHkiLCJQb2ludCIsIndpZHRoIiwiaGVpZ2h0IiwiY29vcmRzIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJnZXRUb3BMZWZ0IiwicmVwb3J0UG9zaXRpb24iLCJwb3J0IiwiaXNMb2NrZWQiLCJCYXNlUG9zaXRpb25Nb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVdPLElBQUtBLGtCQUFaOztXQUFZQSxrQjtBQUFBQSxvQjtBQUFBQSxvQjtBQUFBQSxvQjtBQUFBQSxvQjtHQUFBQSxrQixLQUFBQSxrQjs7QUEwQkwsSUFBTUMsZUFBYjtBQUFBOztBQUFBOztBQUdDO0FBTUEsMkJBQVlDLElBQVosRUFBMEJDLElBQTFCLEVBQXdDQyxHQUF4QyxFQUFxRDtBQUFBOztBQUFBOztBQUNwRCw4QkFBTTtBQUNMRixVQUFJLEVBQUVHLEVBQUUsRUFESDtBQUVMQyxZQUFNLEVBQUU7QUFBRUosWUFBSSxFQUFFQSxJ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QTtBQW5IRjtBQUFBO0FBQUEsa0NBcUhlQyxJQXJIZixFQXFIK0M7QUFDN0MsYUFBTyxJQUFQO0FBQ0E7QUF2SEY7QUFBQTtBQUFBLCtCQXlIWTtBQUNWLGFBQU8scVZBQW9CLEtBQUtkLFNBQUwsR0FBaUJlLFFBQWpCLEVBQTNCO0FBQ0E7QUEzSEY7O0FBQUE7QUFBQSxFQUFzRkMsa0ZBQXRGIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGVzdC9DdXN0b21Qb3J0TW9kZWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnQHByb2plY3RzdG9ybS9nZW9tZXRyeSc7XG5pbXBvcnQge1xuXHRCYXNlRW50aXR5RXZlbnQsXG5cdEJhc2VNb2RlbE9wdGlvbnMsXG5cdEJhc2VQb3NpdGlvbk1vZGVsLFxuXHRCYXNlUG9zaXRpb25Nb2RlbEdlbmVyaWNzLFxuXHRCYXNlUG9zaXRpb25Nb2RlbExpc3RlbmVyLFxuXHREZXNlcmlhbGl6ZUV2ZW50XG59IGZyb20gJ0Bwcm9qZWN0c3Rvcm0vcmVhY3QtY2FudmFzLWNvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tTm9kZU1vZGVsIH0gZnJvbSBcIi4vQ3VzdG9tTm9kZU1vZGVsXCI7XG5pbXBvcnQgeyBDdXN0b21MaW5rTW9kZWwgfSBmcm9tIFwiLi9DdXN0b21MaW5rTW9kZWxcIjtcblxuZXhwb3J0IGVudW0gUG9ydE1vZGVsQWxpZ25tZW50IHtcblx0VE9QID0gJ3RvcCcsXG5cdExFRlQgPSAnbGVmdCcsXG5cdEJPVFRPTSA9ICdib3R0b20nLFxuXHRSSUdIVCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3J0TW9kZWxMaXN0ZW5lciBleHRlbmRzIEJhc2VQb3NpdGlvbk1vZGVsTGlzdGVuZXIge1xuXHQvKipcblx0ICogZmlyZXMgd2hlbiBpdCBmaXJzdCByZWNlaXZlcyBwb3NpdGlvbmFsIGluZm9ybWF0aW9uXG5cdCAqL1xuXHRyZXBvcnRJbml0aWFsUG9zaXRpb24/OiAoZXZlbnQ6IEJhc2VFbnRpdHlFdmVudDxDdXN0b21Qb3J0TW9kZWw+KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRNb2RlbE9wdGlvbnMgZXh0ZW5kcyBCYXNlTW9kZWxPcHRpb25zIHtcblx0YWxpZ25tZW50PzogUG9ydE1vZGVsQWxpZ25tZW50O1xuXHRtYXhpbXVtTGlua3M/OiBudW1iZXI7XG5cdG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3J0TW9kZWxHZW5lcmljcyBleHRlbmRzIEJhc2VQb3NpdGlvbk1vZGVsR2VuZXJpY3Mge1xuXHRPUFRJT05TOiBQb3J0TW9kZWxPcHRpb25zO1xuXHRQQVJFTlQ6IEN1c3RvbU5vZGVNb2RlbDtcblx0TElTVEVORVI6IFBvcnRNb2RlbExpc3RlbmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tUG9ydE1vZGVsPEcgZXh0ZW5kcyBQb3J0TW9kZWxHZW5lcmljcyA9IFBvcnRNb2RlbEdlbmVyaWNzPiBleHRlbmRzIEJhc2VQb3NpdGlvbk1vZGVsPEc+IHtcblx0bGlua3M6IHsgW2lkOiBzdHJpbmddOiBDdXN0b21MaW5rTW9kZWwgfTtcblxuXHQvLyBjYWxjdWxhdGVkIHBvc3QgcmVuZGVyaW5nIHNvIHJvdXRpbmcgY2FuIGJlIGRvbmUgY29ycmVjdGx5XG5cdHdpZHRoOiBudW1iZXI7XG5cdGhlaWdodDogbnVtYmVyO1xuXHRyZXBvcnRlZFBvc2l0aW9uOiBib29sZWFuO1xuXG5cblx0Y29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0bmFtZTogdjQoKSxcblx0XHRcdGV4dHJhczogeyBuYW1lOiBuYW1lLCB0eXBlOiB0eXBlLCBrZXk6IGtleSB9LFxuXHRcdH0pO1xuXHRcdHRoaXMubGlua3MgPSB7fTtcblx0XHR0aGlzLnJlcG9ydGVkUG9zaXRpb24gPSBmYWxzZTtcblx0fVxuXG5cdGRlc2VyaWFsaXplKGV2ZW50OiBEZXNlcmlhbGl6ZUV2ZW50PHRoaXM+KSB7XG5cdFx0c3VwZXIuZGVzZXJpYWxpemUoZXZlbnQpO1xuXHRcdHRoaXMucmVwb3J0ZWRQb3NpdGlvbiA9IGZhbHNlO1xuXHRcdHRoaXMub3B0aW9ucy5uYW1lID0gZXZlbnQuZGF0YS5uYW1lO1xuXHRcdHRoaXMub3B0aW9ucy5hbGlnbm1lbnQgPSBldmVudC5kYXRhLmFsaWdubWVudDtcblx0fVxuXG5cdHNlcmlhbGl6ZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3VwZXIuc2VyaWFsaXplKCksXG5cdFx0XHRuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcblx0XHRcdGFsaWdubWVudDogdGhpcy5vcHRpb25zLmFsaWdubWVudCxcblx0XHRcdHBhcmVudE5vZGU6IHRoaXMucGFyZW50LmdldElEKCksXG5cdFx0XHRsaW5rczogXy5tYXAodGhpcy5saW5rcywgKGxpbmspID0+IHtcblx0XHRcdFx0cmV0dXJuIGxpbmsuZ2V0SUQoKTtcblx0XHRcdH0pXG5cdFx0fTtcblx0fVxuXG5cdHNldFBvc2l0aW9uKHBvaW50OiBQb2ludCk7XG5cdHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTtcblx0c2V0UG9zaXRpb24oeCwgeT8pIHtcblx0XHRsZXQgb2xkID0gdGhpcy5wb3NpdGlvbjtcblx0XHRzdXBlci5zZXRQb3NpdGlvbih4LCB5KTtcblx0XHRfLmZvckVhY2godGhpcy5nZXRMaW5rcygpLCAobGluaykgPT4ge1xuXHRcdFx0bGV0IHBvaW50ID0gbGluay5nZXRQb2ludEZvclBvcnQodGhpcyk7XG5cdFx0XHRwb2ludC5zZXRQb3NpdGlvbihwb2ludC5nZXRYKCkgKyB4IC0gb2xkLngsIHBvaW50LmdldFkoKSArIHkgLSBvbGQueSk7XG5cdFx0fSk7XG5cdH1cblxuXHRkb0Nsb25lKGxvb2t1cFRhYmxlID0ge30sIGNsb25lKSB7XG5cdFx0Y2xvbmUubGlua3MgPSB7fTtcblx0XHRjbG9uZS5wYXJlbnROb2RlID0gdGhpcy5nZXRQYXJlbnQoKS5jbG9uZShsb29rdXBUYWJsZSk7XG5cdH1cblxuXHRnZXROb2RlKCk6IEN1c3RvbU5vZGVNb2RlbCB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0UGFyZW50KCk7XG5cdH1cblxuXHRnZXROYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5uYW1lO1xuXHR9XG5cblx0Z2V0TWF4aW11bUxpbmtzKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5tYXhpbXVtTGlua3M7XG5cdH1cblxuXHRzZXRNYXhpbXVtTGlua3MobWF4aW11bUxpbmtzOiBudW1iZXIpIHtcblx0XHR0aGlzLm9wdGlvbnMubWF4aW11bUxpbmtzID0gbWF4aW11bUxpbmtzO1xuXHR9XG5cblx0cmVtb3ZlTGluayhsaW5rOiBDdXN0b21MaW5rTW9kZWwpIHtcblx0XHRkZWxldGUgdGhpcy5saW5rc1tsaW5rLmdldElEKCldO1xuXHR9XG5cblx0YWRkTGluayhsaW5rOiBDdXN0b21MaW5rTW9kZWwpIHtcblx0XHR0aGlzLmxpbmtzW2xpbmsuZ2V0SUQoKV0gPSBsaW5rO1xuXHR9XG5cblx0Z2V0TGlua3MoKTogeyBbaWQ6IHN0cmluZ106IEN1c3RvbUxpbmtNb2RlbCB9IHtcblx0XHRyZXR1cm4gdGhpcy5saW5rcztcblx0fVxuXG5cdHB1YmxpYyBjcmVhdGVMaW5rTW9kZWwoKTogQ3VzdG9tTGlua01vZGVsIHwgbnVsbCB7XG5cdFx0aWYgKF8uaXNGaW5pdGUodGhpcy5vcHRpb25zLm1heGltdW1MaW5rcykpIHtcblx0XHRcdHZhciBudW1iZXJPZkxpbmtzOiBudW1iZXIgPSBfLnNpemUodGhpcy5saW5rcyk7XG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm1heGltdW1MaW5rcyA9PT0gMSAmJiBudW1iZXJPZkxpbmtzID49IDEpIHtcblx0XHRcdFx0cmV0dXJuIF8udmFsdWVzKHRoaXMubGlua3MpWzBdO1xuXHRcdFx0fSBlbHNlIGlmIChudW1iZXJPZkxpbmtzID49IHRoaXMub3B0aW9ucy5tYXhpbXVtTGlua3MpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmVwb3J0UG9zaXRpb24oKSB7XG5cdFx0Xy5mb3JFYWNoKHRoaXMuZ2V0TGlua3MoKSwgKGxpbmspID0+IHtcblx0XHRcdGxpbmsuZ2V0UG9pbnRGb3JQb3J0KHRoaXMpLnNldFBvc2l0aW9uKHRoaXMuZ2V0Q2VudGVyKCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZmlyZUV2ZW50KFxuXHRcdFx0e1xuXHRcdFx0XHRlbnRpdHk6IHRoaXNcblx0XHRcdH0sXG5cdFx0XHQncmVwb3J0SW5pdGlhbFBvc2l0aW9uJ1xuXHRcdCk7XG5cdH1cblxuXHRnZXRDZW50ZXIoKTogUG9pbnQge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy5nZXRYKCkgKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodCAvIDIpO1xuXHR9XG5cblx0dXBkYXRlQ29vcmRzKGNvb3JkczogUmVjdGFuZ2xlKSB7XG5cdFx0dGhpcy53aWR0aCA9IGNvb3Jkcy5nZXRXaWR0aCgpO1xuXHRcdHRoaXMuaGVpZ2h0ID0gY29vcmRzLmdldEhlaWdodCgpO1xuXHRcdHRoaXMuc2V0UG9zaXRpb24oY29vcmRzLmdldFRvcExlZnQoKSk7XG5cdFx0dGhpcy5yZXBvcnRlZFBvc2l0aW9uID0gdHJ1ZTtcblx0XHR0aGlzLnJlcG9ydFBvc2l0aW9uKCk7XG5cdH1cblxuXHRjYW5MaW5rVG9Qb3J0KHBvcnQ6IEN1c3RvbVBvcnRNb2RlbCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aXNMb2NrZWQoKSB7XG5cdFx0cmV0dXJuIHN1cGVyLmlzTG9ja2VkKCkgfHwgdGhpcy5nZXRQYXJlbnQoKS5pc0xvY2tlZCgpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Test/CustomPortModel.ts\n");

/***/ })

})