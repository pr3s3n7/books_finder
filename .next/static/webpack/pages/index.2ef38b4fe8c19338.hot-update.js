"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BookPageComponent/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/BookPageComponent/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookPageComponent.module.sass */ \"./src/components/BookPageComponent/bookPageComponent.module.sass\");\n/* harmony import */ var _bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/books */ \"./src/store/books.ts\");\nvar _this = undefined;\n\n\n\nvar BookPageComponent = function() {\n    var book = _store_books__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentBook;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent__picture),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: book[\"imgSrc\"]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent__info)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 13\n    }, _this);\n};\n_c = BookPageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPageComponent);\nvar _c;\n$RefreshReg$(_c, \"BookPageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb29rUGFnZUNvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQW1EO0FBQ2Q7QUFFckMsSUFBTUUsaUJBQWlCLEdBQUcsV0FBTTtJQUM1QixJQUFJQyxJQUFJLEdBQVFGLGdFQUFpQjtJQUVqQyxxQkFBUSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUVOLHlGQUF1Qjs7MEJBQzNDLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLGtHQUFnQzswQkFDNUMsNEVBQUNTLEtBQUc7b0JBQUNDLEdBQUcsRUFBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7eUJBQUk7Ozs7O3FCQUMxQjswQkFDTiw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFTiwrRkFBNkI7Ozs7O3FCQUV2Qzs7Ozs7O2FBQ0osQ0FBQztDQUNWO0FBWEtFLEtBQUFBLGlCQUFpQjtBQWF2QiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jvb2tQYWdlQ29tcG9uZW50L2luZGV4LnRzeD9lZDM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuL2Jvb2tQYWdlQ29tcG9uZW50Lm1vZHVsZS5zYXNzJ1xyXG5pbXBvcnQgYm9va3MgZnJvbSAnLi4vLi4vc3RvcmUvYm9va3MnXHJcblxyXG5jb25zdCBCb29rUGFnZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGxldCBib29rOiBhbnkgPSBib29rcy5jdXJyZW50Qm9va1xyXG5cclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tQYWdlQ29tcG9uZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm9va1BhZ2VDb21wb25lbnRfX3BpY3R1cmV9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Ym9va1snaW1nU3JjJ119IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tQYWdlQ29tcG9uZW50X19pbmZvfT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlQ29tcG9uZW50Il0sIm5hbWVzIjpbInN0eWxlIiwiYm9va3MiLCJCb29rUGFnZUNvbXBvbmVudCIsImJvb2siLCJjdXJyZW50Qm9vayIsImRpdiIsImNsYXNzTmFtZSIsImJvb2tQYWdlQ29tcG9uZW50IiwiYm9va1BhZ2VDb21wb25lbnRfX3BpY3R1cmUiLCJpbWciLCJzcmMiLCJib29rUGFnZUNvbXBvbmVudF9faW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BookPageComponent/index.tsx\n"));

/***/ })

});