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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookPageComponent.module.sass */ \"./src/components/BookPageComponent/bookPageComponent.module.sass\");\n/* harmony import */ var _bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/books */ \"./src/store/books.ts\");\nvar _this = undefined;\n\n\n\nvar BookPageComponent = function() {\n    var book = _store_books__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentBook;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent__picture),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: book.imgSrc,\n                    className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent__img)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().bookPageComponent__info),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().info__category),\n                        children: [\n                            \"category \\u2192 \",\n                            _store_books__WEBPACK_IMPORTED_MODULE_1__[\"default\"].currentCategory\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().info__title),\n                        children: book.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, _this),\n                    book.authors ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().info__authors),\n                        children: [\n                            \"Authors: \",\n                            book.authors\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 29\n                    }, _this) : false,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, _this),\n                    book.description ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_bookPageComponent_module_sass__WEBPACK_IMPORTED_MODULE_2___default().info__description),\n                        children: book.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 33\n                    }, _this) : false\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Quit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BookPageComponent\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 13\n    }, _this);\n};\n_c = BookPageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPageComponent);\nvar _c;\n$RefreshReg$(_c, \"BookPageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb29rUGFnZUNvbXBvbmVudC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQW1EO0FBQ2Q7QUFFckMsSUFBTUUsaUJBQWlCLEdBQUcsV0FBTTtJQUM1QixJQUFJQyxJQUFJLEdBQVFGLGdFQUFpQjtJQUVqQyxxQkFBUSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUVOLHlGQUF1Qjs7MEJBQzNDLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLGtHQUFnQzswQkFDNUMsNEVBQUNTLEtBQUc7b0JBQUNDLEdBQUcsRUFBRVAsSUFBSSxDQUFDUSxNQUFNO29CQUFFTCxTQUFTLEVBQUVOLDhGQUE0Qjs7Ozs7eUJBQUk7Ozs7O3FCQUNoRTswQkFDTiw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFFTiwrRkFBNkI7O2tDQUN6Qyw4REFBQ2MsR0FBQzt3QkFBQ1IsU0FBUyxFQUFFTixzRkFBb0I7OzRCQUFFLGtCQUFXOzRCQUFDQyxvRUFBcUI7Ozs7Ozs2QkFBSztrQ0FDMUUsOERBQUNhLEdBQUM7d0JBQUNSLFNBQVMsRUFBRU4sbUZBQWlCO2tDQUFHRyxJQUFJLENBQUNlLEtBQUs7Ozs7OzZCQUFLO29CQUNoRGYsSUFBSSxDQUFDZ0IsT0FBTyxpQkFBRyw4REFBQ0wsR0FBQzt3QkFBQ1IsU0FBUyxFQUFFTixxRkFBbUI7OzRCQUFFLFdBQVM7NEJBQUNHLElBQUksQ0FBQ2dCLE9BQU87Ozs7Ozs2QkFBSyxHQUFHLEtBQUs7a0NBQ3RGLDhEQUFDRSxJQUFFOzs7OzZCQUFHO29CQUNMbEIsSUFBSSxDQUFDbUIsV0FBVyxpQkFBRyw4REFBQ1IsR0FBQzt3QkFBQ1IsU0FBUyxFQUFFTix5RkFBdUI7a0NBQUdHLElBQUksQ0FBQ21CLFdBQVc7Ozs7OzZCQUFLLEdBQUcsS0FBSzs7Ozs7O3FCQUN2RjswQkFDTiw4REFBQ0UsUUFBTTswQkFBQyxNQUFJOzs7OztxQkFBUzs7Ozs7O2FBQ25CLENBQUM7Q0FDVjtBQWhCS3RCLEtBQUFBLGlCQUFpQjtBQWtCdkIsK0RBQWVBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Cb29rUGFnZUNvbXBvbmVudC9pbmRleC50c3g/ZWQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi9ib29rUGFnZUNvbXBvbmVudC5tb2R1bGUuc2FzcydcclxuaW1wb3J0IGJvb2tzIGZyb20gJy4uLy4uL3N0b3JlL2Jvb2tzJ1xyXG5cclxuY29uc3QgQm9va1BhZ2VDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgYm9vazogYW55ID0gYm9va3MuY3VycmVudEJvb2tcclxuXHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib29rUGFnZUNvbXBvbmVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tQYWdlQ29tcG9uZW50X19waWN0dXJlfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Jvb2suaW1nU3JjfSBjbGFzc05hbWU9e3N0eWxlLmJvb2tQYWdlQ29tcG9uZW50X19pbWd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tQYWdlQ29tcG9uZW50X19pbmZvfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5pbmZvX19jYXRlZ29yeX0+Y2F0ZWdvcnkg4oaSIHtib29rcy5jdXJyZW50Q2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLmluZm9fX3RpdGxlfT57Ym9vay50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIHtib29rLmF1dGhvcnMgPyA8cCBjbGFzc05hbWU9e3N0eWxlLmluZm9fX2F1dGhvcnN9PkF1dGhvcnM6IHtib29rLmF1dGhvcnN9PC9wPiA6IGZhbHNlfVxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAge2Jvb2suZGVzY3JpcHRpb24gPyA8cCBjbGFzc05hbWU9e3N0eWxlLmluZm9fX2Rlc2NyaXB0aW9ufT57Ym9vay5kZXNjcmlwdGlvbn08L3A+IDogZmFsc2V9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbj5RdWl0PC9idXR0b24+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlQ29tcG9uZW50Il0sIm5hbWVzIjpbInN0eWxlIiwiYm9va3MiLCJCb29rUGFnZUNvbXBvbmVudCIsImJvb2siLCJjdXJyZW50Qm9vayIsImRpdiIsImNsYXNzTmFtZSIsImJvb2tQYWdlQ29tcG9uZW50IiwiYm9va1BhZ2VDb21wb25lbnRfX3BpY3R1cmUiLCJpbWciLCJzcmMiLCJpbWdTcmMiLCJib29rUGFnZUNvbXBvbmVudF9faW1nIiwiYm9va1BhZ2VDb21wb25lbnRfX2luZm8iLCJwIiwiaW5mb19fY2F0ZWdvcnkiLCJjdXJyZW50Q2F0ZWdvcnkiLCJpbmZvX190aXRsZSIsInRpdGxlIiwiYXV0aG9ycyIsImluZm9fX2F1dGhvcnMiLCJociIsImRlc2NyaXB0aW9uIiwiaW5mb19fZGVzY3JpcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BookPageComponent/index.tsx\n"));

/***/ })

});