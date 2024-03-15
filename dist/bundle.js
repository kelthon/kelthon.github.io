/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack://kelthon.github.io/./src/index.ts?");

/***/ }),

/***/ "./src/warning-banner.ts":
/*!*******************************!*\
  !*** ./src/warning-banner.ts ***!
  \*******************************/
/***/ (() => {

eval("\nconst warningBannerList = document.querySelectorAll(\"aside.warning-banner\");\nwarningBannerList.forEach((wb) => {\n    const closeButton = wb.querySelector(\"footer.banner-control\");\n    closeButton.addEventListener(\"click\", () => (wb.style.display = \"none\"));\n});\n\n\n//# sourceURL=webpack://kelthon.github.io/./src/warning-banner.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/warning-banner.ts"]();
/******/ 	
/******/ })()
;