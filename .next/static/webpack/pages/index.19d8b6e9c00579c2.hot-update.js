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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n/* harmony import */ var _pages_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/map */ \"./src/pages/map.ts\");\n\n\n\nvar Books = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Books() {\n        var _this = this;\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Books);\n        this._key = \"AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\";\n        this.books = [];\n        this.searchRequest = \"\";\n        this.items = new Set();\n        this.isFinding = false;\n        this.totalItems = 0;\n        this.currentCategory = _pages_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CATEGORIES_OPTIONS[0];\n        this.currentSorting = _pages_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORTING_OPTIONS[0];\n        this.currentBooksPage = 0;\n        this.clearBooks = function() {\n            _this.books = [];\n            _this.items.clear();\n        };\n        this.addBooks = function(data) {\n            if (_this.totalItems > 0) {\n                var _this1 = _this;\n                console.log(data);\n                data[\"items\"].map(function(val) {\n                    return _this1.items.add(val);\n                });\n                _this.books = Array.from(_this.items);\n            }\n        };\n        (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(this);\n    }\n    var _proto = Books.prototype;\n    _proto.fetchBooks = function fetchBooks(searchRequest, next) {\n        var _this = this;\n        console.log(this.currentCategory);\n        //https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\n        fetch(\"https://www.googleapis.com/books/v1/volumes?q=\".concat(this.currentCategory, \":\").concat(searchRequest, \"&orderBy=\").concat(this.currentSorting, \"&startIndex=\").concat(this.currentBooksPage * 30, \"&maxResults=30&key=\").concat(this._key)).then(function(data) {\n            return data.json();\n        }).then(function(data) {\n            console.log(data);\n            _this.isFinding = false;\n            if (next) {\n                _this.addBooks(data);\n            } else {\n                _this.clearBooks();\n                _this.addBooks(data);\n                _this.totalItems = data[\"totalItems\"];\n            }\n        });\n    };\n    return Books;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Books());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYm9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQXVDO0FBQ1Q7QUFFOUIsU0FBVyxpQkErQ1Y7O2FBL0NLRSxLQUFLOzs7UUFDUCxLQUFRQyxJQUFJLEdBQUcseUNBQXlDO1FBQ3hEQyxLQUFBQSxLQUFLLEdBQVUsRUFBRTtRQUNqQkMsS0FBQUEsYUFBYSxHQUFHLEVBQUU7UUFDbEJDLEtBQUFBLEtBQUssR0FBRyxJQUFJQyxHQUFHLEVBQUU7UUFDakJDLEtBQUFBLFNBQVMsR0FBRyxLQUFLO1FBQ2pCQyxLQUFBQSxVQUFVLEdBQVcsQ0FBQztRQUN0QkMsS0FBQUEsZUFBZSxHQUFHVCx3RUFBeUI7UUFDM0NXLEtBQUFBLGNBQWMsR0FBR1gscUVBQXNCO1FBQ3ZDYSxLQUFBQSxnQkFBZ0IsR0FBRyxDQUFDO1FBTXBCQyxLQUFBQSxVQUFVLEdBQUcsV0FBTTtZQUNmLE1BQUtYLEtBQUssR0FBRyxFQUFFO1lBQ2YsTUFBS0UsS0FBSyxDQUFDVSxLQUFLLEVBQUU7U0FDckI7UUFFREMsS0FBQUEsUUFBUSxHQUFHLFNBQUNDLElBQVMsRUFBSztZQUN0QixJQUFJLE1BQUtULFVBQVUsR0FBRyxDQUFDLEVBQUU7O2dCQUNyQlUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztnQkFDakJBLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ2pCLEdBQUcsQ0FBQyxTQUFDb0IsR0FBVzsyQkFBSyxPQUFLZixLQUFLLENBQUNnQixHQUFHLENBQUNELEdBQUcsQ0FBQztpQkFBQSxDQUFDO2dCQUN2RCxNQUFLakIsS0FBSyxHQUFHbUIsS0FBSyxDQUFDQyxJQUFJLENBQUMsTUFBS2xCLEtBQUssQ0FBQzthQUN0QztTQUNKO1FBZEdOLHdEQUFrQixDQUFDLElBQUksQ0FBQzs7aUJBWjFCRSxLQUFLO0lBNEJQdUIsT0FBQUEsVUFBVSxHQUFWQSxTQUFBQSxVQUFVLENBQUNwQixhQUFxQixFQUFFcUIsSUFBYSxFQUFFOztRQUM3Q1AsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVixlQUFlLENBQUM7UUFDakMsa0hBQWtIO1FBQ2xIaUIsS0FBSyxDQUFDLGdEQUErQyxDQUEwQnRCLE1BQWEsQ0FBckMsSUFBSSxDQUFDSyxlQUFlLEVBQUMsR0FBQyxDQUFnQixDQUFXLE1BQW1CLENBQTVDTCxhQUFhLEVBQUMsV0FBUyxDQUFzQixDQUFjLE1BQTBCLENBQTVELElBQUksQ0FBQ08sY0FBYyxFQUFDLGNBQVksQ0FBNkIsQ0FBcUIsTUFBUyxDQUF6RCxJQUFJLENBQUNFLGdCQUFnQixHQUFHLEVBQUUsRUFBQyxxQkFBbUIsQ0FBWSxRQUFWLElBQUksQ0FBQ1gsSUFBSSxDQUFFLENBQUMsQ0FDak15QixJQUFJLENBQUNWLFNBQUFBLElBQUk7bUJBQUlBLElBQUksQ0FBQ1csSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkQsSUFBSSxDQUFDVixTQUFBQSxJQUFJLEVBQUk7WUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztZQUNqQixNQUFLVixTQUFTLEdBQUcsS0FBSztZQUN0QixJQUFJa0IsSUFBSSxFQUFFO2dCQUNOLE1BQUtULFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO2FBQ3RCLE1BQU07Z0JBQ0gsTUFBS0gsVUFBVSxFQUFFO2dCQUNqQixNQUFLRSxRQUFRLENBQUNDLElBQUksQ0FBQztnQkFDbkIsTUFBS1QsVUFBVSxHQUFHUyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3ZDO1NBQ0osQ0FBQztLQUNUOztDQUNKO0FBRUQsK0RBQWUsSUFBSWhCLEtBQUssRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYm9va3MudHM/NGQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21ha2VBdXRvT2JzZXJ2YWJsZX0gZnJvbSAnbW9ieCdcclxuaW1wb3J0IG1hcCBmcm9tICcuLi9wYWdlcy9tYXAnXHJcblxyXG5jbGFzcyBCb29rcyB7XHJcbiAgICBwcml2YXRlIF9rZXkgPSAnQUl6YVN5QzRlcjVPNDlKaTNDUlJZWElRNlhCbFdBTXFhRHNxTzRzJ1xyXG4gICAgYm9va3M6IGFueVtdID0gW11cclxuICAgIHNlYXJjaFJlcXVlc3QgPSBcIlwiXHJcbiAgICBpdGVtcyA9IG5ldyBTZXQoKVxyXG4gICAgaXNGaW5kaW5nID0gZmFsc2VcclxuICAgIHRvdGFsSXRlbXM6IG51bWJlciA9IDBcclxuICAgIGN1cnJlbnRDYXRlZ29yeSA9IG1hcC5DQVRFR09SSUVTX09QVElPTlNbMF1cclxuICAgIGN1cnJlbnRTb3J0aW5nID0gbWFwLlNPUlRJTkdfT1BUSU9OU1swXVxyXG4gICAgY3VycmVudEJvb2tzUGFnZSA9IDBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBtYWtlQXV0b09ic2VydmFibGUodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckJvb2tzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9va3MgPSBbXVxyXG4gICAgICAgIHRoaXMuaXRlbXMuY2xlYXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJvb2tzID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGRhdGFbJ2l0ZW1zJ10ubWFwKCh2YWw6IG9iamVjdCkgPT4gdGhpcy5pdGVtcy5hZGQodmFsKSlcclxuICAgICAgICAgICAgdGhpcy5ib29rcyA9IEFycmF5LmZyb20odGhpcy5pdGVtcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hCb29rcyhzZWFyY2hSZXF1ZXN0OiBzdHJpbmcsIG5leHQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRDYXRlZ29yeSlcclxuICAgICAgICAvL2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1mbG93ZXJzJm9yZGVyQnk9bmV3ZXN0JmtleT1BSXphU3lDNGVyNU80OUppM0NSUllYSVE2WEJsV0FNcWFEc3FPNHNcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9OiR7c2VhcmNoUmVxdWVzdH0mb3JkZXJCeT0ke3RoaXMuY3VycmVudFNvcnRpbmd9JnN0YXJ0SW5kZXg9JHt0aGlzLmN1cnJlbnRCb29rc1BhZ2UgKiAzMH0mbWF4UmVzdWx0cz0zMCZrZXk9JHt0aGlzLl9rZXl9YClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJCb29rcygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb29rcyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGRhdGFbJ3RvdGFsSXRlbXMnXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQm9va3MoKSJdLCJuYW1lcyI6WyJtYWtlQXV0b09ic2VydmFibGUiLCJtYXAiLCJCb29rcyIsIl9rZXkiLCJib29rcyIsInNlYXJjaFJlcXVlc3QiLCJpdGVtcyIsIlNldCIsImlzRmluZGluZyIsInRvdGFsSXRlbXMiLCJjdXJyZW50Q2F0ZWdvcnkiLCJDQVRFR09SSUVTX09QVElPTlMiLCJjdXJyZW50U29ydGluZyIsIlNPUlRJTkdfT1BUSU9OUyIsImN1cnJlbnRCb29rc1BhZ2UiLCJjbGVhckJvb2tzIiwiY2xlYXIiLCJhZGRCb29rcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwiZmV0Y2hCb29rcyIsIm5leHQiLCJmZXRjaCIsInRoZW4iLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/books.ts\n"));

/***/ })

});