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

/***/ "./src/components/BooksItem/index.tsx":
/*!********************************************!*\
  !*** ./src/components/BooksItem/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booksItem.module.sass */ \"./src/components/BooksItem/booksItem.module.sass\");\n/* harmony import */ var _booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar BooksItem = function(param) {\n    var imgSrc = param.imgSrc, title = param.title, authors = param.authors;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book),\n        onClick: function() {\n            return console.log(\"eee\");\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().bookContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgSrc,\n                    height: 300,\n                    width: \"auto\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book__title),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book__authors),\n                    children: authors.join(\",&nbsp;\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, _this);\n};\n_c = BooksItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksItem);\nvar _c;\n$RefreshReg$(_c, \"BooksItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb29rc0l0ZW0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTJDO0FBUTNDLElBQU1DLFNBQVMsR0FBRyxnQkFBNEM7UUFBekNDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsT0FBTyxTQUFQQSxPQUFPO0lBRXZDLHFCQUFPLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sb0VBQVU7UUFBRVEsT0FBTyxFQUFFO21CQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FBQTtrQkFDaEUsNEVBQUNMLEtBQUc7WUFBQ0MsU0FBUyxFQUFFTiw2RUFBbUI7OzhCQUMvQiw4REFBQ1ksS0FBRztvQkFDQUMsR0FBRyxFQUFFWCxNQUFNO29CQUNYWSxNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLE1BQU07Ozs7O3lCQUNmOzhCQUNGLDhEQUFDQyxJQUFFO29CQUFDVixTQUFTLEVBQUVOLDJFQUFpQjs4QkFBR0csS0FBSzs7Ozs7eUJBQU07OEJBQzlDLDhEQUFDZSxJQUFFO29CQUFDWixTQUFTLEVBQUVOLDZFQUFtQjs4QkFBR0ksT0FBTyxDQUFDZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7eUJBQU07Ozs7OztpQkFDaEU7Ozs7O2FBQ0o7Q0FDVDtBQWJLbkIsS0FBQUEsU0FBUztBQWVmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jvb2tzSXRlbS9pbmRleC50c3g/ZTBjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi9ib29rc0l0ZW0ubW9kdWxlLnNhc3MnXHJcblxyXG5pbnRlcmZhY2UgSUJvb2tzSXRlbSB7XHJcbiAgICBpbWdTcmM6IHN0cmluZ1xyXG4gICAgdGl0bGU6IHN0cmluZ1xyXG4gICAgYXV0aG9yczogYW55W11cclxufVxyXG5cclxuY29uc3QgQm9va3NJdGVtID0gKHsgaW1nU3JjLCB0aXRsZSwgYXV0aG9ycyB9OiBJQm9va3NJdGVtKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib29rfSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnZWVlJyl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib29rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXsnYXV0byd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLmJvb2tfX3RpdGxlfT57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGUuYm9va19fYXV0aG9yc30+e2F1dGhvcnMuam9pbignLCZuYnNwOycpfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va3NJdGVtIl0sIm5hbWVzIjpbInN0eWxlIiwiQm9va3NJdGVtIiwiaW1nU3JjIiwidGl0bGUiLCJhdXRob3JzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9vayIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiYm9va0NvbnRhaW5lciIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiaDIiLCJib29rX190aXRsZSIsImg0IiwiYm9va19fYXV0aG9ycyIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BooksItem/index.tsx\n"));

/***/ })

});