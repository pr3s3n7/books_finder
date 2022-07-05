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

/***/ "./src/store/books.ts":
/*!****************************!*\
  !*** ./src/store/books.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n\n\nvar Books = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Books() {\n        var _this = this;\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Books);\n        this._key = \"AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\";\n        this.books = [];\n        this.items = new Set();\n        this.isFinding = false;\n        this.totalItems = 0;\n        this.currentCategory = \"\";\n        this.currentSorting = \"\";\n        this.clearBooks = function() {\n            _this.books = [];\n            _this.items.clear();\n        };\n        (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeAutoObservable)(this);\n    }\n    var _proto = Books.prototype;\n    _proto.fetchBooks = function fetchBooks(searchRequest) {\n        var _this = this;\n        console.log(this.currentCategory);\n        //https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\n        fetch(\"https://www.googleapis.com/books/v1/volumes?q=\".concat(this.currentCategory, \":\").concat(searchRequest, \"&orderBy=\").concat(this.currentSorting, \"&maxResults=30&key=\").concat(this._key)).then(function(data) {\n            return data.json();\n        }).then(function(data) {\n            _this.isFinding = false;\n            _this.totalItems = data[\"totalItems\"];\n            _this.clearBooks();\n            if (_this.totalItems > 0) {\n                var _this1 = _this;\n                data[\"items\"].map(function(val) {\n                    return _this1.items.add(val);\n                });\n                _this.books = Array.from(_this.items);\n            }\n        });\n    };\n    return Books;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Books());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYm9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBdUM7QUFHdkMsU0FBVyxpQkFtQ1Y7O2FBbkNLQyxLQUFLOzs7UUFDUCxLQUFRQyxJQUFJLEdBQUcseUNBQXlDO1FBQ3hEQyxLQUFBQSxLQUFLLEdBQVUsRUFBRTtRQUNqQkMsS0FBQUEsS0FBSyxHQUFHLElBQUlDLEdBQUcsRUFBRTtRQUNqQkMsS0FBQUEsU0FBUyxHQUFHLEtBQUs7UUFDakJDLEtBQUFBLFVBQVUsR0FBRyxDQUFDO1FBQ2RDLEtBQUFBLGVBQWUsR0FBRyxFQUFFO1FBQ3BCQyxLQUFBQSxjQUFjLEdBQUcsRUFBRTtRQU1uQkMsS0FBQUEsVUFBVSxHQUFHLFdBQU07WUFDZixNQUFLUCxLQUFLLEdBQUcsRUFBRTtZQUNmLE1BQUtDLEtBQUssQ0FBQ08sS0FBSyxFQUFFO1NBQ3JCO1FBTkdYLHdEQUFrQixDQUFDLElBQUksQ0FBQzs7aUJBVjFCQyxLQUFLO0lBa0JQVyxPQUFBQSxVQUFVLEdBQVZBLFNBQUFBLFVBQVUsQ0FBQ0MsYUFBcUIsRUFBRTs7UUFDOUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsZUFBZSxDQUFDO1FBQ2pDLGtIQUFrSDtRQUNsSFEsS0FBSyxDQUFDLGdEQUErQyxDQUEwQkgsTUFBYSxDQUFyQyxJQUFJLENBQUNMLGVBQWUsRUFBQyxHQUFDLENBQWdCLENBQVcsTUFBbUIsQ0FBNUNLLGFBQWEsRUFBQyxXQUFTLENBQXNCLENBQXFCLE1BQVMsQ0FBbEQsSUFBSSxDQUFDSixjQUFjLEVBQUMscUJBQW1CLENBQVksUUFBVixJQUFJLENBQUNQLElBQUksQ0FBRSxDQUFDLENBQ3hKZSxJQUFJLENBQUNDLFNBQUFBLElBQUk7bUJBQUlBLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7WUFDVixNQUFLWixTQUFTLEdBQUcsS0FBSztZQUN0QixNQUFLQyxVQUFVLEdBQUdXLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEMsTUFBS1IsVUFBVSxFQUFFO1lBQ2pCLElBQUksTUFBS0gsVUFBVSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3JCVyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxHQUFXOzJCQUFLLE9BQUtqQixLQUFLLENBQUNrQixHQUFHLENBQUNELEdBQUcsQ0FBQztpQkFBQSxDQUFDO2dCQUN2RCxNQUFLbEIsS0FBSyxHQUFHb0IsS0FBSyxDQUFDQyxJQUFJLENBQUMsTUFBS3BCLEtBQUssQ0FBQzthQUN0QztTQUNKLENBQUM7S0FDVDs7Q0FDSjtBQUVELCtEQUFlLElBQUlILEtBQUssRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYm9va3MudHM/NGQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21ha2VBdXRvT2JzZXJ2YWJsZX0gZnJvbSAnbW9ieCdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi9wYWdlcy9tYXAnXHJcblxyXG5jbGFzcyBCb29rcyB7XHJcbiAgICBwcml2YXRlIF9rZXkgPSAnQUl6YVN5QzRlcjVPNDlKaTNDUlJZWElRNlhCbFdBTXFhRHNxTzRzJ1xyXG4gICAgYm9va3M6IGFueVtdID0gW11cclxuICAgIGl0ZW1zID0gbmV3IFNldCgpXHJcbiAgICBpc0ZpbmRpbmcgPSBmYWxzZVxyXG4gICAgdG90YWxJdGVtcyA9IDBcclxuICAgIGN1cnJlbnRDYXRlZ29yeSA9IFwiXCJcclxuICAgIGN1cnJlbnRTb3J0aW5nID0gXCJcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQm9va3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ib29rcyA9IFtdXHJcbiAgICAgICAgdGhpcy5pdGVtcy5jbGVhcigpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hCb29rcyhzZWFyY2hSZXF1ZXN0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRDYXRlZ29yeSlcclxuICAgICAgICAvL2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1mbG93ZXJzJm9yZGVyQnk9bmV3ZXN0JmtleT1BSXphU3lDNGVyNU80OUppM0NSUllYSVE2WEJsV0FNcWFEc3FPNHNcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9OiR7c2VhcmNoUmVxdWVzdH0mb3JkZXJCeT0ke3RoaXMuY3VycmVudFNvcnRpbmd9Jm1heFJlc3VsdHM9MzAma2V5PSR7dGhpcy5fa2V5fWApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gZGF0YVsndG90YWxJdGVtcyddXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQm9va3MoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWydpdGVtcyddLm1hcCgodmFsOiBvYmplY3QpID0+IHRoaXMuaXRlbXMuYWRkKHZhbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29rcyA9IEFycmF5LmZyb20odGhpcy5pdGVtcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEJvb2tzKCkiXSwibmFtZXMiOlsibWFrZUF1dG9PYnNlcnZhYmxlIiwiQm9va3MiLCJfa2V5IiwiYm9va3MiLCJpdGVtcyIsIlNldCIsImlzRmluZGluZyIsInRvdGFsSXRlbXMiLCJjdXJyZW50Q2F0ZWdvcnkiLCJjdXJyZW50U29ydGluZyIsImNsZWFyQm9va3MiLCJjbGVhciIsImZldGNoQm9va3MiLCJzZWFyY2hSZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwibWFwIiwidmFsIiwiYWRkIiwiQXJyYXkiLCJmcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/books.ts\n"));

/***/ })

});