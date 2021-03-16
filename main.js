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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show */ \"./src/show.js\");\n\n\n\nconst apiKey = 'c09ea79421d4e76504e8e4d16e3e315b';\nconst content = document.getElementById('content');\nconst form = document.forms[0];\n\nform.addEventListener('submit', async (e) => {\n  e.preventDefault();\n  const city = document.getElementById('city').value;\n  try {\n    const data = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__.default)(city, apiKey);\n    (0,_show__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(data, content);\n    form.reset();\n  } catch (error) {\n    (0,_show__WEBPACK_IMPORTED_MODULE_1__.displayError)(content);\n  }\n});\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/show.js":
/*!*********************!*\
  !*** ./src/show.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayWeather\": () => (/* binding */ displayWeather),\n/* harmony export */   \"displayError\": () => (/* binding */ displayError)\n/* harmony export */ });\nconst celcToFarnh = (unit) => Math.round(1.8 * unit + 32);\nconst farnhToCelc = (unit) => Math.round((unit - 32) / 1.8);\n\nconst addUnitToggler = (content) => {\n  const togglerUnit = document.createElement('button');\n  togglerUnit.classList.add('button-toggle');\n  togglerUnit.textContent = 'Celcius to Fahrenheit';\n  togglerUnit.addEventListener('click', () => {\n    const temp = document.querySelector('#temp');\n    const number = Number(temp.textContent.slice(0, -2));\n    const unit = temp.textContent.slice(-1);\n    if (unit === 'C') {\n      temp.textContent = `${celcToFarnh(number)}°F`;\n      togglerUnit.textContent = 'Celcius to Fahrenheit';\n    } else {\n      temp.textContent = `${farnhToCelc(number)}°C`;\n      togglerUnit.textContent = 'Celcius to Fahrenheit';\n    }\n  });\n  content.append(togglerUnit);\n};\n\nconst setBackground = (icon) => {\n  const body = document.querySelector('body');\n  if (icon.slice(-1) === 'd') {\n    body.classList.add('day');\n    body.classList.remove('night');\n  } else {\n    body.classList.add('night');\n    body.classList.remove('day');\n  }\n};\n\n// eslint-disable-next-line import/prefer-default-export\nconst displayWeather = (data, content) => {\n  content.classList = 'card';\n  content.innerHTML = `\n    <div class='card-header'>\n      <img src='https://openweathermap.org/img/wn/${data.weather.icon}@2x.png' width='50'>\n      <span class='card-text' id='weatherInfo'>${data.weather.description}</span>\n    </div>\n    <div class='card-body'>\n      <h5 class='card-title' id='location'>${data.city}, ${data.country}</h5>\n      <p class='card-text'>Temperature: <span id='temp'>${data.temp}°C</span></p>\n    </div>\n    `;\n  setBackground(data.weather.icon);\n  addUnitToggler(content);\n};\n\nconst displayError = (content) => {\n  content.innerHTML = '<p>Please input a valid city.</p>';\n};\n\n\n//# sourceURL=webpack://weather_app/./src/show.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchWeatherData = async (location, apiKey) => {\n  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;\n  const data = await fetch(api);\n  const weatherData = await data.json();\n  return weatherData;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (location, apiKey) => {\n  const data = await fetchWeatherData(location, apiKey);\n\n  return {\n    temp: Math.round(data.main.temp - 273.15),\n    city: data.name,\n    country: data.sys.country,\n    weather: {\n      icon: data.weather[0].icon,\n      description: data.weather[0].description,\n    },\n  };\n});\n\n\n//# sourceURL=webpack://weather_app/./src/weatherAPI.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;