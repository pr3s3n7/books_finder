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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booksItem.module.sass */ \"./src/components/BooksItem/booksItem.module.sass\");\n/* harmony import */ var _booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar BooksItem = function(param) {\n    var imgSrc = param.imgSrc, title = param.title, authors = param.authors;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book),\n        onClick: function() {\n            return console.log(\"eee\");\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().bookContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgSrc,\n                    height: 300,\n                    width: \"auto\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book__title),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: (_booksItem_module_sass__WEBPACK_IMPORTED_MODULE_1___default().book__authors),\n                    children: authors\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksItem\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, _this);\n};\n_c = BooksItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksItem);\nvar _c;\n$RefreshReg$(_c, \"BooksItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb29rc0l0ZW0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTJDO0FBUTNDLElBQU1DLFNBQVMsR0FBRyxnQkFBNEM7UUFBekNDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsT0FBTyxTQUFQQSxPQUFPO0lBRXZDLHFCQUFPLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRU4sb0VBQVU7UUFBRVEsT0FBTyxFQUFFO21CQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FBQTtrQkFDaEUsNEVBQUNMLEtBQUc7WUFBQ0MsU0FBUyxFQUFFTiw2RUFBbUI7OzhCQUMvQiw4REFBQ1ksS0FBRztvQkFDQUMsR0FBRyxFQUFFWCxNQUFNO29CQUNYWSxNQUFNLEVBQUUsR0FBRztvQkFDWEMsS0FBSyxFQUFFLE1BQU07Ozs7O3lCQUNmOzhCQUNGLDhEQUFDQyxJQUFFO29CQUFDVixTQUFTLEVBQUVOLDJFQUFpQjs4QkFBR0csS0FBSzs7Ozs7eUJBQU07OEJBQzlDLDhEQUFDZSxJQUFFO29CQUFDWixTQUFTLEVBQUVOLDZFQUFtQjs4QkFBR0ksT0FBTzs7Ozs7eUJBQU07Ozs7OztpQkFDaEQ7Ozs7O2FBQ0o7Q0FDVDtBQWJLSCxLQUFBQSxTQUFTO0FBZWYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQm9va3NJdGVtL2luZGV4LnRzeD9lMGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuL2Jvb2tzSXRlbS5tb2R1bGUuc2FzcydcclxuXHJcbmludGVyZmFjZSBJQm9va3NJdGVtIHtcclxuICAgIGltZ1NyYzogc3RyaW5nXHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICBhdXRob3JzOiBhbnlbXVxyXG59XHJcblxyXG5jb25zdCBCb29rc0l0ZW0gPSAoeyBpbWdTcmMsIHRpdGxlLCBhdXRob3JzIH06IElCb29rc0l0ZW0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2t9IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdlZWUnKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ1NyY31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9eydhdXRvJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuYm9va19fdGl0bGV9Pnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZS5ib29rX19hdXRob3JzfT57YXV0aG9yc308L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzSXRlbSJdLCJuYW1lcyI6WyJzdHlsZSIsIkJvb2tzSXRlbSIsImltZ1NyYyIsInRpdGxlIiwiYXV0aG9ycyIsImRpdiIsImNsYXNzTmFtZSIsImJvb2siLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImJvb2tDb250YWluZXIiLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImgyIiwiYm9va19fdGl0bGUiLCJoNCIsImJvb2tfX2F1dGhvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BooksItem/index.tsx\n"));

/***/ })

});