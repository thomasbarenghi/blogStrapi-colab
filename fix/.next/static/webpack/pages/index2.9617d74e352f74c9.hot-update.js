"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index2",{

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Posts() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Obtiene el token de autenticación del usuario a partir de la cookie 'jwt'\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"authToken\");\n        // Accede al API de proyectos y obtiene los posts relacionados con el usuario\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:1337/api/blogs\").then((response)=>{\n            const post1 = response;\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Mi proyecto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this),\n            post.map((post1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"soy id \",\n                                post1.id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: post1.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post1.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, post1.id, true, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, this);\n}\n_s(Posts, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Posts;\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNsQjtBQUNNO0FBRWpCLFNBQVNJLFFBQVE7O0lBRTVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osNEVBQTRFO1FBQzVFLE1BQU1PLFFBQVFKLHFEQUFXLENBQUM7UUFFMUIsNkVBQTZFO1FBQzdFRCxpREFBUyxDQUFDLG1DQUNMTyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNoQixNQUFNQyxRQUFPRDtRQUVqQixHQUNDRSxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2xCO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBRVEsOERBQUNFOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNITCxLQUFLTSxHQUFHLENBQUMsQ0FBQ04sc0JBQ1AsOERBQUNJOztzQ0FFRyw4REFBQ0c7O2dDQUFHO2dDQUFRUCxNQUFLUSxFQUFFOzs7Ozs7O3NDQUNuQiw4REFBQ0Q7c0NBQUlQLE1BQUtTLEtBQUs7Ozs7OztzQ0FDZiw4REFBQ0M7c0NBQUdWLE1BQUtXLFdBQVc7Ozs7Ozs7bUJBSmRYLE1BQUtRLEVBQUU7Ozs7Ozs7Ozs7O0FBVXJDLENBQUM7R0FsQ3VCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleDIuanM/MTIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XHJcblxyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBPYnRpZW5lIGVsIHRva2VuIGRlIGF1dGVudGljYWNpw7NuIGRlbCB1c3VhcmlvIGEgcGFydGlyIGRlIGxhIGNvb2tpZSAnand0J1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ2F1dGhUb2tlbicpO1xyXG5cclxuICAgICAgICAvLyBBY2NlZGUgYWwgQVBJIGRlIHByb3llY3RvcyB5IG9idGllbmUgbG9zIHBvc3RzIHJlbGFjaW9uYWRvcyBjb24gZWwgdXN1YXJpb1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMToxMzM3L2FwaS9ibG9ncycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5NaSBwcm95ZWN0bzwvaDE+XHJcbiAgICAgICAgICAgICAgICB7cG9zdC5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+c295IGlkIHtwb3N0LmlkfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ29va2llcyIsIlBvc3RzIiwicG9zdHMiLCJzZXRQb3N0cyIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicG9zdCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaDEiLCJtYXAiLCJoMiIsImlkIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});