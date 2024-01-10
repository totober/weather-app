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
/* harmony export */   createPrincipal: () => (/* binding */ createPrincipal),
/* harmony export */   iconSelector: () => (/* binding */ iconSelector)
/* harmony export */ });
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun.svg */ "./src/img/sun.svg");
/* harmony import */ var _img_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/moon.svg */ "./src/img/moon.svg");
/* harmony import */ var _img_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cloudy.svg */ "./src/img/cloudy.svg");
/* harmony import */ var _img_cloudyDay_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cloudyDay.svg */ "./src/img/cloudyDay.svg");
/* harmony import */ var _img_cloudyNight_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cloudyNight.svg */ "./src/img/cloudyNight.svg");
/* harmony import */ var _img_thunder_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/thunder.svg */ "./src/img/thunder.svg");
/* harmony import */ var _img_fog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/fog.svg */ "./src/img/fog.svg");
/* harmony import */ var _img_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/rain.svg */ "./src/img/rain.svg");
/* harmony import */ var _img_rainDay_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/rainDay.svg */ "./src/img/rainDay.svg");
/* harmony import */ var _img_rainNight_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/rainNight.svg */ "./src/img/rainNight.svg");
/* harmony import */ var _img_sleet_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/sleet.svg */ "./src/img/sleet.svg");
/* harmony import */ var _img_snow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/snow.svg */ "./src/img/snow.svg");
/* harmony import */ var _img_cloud_ONE_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/cloud-ONE.svg */ "./src/img/cloud-ONE.svg");
/* harmony import */ var _img_menu_burger_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/menu-burger.svg */ "./src/img/menu-burger.svg");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/temperature.svg */ "./src/img/temperature.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/wind.svg */ "./src/img/wind.svg");
























function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("div");
    let third = document.createElement("div");
    let fourth = document.createElement("div");
    let img = document.createElement("img")

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");
    img.classList.add("big-img");

    first.appendChild(img)
    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)

    return card
}



function createPrincipal(current, location){

    iconSelector(current)

    let card = createCard()
    card.classList.add("principal")

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth] = cardArr

    first.firstElementChild.src = _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__;
    second.textContent = `${location.name}, ${location.country}`;
    third.textContent = `Temperatura: ${current.tempC}º/ ST: ${current.tempC_feel}º`;
    fourth.textContent = `Humedad: ${current.humidity}%`

    console.log(card)
    return card
}


/*function iconSelector(){


 let iconArr = []
iconsJson.forEach(obj => {
    for (let [key, value] of Object.entries(obj)) {
        if(key === "day"){
            iconArr.push([key, value])
        } else if (key === "night"){
            iconArr.push([key, value])
        }
    }
})

console.log(iconArr) */


function iconSelector(obj){

    let weather = obj.weatherText
    let isDay = obj.isDay

   /*  commonArr.forEach(arr => {
        arr.forEach((string, i, array) => {
            if(weather === string){
                console.log(array[array.length -1])
                return array[array.length -1]
            }
        })
    }) */

    commonArr.forEach(arr => {
        arr.forEach((string, i, array) => {
            if(weather === string){
                console.log(array[array.length -1])
                return array[array.length -1]
            }
        })
    })


    if(!isDay) {
        nightArr.forEach(arr => {
            arr.forEach((string, i, array) => {
                if(weather === string) {
                    console.log(array[array.length -1])
                    return array[array.length - 1]
                }
            })
        })
    }

    if(isDay) {
        dayArr.forEach(arr => {
            arr.forEach((string, i, array) => {
                if(weather === string) {
                    console.log(array[array.length -1])
                    return array[array.length - 1]
                }
            })
        })
    }



}




let snow = ["Patchy snow possible", "Blowing snow", "Blizzard", "Patchy light snow", "Light snow", 
            "Patchy moderate snow", "Moderate snow", "Patchy heavy snow", "Heavy snow", "Light snow showers",
            "Moderate or heavy snow showers", _img_snow_svg__WEBPACK_IMPORTED_MODULE_11__];

let sleet = ["Patchy sleet possible", "Patchy freezing drizzle possible", "Patchy light drizzle", "Light drizzle",
            "Freezing drizzle", "Heavy freezing drizzle", "Light freezing rain", "Moderate or heavy freezing rain",
            "Light sleet", "Moderate or heavy sleet", "Ice pellets", "Light sleet showers",
            "Moderate or heavy sleet showers", "Light showers of ice pellets", 
            "Moderate or heavy showers of ice pellets", _img_sleet_svg__WEBPACK_IMPORTED_MODULE_10__];


let fog = ["Mist", "Fog", "Freezing fog", _img_fog_svg__WEBPACK_IMPORTED_MODULE_6__];

let thunder = ["Thundery outbreaks possible", "Patchy light rain with thunder", "Moderate or heavy rain with thunder",
                "Patchy light snow with thunder", "Moderate or heavy snow with thunder", _img_thunder_svg__WEBPACK_IMPORTED_MODULE_5__];

let rain = ["Light rain", "Moderate rain", "Heavy rain", "Moderate or heavy rain shower", "Torrential rain shower",
            _img_rain_svg__WEBPACK_IMPORTED_MODULE_7__];

let cloudy = ["Cloudy", "Overcast", _img_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__];

let sun = ["Sunny", _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__];

let moon = ["Clear", _img_moon_svg__WEBPACK_IMPORTED_MODULE_1__];

let rainDay = ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainDay_svg__WEBPACK_IMPORTED_MODULE_8__];

let rainNight = ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainNight_svg__WEBPACK_IMPORTED_MODULE_9__];

let cloudyDay = ["Partly cloudy", _img_cloudyDay_svg__WEBPACK_IMPORTED_MODULE_3__];

let cloudyNight = ["Partly cloudy", _img_cloudyNight_svg__WEBPACK_IMPORTED_MODULE_4__];

let commonArr = [fog, thunder, rain, cloudy]

let dayArr = [sun, rainDay, cloudyDay]

let nightArr = [moon, rainNight, cloudyNight]

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
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
//import img from "../src/img/moon.jpg";






let principal = document.querySelector(".principal")

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

    let weatherAndLocation = [(0,_objects__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)(dataForecast), (0,_objects__WEBPACK_IMPORTED_MODULE_0__.getLocation)(dataForecast)]
    let forecastArr = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.getForecastData)(dataForecast)
    let historyArr = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.getHistoryData)(dataHistory)

    getStructuredForecast(forecastArr)
    getStructuredHistory(historyArr)
    getWeatherAndLocation(weatherAndLocation)


} catch(err){
        console.log(err)
    }  
} 

function getStructuredForecast (arr){

    let [today, tomorrow, lastDay] = arr
        console.log(today)
        console.log(tomorrow)
        console.log(lastDay)
    

} 

function getStructuredHistory(arr) {
    let y = arr
    console.log(y)
}

function getWeatherAndLocation(arr){
    let [currentWeather, location] = arr
    console.log(currentWeather)
    console.log(location)

    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createPrincipal)(currentWeather, location)) 
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

/***/ "./src/img/cloud-ONE.svg":
/*!*******************************!*\
  !*** ./src/img/cloud-ONE.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a92c90515304b983146f.svg";

/***/ }),

/***/ "./src/img/cloudy.svg":
/*!****************************!*\
  !*** ./src/img/cloudy.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "565b7003966207427b7d.svg";

/***/ }),

/***/ "./src/img/cloudyDay.svg":
/*!*******************************!*\
  !*** ./src/img/cloudyDay.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "accc83fd93eb10797b16.svg";

/***/ }),

/***/ "./src/img/cloudyNight.svg":
/*!*********************************!*\
  !*** ./src/img/cloudyNight.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78c049aeaf2cbab72c48.svg";

/***/ }),

/***/ "./src/img/fog.svg":
/*!*************************!*\
  !*** ./src/img/fog.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0407185ea74798f52287.svg";

/***/ }),

/***/ "./src/img/menu-burger.svg":
/*!*********************************!*\
  !*** ./src/img/menu-burger.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "230ce7ebac47221f71ff.svg";

/***/ }),

/***/ "./src/img/moon.svg":
/*!**************************!*\
  !*** ./src/img/moon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "264577bc152c0e5e3df0.svg";

/***/ }),

/***/ "./src/img/rain.svg":
/*!**************************!*\
  !*** ./src/img/rain.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d39241bc6487df8deaf.svg";

/***/ }),

/***/ "./src/img/rainDay.svg":
/*!*****************************!*\
  !*** ./src/img/rainDay.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc8d08e0e73f82dbbd68.svg";

/***/ }),

/***/ "./src/img/rainNight.svg":
/*!*******************************!*\
  !*** ./src/img/rainNight.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bd7f93c8e0c5166037a.svg";

/***/ }),

/***/ "./src/img/sleet.svg":
/*!***************************!*\
  !*** ./src/img/sleet.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43b02ea718fe83560227.svg";

/***/ }),

/***/ "./src/img/snow.svg":
/*!**************************!*\
  !*** ./src/img/snow.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24df9bff26d99b192bbf.svg";

/***/ }),

/***/ "./src/img/sun.svg":
/*!*************************!*\
  !*** ./src/img/sun.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9dec9518500fe4c7a3e7.svg";

/***/ }),

/***/ "./src/img/temperature.svg":
/*!*********************************!*\
  !*** ./src/img/temperature.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ac47904241ad6abbde4.svg";

/***/ }),

/***/ "./src/img/thunder.svg":
/*!*****************************!*\
  !*** ./src/img/thunder.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b01f3c88adfea854b292.svg";

/***/ }),

/***/ "./src/img/wind.svg":
/*!**************************!*\
  !*** ./src/img/wind.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba6156c3dd16376cb8b6.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0NBQUk7QUFDckIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29tcGFyZU9iamVjdHN9XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBpdGF0aW9uID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93ID0gb2JqLnNub3dfY21cclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3dcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEMgPSBvYmoubWF4dGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmoubWF4dGVtcF9mLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmoubWludGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEYgPSBvYmoubWludGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEMgPSBvYmouYXZndGVtcF9jLFxyXG4gICAgICAgIHRoaXMuYXZnVGVtcEYgPSBvYmouYXZndGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy5tYXhXaW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vd1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMubG9jYWxUaW1lID0gb2JqLmxvY2FsdGltZSxcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmoubmFtZSxcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBvYmouY291bnRyeSxcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IG9iai5yZWdpb25cclxuICAgIH1cclxufSIsImltcG9ydCBzdW5JbWcgZnJvbSBcIi4vaW1nL3N1bi5zdmdcIlxyXG5pbXBvcnQgbW9vbkltZyBmcm9tIFwiLi9pbWcvbW9vbi5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHkuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeURheUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5RGF5LnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlOaWdodEltZyBmcm9tIFwiLi9pbWcvY2xvdWR5TmlnaHQuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXIuc3ZnXCJcclxuaW1wb3J0IGZvZ0ltZyBmcm9tIFwiLi9pbWcvZm9nLnN2Z1wiXHJcbmltcG9ydCByYWluSW1nIGZyb20gXCIuL2ltZy9yYWluLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LnN2Z1wiXHJcbmltcG9ydCByYWluTmlnaHRJbWcgZnJvbSBcIi4vaW1nL3JhaW5OaWdodC5zdmdcIlxyXG5pbXBvcnQgc2xlZXRJbWcgZnJvbSBcIi4vaW1nL3NsZWV0LnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LnN2Z1wiXHJcblxyXG5pbXBvcnQgY2xvdWRPbmVJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkLU9ORS5zdmdcIlxyXG5pbXBvcnQgbWVudUltZyBmcm9tIFwiLi9pbWcvbWVudS1idXJnZXIuc3ZnXCJcclxuaW1wb3J0IHRlbXBJbWcgZnJvbSBcIi4vaW1nL3RlbXBlcmF0dXJlLnN2Z1wiXHJcbmltcG9ydCB3aW5kSW1nIGZyb20gXCIuL2ltZy93aW5kLnN2Z1wiXHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVQcmluY2lwYWwsIGljb25TZWxlY3Rvcn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbGV0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IHRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBmb3VydGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgZmlyc3QuY2xhc3NMaXN0LmFkZChcImZpcnN0XCIpO1xyXG4gICAgc2Vjb25kLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRcIik7XHJcbiAgICB0aGlyZC5jbGFzc0xpc3QuYWRkKFwidGhpcmRcIik7XHJcbiAgICBmb3VydGguY2xhc3NMaXN0LmFkZChcImZvdXJ0aFwiKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYmlnLWltZ1wiKTtcclxuXHJcbiAgICBmaXJzdC5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGZpcnN0KVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChzZWNvbmQpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRoaXJkKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChmb3VydGgpXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcmluY2lwYWwoY3VycmVudCwgbG9jYXRpb24pe1xyXG5cclxuICAgIGljb25TZWxlY3RvcihjdXJyZW50KVxyXG5cclxuICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcmluY2lwYWxcIilcclxuXHJcbiAgICBsZXQgY2FyZEFyciA9IEFycmF5LmZyb20oY2FyZC5jaGlsZHJlbilcclxuICAgIGxldCBbZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aF0gPSBjYXJkQXJyXHJcblxyXG4gICAgZmlyc3QuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gc3VuSW1nO1xyXG4gICAgc2Vjb25kLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xyXG4gICAgdGhpcmQudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmE6ICR7Y3VycmVudC50ZW1wQ33Cui8gU1Q6ICR7Y3VycmVudC50ZW1wQ19mZWVsfcK6YDtcclxuICAgIGZvdXJ0aC50ZXh0Q29udGVudCA9IGBIdW1lZGFkOiAke2N1cnJlbnQuaHVtaWRpdHl9JWBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYXJkKVxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcbi8qZnVuY3Rpb24gaWNvblNlbGVjdG9yKCl7XHJcblxyXG5cclxuIGxldCBpY29uQXJyID0gW11cclxuaWNvbnNKc29uLmZvckVhY2gob2JqID0+IHtcclxuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XHJcbiAgICAgICAgaWYoa2V5ID09PSBcImRheVwiKXtcclxuICAgICAgICAgICAgaWNvbkFyci5wdXNoKFtrZXksIHZhbHVlXSlcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJuaWdodFwiKXtcclxuICAgICAgICAgICAgaWNvbkFyci5wdXNoKFtrZXksIHZhbHVlXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zb2xlLmxvZyhpY29uQXJyKSAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGljb25TZWxlY3RvcihvYmope1xyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLndlYXRoZXJUZXh0XHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXlcclxuXHJcbiAgIC8qICBjb21tb25BcnIuZm9yRWFjaChhcnIgPT4ge1xyXG4gICAgICAgIGFyci5mb3JFYWNoKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVthcnJheS5sZW5ndGggLTFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSAqL1xyXG5cclxuICAgIGNvbW1vbkFyci5mb3JFYWNoKGFyciA9PiB7XHJcbiAgICAgICAgYXJyLmZvckVhY2goKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5W2FycmF5Lmxlbmd0aCAtMV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycmF5W2FycmF5Lmxlbmd0aCAtMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheVthcnJheS5sZW5ndGggLTFdKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmxldCBzbm93ID0gW1wiUGF0Y2h5IHNub3cgcG9zc2libGVcIiwgXCJCbG93aW5nIHNub3dcIiwgXCJCbGl6emFyZFwiLCBcIlBhdGNoeSBsaWdodCBzbm93XCIsIFwiTGlnaHQgc25vd1wiLCBcclxuICAgICAgICAgICAgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLCBcIk1vZGVyYXRlIHNub3dcIiwgXCJQYXRjaHkgaGVhdnkgc25vd1wiLCBcIkhlYXZ5IHNub3dcIiwgXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiwgc25vd0ltZ107XHJcblxyXG5sZXQgc2xlZXQgPSBbXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIiwgXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsIFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgICAgICBcIkZyZWV6aW5nIGRyaXp6bGVcIiwgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICAgICAgXCJMaWdodCBzbGVldFwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsIFwiSWNlIHBlbGxldHNcIiwgXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLCBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBzbGVldEltZ107XHJcblxyXG5cclxubGV0IGZvZyA9IFtcIk1pc3RcIiwgXCJGb2dcIiwgXCJGcmVlemluZyBmb2dcIiwgZm9nSW1nXTtcclxuXHJcbmxldCB0aHVuZGVyID0gW1wiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ107XHJcblxyXG5sZXQgcmFpbiA9IFtcIkxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluXCIsIFwiSGVhdnkgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgICAgICByYWluSW1nXTtcclxuXHJcbmxldCBjbG91ZHkgPSBbXCJDbG91ZHlcIiwgXCJPdmVyY2FzdFwiLCBjbG91ZHlJbWddO1xyXG5cclxubGV0IHN1biA9IFtcIlN1bm55XCIsIHN1bkltZ107XHJcblxyXG5sZXQgbW9vbiA9IFtcIkNsZWFyXCIsIG1vb25JbWddO1xyXG5cclxubGV0IHJhaW5EYXkgPSBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIHJhaW5EYXlJbWddO1xyXG5cclxubGV0IHJhaW5OaWdodCA9IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgcmFpbk5pZ2h0SW1nXTtcclxuXHJcbmxldCBjbG91ZHlEYXkgPSBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ107XHJcblxyXG5sZXQgY2xvdWR5TmlnaHQgPSBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeU5pZ2h0SW1nXTtcclxuXHJcbmxldCBjb21tb25BcnIgPSBbZm9nLCB0aHVuZGVyLCByYWluLCBjbG91ZHldXHJcblxyXG5sZXQgZGF5QXJyID0gW3N1biwgcmFpbkRheSwgY2xvdWR5RGF5XVxyXG5cclxubGV0IG5pZ2h0QXJyID0gW21vb24sIHJhaW5OaWdodCwgY2xvdWR5TmlnaHRdIiwiLy9pbXBvcnQgaW1nIGZyb20gXCIuLi9zcmMvaW1nL21vb24uanBnXCI7XHJcbmltcG9ydCB7dGVzdCwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldExvY2F0aW9uLCBnZXRGb3JlY2FzdEhvdXJzLCBnZXRGb3JlY2FzdERhdGEsIGdldEhpc3RvcnlEYXRhfSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHN9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJpbmNpcGFsLCBpY29uU2VsZWN0b3J9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuZXhwb3J0IHtnZXREYXRhfVxyXG5cclxubGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcblxyXG5sZXQgZXggPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTExMTExMTExMTExMTExMTEmcT1sb25kb25cIlxyXG5cclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpe1xyXG5cclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkYXlzPTNcIiksXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkdD0yMDI0LTAxLTA3XCIpXHJcbiAgICBdKVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBnZXRTdHJ1Y3R1cmVkRm9yZWNhc3QoZm9yZWNhc3RBcnIpXHJcbiAgICBnZXRTdHJ1Y3R1cmVkSGlzdG9yeShoaXN0b3J5QXJyKVxyXG4gICAgZ2V0V2VhdGhlckFuZExvY2F0aW9uKHdlYXRoZXJBbmRMb2NhdGlvbilcclxuXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRm9yZWNhc3QgKGFycil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gYXJyXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3cpXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdERheSlcclxuICAgIFxyXG5cclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldFN0cnVjdHVyZWRIaXN0b3J5KGFycikge1xyXG4gICAgbGV0IHkgPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJBbmRMb2NhdGlvbihhcnIpe1xyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gYXJyXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjcmVhdGVQcmluY2lwYWwoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSkgXHJcbn1cclxuXHJcblxyXG5nZXREYXRhKClcclxuXHJcbiIsImltcG9ydCB7Z2V0RGF0YX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3Rlc3QsIGdldExvY2F0aW9uLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX1cclxuXHJcbmxldCB0ZXN0ID0ge1xyXG4gICAgaGlzdG9yeTogXCJsYXN0IDcgZGF5c1wiLFxyXG4gICAgZm9yZWNhc3Q6IFwidXAgdG8gMyBkYXlzIFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IHJhd1RvZGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyciA9IFt0b2RheURhdGUsIHRvZGF5RGF5LCB0b2RheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gcmF3VG9tb3Jyb3dBcnIuZGF0ZTtcclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5KTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93QXJyID0gW3RvbW9ycm93RGF0ZSwgdG9tb3Jyb3dEYXksIHRvbW9ycm93SG91cnNBcnJdO1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF0ZSA9IHJhd0xhc3REYXlBcnIuZGF0ZTtcclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheUFyciA9IFtsYXN0RGF5RGF0ZSwgbGFzdERheURheSwgbGFzdERheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBbdG9kYXlBcnIsIHRvbW9ycm93QXJyLCBsYXN0RGF5QXJyXTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0hpc3RvcnlBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSByYXdIaXN0b3J5QXJyXHJcblxyXG4gICAgbGV0IHllc3RlcmRheURhdGUgPSByYXdZZXN0ZXJkYXlBcnIuZGF0ZSBcclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHJhd1llc3RlcmRheUFyci5kYXkpXHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheUFyciA9IFt5ZXN0ZXJkYXlEYXRlLCB5ZXN0ZXJkYXlEYXksIHllc3RlcmRheUhvdXJzQXJyXVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggaG91ciA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyKVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=