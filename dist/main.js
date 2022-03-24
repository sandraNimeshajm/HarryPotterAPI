/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/characters.ts":
/*!*****************************************!*\
  !*** ./src/ts/components/characters.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar characters = function () {\r\n    var container = document.querySelector(\".container\");\r\n    function fetchCharacters() {\r\n        fetch(\"https://hp-api.herokuapp.com/api/characters\")\r\n            .then(function (res) { return res.json(); })\r\n            .then(function (data) {\r\n            data.forEach(function (person) {\r\n                var card = document.createElement(\"div\");\r\n                card.classList.add(\"card\");\r\n                var name = document.createElement(\"p\");\r\n                name.innerHTML = \"<span>Name</span>: \" + person.name;\r\n                var gender = document.createElement(\"p\");\r\n                gender.innerHTML = \"<span>Gender</span>: \" + person.gender;\r\n                var house = document.createElement(\"p\");\r\n                person.house\r\n                    ? (house.innerHTML = \"<span>House</span>: \" + person.house)\r\n                    : (house.innerHTML = \"<span>House</span>: Unknown\");\r\n                var img = document.createElement(\"img\");\r\n                person.image\r\n                    ? img.setAttribute(\"src\", person.image)\r\n                    : img.setAttribute(\"src\", \"/src/images/no-img.png\");\r\n                var actor = document.createElement(\"p\");\r\n                if (person.gender === \"male\") {\r\n                    actor.innerHTML = \"<span>Actor</span>: \" + person.actor;\r\n                }\r\n                if (person.gender === \"female\") {\r\n                    actor.innerHTML = \"<span>Actress</span>: \" + person.actor;\r\n                }\r\n                if (person.actor === \"\") {\r\n                    actor.innerHTML = \"<span>Actress</span>: Unknown\";\r\n                }\r\n                container.appendChild(card);\r\n                card.appendChild(img);\r\n                card.appendChild(name);\r\n                card.appendChild(gender);\r\n                card.appendChild(house);\r\n                card.appendChild(actor);\r\n            });\r\n        });\r\n    }\r\n    fetchCharacters();\r\n};\r\nexports[\"default\"] = characters;\r\n\n\n//# sourceURL=webpack://harry-poter-api/./src/ts/components/characters.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar characters_1 = __webpack_require__(/*! ./components/characters */ \"./src/ts/components/characters.ts\");\r\n(0, characters_1.default)();\r\n\n\n//# sourceURL=webpack://harry-poter-api/./src/ts/main.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;