"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/component/skills.jsx":
/*!**********************************!*\
  !*** ./app/component/skills.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Skills = (param)=>{\n    let { data  } = param;\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"soft\");\n    const setBg = (active)=>activeTab === active ? \"bg-orange\" : \"bg-grey\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    \"soft\",\n                    \"hard\"\n                ].map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"btn \".concat(setBg(el)),\n                        onClick: ()=>setActiveTab(el),\n                        children: [\n                            el,\n                            \" Skills\"\n                        ]\n                    }, el, true, {\n                        fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex felx-row flex-wrap content-start list-none py-4\",\n                children: data[activeTab].map((icon, text)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"skill\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \" \",\n                                    icon,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            text,\n                            \" \"\n                        ]\n                    }, text, true, {\n                        fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/henryburdick/Desktop/CS321/my_personal_website/app/component/skills.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Skills, \"7B92ycYfle65Itwp+L5UW2slf7o=\");\n_c = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudC9za2lsbHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxTQUFTLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNSyxRQUFRLENBQUNDLFNBQVlILGNBQWNHLFNBQVEsY0FBYyxTQUFTO0lBRXhFLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNaO29CQUFDO29CQUFRO2lCQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxtQkFDckIsOERBQUNDO3dCQUFrQkMsTUFBSzt3QkFBU0osV0FBVyxPQUFpQixPQUFWSCxNQUFNSzt3QkFDekRHLFNBQVcsSUFBSVQsYUFBYU07OzRCQUN6QkE7NEJBQUc7O3VCQUZTQTs7Ozs7Ozs7OzswQkFNbkIsOERBQUNJO2dCQUFHTixXQUFZOzBCQUNiTixJQUFJLENBQUNDLFVBQVUsQ0FBQ00sR0FBRyxDQUFDLENBQUNNLE1BQU1DLHFCQUUxQiw4REFBQ0M7d0JBQWdCVCxXQUFZOzswQ0FDM0IsOERBQUNVOztvQ0FBSztvQ0FBRUg7b0NBQUs7Ozs7Ozs7NEJBQVE7NEJBQUVDOzRCQUFLOzt1QkFEbkJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0dBdkJNZjtLQUFBQTtBQXlCTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50L3NraWxscy5qc3g/OTA4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgU2tpbGxzID0gKHtkYXRhfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoXCJzb2Z0XCIpO1xuICBjb25zdCBzZXRCZyA9IChhY3RpdmUpID0+IChhY3RpdmVUYWIgPT09IGFjdGl2ZT8gJ2JnLW9yYW5nZScgOiAnYmctZ3JleScpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAge1tcInNvZnRcIiwgXCJoYXJkXCJdLm1hcCgoZWwpPT4oIFxuICAgICAgICAgIDxidXR0b24ga2V5ID0ge2VsfSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT17YGJ0biAke3NldEJnKGVsKX1gfSBcbiAgICAgICAgICBvbkNsaWNrID0geygpPT5zZXRBY3RpdmVUYWIoZWwpfT5cbiAgICAgICAgICAgIHtlbH0gU2tpbGxzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3NOYW1lID0gXCJmbGV4IGZlbHgtcm93IGZsZXgtd3JhcCBjb250ZW50LXN0YXJ0IGxpc3Qtbm9uZSBweS00XCI+XG4gICAgICAgIHtkYXRhW2FjdGl2ZVRhYl0ubWFwKChpY29uLCB0ZXh0KSA9PihcblxuICAgICAgICAgIDxsaSBrZXkgPSB7dGV4dH0gY2xhc3NOYW1lID0gJ3NraWxsJz5cbiAgICAgICAgICAgIDxzcGFuPiB7aWNvbn0gPC9zcGFuPiB7dGV4dH0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxscyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2tpbGxzIiwiZGF0YSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNldEJnIiwiYWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInVsIiwiaWNvbiIsInRleHQiLCJsaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/component/skills.jsx\n"));

/***/ })

});