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
/* harmony export */   compareObjects: () => (/* binding */ compareObjects),
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

















/// ARRAYS OBJECT FOR ICON COMPARITION ///

let iconsObj = {

    snow: ["Patchy snow possible", "Blowing snow", "Blizzard", "Patchy light snow", "Light snow", 
            "Patchy moderate snow", "Moderate snow", "Patchy heavy snow", "Heavy snow", "Light snow showers",
            "Moderate or heavy snow showers", _img_snow_svg__WEBPACK_IMPORTED_MODULE_11__],

    sleet: ["Patchy sleet possible", "Patchy freezing drizzle possible", "Patchy light drizzle", "Light drizzle",
            "Freezing drizzle", "Heavy freezing drizzle", "Light freezing rain", "Moderate or heavy freezing rain",
            "Light sleet", "Moderate or heavy sleet", "Ice pellets", "Light sleet showers",
            "Moderate or heavy sleet showers", "Light showers of ice pellets", 
            "Moderate or heavy showers of ice pellets", _img_sleet_svg__WEBPACK_IMPORTED_MODULE_10__],

    thunder: ["Thundery outbreaks possible", "Patchy light rain with thunder", "Moderate or heavy rain with thunder",
            "Patchy light snow with thunder", "Moderate or heavy snow with thunder", _img_thunder_svg__WEBPACK_IMPORTED_MODULE_5__],

    fog: ["Mist", "Fog", "Freezing fog", _img_fog_svg__WEBPACK_IMPORTED_MODULE_6__],

    rain: ["Light rain", "Moderate rain", "Heavy rain", "Moderate or heavy rain shower", "Torrential rain shower",
            _img_rain_svg__WEBPACK_IMPORTED_MODULE_7__],
    
    cloudy: ["Cloudy", "Overcast", _img_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__],

    sun: ["Sunny", _img_sun_svg__WEBPACK_IMPORTED_MODULE_0__],

    moon: ["Clear", _img_moon_svg__WEBPACK_IMPORTED_MODULE_1__],

    rainDay: ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainDay_svg__WEBPACK_IMPORTED_MODULE_8__],

    rainNight: ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", _img_rainNight_svg__WEBPACK_IMPORTED_MODULE_9__],

    cloudyDay: ["Partly cloudy", _img_cloudyDay_svg__WEBPACK_IMPORTED_MODULE_3__],

    cloudyNight: ["Partly cloudy", _img_cloudyNight_svg__WEBPACK_IMPORTED_MODULE_4__],

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

    console.log(obj)
    let weather = obj.weatherText;
    console.log(weather)
    console.log(obj.isDay)
    let isDay =  false ? 0 : obj.isDay
    console.log(isDay)

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
        this.isDay = obj.is_day,
        this.isCelsius = 1
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
        this.snowChance = obj.daily_chance_of_snow,
        this.isYesterday = 0,
        this.isCelsius = 1
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
/* harmony export */   currentHourCard: () => (/* binding */ currentHourCard),
/* harmony export */   fullDayCard: () => (/* binding */ fullDayCard)
/* harmony export */ });
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _img_cloud_ONE_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cloud-ONE.svg */ "./src/img/cloud-ONE.svg");
/* harmony import */ var _img_menu_burger_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu-burger.svg */ "./src/img/menu-burger.svg");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/temperature.svg */ "./src/img/temperature.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/wind.svg */ "./src/img/wind.svg");













function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("p");
    let third = document.createElement("p");
    let fourth = document.createElement("p");
    let fifth = document.createElement("p");
    let sixth = document.createElement("p");
    let seventh = document.createElement("p");
    let eighth = document.createElement("p");

    let img = document.createElement("img")
    let sub = document.createElement("p")

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");
    fifth.classList.add("fifth");
    sixth.classList.add("sixth");
    seventh.classList.add("seventh");
    eighth.classList.add("eighth");

    img.classList.add("big-img");
    sub.classList.add("sub")

    first.appendChild(img)
    first.appendChild(sub)

    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)
    card.appendChild(fifth)
    card.appendChild(sixth)
    card.appendChild(seventh)
    card.appendChild(eighth)

    return card
}



function currentHourCard(className, weather, location){


    let card = createCard()
    card.classList.add(className)

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth, fifth, sixth, seventh, eighth] = cardArr

    first.firstElementChild.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weather);
    first.firstElementChild.nextElementSibling.textContent = weather.weatherText;
    second.textContent = `${location.name}, ${location.country}`;
    third.textContent = `Temperatura: ${weather.tempC}º/ ST: ${weather.tempC_feel}º`;
    if(!weather.isCelsius){
        third.textContent = `Temperatura: ${weather.tempF}ºF/ ST: ${weather.tempF_feel}ºF`;
    }
    fourth.textContent = `Humedad: ${weather.humidity}%`
    fifth.textContent = `Nubes: ${weather.cloud}%`
    sixth.textContent = `Prob. de precipitaciones: ${weather.precipitation}%`

    console.log(card)
    return card
}

function fullDayCard(className, weather, location){

    let card = createCard()
    card.classList.add(className)

    console.log(weather)
    console.log(Array.isArray(weather))

    let [date, fullDayObj, fullHoursArr] = weather
    console.log(fullDayObj)
    
    let dateFormat = date.slice(5, 7) + "/" + date.slice(8)

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth, fifth, sixth, seventh, eighth] = cardArr

    first.firstElementChild.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(fullDayObj);
    first.firstElementChild.nextElementSibling.textContent = fullDayObj.weatherText;
    second.textContent = dateFormat;

    third.textContent = `${Number.parseInt(fullDayObj.maxTempC)}º/${Number.parseInt(fullDayObj.minTempC)}º`;
    if(!fullDayObj.isCelsius){ 
        third.textContent = `${Number.parseInt(fullDayObj.maxTempF)}º/${Number.parseInt(fullDayObj.minTempF)}º`};

    fourth.textContent = `precip. ${Number.parseInt(fullDayObj.precipChance)}%`;
    if(fullDayObj.isYesterday){ fourth.textContent = `precip. ${Number.parseInt(fullDayObj.precipTotal)}mm`};

    return card
    
}







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

    //getStructuredForecast(forecastArr)
    //getStructuredHistory(historyArr)
    //getWeatherAndLocation(weatherAndLocation)

    getStructuredData([weatherAndLocation, forecastArr, historyArr])

} catch(err){
        console.log(err)
    }  
} 

function getStructuredData(array){

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

    displayCurrentCard(currentWeather, location)

    displayHistoryAndForecast(yesterday)
    displayHistoryAndForecast(today)
    displayHistoryAndForecast(tomorrow)
    displayHistoryAndForecast(lastDay)

    displayHours(today, location)

}

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

function displayCurrentCard(currentWeather, location) {

    let principal = document.querySelector(".principal")

    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.currentHourCard)("principal", currentWeather, location))

}

function displayHistoryAndForecast(historyOrForecast){

    let near = document.querySelector(".near")

    near.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.fullDayCard)("near", historyOrForecast))
}

function displayHours(today, location){

    let aside = document.querySelector("aside")

    let hours = today[2]

    let hourstest = [hours[0], hours[1], hours[2]]

   hourstest.forEach( hour => {
        console.log(hour)
        aside.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.currentHourCard)("aside", hour, location))
   })


    //aside.appendChild(currentHourCard())
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
    yesterdayDay.isYesterday = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3BDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQ0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDRDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsNkNBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMseUNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksMENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsNENBQVM7QUFDNUM7QUFDQSxtQkFBbUIseUNBQU07QUFDekI7QUFDQSxvQkFBb0IsMENBQU87QUFDM0I7QUFDQTtBQUNBLHFDQUFxQyw2Q0FBVTtBQUMvQztBQUNBO0FBQ0EscUNBQXFDLCtDQUFZO0FBQ2pEO0FBQ0EsaUNBQWlDLCtDQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLGlEQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQVMsR0FBRyxDQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTjRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZENEM7QUFDNUM7QUFDNkM7QUFDRjtBQUNBO0FBQ1A7QUFDcEM7QUFDQTtBQUNxQztBQUNy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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VuSW1nIGZyb20gXCIuL2ltZy9zdW4uc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24uc3ZnXCJcclxuaW1wb3J0IGNsb3VkeUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5LnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlEYXlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeURheS5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LnN2Z1wiXHJcbmltcG9ydCB0aHVuZGVySW1nIGZyb20gXCIuL2ltZy90aHVuZGVyLnN2Z1wiXHJcbmltcG9ydCBmb2dJbWcgZnJvbSBcIi4vaW1nL2ZvZy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi5zdmdcIlxyXG5pbXBvcnQgcmFpbkRheUltZyBmcm9tIFwiLi9pbWcvcmFpbkRheS5zdmdcIlxyXG5pbXBvcnQgcmFpbk5pZ2h0SW1nIGZyb20gXCIuL2ltZy9yYWluTmlnaHQuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC5zdmdcIlxyXG5pbXBvcnQgc25vd0ltZyBmcm9tIFwiLi9pbWcvc25vdy5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3Rvcn1cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpY29uU2VsZWN0b3Iob2JqKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhvYmopXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai53ZWF0aGVyVGV4dDtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpXHJcbiAgICBjb25zb2xlLmxvZyhvYmouaXNEYXkpXHJcbiAgICBsZXQgaXNEYXkgPSB1bmRlZmluZWQgPyAxIDogb2JqLmlzRGF5XHJcbiAgICBjb25zb2xlLmxvZyhpc0RheSlcclxuXHJcbiAgICAvLy8gVEVSTkFSWSBPUEVSQVRPUiAvLy9cclxuICAgIGxldCBuaWdodE9yRGF5ID0gaXNEYXkgPyBpY29uc09iai5kYXlBcnIoKSA6IGljb25zT2JqLm5pZ2h0QXJyKCk7XHJcblxyXG4gICAgbGV0IGltZyA9IFwiXCJcclxuXHJcbiAgLy8vIFRIRSBGSVJTVCBUSElORyBJIERJRCBXQVMgVFdPIExPT1BTLCBPTkUgRk9SIERBWSBBTkQgT1RIRVIgRk9SIE5JR0hULlxyXG4gIC8vLyBBV0ZVTC4gQU5EIEhFQVZJTFkgTkVTVEVELiAgXHJcblxyXG4gIC8qICAgaWYoIWlzRGF5KSB7XHJcbiAgICAgICAgbmlnaHRBcnIuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb21lKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBhcnJheVthcnJheS5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG4gICAgICAgLyogIGlmKGlzRGF5KSB7XHJcbiAgICAgICAgZGF5QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuXHJcblxyXG4gLy8vIFRIRU4gSSBUUlkgVE8gVVNFIEZPUiBPRiBMT09QUywgQkVDQVVTRSBJIFdBTlRFRCBUTyBCUkVBSyBUSEUgTE9PUCBXSEVOIEkgSEFWRSBUSEUgRUxFTUVOVCBJIFdBTlRFRCBcclxuXHJcbi8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodEFycil7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBkYXlBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcblxyXG4gICAgLy8vIEZJTkFMTFksIEkgRElETlQgV0FOVCBUTyBVU0UgMiBFUVVBTCBMT09QUywgU08gUkVTT0xWRUQgVE8gVVNFIEEgVEVSTkFSWSBPUEVSQVRPUiBBTkQgVEhFTiBBIFNJTkdMRSBMT09QLlxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgQlkgVEhFIEFQSSAoSVRTIFBST1BFUlRJRVMsIFZBTFVFUywgRVRDKSAvLy9cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBpdGF0aW9uID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IDFcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vdyA9IG9iai5zbm93X2NtXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z1RlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLmF2Z1RlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMubWF4V2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy5pc1llc3RlcmRheSA9IDAsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSAxXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuaW1wb3J0IGNsb3VkT25lSW1nIGZyb20gXCIuL2ltZy9jbG91ZC1PTkUuc3ZnXCJcclxuaW1wb3J0IG1lbnVJbWcgZnJvbSBcIi4vaW1nL21lbnUtYnVyZ2VyLnN2Z1wiXHJcbmltcG9ydCB0ZW1wSW1nIGZyb20gXCIuL2ltZy90ZW1wZXJhdHVyZS5zdmdcIlxyXG5pbXBvcnQgd2luZEltZyBmcm9tIFwiLi9pbWcvd2luZC5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y3VycmVudEhvdXJDYXJkLCBmdWxsRGF5Q2FyZH1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbGV0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCB0aGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGZvdXJ0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGZpZnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgc2l4dGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCBzZXZlbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgZWlnaHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBmaXJzdC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XHJcbiAgICBzZWNvbmQuY2xhc3NMaXN0LmFkZChcInNlY29uZFwiKTtcclxuICAgIHRoaXJkLmNsYXNzTGlzdC5hZGQoXCJ0aGlyZFwiKTtcclxuICAgIGZvdXJ0aC5jbGFzc0xpc3QuYWRkKFwiZm91cnRoXCIpO1xyXG4gICAgZmlmdGguY2xhc3NMaXN0LmFkZChcImZpZnRoXCIpO1xyXG4gICAgc2l4dGguY2xhc3NMaXN0LmFkZChcInNpeHRoXCIpO1xyXG4gICAgc2V2ZW50aC5jbGFzc0xpc3QuYWRkKFwic2V2ZW50aFwiKTtcclxuICAgIGVpZ2h0aC5jbGFzc0xpc3QuYWRkKFwiZWlnaHRoXCIpO1xyXG5cclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYmlnLWltZ1wiKTtcclxuICAgIHN1Yi5jbGFzc0xpc3QuYWRkKFwic3ViXCIpXHJcblxyXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoc3ViKVxyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZmlyc3QpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHNlY29uZClcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGhpcmQpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGZvdXJ0aClcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZmlmdGgpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHNpeHRoKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChzZXZlbnRoKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChlaWdodGgpXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjdXJyZW50SG91ckNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG5cclxuICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBjYXJkQXJyID0gQXJyYXkuZnJvbShjYXJkLmNoaWxkcmVuKVxyXG4gICAgbGV0IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCwgc2l4dGgsIHNldmVudGgsIGVpZ2h0aF0gPSBjYXJkQXJyXHJcblxyXG4gICAgZmlyc3QuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgZmlyc3QuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuICAgIHNlY29uZC50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDtcclxuICAgIHRoaXJkLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJhOiAke3dlYXRoZXIudGVtcEN9wrovIFNUOiAke3dlYXRoZXIudGVtcENfZmVlbH3CumA7XHJcbiAgICBpZighd2VhdGhlci5pc0NlbHNpdXMpe1xyXG4gICAgICAgIHRoaXJkLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJhOiAke3dlYXRoZXIudGVtcEZ9wrpGLyBTVDogJHt3ZWF0aGVyLnRlbXBGX2ZlZWx9wrpGYDtcclxuICAgIH1cclxuICAgIGZvdXJ0aC50ZXh0Q29udGVudCA9IGBIdW1lZGFkOiAke3dlYXRoZXIuaHVtaWRpdHl9JWBcclxuICAgIGZpZnRoLnRleHRDb250ZW50ID0gYE51YmVzOiAke3dlYXRoZXIuY2xvdWR9JWBcclxuICAgIHNpeHRoLnRleHRDb250ZW50ID0gYFByb2IuIGRlIHByZWNpcGl0YWNpb25lczogJHt3ZWF0aGVyLnByZWNpcGl0YXRpb259JWBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYXJkKVxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gZnVsbERheUNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkod2VhdGhlcikpXHJcblxyXG4gICAgbGV0IFtkYXRlLCBmdWxsRGF5T2JqLCBmdWxsSG91cnNBcnJdID0gd2VhdGhlclxyXG4gICAgY29uc29sZS5sb2coZnVsbERheU9iailcclxuICAgIFxyXG4gICAgbGV0IGRhdGVGb3JtYXQgPSBkYXRlLnNsaWNlKDUsIDcpICsgXCIvXCIgKyBkYXRlLnNsaWNlKDgpXHJcblxyXG4gICAgbGV0IGNhcmRBcnIgPSBBcnJheS5mcm9tKGNhcmQuY2hpbGRyZW4pXHJcbiAgICBsZXQgW2ZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoLCBzaXh0aCwgc2V2ZW50aCwgZWlnaHRoXSA9IGNhcmRBcnJcclxuXHJcbiAgICBmaXJzdC5maXJzdEVsZW1lbnRDaGlsZC5zcmMgPSBpY29uU2VsZWN0b3IoZnVsbERheU9iaik7XHJcbiAgICBmaXJzdC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBmdWxsRGF5T2JqLndlYXRoZXJUZXh0O1xyXG4gICAgc2Vjb25kLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuXHJcbiAgICB0aGlyZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZighZnVsbERheU9iai5pc0NlbHNpdXMpeyBcclxuICAgICAgICB0aGlyZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBGKX3CumB9O1xyXG5cclxuICAgIGZvdXJ0aC50ZXh0Q29udGVudCA9IGBwcmVjaXAuICR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwQ2hhbmNlKX0lYDtcclxuICAgIGlmKGZ1bGxEYXlPYmouaXNZZXN0ZXJkYXkpeyBmb3VydGgudGV4dENvbnRlbnQgPSBgcHJlY2lwLiAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnByZWNpcFRvdGFsKX1tbWB9O1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQge3Rlc3QsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRMb2NhdGlvbiwgZ2V0Rm9yZWNhc3RIb3VycywgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX0gZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5pbXBvcnQge2NvbXBhcmVPYmplY3RzfSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge2N1cnJlbnRIb3VyQ2FyZCwgZnVsbERheUNhcmR9IGZyb20gXCIuL2RvbVwiO1xyXG5cclxuZXhwb3J0IHtnZXREYXRhfVxyXG5cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcblxyXG5sZXQgcGFzcyA9IFwiP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyXCJcclxubGV0IHVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiXHJcbmxldCBjdXJyZW50ID0gXCIvY3VycmVudC5qc29uXCJcclxubGV0IHBsYWNlID0gXCJxPVBhcmlzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCl7XHJcblxyXG50cnl7XHJcbiAgICBsZXQgW3Jlc3BvbnNlLCByZXNwb25zZTJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9QnVlbm9zLUFpcmVzJmRheXM9M1wiKSxcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9QnVlbm9zLUFpcmVzJmR0PTIwMjQtMDEtMDdcIilcclxuICAgIF0pXHJcblxyXG4gICAgbGV0IFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICByZXNwb25zZS5qc29uKCksXHJcbiAgICAgICAgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgXSlcclxuXHJcbiAgICAvLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCAvLy9cclxuICAgIC8vY29tcGFyZU9iamVjdHMoZGF0YSwgZGF0YTIsIGRhdGEzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGFGb3JlY2FzdClcclxuICAgIGNvbnNvbGUubG9nKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIGxldCB3ZWF0aGVyQW5kTG9jYXRpb24gPSBbZ2V0Q3VycmVudFdlYXRoZXIoZGF0YUZvcmVjYXN0KSwgZ2V0TG9jYXRpb24oZGF0YUZvcmVjYXN0KV1cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIC8vZ2V0U3RydWN0dXJlZEZvcmVjYXN0KGZvcmVjYXN0QXJyKVxyXG4gICAgLy9nZXRTdHJ1Y3R1cmVkSGlzdG9yeShoaXN0b3J5QXJyKVxyXG4gICAgLy9nZXRXZWF0aGVyQW5kTG9jYXRpb24od2VhdGhlckFuZExvY2F0aW9uKVxyXG5cclxuICAgIGdldFN0cnVjdHVyZWREYXRhKFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSlcclxuXHJcbn0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9ICBcclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldFN0cnVjdHVyZWREYXRhKGFycmF5KXtcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRBbmRMb2NhdGlvbkFyciwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gYXJyYXlcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBbmRMb2NhdGlvbkFycilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBjdXJyZW50QW5kTG9jYXRpb25BcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvdylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0RGF5KVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcbiAgICBjb25zb2xlLmxvZyh5ZXN0ZXJkYXkpXHJcblxyXG4gICAgZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcblxyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRm9yZWNhc3QgKGFycil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gYXJyXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3cpXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdERheSlcclxuICAgIFxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgdG9kYXkpKVxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgdG9tb3Jyb3cpKVxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgbGFzdERheSkpXHJcblxyXG4gICAgY29uc29sZS5sb2codG9kYXlbMl0pXHJcbiAgICAvL2FzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZCh0b2RheVsyXSkpXHJcblxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEhpc3RvcnkoYXJyKSB7XHJcbiAgICBsZXQgeSA9IGFyclxyXG4gICAgY29uc29sZS5sb2coeSlcclxuICAgIGxldCBjaGlsZCA9IG5lYXIuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgIGNvbnNvbGUubG9nKGNoaWxkKVxyXG4gICAgbmVhci5pbnNlcnRCZWZvcmUoZnVsbERheUNhcmQoXCJuZWFyXCIsIHkpLCBjaGlsZClcclxufSAqL1xyXG5cclxuLyogZnVuY3Rpb24gZ2V0V2VhdGhlckFuZExvY2F0aW9uKGFycil7XHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcblxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcInByaW5jaXBhbFwiLCBjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pKSBcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikge1xyXG5cclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoaGlzdG9yeU9yRm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcblxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgaGlzdG9yeU9yRm9yZWNhc3QpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG91cnModG9kYXksIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIilcclxuXHJcbiAgICBsZXQgaG91cnMgPSB0b2RheVsyXVxyXG5cclxuICAgIGxldCBob3Vyc3Rlc3QgPSBbaG91cnNbMF0sIGhvdXJzWzFdLCBob3Vyc1syXV1cclxuXHJcbiAgIGhvdXJzdGVzdC5mb3JFYWNoKCBob3VyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhob3VyKVxyXG4gICAgICAgIGFzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcImFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgfSlcclxuXHJcblxyXG4gICAgLy9hc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoKSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZ2V0RGF0YSgpXHJcblxyXG4iLCJpbXBvcnQge2dldERhdGF9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuZXhwb3J0IHt0ZXN0LCBnZXRMb2NhdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9XHJcblxyXG5sZXQgdGVzdCA9IHtcclxuICAgIGhpc3Rvcnk6IFwibGFzdCA3IGRheXNcIixcclxuICAgIGZvcmVjYXN0OiBcInVwIHRvIDMgZGF5cyBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0ZvcmVjYXN0QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCB0b2RheURhdGUgPSByYXdUb2RheUFyci5kYXRlO1xyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXkpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlBcnIgPSBbdG9kYXlEYXRlLCB0b2RheURheSwgdG9kYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF0ZSA9IHJhd1RvbW9ycm93QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd0FyciA9IFt0b21vcnJvd0RhdGUsIHRvbW9ycm93RGF5LCB0b21vcnJvd0hvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgbGFzdERheURhdGUgPSByYXdMYXN0RGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXkpO1xyXG4gICAgbGV0IGxhc3REYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd0xhc3REYXlBcnIpO1xyXG4gICAgbGV0IGxhc3REYXlBcnIgPSBbbGFzdERheURhdGUsIGxhc3REYXlEYXksIGxhc3REYXlIb3Vyc0Fycl07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5QXJyLCB0b21vcnJvd0FyciwgbGFzdERheUFycl07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdIaXN0b3J5QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gcmF3SGlzdG9yeUFyclxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXRlID0gcmF3WWVzdGVyZGF5QXJyLmRhdGUgXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5KVxyXG4gICAgeWVzdGVyZGF5RGF5LmlzWWVzdGVyZGF5ID0gMTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5QXJyID0gW3llc3RlcmRheURhdGUsIHllc3RlcmRheURheSwgeWVzdGVyZGF5SG91cnNBcnJdXHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheUFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlcilcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCBob3VyID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBIb3VyKGhvdXIpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==