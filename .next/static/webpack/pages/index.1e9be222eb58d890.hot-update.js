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

/***/ "./src/components/BooksList/index.tsx":
/*!********************************************!*\
  !*** ./src/components/BooksList/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _store_books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/books */ \"./src/store/books.ts\");\n/* harmony import */ var _BooksItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BooksItem */ \"./src/components/BooksItem/index.tsx\");\n/* harmony import */ var _booksList_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booksList.module.sass */ \"./src/components/BooksList/booksList.module.sass\");\n/* harmony import */ var _booksList_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_booksList_module_sass__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar BooksList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__.observer)(_c = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_booksList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().booksListContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_booksList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().booksList__count),\n                children: [\n                    \"Found \",\n                    _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].totalItems,\n                    \" results\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_booksList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().booksList),\n                children: _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].books.map(function(val) {\n                    var volumeInfo = val[\"volumeInfo\"];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BooksItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            imgSrc: \"http://books.google.com/books/content?id=\".concat(val.id, \"&printsec=frontcover&img=1&zoom=1&source=gbs_api\"),\n                            title: volumeInfo.title,\n                            authors: volumeInfo.authors\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 28\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].books.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_booksList_module_sass__WEBPACK_IMPORTED_MODULE_4___default().booksList__loadMore),\n                onClick: function() {\n                    _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isFinding = true;\n                    _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetchBooks(_store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].searchRequest, true);\n                    _store_books__WEBPACK_IMPORTED_MODULE_2__[\"default\"].currentBooksPage += 1;\n                },\n                children: \"Load More\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 39\n            }, _this) : false\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sp1el\\\\WebstormProjects\\\\booker\\\\booker\\\\src\\\\components\\\\BooksList\\\\index.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n});\n_c1 = BooksList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksList);\nvar _c, _c1;\n$RefreshReg$(_c, \"BooksList$observer\");\n$RefreshReg$(_c1, \"BooksList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb29rc0xpc3QvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0g7QUFDRDtBQUNPO0FBRTNDLElBQU1JLFNBQVMsR0FBR0oseURBQVEsQ0FBQyxnQkFBTTs7SUFDN0IscUJBQ0ksOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFSCxrRkFBd0I7OzBCQUNwQyw4REFBQ0ssTUFBSTtnQkFBQ0YsU0FBUyxFQUFFSCxnRkFBc0I7O29CQUFFLFFBQU07b0JBQUNGLCtEQUFnQjtvQkFBQyxVQUFROzs7Ozs7cUJBQU87MEJBQ2hGLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVILHlFQUFlOzBCQUMxQkYsOERBQWUsQ0FBQyxTQUFDWSxHQUFRLEVBQUs7b0JBQzNCLElBQU1DLFVBQVUsR0FBR0QsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDcEMscUJBQU8sOERBQUNSLEtBQUc7a0NBQ1gsNEVBQUNILGtEQUFTOzRCQUNOYSxNQUFNLEVBQUUsMkNBQTBDLENBQVMsTUFBZ0QsQ0FBdkRGLEdBQUcsQ0FBQ0csRUFBRSxFQUFDLGtEQUFnRCxDQUFDOzRCQUM1R0MsS0FBSyxFQUFFSCxVQUFVLENBQUNHLEtBQUs7NEJBQ3ZCQyxPQUFPLEVBQUVKLFVBQVUsQ0FBQ0ksT0FBTzs7Ozs7a0NBRTdCOzs7Ozs4QkFDSTtpQkFBQyxDQUFDOzs7OztxQkFDVjtZQUNMakIsaUVBQWtCLEdBQUcsQ0FBQyxpQkFBRyw4REFBQ21CLFFBQU07Z0JBQUNkLFNBQVMsRUFBRUgsbUZBQXlCO2dCQUFFbUIsT0FBTyxFQUFFLFdBQU07b0JBQ25GckIsOERBQWUsR0FBRyxJQUFJO29CQUN0QkEsK0RBQWdCLENBQUNBLGtFQUFtQixFQUFFLElBQUksQ0FBQztvQkFDM0NBLHFFQUFzQixJQUFJLENBQUM7aUJBQzlCOzBCQUFFLFdBQVM7Ozs7O3FCQUFTLEdBQUcsS0FBSzs7Ozs7O2FBRTNCLENBQ1Q7Q0FDSixDQUFDOztBQUVGLCtEQUFlRyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jvb2tzTGlzdC9pbmRleC50c3g/MzdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnXHJcbmltcG9ydCBib29rcyBmcm9tICcuLi8uLi9zdG9yZS9ib29rcydcclxuaW1wb3J0IEJvb2tzSXRlbSBmcm9tICcuLi9Cb29rc0l0ZW0nXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2Jvb2tzTGlzdC5tb2R1bGUuc2FzcydcclxuXHJcbmNvbnN0IEJvb2tzTGlzdCA9IG9ic2VydmVyKCgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJvb2tzTGlzdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYm9va3NMaXN0X19jb3VudH0+Rm91bmQge2Jvb2tzLnRvdGFsSXRlbXN9IHJlc3VsdHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib29rc0xpc3R9PlxyXG4gICAgICAgICAgICAgICAge2Jvb2tzLmJvb2tzLm1hcCgodmFsOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2b2x1bWVJbmZvID0gdmFsWyd2b2x1bWVJbmZvJ11cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9va3NJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1NyYz17YGh0dHA6Ly9ib29rcy5nb29nbGUuY29tL2Jvb2tzL2NvbnRlbnQ/aWQ9JHt2YWwuaWR9JnByaW50c2VjPWZyb250Y292ZXImaW1nPTEmem9vbT0xJnNvdXJjZT1nYnNfYXBpYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3ZvbHVtZUluZm8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM9e3ZvbHVtZUluZm8uYXV0aG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbWdTcmM9eydodHRwOi8vYm9va3MuZ29vZ2xlLmNvbS9ib29rcy9wdWJsaXNoZXIvY29udGVudD9pZD1ZeHZLQ1FBQVFCQUomcHJpbnRzZWM9ZnJvbnRjb3ZlciZpbWc9MSZ6b29tPTYmZWRnZT1jdXJsJmltZ3RrPUFGTFJFNzF1YVN5SXVEcUtyOHAwQ196VU5ZTXo1bWtTRkhsZUVtS0hfdU05LW9WV2I5V05BbllkZGE3Z2xINUdobjlGQ0s1WWxDSmwyMjNXeHU3bHZhSUo3czZ5QkwwLWo0SktKTThiMzNpYkN2ZnVHd0pIREV3S3RPR2FjZXRtenJZSDBvTGotQXNwJnNvdXJjZT1nYnNfYXBpJ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Jvb2tzLmJvb2tzLmxlbmd0aCA+IDAgPyA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYm9va3NMaXN0X19sb2FkTW9yZX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYm9va3MuaXNGaW5kaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYm9va3MuZmV0Y2hCb29rcyhib29rcy5zZWFyY2hSZXF1ZXN0LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgYm9va3MuY3VycmVudEJvb2tzUGFnZSArPSAxXHJcbiAgICAgICAgICAgIH19PkxvYWQgTW9yZTwvYnV0dG9uPiA6IGZhbHNlfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzTGlzdCJdLCJuYW1lcyI6WyJvYnNlcnZlciIsImJvb2tzIiwiQm9va3NJdGVtIiwic3R5bGUiLCJCb29rc0xpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJib29rc0xpc3RDb250YWluZXIiLCJzcGFuIiwiYm9va3NMaXN0X19jb3VudCIsInRvdGFsSXRlbXMiLCJib29rc0xpc3QiLCJtYXAiLCJ2YWwiLCJ2b2x1bWVJbmZvIiwiaW1nU3JjIiwiaWQiLCJ0aXRsZSIsImF1dGhvcnMiLCJsZW5ndGgiLCJidXR0b24iLCJib29rc0xpc3RfX2xvYWRNb3JlIiwib25DbGljayIsImlzRmluZGluZyIsImZldGNoQm9va3MiLCJzZWFyY2hSZXF1ZXN0IiwiY3VycmVudEJvb2tzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BooksList/index.tsx\n"));

/***/ })

});