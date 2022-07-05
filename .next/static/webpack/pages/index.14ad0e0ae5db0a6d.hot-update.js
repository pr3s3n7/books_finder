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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\n/* harmony import */ var _pages_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/map */ \"./src/pages/map.ts\");\n\n\n\nvar Books = /*#__PURE__*/ function() {\n    \"use strict\";\n    function Books() {\n        var _this = this;\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Books);\n        this._key = \"AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\";\n        this.books = [];\n        this.searchRequest = \"\";\n        this.items = new Set();\n        this.isFinding = false;\n        this.totalItems = 0;\n        this.currentCategory = _pages_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CATEGORIES_OPTIONS[0];\n        this.currentSorting = _pages_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORTING_OPTIONS[0];\n        this.currentBooksPage = 0;\n        this.clearBooks = function() {\n            _this.books = [];\n            _this.items.clear();\n        };\n        this.addBooks = function(data) {\n            if (data[\"totalItems\"] > 0) {\n                var _this1 = _this;\n                console.log(data);\n                data[\"items\"].map(function(val) {\n                    return _this1.items.add(val);\n                });\n                _this.books = Array.from(_this.items);\n                _this.totalItems = _this.items.size;\n            }\n        };\n        (0,mobx__WEBPACK_IMPORTED_MODULE_2__.makeAutoObservable)(this);\n    }\n    var _proto = Books.prototype;\n    _proto.fetchBooks = function fetchBooks(searchRequest, next) {\n        var _this = this;\n        console.log(this.currentCategory);\n        //https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyC4er5O49Ji3CRRYXIQ6XBlWAMqaDsqO4s\n        fetch(\"https://www.googleapis.com/books/v1/volumes?q=\".concat(this.currentCategory, \":\").concat(searchRequest, \"&orderBy=\").concat(this.currentSorting, \"&startIndex=\").concat(this.currentBooksPage * 30, \"&maxResults=30&key=\").concat(this._key)).then(function(data) {\n            return data.json();\n        }).then(function(data) {\n            console.log(data);\n            _this.isFinding = false;\n            if (next) {\n                _this.addBooks(data);\n                console.log(document.body);\n            } else {\n                _this.clearBooks();\n                _this.addBooks(data);\n            }\n        });\n    };\n    return Books;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Books());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYm9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQXVDO0FBQ1Q7QUFFOUIsU0FBVyxpQkFnRFY7O2FBaERLRSxLQUFLOzs7UUFDUCxLQUFRQyxJQUFJLEdBQUcseUNBQXlDO1FBQ3hEQyxLQUFBQSxLQUFLLEdBQVUsRUFBRTtRQUNqQkMsS0FBQUEsYUFBYSxHQUFHLEVBQUU7UUFDbEJDLEtBQUFBLEtBQUssR0FBRyxJQUFJQyxHQUFHLEVBQUU7UUFDakJDLEtBQUFBLFNBQVMsR0FBRyxLQUFLO1FBQ2pCQyxLQUFBQSxVQUFVLEdBQUcsQ0FBQztRQUNkQyxLQUFBQSxlQUFlLEdBQUdULHdFQUF5QjtRQUMzQ1csS0FBQUEsY0FBYyxHQUFHWCxxRUFBc0I7UUFDdkNhLEtBQUFBLGdCQUFnQixHQUFHLENBQUM7UUFNcEJDLEtBQUFBLFVBQVUsR0FBRyxXQUFNO1lBQ2YsTUFBS1gsS0FBSyxHQUFHLEVBQUU7WUFDZixNQUFLRSxLQUFLLENBQUNVLEtBQUssRUFBRTtTQUNyQjtRQUVEQyxLQUFBQSxRQUFRLEdBQUcsU0FBQ0MsSUFBUyxFQUFLO1lBQ3RCLElBQUlBLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztnQkFDakJBLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ2pCLEdBQUcsQ0FBQyxTQUFDb0IsR0FBVzsyQkFBSyxPQUFLZixLQUFLLENBQUNnQixHQUFHLENBQUNELEdBQUcsQ0FBQztpQkFBQSxDQUFDO2dCQUN2RCxNQUFLakIsS0FBSyxHQUFHbUIsS0FBSyxDQUFDQyxJQUFJLENBQUMsTUFBS2xCLEtBQUssQ0FBQztnQkFDbkMsTUFBS0csVUFBVSxHQUFHLE1BQUtILEtBQUssQ0FBQ21CLElBQUk7YUFDcEM7U0FDSjtRQWZHekIsd0RBQWtCLENBQUMsSUFBSSxDQUFDOztpQkFaMUJFLEtBQUs7SUE2QlB3QixPQUFBQSxVQUFVLEdBQVZBLFNBQUFBLFVBQVUsQ0FBQ3JCLGFBQXFCLEVBQUVzQixJQUFhLEVBQUU7O1FBQzdDUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNWLGVBQWUsQ0FBQztRQUNqQyxrSEFBa0g7UUFDbEhrQixLQUFLLENBQUMsZ0RBQStDLENBQTBCdkIsTUFBYSxDQUFyQyxJQUFJLENBQUNLLGVBQWUsRUFBQyxHQUFDLENBQWdCLENBQVcsTUFBbUIsQ0FBNUNMLGFBQWEsRUFBQyxXQUFTLENBQXNCLENBQWMsTUFBMEIsQ0FBNUQsSUFBSSxDQUFDTyxjQUFjLEVBQUMsY0FBWSxDQUE2QixDQUFxQixNQUFTLENBQXpELElBQUksQ0FBQ0UsZ0JBQWdCLEdBQUcsRUFBRSxFQUFDLHFCQUFtQixDQUFZLFFBQVYsSUFBSSxDQUFDWCxJQUFJLENBQUUsQ0FBQyxDQUNqTTBCLElBQUksQ0FBQ1gsU0FBQUEsSUFBSTttQkFBSUEsSUFBSSxDQUFDWSxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRCxJQUFJLENBQUNYLFNBQUFBLElBQUksRUFBSTtZQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO1lBQ2pCLE1BQUtWLFNBQVMsR0FBRyxLQUFLO1lBQ3RCLElBQUltQixJQUFJLEVBQUU7Z0JBQ04sTUFBS1YsUUFBUSxDQUFDQyxJQUFJLENBQUM7Z0JBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csUUFBUSxDQUFDQyxJQUFJLENBQUM7YUFDN0IsTUFBTTtnQkFDSCxNQUFLakIsVUFBVSxFQUFFO2dCQUNqQixNQUFLRSxRQUFRLENBQUNDLElBQUksQ0FBQzthQUN0QjtTQUNKLENBQUM7S0FDVDs7Q0FDSjtBQUVELCtEQUFlLElBQUloQixLQUFLLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2Jvb2tzLnRzPzRkNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlQXV0b09ic2VydmFibGV9IGZyb20gJ21vYngnXHJcbmltcG9ydCBtYXAgZnJvbSAnLi4vcGFnZXMvbWFwJ1xyXG5cclxuY2xhc3MgQm9va3Mge1xyXG4gICAgcHJpdmF0ZSBfa2V5ID0gJ0FJemFTeUM0ZXI1TzQ5SmkzQ1JSWVhJUTZYQmxXQU1xYURzcU80cydcclxuICAgIGJvb2tzOiBhbnlbXSA9IFtdXHJcbiAgICBzZWFyY2hSZXF1ZXN0ID0gXCJcIlxyXG4gICAgaXRlbXMgPSBuZXcgU2V0KClcclxuICAgIGlzRmluZGluZyA9IGZhbHNlXHJcbiAgICB0b3RhbEl0ZW1zID0gMFxyXG4gICAgY3VycmVudENhdGVnb3J5ID0gbWFwLkNBVEVHT1JJRVNfT1BUSU9OU1swXVxyXG4gICAgY3VycmVudFNvcnRpbmcgPSBtYXAuU09SVElOR19PUFRJT05TWzBdXHJcbiAgICBjdXJyZW50Qm9va3NQYWdlID0gMFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQm9va3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ib29rcyA9IFtdXHJcbiAgICAgICAgdGhpcy5pdGVtcy5jbGVhcigpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQm9va3MgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGFbJ3RvdGFsSXRlbXMnXSA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgZGF0YVsnaXRlbXMnXS5tYXAoKHZhbDogb2JqZWN0KSA9PiB0aGlzLml0ZW1zLmFkZCh2YWwpKVxyXG4gICAgICAgICAgICB0aGlzLmJvb2tzID0gQXJyYXkuZnJvbSh0aGlzLml0ZW1zKVxyXG4gICAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLml0ZW1zLnNpemVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hCb29rcyhzZWFyY2hSZXF1ZXN0OiBzdHJpbmcsIG5leHQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRDYXRlZ29yeSlcclxuICAgICAgICAvL2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1mbG93ZXJzJm9yZGVyQnk9bmV3ZXN0JmtleT1BSXphU3lDNGVyNU80OUppM0NSUllYSVE2WEJsV0FNcWFEc3FPNHNcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9OiR7c2VhcmNoUmVxdWVzdH0mb3JkZXJCeT0ke3RoaXMuY3VycmVudFNvcnRpbmd9JnN0YXJ0SW5kZXg9JHt0aGlzLmN1cnJlbnRCb29rc1BhZ2UgKiAzMH0mbWF4UmVzdWx0cz0zMCZrZXk9JHt0aGlzLl9rZXl9YClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckJvb2tzKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJvb2tzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBCb29rcygpIl0sIm5hbWVzIjpbIm1ha2VBdXRvT2JzZXJ2YWJsZSIsIm1hcCIsIkJvb2tzIiwiX2tleSIsImJvb2tzIiwic2VhcmNoUmVxdWVzdCIsIml0ZW1zIiwiU2V0IiwiaXNGaW5kaW5nIiwidG90YWxJdGVtcyIsImN1cnJlbnRDYXRlZ29yeSIsIkNBVEVHT1JJRVNfT1BUSU9OUyIsImN1cnJlbnRTb3J0aW5nIiwiU09SVElOR19PUFRJT05TIiwiY3VycmVudEJvb2tzUGFnZSIsImNsZWFyQm9va3MiLCJjbGVhciIsImFkZEJvb2tzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJhZGQiLCJBcnJheSIsImZyb20iLCJzaXplIiwiZmV0Y2hCb29rcyIsIm5leHQiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiZG9jdW1lbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/books.ts\n"));

/***/ })

});