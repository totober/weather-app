/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/auxiliaries.js":
/*!****************************!*\
  !*** ./src/auxiliaries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareObjects: () => (/* binding */ compareObjects),
/* harmony export */   iconSelector: () => (/* binding */ iconSelector)
/* harmony export */ });
/* harmony import */ var _img_sun_s_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun-s.svg */ "./src/img/sun-s.svg");
/* harmony import */ var _img_moon_s_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/moon-s.svg */ "./src/img/moon-s.svg");
/* harmony import */ var _img_cloudy_s_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cloudy-s.svg */ "./src/img/cloudy-s.svg");
/* harmony import */ var _img_cloudyDay_s_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cloudyDay-s.svg */ "./src/img/cloudyDay-s.svg");
/* harmony import */ var _img_cloudyNight_s_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cloudyNight-s.svg */ "./src/img/cloudyNight-s.svg");
/* harmony import */ var _img_thunder_s_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/thunder-s.svg */ "./src/img/thunder-s.svg");
/* harmony import */ var _img_fog_s_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/fog-s.svg */ "./src/img/fog-s.svg");
/* harmony import */ var _img_rain_s_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/rain-s.svg */ "./src/img/rain-s.svg");
/* harmony import */ var _img_rainDay_s_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/rainDay-s.svg */ "./src/img/rainDay-s.svg");
/* harmony import */ var _img_rainNight_s_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/rainNight-s.svg */ "./src/img/rainNight-s.svg");
/* harmony import */ var _img_sleet_s_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/sleet-s.svg */ "./src/img/sleet-s.svg");
/* harmony import */ var _img_snow_s_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/snow-s.svg */ "./src/img/snow-s.svg");

















/// ARRAYS OBJECT FOR ICON COMPARITION ///

let iconsObj = {

    snow: ["Patchy snow possible", "Blowing snow", "Blizzard", "Patchy light snow", "Light snow", 
            "Patchy moderate snow", "Moderate snow", "Patchy heavy snow", "Heavy snow", "Light snow showers",
            "Moderate or heavy snow showers", _img_snow_s_svg__WEBPACK_IMPORTED_MODULE_11__],

    sleet: ["Patchy sleet possible", "Patchy freezing drizzle possible", "Patchy light drizzle", "Light drizzle",
            "Freezing drizzle", "Heavy freezing drizzle", "Light freezing rain", "Moderate or heavy freezing rain",
            "Light sleet", "Moderate or heavy sleet", "Ice pellets", "Light sleet showers",
            "Moderate or heavy sleet showers", "Light showers of ice pellets", 
            "Moderate or heavy showers of ice pellets", _img_sleet_s_svg__WEBPACK_IMPORTED_MODULE_10__],

    thunder: ["Thundery outbreaks possible", "Patchy light rain with thunder", "Moderate or heavy rain with thunder",
            "Patchy light snow with thunder", "Moderate or heavy snow with thunder", _img_thunder_s_svg__WEBPACK_IMPORTED_MODULE_5__],

    fog: ["Mist", "Fog", "Freezing fog", _img_fog_s_svg__WEBPACK_IMPORTED_MODULE_6__],

    rain: ["Light rain", "Moderate rain", "Heavy rain", "Moderate or heavy rain shower", "Torrential rain shower",
            _img_rain_s_svg__WEBPACK_IMPORTED_MODULE_7__],
    
    cloudy: ["Cloudy", "Overcast", _img_cloudy_s_svg__WEBPACK_IMPORTED_MODULE_2__],

    sun: ["Sunny", _img_sun_s_svg__WEBPACK_IMPORTED_MODULE_0__],

    moon: ["Clear", _img_moon_s_svg__WEBPACK_IMPORTED_MODULE_1__],

    rainDay: ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainDay_s_svg__WEBPACK_IMPORTED_MODULE_8__],

    rainNight: ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainNight_s_svg__WEBPACK_IMPORTED_MODULE_9__],

    cloudyDay: ["Partly cloudy", _img_cloudyDay_s_svg__WEBPACK_IMPORTED_MODULE_3__],

    cloudyNight: ["Partly cloudy", _img_cloudyNight_s_svg__WEBPACK_IMPORTED_MODULE_4__],

    dayArr(){
        return [this.sun, this.rainDay, this.cloudyDay, this.cloudy, this.rain, this.thunder, this.fog, 
                this.snow, this.sleet]
    },

    nightArr(){
        return [this.moon, this.rainNight, this.cloudyNight, this.cloudy, this.rain, this.thunder, this.fog, 
                this.snow, this.sleet] 
    }
}




function iconSelector(obj){

    let weather = obj.weatherText;
    let isDay = obj.isDay 

    /// TERNARY OPERATOR ///
    let nightOrDay = isDay ? iconsObj.dayArr() : iconsObj.nightArr();

    let img = ""

  /// THE FIRST THING I DID WAS TWO LOOPS, ONE FOR DAY AND OTHER FOR NIGHT.
  /// AWFUL. AND HEAVILY NESTED.  

  /*   if(!isDay) {
        nightArr.forEach(arr => {

            if(img !== ""){ return }

            arr.some((string, i, array) => {
                if(weather === string) {
                    img = array[array.length -1]
                    console.log(img)
                    return 
                }
            })
        })
    } */
       /*  if(isDay) {
        dayArr.forEach(arr => {

            if(img !== ""){ return }

            arr.some((string, i, array) => {
                if(weather === string) {
                    img = array[array.length -1]
                    console.log(img)
                    return 
                }
            })
        })
    } */


 /// THEN I TRY TO USE FOR OF LOOPS, BECAUSE I WANTED TO BREAK THE LOOP WHEN I HAVE THE ELEMENT I WANTED 

/*     for (const arr of nightArr){

        if(img !== ""){ break }

        for (const element of arr ) {
            if(weather === element) {
                img = arr[arr.length -1]
                break
            }
        }
    } */

    /*     for (const arr of dayArr){

        if(img !== ""){ break }

        for (const element of arr ) {
            if(weather === element) {
                img = arr[arr.length -1]
                break
            }
        }
    } */


    /// FINALLY, I DIDNT WANT TO USE 2 EQUAL LOOPS, SO RESOLVED TO USE A TERNARY OPERATOR AND THEN A SINGLE LOOP.

    for (const arr of nightOrDay){

        if(img !== ""){ break }

        for (const element of arr ) {
            if(weather === element) {
                img = arr[arr.length -1]
                break
            }
        }
    }

    return img
}

let btnUp = document.querySelector(".up")
let btnDown = document.querySelector(".down")

btnUp.addEventListener("click", slider)
btnDown.addEventListener("click", slider)

let val = 0
function slider(e){

let slider = document.querySelector(".slider")
let sliderArr = Array.from(slider.children)


console.log("VALUE: ", val)
let value = this.classList.contains("up") ? -8 : 8; 

      if(val <= (-96) ||  val>= 96 ){return}


        for (let i = 0; i <= 3; i++){

            val += value
            slider.style.marginTop = `${val}rem`
            console.log(val)
            
            if(val <= (-96) ||  val>= 96 ){break}
        }
       
        }
       
    




       
     

        
        







/// FUNCTION TO COMPARE OBJECTS RETRIEVED BY THE API (ITS PROPERTIES, VALUES, ETC) ///


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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentWeather: () => (/* binding */ CurrentWeather),
/* harmony export */   Day: () => (/* binding */ Day),
/* harmony export */   Hour: () => (/* binding */ Hour),
/* harmony export */   Location: () => (/* binding */ Location)
/* harmony export */ });


class CurrentWeather {
    constructor(obj, date){
        this.weatherText = obj.condition.text,
        this.weatherIcon = obj.condition.icon, 
        this.cloud = obj.cloud,
        this.tempC = obj.temp_c,
        this.tempF = obj.temp_f,
        this.tempC_feel = obj.feelslike_c,
        this.tempF_feel = obj.feelslike_f,
        this.humidity = obj.humidity,
        this.wind = obj.wind_kph,
        this.precipTotal = obj.precip_mm,
        this.date = date,
        this.isDay = obj.is_day ? true : false,
        this.isCelsius = true
    }
}

class Hour extends CurrentWeather {
    constructor(obj, date, time){
        super(obj)
        this.snowTotal = obj.snow_cm,
        this.snowChance = obj.chance_of_snow,
        this.date = date,
        this.time = time
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
        this.tempC = obj.avgtemp_c,
        this.tempF = obj.avgtemp_f,
        this.avgHumidity = obj.avghumidity,
        this.wind = obj.maxwind_kph,
        this.precipTotal = obj.totalprecip_mm,
        this.precipChance = obj.daily_chance_of_rain,
        this.snowTotal = obj.totalsnow_cm,
        this.snowChance = obj.daily_chance_of_snow,
        this.uv = obj.uv,
        this.isDay = true,
        this.isHistory = false,
        this.isCelsius = true
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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerDataDisplay: () => (/* binding */ triggerDataDisplay)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




function triggerDataDisplay(weatherAndLocation, forecastArr, historyArr){

    let [currentWeather, location] = weatherAndLocation
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

   // displayCurrentCard(currentWeather, location)
    renderPrincipal(currentWeather, location)

/*     displayHistoryAndForecast(yesterday)
    displayHistoryAndForecast(today)
    displayHistoryAndForecast(tomorrow)
    displayHistoryAndForecast(lastDay) */

    renderNear(forecastArr, historyArr, location)

    displayHours(forecastArr, location)

    renderExtra(forecastArr)
}


/* function displayCurrentCard(currentWeather, location) {

    let principal = document.querySelector(".principal")

    principal.appendChild(currentHourCard("principal", currentWeather, location))

}

function displayHistoryAndForecast(historyOrForecast){

    let near = document.querySelector(".near")

    near.innerHTML = ""

    near.appendChild(fullDayCard("near", historyOrForecast))
} */

function displayHours(forecastArr, location){

    /* let aside = document.querySelector("aside") */
    let slider = document.querySelector(".slider")

    slider.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr


    let hours = today[2]

   hours.forEach( hour => {
        slider.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.currentHourCard)("aside", hour, location))
   })
}

// A VER LA NUEVA

/* function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(currentHourCard("principal", currentWeather, location))

} */

function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("principal", currentWeather, location, currentWeather.date))

}



// A VER LA NUEVA


/* function renderNear(forecastArr, historyArr){
    console.log("near cheee")

    let near = document.querySelector(".near")

    near.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    near.appendChild(fullDayCard("near", yesterday))
    near.appendChild(fullDayCard("near", today))
    near.appendChild(fullDayCard("near", tomorrow))
    near.appendChild(fullDayCard("near", lastDay))
} */

function renderNear(forecastArr, historyArr, location){

    let near = document.querySelector(".near")

    near.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    console.log("today", today)
    console.log("yesterday", yesterday)


    near.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("near", yesterday[1], location, yesterday[0]))
    near.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("near", today[1], location, today[0]))
    near.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("near", tomorrow[1], location, tomorrow[0]))
    near.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("near", lastDay[1], location, lastDay[0]))
}




function renderExtra(forecastArr){

    let [today, tomorrow, lastDay] = forecastArr

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.fullDayCard)("extra", today));

}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ (() => {

throw new Error("Module parse failed: Export 'currentHourCard' is not defined (3:8)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| import { iconSelector } from \"./auxiliaries\"\n| \n> export {currentHourCard, fullDayCard, setCardData}\n| \n| ");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");

/* import {test, getCurrentWeather, getLocation, getForecastHours, getForecastData, getHistoryData} from "./objects"; */







window.addEventListener("load", init)
let input = document.querySelector("input")
input.addEventListener("keydown", getInputValue)

let near = document.querySelector(".near")
near.addEventListener("click", nearCardsEvent)
function nearCardsEvent(e) {
    let nearArr = Array.from(this.children)
    console.log(nearArr)
}



function init() {
    getData("buenos aires")
}

function getInputValue(e){

    if(e.key !== "Enter") {return}


    let inputVal = input.value

    getData(inputVal)
    

}

let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getData(inputVal){

    console.log(inputVal)
try{
    let [response, response2] = await Promise.all([
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=${inputVal}&days=3`),
        fetch(`http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=${inputVal}&dt=2024-01-14`)
    ])

    let [dataForecast, dataHistory] = await Promise.all([
        response.json(),
        response2.json()
    ])

    /// FUNCTION TO COMPARE OBJECTS RETRIEVED ///
    //compareObjects(data, data2, data3)

    console.log(dataForecast)
    console.log(dataHistory)

 /*    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory) */

   let [weatherAndLocation, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    //getStructuredForecast(forecastArr)
    //getStructuredHistory(historyArr)
    //getWeatherAndLocation(weatherAndLocation)

    //getStructuredData([weatherAndLocation, forecastArr, historyArr])


    /* let [currentWeather, location] = weatherAndLocation
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr */

  /*   triggerDisplay(currentWeather, location, yesterday, today, tomorrow, lastDay) */
  ;(0,_display__WEBPACK_IMPORTED_MODULE_3__.triggerDataDisplay)(weatherAndLocation, forecastArr, historyArr)

} catch(err){
        console.log(err)
    }  
} 


/* function getStructuredData(array){

    let [currentAndLocationArr, forecastArr, historyArr] = array
    console.log(currentAndLocationArr)
    console.log(forecastArr)
    console.log(historyArr)

    let [currentWeather, location] = currentAndLocationArr
    console.log(currentWeather)
    console.log(location)

    let [today, tomorrow, lastDay] = forecastArr
        console.log(today)
        console.log(tomorrow)
        console.log(lastDay)

    let yesterday = historyArr
    console.log(yesterday)

    /* displayCurrentCard(currentWeather, location)

    displayHistoryAndForecast(yesterday)
    displayHistoryAndForecast(today)
    displayHistoryAndForecast(tomorrow)
    displayHistoryAndForecast(lastDay)

    displayHours(today, location)

    displayManager(currentWeather, location, yesterday, today, tomorrow, lastDay)

} */

/* function getStructuredForecast (arr){

    let [today, tomorrow, lastDay] = arr
        console.log(today)
        console.log(tomorrow)
        console.log(lastDay)
    
    near.appendChild(fullDayCard("near", today))
    near.appendChild(fullDayCard("near", tomorrow))
    near.appendChild(fullDayCard("near", lastDay))

    console.log(today[2])
    //aside.appendChild(currentHourCard(today[2]))

} 

function getStructuredHistory(arr) {
    let y = arr
    console.log(y)
    let child = near.firstElementChild
    console.log(child)
    near.insertBefore(fullDayCard("near", y), child)
} */

/* function getWeatherAndLocation(arr){
    let [currentWeather, location] = arr
    console.log(currentWeather)
    console.log(location)

    principal.appendChild(currentHourCard("principal", currentWeather, location)) 
} */

/* function displayManager(currentWeather, location, yesterday, today, tomorrow, lastDay){

    displayCurrentCard(currentWeather, location)

    displayHistoryAndForecast(yesterday)
    displayHistoryAndForecast(today)
    displayHistoryAndForecast(tomorrow)
    displayHistoryAndForecast(lastDay)

    displayHours(today, location)
}


function displayCurrentCard(currentWeather, location) {

    let principal = document.querySelector(".principal")

    principal.appendChild(currentHourCard("principal", currentWeather, location))

}

function displayHistoryAndForecast(historyOrForecast){

    let near = document.querySelector(".near")

    near.appendChild(fullDayCard("near", historyOrForecast))
}

function displayHours(today, location){

    let aside = document.querySelector("aside")

    let hours = today.splice()

    let hourstest = [hours[0], hours[1], hours[2], hours[3], hours[4], hours[5],
                    hours[6], hours[7], hours[8]]

   hourstest.forEach( hour => {
        aside.appendChild(currentHourCard("aside", hour, location))
   })


    //aside.appendChild(currentHourCard())
} */




//getData()



/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerDataStructuration: () => (/* binding */ triggerDataStructuration)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./src/class.js");



/* export {test, getLocation, getCurrentWeather, getForecastData, getHistoryData} */


let test = {
    history: "last 7 days",
    forecast: "up to 3 days "
}

function triggerDataStructuration (dataForecast, dataHistory){

    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    return [weatherAndLocation, forecastArr, historyArr]

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
    yesterdayDay.isHistory = true;
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
    let date = obj.forecast.forecastday[0].date
    let weatherObj = new _class__WEBPACK_IMPORTED_MODULE_1__.CurrentWeather(weather, date)

    return weatherObj
}

function getHours(arr) {

    console.log("hours", arr)


    return arr.hour.map( (hour) => {
        let date = hour.time.slice(0, 10)
        let time = hour.time.slice(11)
      return new _class__WEBPACK_IMPORTED_MODULE_1__.Hour(hour, date, time)
    })
}


/***/ }),

/***/ "./src/img/cloudy-s.svg":
/*!******************************!*\
  !*** ./src/img/cloudy-s.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "44b88c065b3ac322564d.svg";

/***/ }),

/***/ "./src/img/cloudyDay-s.svg":
/*!*********************************!*\
  !*** ./src/img/cloudyDay-s.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af915d79b5aab2e9ab1e.svg";

/***/ }),

/***/ "./src/img/cloudyNight-s.svg":
/*!***********************************!*\
  !*** ./src/img/cloudyNight-s.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4851018917cc7669c5cb.svg";

/***/ }),

/***/ "./src/img/fog-s.svg":
/*!***************************!*\
  !*** ./src/img/fog-s.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "154c4d0fea9b593fc493.svg";

/***/ }),

/***/ "./src/img/moon-s.svg":
/*!****************************!*\
  !*** ./src/img/moon-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d167fd85ae2613581cf2.svg";

/***/ }),

/***/ "./src/img/rain-s.svg":
/*!****************************!*\
  !*** ./src/img/rain-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "162afbf52e245fa12c79.svg";

/***/ }),

/***/ "./src/img/rainDay-s.svg":
/*!*******************************!*\
  !*** ./src/img/rainDay-s.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2bc6139c37af57705dc.svg";

/***/ }),

/***/ "./src/img/rainNight-s.svg":
/*!*********************************!*\
  !*** ./src/img/rainNight-s.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "772a653e7271a3ac894e.svg";

/***/ }),

/***/ "./src/img/sleet-s.svg":
/*!*****************************!*\
  !*** ./src/img/sleet-s.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "421abbc8790f790ff32f.svg";

/***/ }),

/***/ "./src/img/snow-s.svg":
/*!****************************!*\
  !*** ./src/img/snow-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "320bd9d8c299fd140cb4.svg";

/***/ }),

/***/ "./src/img/sun-s.svg":
/*!***************************!*\
  !*** ./src/img/sun-s.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2b1de06e3c3b9c29ac39.svg";

/***/ }),

/***/ "./src/img/thunder-s.svg":
/*!*******************************!*\
  !*** ./src/img/thunder-s.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8f131d432f0bb352def.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3RDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2Q0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDhDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsK0NBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLHFDQUFxQywrQ0FBVTtBQUMvQztBQUNBO0FBQ0EscUNBQXFDLGlEQUFZO0FBQ2pEO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUDRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBLGlCQUFpQix3Q0FBSTtBQUNyQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcblxyXG5leHBvcnQge2NvbXBhcmVPYmplY3RzLCBpY29uU2VsZWN0b3J9XHJcblxyXG5cclxuLy8vIEFSUkFZUyBPQkpFQ1QgRk9SIElDT04gQ09NUEFSSVRJT04gLy8vXHJcblxyXG5sZXQgaWNvbnNPYmogPSB7XHJcblxyXG4gICAgc25vdzogW1wiUGF0Y2h5IHNub3cgcG9zc2libGVcIiwgXCJCbG93aW5nIHNub3dcIiwgXCJCbGl6emFyZFwiLCBcIlBhdGNoeSBsaWdodCBzbm93XCIsIFwiTGlnaHQgc25vd1wiLCBcclxuICAgICAgICAgICAgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLCBcIk1vZGVyYXRlIHNub3dcIiwgXCJQYXRjaHkgaGVhdnkgc25vd1wiLCBcIkhlYXZ5IHNub3dcIiwgXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiwgc25vd0ltZ10sXHJcblxyXG4gICAgc2xlZXQ6IFtcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLCBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIiwgXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgICAgIFwiRnJlZXppbmcgZHJpenpsZVwiLCBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIiwgXCJMaWdodCBmcmVlemluZyByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgICAgICBcIkxpZ2h0IHNsZWV0XCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIiwgXCJJY2UgcGVsbGV0c1wiLCBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIHNsZWV0SW1nXSxcclxuXHJcbiAgICB0aHVuZGVyOiBbXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsIHRodW5kZXJJbWddLFxyXG5cclxuICAgIGZvZzogW1wiTWlzdFwiLCBcIkZvZ1wiLCBcIkZyZWV6aW5nIGZvZ1wiLCBmb2dJbWddLFxyXG5cclxuICAgIHJhaW46IFtcIkxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluXCIsIFwiSGVhdnkgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgICAgICByYWluSW1nXSxcclxuICAgIFxyXG4gICAgY2xvdWR5OiBbXCJDbG91ZHlcIiwgXCJPdmVyY2FzdFwiLCBjbG91ZHlJbWddLFxyXG5cclxuICAgIHN1bjogW1wiU3VubnlcIiwgc3VuSW1nXSxcclxuXHJcbiAgICBtb29uOiBbXCJDbGVhclwiLCBtb29uSW1nXSxcclxuXHJcbiAgICByYWluRGF5OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIHJhaW5EYXlJbWddLFxyXG5cclxuICAgIHJhaW5OaWdodDogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCByYWluTmlnaHRJbWddLFxyXG5cclxuICAgIGNsb3VkeURheTogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlEYXlJbWddLFxyXG5cclxuICAgIGNsb3VkeU5pZ2h0OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeU5pZ2h0SW1nXSxcclxuXHJcbiAgICBkYXlBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuc3VuLCB0aGlzLnJhaW5EYXksIHRoaXMuY2xvdWR5RGF5LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF1cclxuICAgIH0sXHJcblxyXG4gICAgbmlnaHRBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubW9vbiwgdGhpcy5yYWluTmlnaHQsIHRoaXMuY2xvdWR5TmlnaHQsIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XSBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQ7XHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXkgXHJcblxyXG4gICAgLy8vIFRFUk5BUlkgT1BFUkFUT1IgLy8vXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBcIlwiXHJcblxyXG4gIC8vLyBUSEUgRklSU1QgVEhJTkcgSSBESUQgV0FTIFRXTyBMT09QUywgT05FIEZPUiBEQVkgQU5EIE9USEVSIEZPUiBOSUdIVC5cclxuICAvLy8gQVdGVUwuIEFORCBIRUFWSUxZIE5FU1RFRC4gIFxyXG5cclxuICAvKiAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuICAgICAgIC8qICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG5cclxuIC8vLyBUSEVOIEkgVFJZIFRPIFVTRSBGT1IgT0YgTE9PUFMsIEJFQ0FVU0UgSSBXQU5URUQgVE8gQlJFQUsgVEhFIExPT1AgV0hFTiBJIEhBVkUgVEhFIEVMRU1FTlQgSSBXQU5URUQgXHJcblxyXG4vKiAgICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAgICAgZm9yIChjb25zdCBhcnIgb2YgZGF5QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIC8vLyBGSU5BTExZLCBJIERJRE5UIFdBTlQgVE8gVVNFIDIgRVFVQUwgTE9PUFMsIFNPIFJFU09MVkVEIFRPIFVTRSBBIFRFUk5BUlkgT1BFUkFUT1IgQU5EIFRIRU4gQSBTSU5HTEUgTE9PUC5cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodE9yRGF5KXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltZ1xyXG59XHJcblxyXG5sZXQgYnRuVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpXHJcbmxldCBidG5Eb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpXHJcblxyXG5idG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xpZGVyKVxyXG5idG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzbGlkZXIpXHJcblxyXG5sZXQgdmFsID0gMFxyXG5mdW5jdGlvbiBzbGlkZXIoZSl7XHJcblxyXG5sZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxubGV0IHNsaWRlckFyciA9IEFycmF5LmZyb20oc2xpZGVyLmNoaWxkcmVuKVxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiVkFMVUU6IFwiLCB2YWwpXHJcbmxldCB2YWx1ZSA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyAtOCA6IDg7IFxyXG5cclxuICAgICAgaWYodmFsIDw9ICgtOTYpIHx8ICB2YWw+PSA5NiApe3JldHVybn1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICB2YWwgKz0gdmFsdWVcclxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm1hcmdpblRvcCA9IGAke3ZhbH1yZW1gXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHZhbCA8PSAoLTk2KSB8fCAgdmFsPj0gOTYgKXticmVha31cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIEJZIFRIRSBBUEkgKElUUyBQUk9QRVJUSUVTLCBWQUxVRVMsIEVUQykgLy8vXHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMgKGRhdGEsIGRhdGEyLCBkYXRhMyl7XHJcbiAgICBsZXQgaWRlbSA9IFtdXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkNVUlJFTlRcIiAvLy9cclxuICAgIGxldCBjdXJyZW50RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YS5jdXJyZW50KVxyXG4gICAgbGV0IGZvcmVjYXN0RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YTIuY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGN1cnJlbnRGaWx0ZXIuZm9yRWFjaCgocHJvcCkgPT57XHJcbiAgICAgICAgZm9yZWNhc3RGaWx0ZXIuZm9yRWFjaCgocHIpID0+e1xyXG4gICAgICAgICAgICBpZihwcm9wID09PSBwciApe1xyXG4gICAgICAgICAgICAgICAgaWRlbS5wdXNoKHByb3ApXHJcbiAgICAgICAgfX0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWRlbTpcIiwgaWRlbSlcclxufSIsImV4cG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259XHJcblxyXG5jbGFzcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbiwgXHJcbiAgICAgICAgdGhpcy5jbG91ZCA9IG9iai5jbG91ZCxcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLnRlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRl9mZWVsID0gb2JqLmZlZWxzbGlrZV9mLFxyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBvYmouaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLndpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoucHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IG9iai5pc19kYXkgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhvdXIgZXh0ZW5kcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIHRpbWUpe1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai5zbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEMgPSBvYmoubWF4dGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmoubWF4dGVtcF9mLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmoubWludGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEYgPSBvYmoubWludGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmouYXZndGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmouYXZndGVtcF9mLFxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLnV2ID0gb2JqLnV2LFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjdXJyZW50SG91ckNhcmQsIGZ1bGxEYXlDYXJkLCBzZXRDYXJkRGF0YX0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fVxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpe1xyXG5cclxuICAgIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IHdlYXRoZXJBbmRMb2NhdGlvblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAvLyBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG4gICAgcmVuZGVyUHJpbmNpcGFsKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbi8qICAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KSAqL1xyXG5cclxuICAgIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyhmb3JlY2FzdEFyciwgbG9jYXRpb24pXHJcblxyXG4gICAgcmVuZGVyRXh0cmEoZm9yZWNhc3RBcnIpXHJcbn1cclxuXHJcblxyXG4vKiBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSB7XHJcblxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcblxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcInByaW5jaXBhbFwiLCBjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChoaXN0b3J5T3JGb3JlY2FzdCl7XHJcblxyXG4gICAgbGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuXHJcbiAgICBuZWFyLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBoaXN0b3J5T3JGb3JlY2FzdCkpXHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb3Vycyhmb3JlY2FzdEFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIC8qIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKSAqL1xyXG4gICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpXHJcblxyXG4gICAgc2xpZGVyLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG5cclxuXHJcbiAgICBsZXQgaG91cnMgPSB0b2RheVsyXVxyXG5cclxuICAgaG91cnMuZm9yRWFjaCggaG91ciA9PiB7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcImFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgfSlcclxufVxyXG5cclxuLy8gQSBWRVIgTEEgTlVFVkFcclxuXHJcbi8qIGZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pe1xyXG4gICAgY29uc29sZS5sb2coXCJhIHZlciBjb21vIGZ1bmNhXCIpXHJcbiAgICBcclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59ICovXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcmluY2lwYWwoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKXtcclxuICAgIGNvbnNvbGUubG9nKFwiYSB2ZXIgY29tbyBmdW5jYVwiKVxyXG4gICAgXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbiwgY3VycmVudFdlYXRoZXIuZGF0ZSkpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIEEgVkVSIExBIE5VRVZBXHJcblxyXG5cclxuLyogZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycil7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5lYXIgY2hlZWVcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHllc3RlcmRheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b2RheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b21vcnJvdykpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBsYXN0RGF5KSlcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcblxyXG4gICAgbmVhci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2RheVwiLCB0b2RheSlcclxuICAgIGNvbnNvbGUubG9nKFwieWVzdGVyZGF5XCIsIHllc3RlcmRheSlcclxuXHJcblxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcIm5lYXJcIiwgeWVzdGVyZGF5WzFdLCBsb2NhdGlvbiwgeWVzdGVyZGF5WzBdKSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJuZWFyXCIsIHRvZGF5WzFdLCBsb2NhdGlvbiwgdG9kYXlbMF0pKVxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcIm5lYXJcIiwgdG9tb3Jyb3dbMV0sIGxvY2F0aW9uLCB0b21vcnJvd1swXSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwibmVhclwiLCBsYXN0RGF5WzFdLCBsb2NhdGlvbiwgbGFzdERheVswXSkpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0QXJyKXtcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG5cclxuICAgIGxldCBleHRyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFcIilcclxuICAgIGV4dHJhLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZXh0cmEuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJleHRyYVwiLCB0b2RheSkpO1xyXG5cclxufVxyXG4iLCJcclxuLyogaW1wb3J0IHt0ZXN0LCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0TG9jYXRpb24sIGdldEZvcmVjYXN0SG91cnMsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9IGZyb20gXCIuL29iamVjdHNcIjsgKi9cclxuaW1wb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0c30gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIjtcclxuaW1wb3J0IHtjdXJyZW50SG91ckNhcmQsIGZ1bGxEYXlDYXJkfSBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuXHJcbmV4cG9ydCB7Z2V0RGF0YX1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KVxyXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZ2V0SW5wdXRWYWx1ZSlcclxuXHJcbmxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbm5lYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lYXJDYXJkc0V2ZW50KVxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudChlKSB7XHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20odGhpcy5jaGlsZHJlbilcclxuICAgIGNvbnNvbGUubG9nKG5lYXJBcnIpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGdldERhdGEoXCJidWVub3MgYWlyZXNcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlKXtcclxuXHJcbiAgICBpZihlLmtleSAhPT0gXCJFbnRlclwiKSB7cmV0dXJufVxyXG5cclxuXHJcbiAgICBsZXQgaW5wdXRWYWwgPSBpbnB1dC52YWx1ZVxyXG5cclxuICAgIGdldERhdGEoaW5wdXRWYWwpXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcblxyXG5sZXQgcGFzcyA9IFwiP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyXCJcclxubGV0IHVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiXHJcbmxldCBjdXJyZW50ID0gXCIvY3VycmVudC5qc29uXCJcclxubGV0IHBsYWNlID0gXCJxPVBhcmlzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGlucHV0VmFsKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFZhbClcclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZGF5cz0zYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZHQ9MjAyNC0wMS0xNGApXHJcbiAgICBdKVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSGlzdG9yeSlcclxuXHJcbiAvKiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSkgKi9cclxuXHJcbiAgIGxldCBbd2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24oZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbiAgICAvL2dldFN0cnVjdHVyZWRGb3JlY2FzdChmb3JlY2FzdEFycilcclxuICAgIC8vZ2V0U3RydWN0dXJlZEhpc3RvcnkoaGlzdG9yeUFycilcclxuICAgIC8vZ2V0V2VhdGhlckFuZExvY2F0aW9uKHdlYXRoZXJBbmRMb2NhdGlvbilcclxuXHJcbiAgICAvL2dldFN0cnVjdHVyZWREYXRhKFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSlcclxuXHJcblxyXG4gICAgLyogbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gd2VhdGhlckFuZExvY2F0aW9uXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnIgKi9cclxuXHJcbiAgLyogICB0cmlnZ2VyRGlzcGxheShjdXJyZW50V2VhdGhlciwgbG9jYXRpb24sIHllc3RlcmRheSwgdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5KSAqL1xyXG4gIHRyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG5cclxufSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0gIFxyXG59IFxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFN0cnVjdHVyZWREYXRhKGFycmF5KXtcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRBbmRMb2NhdGlvbkFyciwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gYXJyYXlcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBbmRMb2NhdGlvbkFycilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBjdXJyZW50QW5kTG9jYXRpb25BcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvdylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0RGF5KVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcbiAgICBjb25zb2xlLmxvZyh5ZXN0ZXJkYXkpXHJcblxyXG4gICAgLyogZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcblxyXG4gICAgZGlzcGxheU1hbmFnZXIoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uLCB5ZXN0ZXJkYXksIHRvZGF5LCB0b21vcnJvdywgbGFzdERheSlcclxuXHJcbn0gKi9cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFN0cnVjdHVyZWRGb3JlY2FzdCAoYXJyKXtcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBhcnJcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvdylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0RGF5KVxyXG4gICAgXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b2RheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b21vcnJvdykpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBsYXN0RGF5KSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2RheVsyXSlcclxuICAgIC8vYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKHRvZGF5WzJdKSlcclxuXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkSGlzdG9yeShhcnIpIHtcclxuICAgIGxldCB5ID0gYXJyXHJcbiAgICBjb25zb2xlLmxvZyh5KVxyXG4gICAgbGV0IGNoaWxkID0gbmVhci5maXJzdEVsZW1lbnRDaGlsZFxyXG4gICAgY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICBuZWFyLmluc2VydEJlZm9yZShmdWxsRGF5Q2FyZChcIm5lYXJcIiwgeSksIGNoaWxkKVxyXG59ICovXHJcblxyXG4vKiBmdW5jdGlvbiBnZXRXZWF0aGVyQW5kTG9jYXRpb24oYXJyKXtcclxuICAgIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IGFyclxyXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpXHJcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpIFxyXG59ICovXHJcblxyXG4vKiBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihjdXJyZW50V2VhdGhlciwgbG9jYXRpb24sIHllc3RlcmRheSwgdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5KXtcclxuXHJcbiAgICBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoeWVzdGVyZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b2RheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9tb3Jyb3cpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGxhc3REYXkpXHJcblxyXG4gICAgZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pIHtcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGhpc3RvcnlPckZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGhpc3RvcnlPckZvcmVjYXN0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpXHJcblxyXG4gICAgbGV0IGhvdXJzID0gdG9kYXkuc3BsaWNlKClcclxuXHJcbiAgICBsZXQgaG91cnN0ZXN0ID0gW2hvdXJzWzBdLCBob3Vyc1sxXSwgaG91cnNbMl0sIGhvdXJzWzNdLCBob3Vyc1s0XSwgaG91cnNbNV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnNbNl0sIGhvdXJzWzddLCBob3Vyc1s4XV1cclxuXHJcbiAgIGhvdXJzdGVzdC5mb3JFYWNoKCBob3VyID0+IHtcclxuICAgICAgICBhc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJhc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpXHJcbiAgIH0pXHJcblxyXG5cclxuICAgIC8vYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKCkpXHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcbi8vZ2V0RGF0YSgpXHJcblxyXG4iLCJpbXBvcnQge2dldERhdGF9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuLyogZXhwb3J0IHt0ZXN0LCBnZXRMb2NhdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9ICovXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufVxyXG5cclxubGV0IHRlc3QgPSB7XHJcbiAgICBoaXN0b3J5OiBcImxhc3QgNyBkYXlzXCIsXHJcbiAgICBmb3JlY2FzdDogXCJ1cCB0byAzIGRheXMgXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uIChkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KXtcclxuXHJcbiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICByZXR1cm4gW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0ZvcmVjYXN0QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCB0b2RheURhdGUgPSByYXdUb2RheUFyci5kYXRlO1xyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXkpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlBcnIgPSBbdG9kYXlEYXRlLCB0b2RheURheSwgdG9kYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF0ZSA9IHJhd1RvbW9ycm93QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd0FyciA9IFt0b21vcnJvd0RhdGUsIHRvbW9ycm93RGF5LCB0b21vcnJvd0hvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgbGFzdERheURhdGUgPSByYXdMYXN0RGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXkpO1xyXG4gICAgbGV0IGxhc3REYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd0xhc3REYXlBcnIpO1xyXG4gICAgbGV0IGxhc3REYXlBcnIgPSBbbGFzdERheURhdGUsIGxhc3REYXlEYXksIGxhc3REYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5QXJyLCB0b21vcnJvd0FyciwgbGFzdERheUFycl07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdIaXN0b3J5QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gcmF3SGlzdG9yeUFyclxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXRlID0gcmF3WWVzdGVyZGF5QXJyLmRhdGUgXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5KVxyXG4gICAgeWVzdGVyZGF5RGF5LmlzSGlzdG9yeSA9IHRydWU7XHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheUFyciA9IFt5ZXN0ZXJkYXlEYXRlLCB5ZXN0ZXJkYXlEYXksIHllc3RlcmRheUhvdXJzQXJyXVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCBkYXRlID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGVcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIsIGRhdGUpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJob3Vyc1wiLCBhcnIpXHJcblxyXG5cclxuICAgIHJldHVybiBhcnIuaG91ci5tYXAoIChob3VyKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBob3VyLnRpbWUuc2xpY2UoMCwgMTApXHJcbiAgICAgICAgbGV0IHRpbWUgPSBob3VyLnRpbWUuc2xpY2UoMTEpXHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyLCBkYXRlLCB0aW1lKVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=