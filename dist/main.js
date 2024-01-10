/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auxiliaries.js":
/*!****************************!*\
  !*** ./src/auxiliaries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareObjects: () => (/* binding */ compareObjects)
/* harmony export */ });


function compareObjects (data, data2, data3){
    let idem = []

    /// COMPARING "CURRENT" ///
    let currentFilter = Object.getOwnPropertyNames(data.current)
    let forecastFilter = Object.getOwnPropertyNames(data2.current)
    console.log(currentFilter)
    console.log(forecastFilter)

    /// COMPARING "DAY" ///
    let forecastArr = data2.forecast.forecastday
    let historyArr = data3.forecast.forecastday
    //console.log(forecastArr)
    //console.log(historyArr)
    
    let forecastDay = forecastArr[0].day
    let historyDay = historyArr[0].day
    //console.log(forecastDay)
    //console.log(historyDay)

    let forecastDayArr = Object.getOwnPropertyNames(forecastDay)
    let historyDayArr = Object.getOwnPropertyNames(historyDay)
    //console.log(forecastDayArr)
    //console.log(historyDayArr)

    /// COMPARING "HOURS" ///
    let forecastHour = forecastArr[0].hour[0]
    let historyHour = historyArr[0].hour[0]
    //console.log(forecastHour)
    //console.log(historyHour)

    let forecastHourArr = Object.getOwnPropertyNames(forecastHour)
    let historyHourArr = Object.getOwnPropertyNames(historyHour)
    //console.log(forecastHourArr)
    //console.log(historyHourArr)

    /// ACTUAL COMPARITION ///      
    currentFilter.forEach((prop) =>{
        forecastFilter.forEach((pr) =>{
            if(prop === pr ){
                idem.push(prop)
        }})
    })

    console.log("idem:", idem)
}

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentWeather: () => (/* binding */ CurrentWeather),
/* harmony export */   Day: () => (/* binding */ Day),
/* harmony export */   Hour: () => (/* binding */ Hour),
/* harmony export */   Location: () => (/* binding */ Location)
/* harmony export */ });


class CurrentWeather {
    constructor(obj){
        this.weatherText = obj.condition.text,
        this.weatherIcon = obj.condition.icon, 
        this.cloud = obj.cloud,
        this.tempC = obj.temp_c,
        this.tempF = obj.temp_f,
        this.tempC_feel = obj.feelslike_c,
        this.tempF_feel = obj.feelslike_f,
        this.humidity = obj.humidity,
        this.wind = obj.wind_kph,
        this.precipitation = obj.precip_mm,
        this.isDay = obj.is_day
    }
}

class Hour extends CurrentWeather {
    constructor(obj){
        super(obj)
        this.snow = obj.snow_cm
        this.snowChance = obj.chance_of_snow
    }
}

class Day {
    constructor(obj){
        this.weatherText = obj.condition.text,
        this.weatherIcon = obj.condition.icon,
        this.maxTempC = obj.maxtemp_c,
        this.maxTempF = obj.maxtemp_f,
        this.minTempC = obj.mintemp_c,
        this.minTempF = obj.mintemp_f,
        this.avgTempC = obj.avgtemp_c,
        this.avgTempF = obj.avgtemp_f,
        this.avgHumidity = obj.avghumidity,
        this.maxWind = obj.maxwind_kph,
        this.precipTotal = obj.totalprecip_mm,
        this.precipChance = obj.daily_chance_of_rain,
        this.snowTotal = obj.totalsnow_cm,
        this.snowChance = obj.daily_chance_of_snow
    }
}

class Location {
    constructor(obj){
        this.localTime = obj.localtime,
        this.name = obj.name,
        this.country = obj.country,
        this.region = obj.region
    }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPrincipal: () => (/* binding */ createPrincipal)
/* harmony export */ });



function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("div");
    let third = document.createElement("div");
    let fourth = document.createElement("div");

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");

    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)

    return card
}



function createPrincipal(){
    let card = createCard()
    card.classList.add("principal")

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth] = cardArr
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(fourth)
}

createPrincipal()

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _src_img_moon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/moon.jpg */ "./src/img/moon.jpg");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");








let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getData(){

try{
    let [response, response2] = await Promise.all([
        fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3"),
        fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    ])

    let [dataForecast, dataHistory] = await Promise.all([
        response.json(),
        response2.json()
    ])

    /// FUNCTION TO COMPARE OBJECTS RETRIEVED ///
    //compareObjects(data, data2, data3)

    console.log(dataForecast)
    console.log(dataHistory)

    let weatherAndLocation = [(0,_objects__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(dataForecast), (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getLocation)(dataForecast)]
    let forecastArr = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getForecastData)(dataForecast)
    let historyArr = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getHistoryData)(dataHistory)

    getStructuredForecast(forecastArr)
    getStructuredHistory(historyArr)
    getWeatherAndLocation(weatherAndLocation)


} catch(err){
        console.log(err)
    }  
} 

function getStructuredForecast (arr){

    let [a,b,c] = arr
        console.log(a)
        console.log(b)
        console.log(c)

} 

function getStructuredHistory(arr) {
    let y = arr
    console.log(y)
}

function getWeatherAndLocation(arr){
    let [currentWeather, location] = arr
    console.log(currentWeather)
    console.log(location)
}


getData()



/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather),
/* harmony export */   getForecastData: () => (/* binding */ getForecastData),
/* harmony export */   getHistoryData: () => (/* binding */ getHistoryData),
/* harmony export */   getLocation: () => (/* binding */ getLocation),
/* harmony export */   test: () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./src/class.js");





let test = {
    history: "last 7 days",
    forecast: "up to 3 days "
}

function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;

    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

    let todayDate = rawTodayArr.date;
    let todayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawTodayArr.day);
    let todayHoursArr = getHours(rawTodayArr);
    let todayArr = [todayDate, todayDay, todayHoursArr];

    let tomorrowDate = rawTomorrowArr.date;
    let tomorrowDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawTomorrowArr.day);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowArr = [tomorrowDate, tomorrowDay, tomorrowHoursArr];

    let lastDayDate = rawLastDayArr.date;
    let lastDayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawLastDayArr.day);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayArr = [lastDayDate, lastDayDay, lastDayHoursArr];

    let forecastArr = [todayArr, tomorrowArr, lastDayArr];

    return forecastArr
}

function getHistoryData(obj) {

    let rawHistoryArr = obj.forecast.forecastday

    let [rawYesterdayArr] = rawHistoryArr

    let yesterdayDate = rawYesterdayArr.date 
    let yesterdayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawYesterdayArr.day)
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayArr = [yesterdayDate, yesterdayDay, yesterdayHoursArr]

    return yesterdayArr
}

function getLocation(obj) {

    let location = obj.location
    let locationObj = new _class__WEBPACK_IMPORTED_MODULE_1__.Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 

    let weather = obj.current
    let weatherObj = new _class__WEBPACK_IMPORTED_MODULE_1__.CurrentWeather(weather)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( hour => {
      return new _class__WEBPACK_IMPORTED_MODULE_1__.Hour(hour)
    })
}


/***/ }),

/***/ "./src/img/moon.jpg":
/*!**************************!*\
  !*** ./src/img/moon.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b71a19ec7d550b0348f.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29tcGFyZU9iamVjdHN9XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBpdGF0aW9uID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93ID0gb2JqLnNub3dfY21cclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3dcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEMgPSBvYmoubWF4dGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmoubWF4dGVtcF9mLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmoubWludGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEYgPSBvYmoubWludGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEMgPSBvYmouYXZndGVtcF9jLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEYgPSBvYmouYXZndGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy5tYXhXaW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vd1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMubG9jYWxUaW1lID0gb2JqLmxvY2FsdGltZSxcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmoubmFtZSxcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBvYmouY291bnRyeSxcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IG9iai5yZWdpb25cclxuICAgIH1cclxufSIsImV4cG9ydCB7Y3JlYXRlUHJpbmNpcGFsfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbGV0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBmb3VydGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBmaXJzdC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XHJcbiAgICBzZWNvbmQuY2xhc3NMaXN0LmFkZChcInNlY29uZFwiKTtcclxuICAgIHRoaXJkLmNsYXNzTGlzdC5hZGQoXCJ0aGlyZFwiKTtcclxuICAgIGZvdXJ0aC5jbGFzc0xpc3QuYWRkKFwiZm91cnRoXCIpO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZmlyc3QpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHNlY29uZClcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGhpcmQpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGZvdXJ0aClcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByaW5jaXBhbCgpe1xyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInByaW5jaXBhbFwiKVxyXG5cclxuICAgIGxldCBjYXJkQXJyID0gQXJyYXkuZnJvbShjYXJkLmNoaWxkcmVuKVxyXG4gICAgbGV0IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXSA9IGNhcmRBcnJcclxuICAgIGNvbnNvbGUubG9nKGZpcnN0KVxyXG4gICAgY29uc29sZS5sb2coc2Vjb25kKVxyXG4gICAgY29uc29sZS5sb2codGhpcmQpXHJcbiAgICBjb25zb2xlLmxvZyhmb3VydGgpXHJcbn1cclxuXHJcbmNyZWF0ZVByaW5jaXBhbCgpIiwiaW1wb3J0IGltZyBmcm9tIFwiLi4vc3JjL2ltZy9tb29uLmpwZ1wiO1xyXG5pbXBvcnQge3Rlc3QsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRMb2NhdGlvbiwgZ2V0Rm9yZWNhc3RIb3VycywgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX0gZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5pbXBvcnQge2NvbXBhcmVPYmplY3RzfSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge2NyZWF0ZVByaW5jaXBhbH0gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5leHBvcnQge2dldERhdGF9XHJcblxyXG5cclxubGV0IGV4ID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxuXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKXtcclxuXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXMmZGF5cz0zXCIpLFxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXMmZHQ9MjAyNC0wMS0wN1wiKVxyXG4gICAgXSlcclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUZvcmVjYXN0KVxyXG4gICAgY29uc29sZS5sb2coZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgZ2V0U3RydWN0dXJlZEZvcmVjYXN0KGZvcmVjYXN0QXJyKVxyXG4gICAgZ2V0U3RydWN0dXJlZEhpc3RvcnkoaGlzdG9yeUFycilcclxuICAgIGdldFdlYXRoZXJBbmRMb2NhdGlvbih3ZWF0aGVyQW5kTG9jYXRpb24pXHJcblxyXG5cclxufSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0gIFxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEZvcmVjYXN0IChhcnIpe1xyXG5cclxuICAgIGxldCBbYSxiLGNdID0gYXJyXHJcbiAgICAgICAgY29uc29sZS5sb2coYSlcclxuICAgICAgICBjb25zb2xlLmxvZyhiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGMpXHJcblxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEhpc3RvcnkoYXJyKSB7XHJcbiAgICBsZXQgeSA9IGFyclxyXG4gICAgY29uc29sZS5sb2coeSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2VhdGhlckFuZExvY2F0aW9uKGFycil7XHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcbn1cclxuXHJcblxyXG5nZXREYXRhKClcclxuXHJcbiIsImltcG9ydCB7Z2V0RGF0YX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3Rlc3QsIGdldExvY2F0aW9uLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX1cclxuXHJcbmxldCB0ZXN0ID0ge1xyXG4gICAgaGlzdG9yeTogXCJsYXN0IDcgZGF5c1wiLFxyXG4gICAgZm9yZWNhc3Q6IFwidXAgdG8gMyBkYXlzIFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IHJhd1RvZGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyciA9IFt0b2RheURhdGUsIHRvZGF5RGF5LCB0b2RheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gcmF3VG9tb3Jyb3dBcnIuZGF0ZTtcclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5KTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93QXJyID0gW3RvbW9ycm93RGF0ZSwgdG9tb3Jyb3dEYXksIHRvbW9ycm93SG91cnNBcnJdO1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF0ZSA9IHJhd0xhc3REYXlBcnIuZGF0ZTtcclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheUFyciA9IFtsYXN0RGF5RGF0ZSwgbGFzdERheURheSwgbGFzdERheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBbdG9kYXlBcnIsIHRvbW9ycm93QXJyLCBsYXN0RGF5QXJyXTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0hpc3RvcnlBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSByYXdIaXN0b3J5QXJyXHJcblxyXG4gICAgbGV0IHllc3RlcmRheURhdGUgPSByYXdZZXN0ZXJkYXlBcnIuZGF0ZSBcclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHJhd1llc3RlcmRheUFyci5kYXkpXHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheUFyciA9IFt5ZXN0ZXJkYXlEYXRlLCB5ZXN0ZXJkYXlEYXksIHllc3RlcmRheUhvdXJzQXJyXVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggaG91ciA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyKVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=