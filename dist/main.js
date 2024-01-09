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

    let forecastArr = obj.forecast.forecastday;

    let [todayArr, tomorrowArr, lastDayArr] = forecastArr;

    let todayDate = todayArr.date;
    let todayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(todayArr.day);
    let todayHoursArr = getHours(todayArr);
    let todayArrParsed = [todayDate, todayDay, todayHoursArr];

    let tomorrowDate = tomorrowArr.date;
    let tomorrowDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(tomorrowArr.day);
    let tomorrowHoursArr = getHours(tomorrowArr);
    let tomorroyArrParsed = [tomorrowDate, tomorrowDay, tomorrowHoursArr];

    let lastDayDate = lastDayArr.date;
    let lastDayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(lastDayArr.day);
    let lastDayHoursArr = getHours(lastDayArr);
    let lastDayArrParsed = [lastDayDate, lastDayDay, lastDayHoursArr];

    let forecastArrParsed = [todayArrParsed, tomorroyArrParsed, lastDayArrParsed];

    return forecastArrParsed

}

function getHistoryData(obj) {

    let historyArr = obj.forecast.forecastday
    //console.log(historyArr)

    let [yesterdayArr] = historyArr
    //console.log(yesterdayArr)

    let yesterdayDate = yesterdayArr.date 
    //console.log(yesterdayDate)

    let yesterdayHoursArr = getHours(yesterdayArr)
    //console.log(yesterdayHoursArr)

    let yesterdayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(yesterdayArr.day)
    //console.log(yesterdayDay)


}

/* function getDate(){
    let rawDate = new Date()
     let year = rawDate.getFullYear()
     console.log(year)
     let month = rawDate.getMonth() + 1
     console.log(month)
     let day = rawDate.getDate()
     console.log(day)
     let date = year + month + day
 
     console.log(date)
     return date
 } */

function getLocation(obj) {
    let location = obj.location
  
    let locationObj = new _class__WEBPACK_IMPORTED_MODULE_1__.Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 
    //let weather = data.current
    //console.log(weather)
    let weatherObj = new _class__WEBPACK_IMPORTED_MODULE_1__.CurrentWeather(obj.current)
    //console.log(weatherObj1)
    //console.log(weatherObj)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( hour => {
      return new _class__WEBPACK_IMPORTED_MODULE_1__.Hour(hour)
    })
}

/* function getForecastHours(obj) {

    console.log(obj)
    let [today, tomorrow, lastDay] = obj.forecast.forecastday

    console.log(today)
    console.log(tomorrow)
    console.log(lastDay)

    let todayHourArr = today.hour.map( hour => {
      return new Hour(hour)
    })

    let tomorrowHourArr = tomorrow.hour.map( hour => {
        return new Hour(hour)
    })

    let lastDayHourArr = lastDay.hour.map( hour => {
        return new Hour(hour)
    })  
    
    console.log(todayHourArr)
    console.log(tomorrowHourArr)
    console.log(lastDayHourArr)

} */



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3Q0FBSTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjb21wYXJlT2JqZWN0c31cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgZm9yZWNhc3RIb3VyQXJyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn0iLCJleHBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufVxyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcGl0YXRpb24gPSBvYmoucHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhvdXIgZXh0ZW5kcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnNub3cgPSBvYmouc25vd19jbVxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5jaGFuY2Vfb2Zfc25vd1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5hdmdUZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5hdmdUZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5hdmdIdW1pZGl0eSA9IG9iai5hdmdodW1pZGl0eSxcclxuICAgICAgICB0aGlzLm1heFdpbmQgPSBvYmoubWF4d2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai50b3RhbHByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLnByZWNpcENoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai50b3RhbHNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9zbm93XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGltZyBmcm9tIFwiLi4vc3JjL2ltZy9tb29uLmpwZ1wiO1xyXG5pbXBvcnQge3Rlc3QsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRMb2NhdGlvbiwgZ2V0Rm9yZWNhc3RIb3VycywgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX0gZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5pbXBvcnQge2NvbXBhcmVPYmplY3RzfSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5cclxuZXhwb3J0IHtnZXRDdXJyZW50RGF0YX1cclxuXHJcblxyXG5sZXQgc3FyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKVxyXG5cclxuc3FyLnRleHRDb250ZW50ID0gXCJubyBsYSBoYWJpYXMgY3JlYWRvIHNhbGFtaW4hISFcIlxyXG5cclxubGV0IGV4ID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxuXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRhKCl7XHJcblxyXG4gICAvKiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlc1wiKVxyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgbGV0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9QnVlbm9zLUFpcmVzJmRheXM9M1wiKVxyXG4gICAgbGV0IGRhdGEyID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2coZGF0YTIpXHJcbiBcclxuICAgIGxldCByZXNwb25zZTMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9QnVlbm9zLUFpcmVzJmR0PTIwMjQtMDEtMDdcIilcclxuICAgIGxldCBkYXRhMyA9IGF3YWl0IHJlc3BvbnNlMy5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEzKSAgKi9cclxuXHJcbiAgICBsZXQgW3Jlc3BvbnNlLCByZXNwb25zZTIsIHJlc3BvbnNlM10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlc1wiKSxcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkYXlzPTNcIiksXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkdD0yMDI0LTAxLTA3XCIpXHJcbiAgICBdKVxyXG5cclxuICAgIGxldCBbZGF0YSwgZGF0YTIsIGRhdGEzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICByZXNwb25zZS5qc29uKCksXHJcbiAgICAgICAgcmVzcG9uc2UyLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTMuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhMilcclxuICAgIGNvbnNvbGUubG9nKGRhdGEzKVxyXG4gICAgXHJcbiAgICAvLy8gZnVuY3Rpb24gdG8gY29tcGFyZSBvYmplY3RzIHJldHJpZXZlZCAvLy9cclxuICAgIC8vY29tcGFyZU9iamVjdHMoZGF0YSwgZGF0YTIsIGRhdGEzKVxyXG5cclxuICAgIC8qIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGNvbnNvbGUubG9nKGhpc3RvcnlBcnIpICovXHJcblxyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICBsZXQgW2EsYixjXSA9IGdldEZvcmVjYXN0RGF0YShkYXRhMilcclxuICAgICAgICBjb25zb2xlLmxvZyhhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGIpXHJcbiAgICAgICAgY29uc29sZS5sb2coYylcclxuICAgICAgICBnZXRIaXN0b3J5RGF0YShkYXRhMylcclxuXHJcbiAgICAgICAgbGV0IGxvY2F0aW9uT2JqID0gZ2V0TG9jYXRpb24oZGF0YSlcclxuICAgICAgICBsZXQgd2VhdGhlck9iaiA9IGdldEN1cnJlbnRXZWF0aGVyKGRhdGEpXHJcbiAgICAgICAgLy9sZXQgZm9yZWNhc3RIb3Vyc09iaiA9IGdldEZvcmVjYXN0SG91cnMoZGF0YTIpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhdGlvbk9iailcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJPYmopXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJzT2JqKVxyXG5cclxuXHJcbiAgICByZXR1cm4ge2xvY2F0aW9uT2JqLCB3ZWF0aGVyT2JqfVxyXG5cclxuICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9ICBcclxufSBcclxuXHJcbmdldEN1cnJlbnREYXRhKClcclxuXHJcbi8vbGV0IHtsb2NhdGlvbk9iaiwgd2VhdGhlck9ian0gPSBhd2FpdCBnZXRDdXJyZW50RGF0YSgpXHJcbi8vY29uc29sZS5sb2cod2VhdGhlck9iailcclxuLy9jb25zb2xlLmxvZyhsb2NhdGlvbk9iailcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRQbGFjZSgpIHtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0Q3VycmVudERhdGEoKVxyXG4gICAgbGV0IGxvY2F0aW9uID0gZGF0YS5sb2NhdGlvblxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSB7XHJcbiAgICAgICAgbG9jYWxUaW1lOiBsb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICAgICAgbmFtZTogbG9jYXRpb24ubmFtZSxcclxuICAgICAgICBjb3VudHJ5OiBsb2NhdGlvbi5jb3VudHJ5XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbk9iaikgXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG4gXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCl7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGdldEN1cnJlbnREYXRhKClcclxuICAgIGxldCB3ZWF0aGVyID0gZGF0YS5jdXJyZW50XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSB7XHJcbiAgICAgICAgd2VhdGhlclRleHQ6IHdlYXRoZXIuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgd2VhdGhlckljb246IHdlYXRoZXIuY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIGNsb3VkOiB3ZWF0aGVyLmNsb3VkLFxyXG4gICAgICAgIHRlbXBDOiB3ZWF0aGVyLnRlbXBfYyxcclxuICAgICAgICB0ZW1wRjogd2VhdGhlci50ZW1wX2YsXHJcbiAgICAgICAgdGVtcENfZmVlbDogd2VhdGhlci5mZWVsc2lrZV9jLFxyXG4gICAgICAgIHRlbXBGX2ZlZWw6IHdlYXRoZXIuZmVlbHNpa2VfZixcclxuICAgICAgICBodW1pZGl0eTogd2VhdGhlci5odW1pZGl0eSxcclxuICAgICAgICB3aW5kOiB3ZWF0aGVyLndpbmRfa3BoLFxyXG4gICAgICAgIHByZWNpcGl0YXRpb246IHdlYXRoZXIucHJlY2lwX21tXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqKVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2JqXHJcbn0gKi9cclxuIiwiaW1wb3J0IHtnZXRDdXJyZW50RGF0YX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3Rlc3QsIGdldExvY2F0aW9uLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX1cclxuXHJcbmxldCB0ZXN0ID0ge1xyXG4gICAgaGlzdG9yeTogXCJsYXN0IDcgZGF5c1wiLFxyXG4gICAgZm9yZWNhc3Q6IFwidXAgdG8gMyBkYXlzIFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gICAgbGV0IFt0b2RheUFyciwgdG9tb3Jyb3dBcnIsIGxhc3REYXlBcnJdID0gZm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IHRvZGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHRvZGF5QXJyLmRheSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHRvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyclBhcnNlZCA9IFt0b2RheURhdGUsIHRvZGF5RGF5LCB0b2RheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gdG9tb3Jyb3dBcnIuZGF0ZTtcclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkodG9tb3Jyb3dBcnIuZGF5KTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnModG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm95QXJyUGFyc2VkID0gW3RvbW9ycm93RGF0ZSwgdG9tb3Jyb3dEYXksIHRvbW9ycm93SG91cnNBcnJdO1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF0ZSA9IGxhc3REYXlBcnIuZGF0ZTtcclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShsYXN0RGF5QXJyLmRheSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMobGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheUFyclBhcnNlZCA9IFtsYXN0RGF5RGF0ZSwgbGFzdERheURheSwgbGFzdERheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnJQYXJzZWQgPSBbdG9kYXlBcnJQYXJzZWQsIHRvbW9ycm95QXJyUGFyc2VkLCBsYXN0RGF5QXJyUGFyc2VkXTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJQYXJzZWRcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCBoaXN0b3J5QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcblxyXG4gICAgbGV0IFt5ZXN0ZXJkYXlBcnJdID0gaGlzdG9yeUFyclxyXG4gICAgLy9jb25zb2xlLmxvZyh5ZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheURhdGUgPSB5ZXN0ZXJkYXlBcnIuZGF0ZSBcclxuICAgIC8vY29uc29sZS5sb2coeWVzdGVyZGF5RGF0ZSlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3Vycyh5ZXN0ZXJkYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKHllc3RlcmRheUhvdXJzQXJyKVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHllc3RlcmRheUFyci5kYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKHllc3RlcmRheURheSlcclxuXHJcblxyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBnZXREYXRlKCl7XHJcbiAgICBsZXQgcmF3RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICBsZXQgeWVhciA9IHJhd0RhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgIGNvbnNvbGUubG9nKHllYXIpXHJcbiAgICAgbGV0IG1vbnRoID0gcmF3RGF0ZS5nZXRNb250aCgpICsgMVxyXG4gICAgIGNvbnNvbGUubG9nKG1vbnRoKVxyXG4gICAgIGxldCBkYXkgPSByYXdEYXRlLmdldERhdGUoKVxyXG4gICAgIGNvbnNvbGUubG9nKGRheSlcclxuICAgICBsZXQgZGF0ZSA9IHllYXIgKyBtb250aCArIGRheVxyXG4gXHJcbiAgICAgY29uc29sZS5sb2coZGF0ZSlcclxuICAgICByZXR1cm4gZGF0ZVxyXG4gfSAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICBcclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcbiAgICAvL2xldCB3ZWF0aGVyID0gZGF0YS5jdXJyZW50XHJcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXIpXHJcbiAgICBsZXQgd2VhdGhlck9iaiA9IG5ldyBDdXJyZW50V2VhdGhlcihvYmouY3VycmVudClcclxuICAgIC8vY29uc29sZS5sb2cod2VhdGhlck9iajEpXHJcbiAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJPYmopXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggaG91ciA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyKVxyXG4gICAgfSlcclxufVxyXG5cclxuLyogZnVuY3Rpb24gZ2V0Rm9yZWNhc3RIb3VycyhvYmopIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhvYmopXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgIGNvbnNvbGUubG9nKHRvbW9ycm93KVxyXG4gICAgY29uc29sZS5sb2cobGFzdERheSlcclxuXHJcbiAgICBsZXQgdG9kYXlIb3VyQXJyID0gdG9kYXkuaG91ci5tYXAoIGhvdXIgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91cilcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IHRvbW9ycm93SG91ckFyciA9IHRvbW9ycm93LmhvdXIubWFwKCBob3VyID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEhvdXIoaG91cilcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGxhc3REYXlIb3VyQXJyID0gbGFzdERheS5ob3VyLm1hcCggaG91ciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIb3VyKGhvdXIpXHJcbiAgICB9KSAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKHRvZGF5SG91ckFycilcclxuICAgIGNvbnNvbGUubG9nKHRvbW9ycm93SG91ckFycilcclxuICAgIGNvbnNvbGUubG9nKGxhc3REYXlIb3VyQXJyKVxyXG5cclxufSAqL1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9