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
    //console.log(currentFilter)
    //console.log(forecastFilter)

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
    forecastHourArr.forEach((prop) =>{
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentData: () => (/* binding */ getCurrentData)
/* harmony export */ });
/* harmony import */ var _src_img_moon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/moon.jpg */ "./src/img/moon.jpg");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");







let sqr = document.querySelector("div")

sqr.textContent = "no la habias creado salamin!!!"

let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getCurrentData(){

   /*  let response = await fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Buenos-Aires")
    let data = await response.json()
    console.log(data)

    let response2 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3")
    let data2 = await response2.json()
    console.log(data2)
 
    let response3 = await fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    let data3 = await response3.json()
    console.log(data3)  */

    let [response, response2, response3] = await Promise.all([
        fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Buenos-Aires"),
        fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3"),
        fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    ])

    let [data, data2, data3] = await Promise.all([
        response.json(),
        response2.json(),
        response3.json()
    ])

    console.log(data)
    console.log(data2)
    console.log(data3)
    
    /// function to compare objects retrieved ///
    //compareObjects(data, data2, data3)

    /* let forecastArr = data2.forecast.forecastday
    console.log(forecastArr)
    let historyArr = data3.forecast.forecastday
    console.log(historyArr) */

    try{

        let [a,b,c] = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getForecastData)(data2)
        console.log(a)
        console.log(b)
        console.log(c)
        ;(0,_objects__WEBPACK_IMPORTED_MODULE_1__.getHistoryData)(data3)

        let locationObj = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getLocation)(data)
        let weatherObj = (0,_objects__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)(data)
        //let forecastHoursObj = getForecastHours(data2)
        //console.log(locationObj)
        //console.log(weatherObj)
        //console.log(forecastHoursObj)


    return {locationObj, weatherObj}

    } catch(err){
        console.log(err)
    }  
} 

getCurrentData()

//let {locationObj, weatherObj} = await getCurrentData()
//console.log(weatherObj)
//console.log(locationObj)







/* async function getCurrentPlace() {
    let data = await getCurrentData()
    let location = data.location
    console.log(location)
    let locationObj = {
        localTime: location.localtime,
        name: location.name,
        country: location.country
    }
    console.log(locationObj) 
    return locationObj
}
 
async function getCurrentWeather(){
    let data = await getCurrentData()
    let weather = data.current
    console.log(weather)
    let weatherObj = {
        weatherText: weather.condition.text,
        weatherIcon: weather.condition.icon, 
        cloud: weather.cloud,
        tempC: weather.temp_c,
        tempF: weather.temp_f,
        tempC_feel: weather.feelsike_c,
        tempF_feel: weather.feelsike_f,
        humidity: weather.humidity,
        wind: weather.wind_kph,
        precipitation: weather.precip_mm
    }
    console.log(weatherObj)

    return weatherObj
} */


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
    console.log(yesterdayArr)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29tcGFyZU9iamVjdHN9XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGZvcmVjYXN0SG91ckFyci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBpdGF0aW9uID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93ID0gb2JqLnNub3dfY21cclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3dcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEMgPSBvYmoubWF4dGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmoubWF4dGVtcF9mLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmoubWludGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEYgPSBvYmoubWludGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEMgPSBvYmouYXZndGVtcF9jLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEYgPSBvYmouYXZndGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy5tYXhXaW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vd1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMubG9jYWxUaW1lID0gb2JqLmxvY2FsdGltZSxcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmoubmFtZSxcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBvYmouY291bnRyeSxcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IG9iai5yZWdpb25cclxuICAgIH1cclxufSIsImltcG9ydCBpbWcgZnJvbSBcIi4uL3NyYy9pbWcvbW9vbi5qcGdcIjtcclxuaW1wb3J0IHt0ZXN0LCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0TG9jYXRpb24sIGdldEZvcmVjYXN0SG91cnMsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0c30gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIjtcclxuXHJcbmV4cG9ydCB7Z2V0Q3VycmVudERhdGF9XHJcblxyXG5cclxubGV0IHNxciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIilcclxuXHJcbnNxci50ZXh0Q29udGVudCA9IFwibm8gbGEgaGFiaWFzIGNyZWFkbyBzYWxhbWluISEhXCJcclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcblxyXG5sZXQgcGFzcyA9IFwiP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyXCJcclxubGV0IHVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiXHJcbmxldCBjdXJyZW50ID0gXCIvY3VycmVudC5qc29uXCJcclxubGV0IHBsYWNlID0gXCJxPVBhcmlzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50RGF0YSgpe1xyXG5cclxuICAgLyogIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXNcIilcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgIGxldCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkYXlzPTNcIilcclxuICAgIGxldCBkYXRhMiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEyKVxyXG4gXHJcbiAgICBsZXQgcmVzcG9uc2UzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkdD0yMDI0LTAxLTA3XCIpXHJcbiAgICBsZXQgZGF0YTMgPSBhd2FpdCByZXNwb25zZTMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhMykgICovXHJcblxyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyLCByZXNwb25zZTNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXNcIiksXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXMmZGF5cz0zXCIpLFxyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT1CdWVub3MtQWlyZXMmZHQ9MjAyNC0wMS0wN1wiKVxyXG4gICAgXSlcclxuXHJcbiAgICBsZXQgW2RhdGEsIGRhdGEyLCBkYXRhM10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKCksXHJcbiAgICAgICAgcmVzcG9uc2UzLmpzb24oKVxyXG4gICAgXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc29sZS5sb2coZGF0YTIpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhMylcclxuICAgIFxyXG4gICAgLy8vIGZ1bmN0aW9uIHRvIGNvbXBhcmUgb2JqZWN0cyByZXRyaWV2ZWQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICAvKiBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBjb25zb2xlLmxvZyhoaXN0b3J5QXJyKSAqL1xyXG5cclxuICAgIHRyeXtcclxuXHJcbiAgICAgICAgbGV0IFthLGIsY10gPSBnZXRGb3JlY2FzdERhdGEoZGF0YTIpXHJcbiAgICAgICAgY29uc29sZS5sb2coYSlcclxuICAgICAgICBjb25zb2xlLmxvZyhiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGMpXHJcbiAgICAgICAgZ2V0SGlzdG9yeURhdGEoZGF0YTMpXHJcblxyXG4gICAgICAgIGxldCBsb2NhdGlvbk9iaiA9IGdldExvY2F0aW9uKGRhdGEpXHJcbiAgICAgICAgbGV0IHdlYXRoZXJPYmogPSBnZXRDdXJyZW50V2VhdGhlcihkYXRhKVxyXG4gICAgICAgIC8vbGV0IGZvcmVjYXN0SG91cnNPYmogPSBnZXRGb3JlY2FzdEhvdXJzKGRhdGEyKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cobG9jYXRpb25PYmopXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh3ZWF0aGVyT2JqKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3Vyc09iailcclxuXHJcblxyXG4gICAgcmV0dXJuIHtsb2NhdGlvbk9iaiwgd2VhdGhlck9ian1cclxuXHJcbiAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5nZXRDdXJyZW50RGF0YSgpXHJcblxyXG4vL2xldCB7bG9jYXRpb25PYmosIHdlYXRoZXJPYmp9ID0gYXdhaXQgZ2V0Q3VycmVudERhdGEoKVxyXG4vL2NvbnNvbGUubG9nKHdlYXRoZXJPYmopXHJcbi8vY29uc29sZS5sb2cobG9jYXRpb25PYmopXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50UGxhY2UoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGdldEN1cnJlbnREYXRhKClcclxuICAgIGxldCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb25cclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG4gICAgbGV0IGxvY2F0aW9uT2JqID0ge1xyXG4gICAgICAgIGxvY2FsVGltZTogbG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUsXHJcbiAgICAgICAgY291bnRyeTogbG9jYXRpb24uY291bnRyeVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb25PYmopIFxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuIFxyXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcigpe1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCBnZXRDdXJyZW50RGF0YSgpXHJcbiAgICBsZXQgd2VhdGhlciA9IGRhdGEuY3VycmVudFxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlcilcclxuICAgIGxldCB3ZWF0aGVyT2JqID0ge1xyXG4gICAgICAgIHdlYXRoZXJUZXh0OiB3ZWF0aGVyLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHdlYXRoZXJJY29uOiB3ZWF0aGVyLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICBjbG91ZDogd2VhdGhlci5jbG91ZCxcclxuICAgICAgICB0ZW1wQzogd2VhdGhlci50ZW1wX2MsXHJcbiAgICAgICAgdGVtcEY6IHdlYXRoZXIudGVtcF9mLFxyXG4gICAgICAgIHRlbXBDX2ZlZWw6IHdlYXRoZXIuZmVlbHNpa2VfYyxcclxuICAgICAgICB0ZW1wRl9mZWVsOiB3ZWF0aGVyLmZlZWxzaWtlX2YsXHJcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXIuaHVtaWRpdHksXHJcbiAgICAgICAgd2luZDogd2VhdGhlci53aW5kX2twaCxcclxuICAgICAgICBwcmVjaXBpdGF0aW9uOiB3ZWF0aGVyLnByZWNpcF9tbVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlck9iailcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59ICovXHJcbiIsImltcG9ydCB7Z2V0Q3VycmVudERhdGF9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuZXhwb3J0IHt0ZXN0LCBnZXRMb2NhdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9XHJcblxyXG5sZXQgdGVzdCA9IHtcclxuICAgIGhpc3Rvcnk6IFwibGFzdCA3IGRheXNcIixcclxuICAgIGZvcmVjYXN0OiBcInVwIHRvIDMgZGF5cyBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0ZvcmVjYXN0QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCB0b2RheURhdGUgPSByYXdUb2RheUFyci5kYXRlO1xyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXkpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlBcnIgPSBbdG9kYXlEYXRlLCB0b2RheURheSwgdG9kYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF0ZSA9IHJhd1RvbW9ycm93QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd0FyciA9IFt0b21vcnJvd0RhdGUsIHRvbW9ycm93RGF5LCB0b21vcnJvd0hvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgbGFzdERheURhdGUgPSByYXdMYXN0RGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXkpO1xyXG4gICAgbGV0IGxhc3REYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd0xhc3REYXlBcnIpO1xyXG4gICAgbGV0IGxhc3REYXlBcnIgPSBbbGFzdERheURhdGUsIGxhc3REYXlEYXksIGxhc3REYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5QXJyLCB0b21vcnJvd0FyciwgbGFzdERheUFycl07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdIaXN0b3J5QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gcmF3SGlzdG9yeUFyclxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXRlID0gcmF3WWVzdGVyZGF5QXJyLmRhdGUgXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5KVxyXG4gICAgbGV0IHllc3RlcmRheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3WWVzdGVyZGF5QXJyKVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlBcnIgPSBbeWVzdGVyZGF5RGF0ZSwgeWVzdGVyZGF5RGF5LCB5ZXN0ZXJkYXlIb3Vyc0Fycl1cclxuICAgIGNvbnNvbGUubG9nKHllc3RlcmRheUFycilcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKG9iaikge1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IG9iai5sb2NhdGlvblxyXG4gICAgbGV0IGxvY2F0aW9uT2JqID0gbmV3IExvY2F0aW9uKGxvY2F0aW9uKVxyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbk9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihvYmopeyBcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai5jdXJyZW50XHJcbiAgICBsZXQgd2VhdGhlck9iaiA9IG5ldyBDdXJyZW50V2VhdGhlcih3ZWF0aGVyKVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvdXJzKGFycikge1xyXG5cclxuICAgIHJldHVybiBhcnIuaG91ci5tYXAoIGhvdXIgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91cilcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9