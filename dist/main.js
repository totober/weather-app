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
    constructor(obj, index){
        super(obj)
        this.snow = obj.snow_cm,
        this.snowChance = obj.chance_of_snow,
        this.time = index
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
        this.isDay = 1,
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
    let place = document.createElement("p");
    let temp = document.createElement("p");
    let tempFeel = document.createElement("p");
    let cloud = document.createElement("p");
    let precip = document.createElement("p");
    let time = document.createElement("p");
    let humidity = document.createElement("p");

    let img = document.createElement("img")
    let sub = document.createElement("p")

    card.classList.add("card");
    first.classList.add("first");
    place.classList.add("place");
    temp.classList.add("temp");
    tempFeel.classList.add("tempFeel");
    cloud.classList.add("cloud");
    precip.classList.add("precip");
    time.classList.add("time");
    humidity.classList.add("humidity");

    img.classList.add("big-img");
    sub.classList.add("sub")

    first.appendChild(img)
    first.appendChild(sub)

    card.appendChild(first)
    card.appendChild(place)
    card.appendChild(temp)
    card.appendChild(tempFeel)
    card.appendChild(cloud)
    card.appendChild(precip)
    card.appendChild(time)
    card.appendChild(humidity)

    return card
}



function currentHourCard(className, weather, location){


    let card = createCard()
    card.classList.add(className)

    let cardArr = Array.from(card.children)
    let [first, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr

    first.firstElementChild.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weather);
    first.firstElementChild.nextElementSibling.textContent = weather.weatherText;
    place.textContent = `${location.name}, ${location.country}`;


    temp.textContent = `${weather.tempC}º`;
    tempFeel.textContent = `ST: ${weather.tempC_feel}º`
    if(!weather.isCelsius){
        temp.textContent = `${weather.tempF}º`;
        tempFeel.textContent = `ST: ${weather.tempF_feel}º`;
    }

    
    cloud.textContent = `Nubes: ${weather.cloud}%`;
    precip.textContent = `precip: ${weather.precipitation}%`;
    humidity.textContent = `Humedad: ${weather.humidity}%`;

    time.textContent = `0${weather.time}:00`;
    if(weather.time >= 10) {time.textContent = `${weather.time}:00`};


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
    
    let dateFormat = `${date.slice(8)}/${date.slice(5, 7)}`;

    let cardArr = Array.from(card.children)
    let [first, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr

    first.firstElementChild.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(fullDayObj);
    first.firstElementChild.nextElementSibling.textContent = fullDayObj.weatherText;
    time.textContent = dateFormat;

    temp.textContent = `${Number.parseInt(fullDayObj.maxTempC)}º/${Number.parseInt(fullDayObj.minTempC)}º`;
    if(!fullDayObj.isCelsius){ 
        temp.textContent = `${Number.parseInt(fullDayObj.maxTempF)}º/${Number.parseInt(fullDayObj.minTempF)}º`};

    precip.textContent = `precip. ${Number.parseInt(fullDayObj.precipChance)}%`;
    if(fullDayObj.isYesterday){ precip.textContent = `precip. ${Number.parseInt(fullDayObj.precipTotal)}mm`};

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

    return arr.hour.map( (hour, index) => {
      return new _class__WEBPACK_IMPORTED_MODULE_1__.Hour(hour, index)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3BDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywyQ0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDRDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsNkNBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMseUNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksMENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsNENBQVM7QUFDNUM7QUFDQSxtQkFBbUIseUNBQU07QUFDekI7QUFDQSxvQkFBb0IsMENBQU87QUFDM0I7QUFDQTtBQUNBLHFDQUFxQyw2Q0FBVTtBQUMvQztBQUNBO0FBQ0EscUNBQXFDLCtDQUFZO0FBQ2pEO0FBQ0EsaUNBQWlDLCtDQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLGlEQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck40QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekQ0QztBQUM1QztBQUM2QztBQUNGO0FBQ0E7QUFDUDtBQUNwQztBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtB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QWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VuSW1nIGZyb20gXCIuL2ltZy9zdW4uc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24uc3ZnXCJcclxuaW1wb3J0IGNsb3VkeUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5LnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlEYXlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeURheS5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LnN2Z1wiXHJcbmltcG9ydCB0aHVuZGVySW1nIGZyb20gXCIuL2ltZy90aHVuZGVyLnN2Z1wiXHJcbmltcG9ydCBmb2dJbWcgZnJvbSBcIi4vaW1nL2ZvZy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi5zdmdcIlxyXG5pbXBvcnQgcmFpbkRheUltZyBmcm9tIFwiLi9pbWcvcmFpbkRheS5zdmdcIlxyXG5pbXBvcnQgcmFpbk5pZ2h0SW1nIGZyb20gXCIuL2ltZy9yYWluTmlnaHQuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC5zdmdcIlxyXG5pbXBvcnQgc25vd0ltZyBmcm9tIFwiLi9pbWcvc25vdy5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3Rvcn1cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpY29uU2VsZWN0b3Iob2JqKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhvYmopXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai53ZWF0aGVyVGV4dDtcclxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpXHJcbiAgICBjb25zb2xlLmxvZyhvYmouaXNEYXkpXHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXkgXHJcbiAgXHJcblxyXG4gICAgLy8vIFRFUk5BUlkgT1BFUkFUT1IgLy8vXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBcIlwiXHJcblxyXG4gIC8vLyBUSEUgRklSU1QgVEhJTkcgSSBESUQgV0FTIFRXTyBMT09QUywgT05FIEZPUiBEQVkgQU5EIE9USEVSIEZPUiBOSUdIVC5cclxuICAvLy8gQVdGVUwuIEFORCBIRUFWSUxZIE5FU1RFRC4gIFxyXG5cclxuICAvKiAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuICAgICAgIC8qICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG5cclxuIC8vLyBUSEVOIEkgVFJZIFRPIFVTRSBGT1IgT0YgTE9PUFMsIEJFQ0FVU0UgSSBXQU5URUQgVE8gQlJFQUsgVEhFIExPT1AgV0hFTiBJIEhBVkUgVEhFIEVMRU1FTlQgSSBXQU5URUQgXHJcblxyXG4vKiAgICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAgICAgZm9yIChjb25zdCBhcnIgb2YgZGF5QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIC8vLyBGSU5BTExZLCBJIERJRE5UIFdBTlQgVE8gVVNFIDIgRVFVQUwgTE9PUFMsIFNPIFJFU09MVkVEIFRPIFVTRSBBIFRFUk5BUlkgT1BFUkFUT1IgQU5EIFRIRU4gQSBTSU5HTEUgTE9PUC5cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodE9yRGF5KXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltZ1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIEJZIFRIRSBBUEkgKElUUyBQUk9QRVJUSUVTLCBWQUxVRVMsIEVUQykgLy8vXHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMgKGRhdGEsIGRhdGEyLCBkYXRhMyl7XHJcbiAgICBsZXQgaWRlbSA9IFtdXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkNVUlJFTlRcIiAvLy9cclxuICAgIGxldCBjdXJyZW50RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YS5jdXJyZW50KVxyXG4gICAgbGV0IGZvcmVjYXN0RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YTIuY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGN1cnJlbnRGaWx0ZXIuZm9yRWFjaCgocHJvcCkgPT57XHJcbiAgICAgICAgZm9yZWNhc3RGaWx0ZXIuZm9yRWFjaCgocHIpID0+e1xyXG4gICAgICAgICAgICBpZihwcm9wID09PSBwciApe1xyXG4gICAgICAgICAgICAgICAgaWRlbS5wdXNoKHByb3ApXHJcbiAgICAgICAgfX0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWRlbTpcIiwgaWRlbSlcclxufSIsImV4cG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259XHJcblxyXG5jbGFzcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbiwgXHJcbiAgICAgICAgdGhpcy5jbG91ZCA9IG9iai5jbG91ZCxcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLnRlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRl9mZWVsID0gb2JqLmZlZWxzbGlrZV9mLFxyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBvYmouaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLndpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwaXRhdGlvbiA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IG9iai5pc19kYXksXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSAxXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhvdXIgZXh0ZW5kcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGluZGV4KXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93ID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMudGltZSA9IGluZGV4XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z1RlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLmF2Z1RlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMubWF4V2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IDEsXHJcbiAgICAgICAgdGhpcy5pc1llc3RlcmRheSA9IDAsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSAxXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuaW1wb3J0IGNsb3VkT25lSW1nIGZyb20gXCIuL2ltZy9jbG91ZC1PTkUuc3ZnXCJcclxuaW1wb3J0IG1lbnVJbWcgZnJvbSBcIi4vaW1nL21lbnUtYnVyZ2VyLnN2Z1wiXHJcbmltcG9ydCB0ZW1wSW1nIGZyb20gXCIuL2ltZy90ZW1wZXJhdHVyZS5zdmdcIlxyXG5pbXBvcnQgd2luZEltZyBmcm9tIFwiLi9pbWcvd2luZC5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y3VycmVudEhvdXJDYXJkLCBmdWxsRGF5Q2FyZH1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgbGV0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxldCB0ZW1wRmVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGNsb3VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgcHJlY2lwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsZXQgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbGV0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG5cclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBmaXJzdC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RcIik7XHJcbiAgICBwbGFjZS5jbGFzc0xpc3QuYWRkKFwicGxhY2VcIik7XHJcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xyXG4gICAgdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcInRlbXBGZWVsXCIpO1xyXG4gICAgY2xvdWQuY2xhc3NMaXN0LmFkZChcImNsb3VkXCIpO1xyXG4gICAgcHJlY2lwLmNsYXNzTGlzdC5hZGQoXCJwcmVjaXBcIik7XHJcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xyXG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xyXG5cclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYmlnLWltZ1wiKTtcclxuICAgIHN1Yi5jbGFzc0xpc3QuYWRkKFwic3ViXCIpXHJcblxyXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgZmlyc3QuYXBwZW5kQ2hpbGQoc3ViKVxyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZmlyc3QpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHBsYWNlKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wRmVlbClcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2xvdWQpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHByZWNpcClcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGltZSlcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjdXJyZW50SG91ckNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG5cclxuICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBjYXJkQXJyID0gQXJyYXkuZnJvbShjYXJkLmNoaWxkcmVuKVxyXG4gICAgbGV0IFtmaXJzdCwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eV0gPSBjYXJkQXJyXHJcblxyXG4gICAgZmlyc3QuZmlyc3RFbGVtZW50Q2hpbGQuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgZmlyc3QuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xyXG5cclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci50ZW1wQ33CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHt3ZWF0aGVyLnRlbXBDX2ZlZWx9wrpgXHJcbiAgICBpZighd2VhdGhlci5pc0NlbHNpdXMpe1xyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLnRlbXBGfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHt3ZWF0aGVyLnRlbXBGX2ZlZWx9wrpgO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgTnViZXM6ICR7d2VhdGhlci5jbG91ZH0lYDtcclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGBwcmVjaXA6ICR7d2VhdGhlci5wcmVjaXBpdGF0aW9ufSVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtZWRhZDogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG5cclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSBgMCR7d2VhdGhlci50aW1lfTowMGA7XHJcbiAgICBpZih3ZWF0aGVyLnRpbWUgPj0gMTApIHt0aW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci50aW1lfTowMGB9O1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYXJkKVxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gZnVsbERheUNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgY29uc29sZS5sb2cod2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkod2VhdGhlcikpXHJcblxyXG4gICAgbGV0IFtkYXRlLCBmdWxsRGF5T2JqLCBmdWxsSG91cnNBcnJdID0gd2VhdGhlclxyXG4gICAgY29uc29sZS5sb2coZnVsbERheU9iailcclxuICAgIFxyXG4gICAgbGV0IGRhdGVGb3JtYXQgPSBgJHtkYXRlLnNsaWNlKDgpfS8ke2RhdGUuc2xpY2UoNSwgNyl9YDtcclxuXHJcbiAgICBsZXQgY2FyZEFyciA9IEFycmF5LmZyb20oY2FyZC5jaGlsZHJlbilcclxuICAgIGxldCBbZmlyc3QsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHldID0gY2FyZEFyclxyXG5cclxuICAgIGZpcnN0LmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IGljb25TZWxlY3RvcihmdWxsRGF5T2JqKTtcclxuICAgIGZpcnN0LmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCFmdWxsRGF5T2JqLmlzQ2Vsc2l1cyl7IFxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5taW5UZW1wRil9wrpgfTtcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgcHJlY2lwLiAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnByZWNpcENoYW5jZSl9JWA7XHJcbiAgICBpZihmdWxsRGF5T2JqLmlzWWVzdGVyZGF5KXsgcHJlY2lwLnRleHRDb250ZW50ID0gYHByZWNpcC4gJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBUb3RhbCl9bW1gfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHt0ZXN0LCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0TG9jYXRpb24sIGdldEZvcmVjYXN0SG91cnMsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0c30gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIjtcclxuaW1wb3J0IHtjdXJyZW50SG91ckNhcmQsIGZ1bGxEYXlDYXJkfSBmcm9tIFwiLi9kb21cIjtcclxuXHJcbmV4cG9ydCB7Z2V0RGF0YX1cclxuXHJcblxyXG5sZXQgZXggPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTExMTExMTExMTExMTExMTEmcT1sb25kb25cIlxyXG5cclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpe1xyXG5cclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkYXlzPTNcIiksXHJcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPUJ1ZW5vcy1BaXJlcyZkdD0yMDI0LTAxLTA3XCIpXHJcbiAgICBdKVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICAvL2dldFN0cnVjdHVyZWRGb3JlY2FzdChmb3JlY2FzdEFycilcclxuICAgIC8vZ2V0U3RydWN0dXJlZEhpc3RvcnkoaGlzdG9yeUFycilcclxuICAgIC8vZ2V0V2VhdGhlckFuZExvY2F0aW9uKHdlYXRoZXJBbmRMb2NhdGlvbilcclxuXHJcbiAgICBnZXRTdHJ1Y3R1cmVkRGF0YShbd2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0pXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRGF0YShhcnJheSl7XHJcblxyXG4gICAgbGV0IFtjdXJyZW50QW5kTG9jYXRpb25BcnIsIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IGFycmF5XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QW5kTG9jYXRpb25BcnIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIGNvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcblxyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gY3VycmVudEFuZExvY2F0aW9uQXJyXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3cpXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdERheSlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG4gICAgY29uc29sZS5sb2coeWVzdGVyZGF5KVxyXG5cclxuICAgIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pXHJcblxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh5ZXN0ZXJkYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b21vcnJvdylcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QobGFzdERheSlcclxuXHJcbiAgICBkaXNwbGF5SG91cnModG9kYXksIGxvY2F0aW9uKVxyXG5cclxufVxyXG5cclxuLyogZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEZvcmVjYXN0IChhcnIpe1xyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGFyclxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3REYXkpXHJcbiAgICBcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvZGF5KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvbW9ycm93KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGxhc3REYXkpKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZGF5WzJdKVxyXG4gICAgLy9hc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQodG9kYXlbMl0pKVxyXG5cclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldFN0cnVjdHVyZWRIaXN0b3J5KGFycikge1xyXG4gICAgbGV0IHkgPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKHkpXHJcbiAgICBsZXQgY2hpbGQgPSBuZWFyLmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICBjb25zb2xlLmxvZyhjaGlsZClcclxuICAgIG5lYXIuaW5zZXJ0QmVmb3JlKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB5KSwgY2hpbGQpXHJcbn0gKi9cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFdlYXRoZXJBbmRMb2NhdGlvbihhcnIpe1xyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gYXJyXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSkgXHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pIHtcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGhpc3RvcnlPckZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGhpc3RvcnlPckZvcmVjYXN0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpXHJcblxyXG4gICAgbGV0IGhvdXJzID0gdG9kYXlbMl1cclxuXHJcbiAgICBsZXQgaG91cnN0ZXN0ID0gW2hvdXJzWzBdLCBob3Vyc1sxXSwgaG91cnNbMl1dXHJcblxyXG4gICBob3Vyc3Rlc3QuZm9yRWFjaCggaG91ciA9PiB7XHJcbiAgICAgICAgYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwiYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKVxyXG4gICB9KVxyXG5cclxuXHJcbiAgICAvL2FzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZCgpKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5nZXREYXRhKClcclxuXHJcbiIsImltcG9ydCB7Z2V0RGF0YX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3Rlc3QsIGdldExvY2F0aW9uLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX1cclxuXHJcbmxldCB0ZXN0ID0ge1xyXG4gICAgaGlzdG9yeTogXCJsYXN0IDcgZGF5c1wiLFxyXG4gICAgZm9yZWNhc3Q6IFwidXAgdG8gMyBkYXlzIFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IHRvZGF5RGF0ZSA9IHJhd1RvZGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyciA9IFt0b2RheURhdGUsIHRvZGF5RGF5LCB0b2RheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXRlID0gcmF3VG9tb3Jyb3dBcnIuZGF0ZTtcclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5KTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93QXJyID0gW3RvbW9ycm93RGF0ZSwgdG9tb3Jyb3dEYXksIHRvbW9ycm93SG91cnNBcnJdO1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF0ZSA9IHJhd0xhc3REYXlBcnIuZGF0ZTtcclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheUFyciA9IFtsYXN0RGF5RGF0ZSwgbGFzdERheURheSwgbGFzdERheUhvdXJzQXJyXTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBbdG9kYXlBcnIsIHRvbW9ycm93QXJyLCBsYXN0RGF5QXJyXTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0hpc3RvcnlBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSByYXdIaXN0b3J5QXJyXHJcblxyXG4gICAgbGV0IHllc3RlcmRheURhdGUgPSByYXdZZXN0ZXJkYXlBcnIuZGF0ZSBcclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHJhd1llc3RlcmRheUFyci5kYXkpXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNZZXN0ZXJkYXkgPSAxO1xyXG4gICAgbGV0IHllc3RlcmRheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3WWVzdGVyZGF5QXJyKVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlBcnIgPSBbeWVzdGVyZGF5RGF0ZSwgeWVzdGVyZGF5RGF5LCB5ZXN0ZXJkYXlIb3Vyc0Fycl1cclxuXHJcbiAgICByZXR1cm4geWVzdGVyZGF5QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKG9iaikge1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IG9iai5sb2NhdGlvblxyXG4gICAgbGV0IGxvY2F0aW9uT2JqID0gbmV3IExvY2F0aW9uKGxvY2F0aW9uKVxyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbk9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihvYmopeyBcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai5jdXJyZW50XHJcbiAgICBsZXQgd2VhdGhlck9iaiA9IG5ldyBDdXJyZW50V2VhdGhlcih3ZWF0aGVyKVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvdXJzKGFycikge1xyXG5cclxuICAgIHJldHVybiBhcnIuaG91ci5tYXAoIChob3VyLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgaW5kZXgpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==