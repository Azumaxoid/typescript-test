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

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst newrelic_1 = __importDefault(__webpack_require__(/*! newrelic */ \"newrelic\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst service = __importStar(__webpack_require__(/*! ./service/Service */ \"./service/Service.ts\"));\nconst source_map_support_1 = __importDefault(__webpack_require__(/*! source-map-support */ \"source-map-support\"));\nsource_map_support_1.default.install();\nconst app = (0, express_1.default)();\napp.locals.newrelic = newrelic_1.default;\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: true }));\n//CROS対応（というか完全無防備：本番環境ではだめ絶対）\napp.use((req, res, next) => {\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\n    res.header(\"Access-Control-Allow-Methods\", \"*\");\n    res.header(\"Access-Control-Allow-Headers\", \"*\");\n    next();\n});\napp.listen(3000, () => {\n    console.log(\"Start on port 3000.\");\n});\nconst users = [\n    { id: 1, name: \"User1\", email: \"user1@test.local\" },\n    { id: 2, name: \"User2\", email: \"user2@test.local\" },\n    { id: 3, name: \"User3\", email: \"user3@test.local\" }\n];\n//一覧取得\napp.get('/users', (req, res) => {\n    if (Math.random() * 2 > 1) {\n        service.getTest1();\n    }\n    else {\n        service.getTest3().then(() => res.send(JSON.stringify(users)));\n    }\n});\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./service/Service.ts":
/*!****************************!*\
  !*** ./service/Service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getTest3 = exports.getTest1 = void 0;\nconst getTest1 = () => __awaiter(void 0, void 0, void 0, function* () {\n    return getTest2();\n});\nexports.getTest1 = getTest1;\nconst getTest2 = () => __awaiter(void 0, void 0, void 0, function* () {\n    throw new Error(\"Typescript Error Test\");\n});\nconst getTest3 = () => __awaiter(void 0, void 0, void 0, function* () {\n    return getTest4();\n});\nexports.getTest3 = getTest3;\nconst getTest4 = () => __awaiter(void 0, void 0, void 0, function* () {\n    return \"hoge\";\n});\n\n\n//# sourceURL=webpack:///./service/Service.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("newrelic");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("source-map-support");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;