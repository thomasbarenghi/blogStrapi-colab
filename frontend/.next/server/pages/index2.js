"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index2";
exports.ids = ["pages/index2"];
exports.modules = {

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction PostsList() {\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Estado para almacenar los posts\n    // Ejecutar la solicitud HTTP GET cuando se monte el componente\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:1337/api/blogs\").then((response)=>{\n            // Si la solicitud se realiza con éxito, almacenar los posts en el estado\n            setPosts(response.data.data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    }, []); // Ejecutar la solicitud una vez al montar el componente\n    // Mostrar los posts en una lista utilizando el método map\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: post.attributes.titulo\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                        lineNumber: 25,\n                        columnNumber: 2\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.attributes.contenido\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                        lineNumber: 26,\n                        columnNumber: 2\n                    }, this)\n                ]\n            }, post.id, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n                lineNumber: 24,\n                columnNumber: 2\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Strapi\\\\Blog-colab1\\\\frontend\\\\pages\\\\index2.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsList);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDekI7QUFFMUIsU0FBU0ksWUFBWTtJQUNuQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRSxHQUFHLGtDQUFrQztJQUUxRSwrREFBK0Q7SUFDL0RDLGdEQUFTQSxDQUFDLElBQU07UUFDZEMsaURBQVMsQ0FBQyxtQ0FDUEssSUFBSSxDQUFDQyxDQUFBQSxXQUFZO1lBQ2hCLHlFQUF5RTtZQUN6RUgsU0FBU0csU0FBU0MsSUFBSSxDQUFDQSxJQUFJO1FBQzdCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBUztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0osR0FBRyxFQUFFLEdBQUcsd0RBQXdEO0lBRWhFLDBEQUEwRDtJQUMxREMsUUFBUUMsR0FBRyxDQUFDVDtJQUNaLHFCQUNFLDhEQUFDVTtrQkFDRVYsTUFBTVcsR0FBRyxDQUFDQyxDQUFBQSxxQkFDaEIsOERBQUNDOztrQ0FDRCw4REFBQ0M7a0NBQUlGLEtBQUtHLFVBQVUsQ0FBQ0MsTUFBTTs7Ozs7O2tDQUMzQiw4REFBQ0M7a0NBQUdMLEtBQUtHLFVBQVUsQ0FBQ0csU0FBUzs7Ozs7OztlQUZwQk4sS0FBS08sRUFBRTs7Ozs7Ozs7OztBQU9qQjtBQUVBLGlFQUFlcEIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXgyLmpzPzEyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBQb3N0c0xpc3QoKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7IC8vIEVzdGFkbyBwYXJhIGFsbWFjZW5hciBsb3MgcG9zdHNcclxuXHJcbiAgLy8gRWplY3V0YXIgbGEgc29saWNpdHVkIEhUVFAgR0VUIGN1YW5kbyBzZSBtb250ZSBlbCBjb21wb25lbnRlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMToxMzM3L2FwaS9ibG9ncycpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBTaSBsYSBzb2xpY2l0dWQgc2UgcmVhbGl6YSBjb24gw6l4aXRvLCBhbG1hY2VuYXIgbG9zIHBvc3RzIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgIHNldFBvc3RzKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTsgLy8gRWplY3V0YXIgbGEgc29saWNpdHVkIHVuYSB2ZXogYWwgbW9udGFyIGVsIGNvbXBvbmVudGVcclxuXHJcbiAgLy8gTW9zdHJhciBsb3MgcG9zdHMgZW4gdW5hIGxpc3RhIHV0aWxpemFuZG8gZWwgbcOpdG9kbyBtYXBcclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gPGxpIGtleT17cG9zdC5pZH0+XHJcbiA8aDM+e3Bvc3QuYXR0cmlidXRlcy50aXR1bG99PC9oMz5cclxuIDxwPntwb3N0LmF0dHJpYnV0ZXMuY29udGVuaWRvfTwvcD5cclxuPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlBvc3RzTGlzdCIsInBvc3RzIiwic2V0UG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsIm1hcCIsInBvc3QiLCJsaSIsImgzIiwiYXR0cmlidXRlcyIsInRpdHVsbyIsInAiLCJjb250ZW5pZG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index2.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index2.js"));
module.exports = __webpack_exports__;

})();