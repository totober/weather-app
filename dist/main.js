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
                "Light rain shower", "Patchy rain nearby", _img_rainDay_s_svg__WEBPACK_IMPORTED_MODULE_8__],

    rainNight: ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", "Patchy rain nearby", _img_rainNight_s_svg__WEBPACK_IMPORTED_MODULE_9__],

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

    let weather = obj.weatherText.toLowerCase().trim()
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

            if(weather === element.toLowerCase()) {
                img = arr[arr.length -1]
                break
            }
        }
    }

    return img
} 

function easyCar(e) {

    let event = e.target.classList.contains("up") ? "up" : "down"

    if(event === "up") {
       elements.slider.firstElementChild.classList.add("show")
       elements.slider.lastElementChild.classList.remove("show")  
    } else if (event === "down") {
        elements.slider.firstElementChild.classList.remove("show")
        elements.slider.lastElementChild.classList.add("show")
    } 
}


let elements = {
    btnUp: document.querySelector(".up")
    .addEventListener("click", /* carousel.sliderUp */easyCar),

    btnDown: document.querySelector(".down")
    .addEventListener("click", /* carousel.sliderDown */easyCar),

    slider: document.querySelector(".slider")
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






/* let carousel = {
    
    val: 0,
    
    sliderUp(e) {

        let value = 47
    
        if(carousel.val === 0 || elements.slider.firstElementChild.classList.contains("once")) {return}

        elements.slider.firstElementChild.classList.add("once")
        elements.slider.lastElementChild.classList.remove("once")

        carousel.val += value
        elements.slider.style.marginTop = `${carousel.val}rem`
    },

    sliderDown(e) {

       let value = -47 

        if(elements.slider.lastElementChild.classList.contains("once")) {return}

        elements.slider.firstElementChild.classList.remove("once")
        elements.slider.lastElementChild.classList.add("once")

        carousel.val += value
        elements.slider.style.marginTop = `${carousel.val}rem`

    }
} */

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
    constructor(obj, date){
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
        this.date = date,
        this.isDay = true,
        this.isHistory = false,
        this.isCelsius = true
    }
}

class Location {
    constructor(obj){
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerDataDisplay: () => (/* binding */ triggerDataDisplay)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





function triggerDataDisplay(weatherAndLocation, forecastArr, historyArr, day = "today"){

    let [currentWeather, location] = weatherAndLocation
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    // today and current are the default values //
    renderPrincipal(currentWeather, location)
    renderNear(forecastArr, historyArr, location)
    renderHours(today, location)
    renderExtra(today, location)

   let chosenDay = ""

   switch(true) {
        case day === "yesterday":
            chosenDay = yesterday
            break;
        case day === "tomorrow":
            chosenDay = tomorrow
            break;
        case day === "lastDay":
            chosenDay = lastDay
            break;
   }

   if(day !== "today") {
        renderPrincipal(chosenDay.day, location)
        renderHours(chosenDay, location)
        renderExtra(chosenDay, location)
    }
}



function renderHours(forecast, location){

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){
            sliderContainer.firstElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-aside", hour, location))
        } else if(i >= 12){

            sliderContainer.lastElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-aside", hour, location))  
        }    
   })
}



function renderPrincipal(weather, location){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    principalContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-principal", weather, location))
}



function renderNear(forecastArr, historyArr, location){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr


    nearArr[0].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-near", yesterday.day, location))
    nearArr[1].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-near", today.day, location))
    nearArr[2].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-near", tomorrow.day, location))
    nearArr[3].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-near", lastDay.day, location))
}


function renderExtra(forecast, location){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    extraContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setCardData)("card-extra", extraData, location));
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCardData: () => (/* binding */ setCardData)
/* harmony export */ });
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");





function createElement(element, className) {

    let el = document.createElement(element)
    el.classList.add(className)
    return el
}

function createCard(){

    let card = createElement("article", "card")
    
    let place = createElement("p", "place")
    let temp = createElement("p", "temp")
    let tempFeel = createElement("p", "tempFeel")
    let tempMinMax = createElement("p", "tempMinMax")
    let date = createElement("p", "date")
    let cloud = createElement("p", "cloud")
    let precip = createElement("p", "precip")
    let humidity = createElement("p", "humidity")
    let time = createElement("p", "time")
    let snow = createElement("p", "snow")
    let wind = createElement("p", "wind")
    let uv = createElement("p", "uv")

    let img = createElement("img", "img")
    let sub = createElement("p", "sub")

   let cardArr = [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, humidity, snow, wind, uv]

   cardArr.forEach(element => {card.appendChild(element)})

    return {card, cardArr}
}


function setCardData(className, weatherObj, locationObj) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, humidity, snow, wind, uv] = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    place.textContent = `${locationObj.name}, ${locationObj.country}`; 
    date.textContent = `${weatherObj.date.slice(8)}/${weatherObj.date.slice(5, 7)}`;
    time.textContent = weatherObj.time;
    cloud.textContent = `${weatherObj.cloud} %`;
    humidity.textContent = `${weatherObj.avgHumidity} %`;
    wind.textContent = `${Number.parseInt(weatherObj.wind)} km`;
    uv.textContent = weatherObj.uv;

    temp.textContent = `${Number.parseInt(weatherObj.tempC)}º`;
    tempFeel.textContent = `ST: ${Number.parseInt(weatherObj.tempC_feel)}º`
    tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempC)}º/${Number.parseInt(weatherObj.minTempC)}º`;
    if(!weatherObj.isCelsius){ 
        temp.textContent = `${Number.parseInt(weatherObj.tempF)}º`;
        tempFeel.textContent = `ST: ${Number.parseInt(weatherObj.tempF_feel)}º`;
        tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempF)}º/${Number.parseInt(weatherObj.minTempF)}º`;
    } 

    precip.textContent = `${Number.parseInt(weatherObj.precipChance)} %`;
    snow.textContent = `${weatherObj.snowChance} %`;
    if(weatherObj.isHistory){ 
        precip.textContent = `${Number.parseInt(weatherObj.precipTotal)} mm`;
        snow.textContent = `${Number.parseInt(weatherObj.snowTotal)} mm`
    };

    return card
}



/* function currentHourCard(className, weather, location){

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, humidity, snow, wind, uv] = cardArr

    img.src = iconSelector(weather);
    sub.textContent = weather.weatherText;


    temp.textContent = `${Number.parseInt(weather.tempC)}º`;
    tempFeel.textContent = `ST: ${Number.parseInt(weather.tempC_feel)}º`
    if(!weather.isCelsius){
        temp.textContent = `${Number.parseInt(weather.tempF)}º`;
        tempFeel.textContent = `ST: ${Number.parseInt(weather.tempF_feel)}º`};

    place.textContent = `${location.name}, ${location.country}`; 
    cloud.textContent = `Nubes: ${weather.cloud}%`;
    precip.textContent = `precip: ${weather.precipTotal}mm`;
    humidity.textContent = `Humedad: ${weather.humidity}%`;
    snow.textContent = `snow ${weather.snowChance}%`;
    time.textContent = weather.time;


    return  card
}

function fullDayCard(className, weather, location){

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [dateObj, fullDayObj, fullHoursArr] = weather
    console.log(fullDayObj)
    
    let dateFormat = `${dateObj.slice(8)}/${dateObj.slice(5, 7)}`;

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, humidity, snow, wind, uv] = cardArr

    img.src = iconSelector(fullDayObj);
    sub.textContent = fullDayObj.weatherText;
    time.textContent = dateFormat;
    humidity.textContent = `${fullDayObj.avgHumidity} %`;
    wind.textContent = `${Number.parseInt(fullDayObj.windMax)} km`;
    uv.textContent = fullDayObj.uv;
    
    tempFeel.textContent = `${Number.parseInt(fullDayObj.avgTempC)}º`;
    temp.textContent = `${Number.parseInt(fullDayObj.maxTempC)}º/${Number.parseInt(fullDayObj.minTempC)}º`;
    if(!fullDayObj.isCelsius){ 
        temp.textContent = `${Number.parseInt(fullDayObj.maxTempF)}º/${Number.parseInt(fullDayObj.minTempF)}º`;
        tempFeel.textContent = `${Number.parseInt(fullDayObj.avgTempF)}º`};


    precip.textContent = `${Number.parseInt(fullDayObj.precipChance)} %`;
    snow.textContent = `${fullDayObj.snowChance} %`;
    if(fullDayObj.isHistory){ 
        precip.textContent = `${Number.parseInt(fullDayObj.precipTotal)} mm`;
        snow.textContent = `${Number.parseInt(fullDayObj.snowTotal)} mm`
    };


    return card
} */




/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   triggerDataStructuration: () => (/* binding */ triggerDataStructuration)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");






function triggerDataStructuration (dataForecast, dataHistory){

    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    console.log(forecastArr)

    return [weatherAndLocation, forecastArr, historyArr]

}


function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;

    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

    let todayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawTodayArr.day, rawTodayArr.date);
    let todayHoursArr = getHours(rawTodayArr);
    let todayObj = {day: todayDay, hours: todayHoursArr};

    let tomorrowDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawTomorrowArr.day, rawTomorrowArr.date);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowObj = {day: tomorrowDay, hours: tomorrowHoursArr};

    let lastDayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawLastDayArr.day, rawLastDayArr.date);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayObj = {day: lastDayDay, hours: lastDayHoursArr};

    let forecastArr = [todayObj, tomorrowObj, lastDayObj];

    return forecastArr
}

function getHistoryData(obj) {

    let [rawYesterdayArr] = obj.forecast.forecastday

    let yesterdayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawYesterdayArr.day, rawYesterdayArr.date )
    yesterdayDay.isHistory = true;
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayObj = {day: yesterdayDay, hours: yesterdayHoursArr}

    return yesterdayObj
}

function getLocation(obj) {

    let location = obj.location
    let locationObj = new _class__WEBPACK_IMPORTED_MODULE_0__.Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 

    let weather = obj.current
    let date = obj.forecast.forecastday[0].date
    let weatherObj = new _class__WEBPACK_IMPORTED_MODULE_0__.CurrentWeather(weather, date)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( (hour) => {
        let date = hour.time.slice(0, 10)
        let time = hour.time.slice(11)
      return new _class__WEBPACK_IMPORTED_MODULE_0__.Hour(hour, date, time)
    })
}


/***/ }),

/***/ "./src/img/cloudy-s.svg":
/*!******************************!*\
  !*** ./src/img/cloudy-s.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44b88c065b3ac322564d.svg";

/***/ }),

/***/ "./src/img/cloudyDay-s.svg":
/*!*********************************!*\
  !*** ./src/img/cloudyDay-s.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af915d79b5aab2e9ab1e.svg";

/***/ }),

/***/ "./src/img/cloudyNight-s.svg":
/*!***********************************!*\
  !*** ./src/img/cloudyNight-s.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4851018917cc7669c5cb.svg";

/***/ }),

/***/ "./src/img/fog-s.svg":
/*!***************************!*\
  !*** ./src/img/fog-s.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "154c4d0fea9b593fc493.svg";

/***/ }),

/***/ "./src/img/moon-s.svg":
/*!****************************!*\
  !*** ./src/img/moon-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d167fd85ae2613581cf2.svg";

/***/ }),

/***/ "./src/img/rain-s.svg":
/*!****************************!*\
  !*** ./src/img/rain-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "162afbf52e245fa12c79.svg";

/***/ }),

/***/ "./src/img/rainDay-s.svg":
/*!*******************************!*\
  !*** ./src/img/rainDay-s.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2bc6139c37af57705dc.svg";

/***/ }),

/***/ "./src/img/rainNight-s.svg":
/*!*********************************!*\
  !*** ./src/img/rainNight-s.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "772a653e7271a3ac894e.svg";

/***/ }),

/***/ "./src/img/sleet-s.svg":
/*!*****************************!*\
  !*** ./src/img/sleet-s.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "421abbc8790f790ff32f.svg";

/***/ }),

/***/ "./src/img/snow-s.svg":
/*!****************************!*\
  !*** ./src/img/snow-s.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "320bd9d8c299fd140cb4.svg";

/***/ }),

/***/ "./src/img/sun-s.svg":
/*!***************************!*\
  !*** ./src/img/sun-s.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b1de06e3c3b9c29ac39.svg";

/***/ }),

/***/ "./src/img/thunder-s.svg":
/*!*******************************!*\
  !*** ./src/img/thunder-s.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");





let input = document.querySelector("input")
let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")

input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
window.addEventListener("click", closeMenu)
window.addEventListener("load", init)



function showMenu(e) {
    btnMenu.nextElementSibling.classList.toggle("show-menu")
}


function closeMenu(e) {

    if(!nav.contains(e.target)){
        btnMenu.nextElementSibling.classList.remove("show-menu")
    }
}


function nearCardsEvent() {
    console.log(this)
    console.log(this.className)
    return this.className
}


function init() {
    getData("buenos aires")
    //mainFunction("buenos aires")

    let near = document.querySelector(".near")
    let nearArr = Array.from(near.children)
    nearArr.forEach(element => element.addEventListener("click", nearCardsEvent))
}


function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = input.value 

    getData(inputVal)

    //mainFunction(inputVal) 
}



async function getData(inputVal){

try{
    let [response, response2] = await Promise.all([
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=${inputVal}&days=3`),
        fetch(`http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=${inputVal}&dt=2024-01-24`)
    ])

    if(!response.ok || !response2.ok){
        throw new Error("bad request")
    }

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

    ///ACAAAAAA///
    //let [weatherAndLocation, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory) 

 
     //triggerDataDisplay(weatherAndLocation, forecastArr, historyArr) 

   //return [dataForecast, dataHistory]
   dataHandler(dataForecast, dataHistory)

} catch(err){
    console.log(err)

    }  
} 



/* async function mainFunction (inputVal) {

    try{
        let [dataForecast, dataHistory] = await getData(inputVal)

        console.log("ave", dataForecast)
        console.log("ave", dataHistory)


       let [weatherAndLocation, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory)



        triggerDataDisplay(weatherAndLocation, forecastArr, historyArr)

     }
    catch(err) {
        console.log(err)
    }
   

} */


async function dataHandler(dataForecast, dataHistory){

    let [weatherAndLocation, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(weatherAndLocation, forecastArr, historyArr)


    //if()

}













let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3RDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2Q0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDhDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsK0NBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBVTtBQUNyRTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFZO0FBQ3ZFO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UTBDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURpQztBQUNqQztBQUMyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsaURBQVc7QUFDckUsVUFBVTtBQUNWO0FBQ0EseURBQXlELGlEQUFXO0FBQ3BFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpREFBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQVc7QUFDdEMsMkJBQTJCLGlEQUFXO0FBQ3RDLDJCQUEyQixpREFBVztBQUN0QywyQkFBMkIsaURBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaURBQVc7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzRDO0FBQzVDO0FBQ29CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBWTtBQUMxQjtBQUNBLDJCQUEyQixpQkFBaUIsSUFBSSxvQkFBb0I7QUFDcEUsMEJBQTBCLHlCQUF5QixHQUFHLDRCQUE0QjtBQUNsRjtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0MsOEJBQThCLHdCQUF3QjtBQUN0RCwwQkFBMEIsa0NBQWtDO0FBQzVEO0FBQ0E7QUFDQSwwQkFBMEIsa0NBQWtDO0FBQzVELGtDQUFrQyx1Q0FBdUM7QUFDekUsZ0NBQWdDLHFDQUFxQyxJQUFJLHFDQUFxQztBQUM5RztBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEUsc0NBQXNDLHVDQUF1QztBQUM3RSxvQ0FBb0MscUNBQXFDLElBQUkscUNBQXFDO0FBQ2xIO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFLDhCQUE4Qix1Q0FBdUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0JBQStCO0FBQ3pELGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdELHNDQUFzQyxvQ0FBb0M7QUFDMUU7QUFDQSwyQkFBMkIsY0FBYyxJQUFJLGlCQUFpQjtBQUM5RCxrQ0FBa0MsY0FBYztBQUNoRCxvQ0FBb0Msb0JBQW9CO0FBQ3hELHVDQUF1QyxpQkFBaUI7QUFDeEQsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLEdBQUcsb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQsMEJBQTBCLHFDQUFxQztBQUMvRDtBQUNBO0FBQ0EsOEJBQThCLHFDQUFxQztBQUNuRSwwQkFBMEIscUNBQXFDLElBQUkscUNBQXFDO0FBQ3hHO0FBQ0EsOEJBQThCLHFDQUFxQyxJQUFJLHFDQUFxQztBQUM1RyxrQ0FBa0MscUNBQXFDO0FBQ3ZFO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFLDhCQUE4Qix1Q0FBdUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9JMkQ7QUFDM0Q7QUFDaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQUc7QUFDMUI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSwwQkFBMEIsdUNBQUc7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx5QkFBeUIsdUNBQUc7QUFDNUI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUNBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUFJO0FBQ3JCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9FQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQm1EO0FBQ047QUFDQTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxTQUFTO0FBQzNHLGlHQUFpRyxTQUFTO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxrRUFBd0I7QUFDaEY7QUFDQSxJQUFJLDZEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VuSW1nIGZyb20gXCIuL2ltZy9zdW4tcy5zdmdcIlxyXG5pbXBvcnQgbW9vbkltZyBmcm9tIFwiLi9pbWcvbW9vbi1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlEYXlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeURheS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlOaWdodEltZyBmcm9tIFwiLi9pbWcvY2xvdWR5TmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgdGh1bmRlckltZyBmcm9tIFwiLi9pbWcvdGh1bmRlci1zLnN2Z1wiXHJcbmltcG9ydCBmb2dJbWcgZnJvbSBcIi4vaW1nL2ZvZy1zLnN2Z1wiXHJcbmltcG9ydCByYWluSW1nIGZyb20gXCIuL2ltZy9yYWluLXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5EYXlJbWcgZnJvbSBcIi4vaW1nL3JhaW5EYXktcy5zdmdcIlxyXG5pbXBvcnQgcmFpbk5pZ2h0SW1nIGZyb20gXCIuL2ltZy9yYWluTmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgc2xlZXRJbWcgZnJvbSBcIi4vaW1nL3NsZWV0LXMuc3ZnXCJcclxuaW1wb3J0IHNub3dJbWcgZnJvbSBcIi4vaW1nL3Nub3ctcy5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3Rvcn1cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuXHJcbiAgICAvLy8gVEVSTkFSWSBPUEVSQVRPUiAvLy9cclxuICAgIGxldCBuaWdodE9yRGF5ID0gaXNEYXkgPyBpY29uc09iai5kYXlBcnIoKSA6IGljb25zT2JqLm5pZ2h0QXJyKCk7XHJcblxyXG4gICAgbGV0IGltZyA9IFwiXCJcclxuXHJcbiAgLy8vIFRIRSBGSVJTVCBUSElORyBJIERJRCBXQVMgVFdPIExPT1BTLCBPTkUgRk9SIERBWSBBTkQgT1RIRVIgRk9SIE5JR0hULlxyXG4gIC8vLyBBV0ZVTC4gQU5EIEhFQVZJTFkgTkVTVEVELiAgXHJcblxyXG4gIC8qICAgaWYoIWlzRGF5KSB7XHJcbiAgICAgICAgbmlnaHRBcnIuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb21lKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBhcnJheVthcnJheS5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG4gICAgICAgLyogIGlmKGlzRGF5KSB7XHJcbiAgICAgICAgZGF5QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuXHJcblxyXG4gLy8vIFRIRU4gSSBUUlkgVE8gVVNFIEZPUiBPRiBMT09QUywgQkVDQVVTRSBJIFdBTlRFRCBUTyBCUkVBSyBUSEUgTE9PUCBXSEVOIEkgSEFWRSBUSEUgRUxFTUVOVCBJIFdBTlRFRCBcclxuXHJcbi8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodEFycil7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBkYXlBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcblxyXG4gICAgLy8vIEZJTkFMTFksIEkgRElETlQgV0FOVCBUTyBVU0UgMiBFUVVBTCBMT09QUywgU08gUkVTT0xWRUQgVE8gVVNFIEEgVEVSTkFSWSBPUEVSQVRPUiBBTkQgVEhFTiBBIFNJTkdMRSBMT09QLlxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBlYXN5Q2FyKGUpIHtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cFwiKSA/IFwidXBcIiA6IFwiZG93blwiXHJcblxyXG4gICAgaWYoZXZlbnQgPT09IFwidXBcIikge1xyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSAgXHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImRvd25cIikge1xyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG4gICAgYnRuVXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyVXAgKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBidG5Eb3duOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvd25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyRG93biAqL2Vhc3lDYXIpLFxyXG5cclxuICAgIHNsaWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxufVxyXG4gICAgICAgXHJcbiAgICAgXHJcblxyXG5cclxuXHJcbi8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIEJZIFRIRSBBUEkgKElUUyBQUk9QRVJUSUVTLCBWQUxVRVMsIEVUQykgLy8vXHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMgKGRhdGEsIGRhdGEyLCBkYXRhMyl7XHJcbiAgICBsZXQgaWRlbSA9IFtdXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkNVUlJFTlRcIiAvLy9cclxuICAgIGxldCBjdXJyZW50RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YS5jdXJyZW50KVxyXG4gICAgbGV0IGZvcmVjYXN0RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YTIuY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGN1cnJlbnRGaWx0ZXIuZm9yRWFjaCgocHJvcCkgPT57XHJcbiAgICAgICAgZm9yZWNhc3RGaWx0ZXIuZm9yRWFjaCgocHIpID0+e1xyXG4gICAgICAgICAgICBpZihwcm9wID09PSBwciApe1xyXG4gICAgICAgICAgICAgICAgaWRlbS5wdXNoKHByb3ApXHJcbiAgICAgICAgfX0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWRlbTpcIiwgaWRlbSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBsZXQgY2Fyb3VzZWwgPSB7XHJcbiAgICBcclxuICAgIHZhbDogMCxcclxuICAgIFxyXG4gICAgc2xpZGVyVXAoZSkge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSA0N1xyXG4gICAgXHJcbiAgICAgICAgaWYoY2Fyb3VzZWwudmFsID09PSAwIHx8IGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVyRG93bihlKSB7XHJcblxyXG4gICAgICAgbGV0IHZhbHVlID0gLTQ3IFxyXG5cclxuICAgICAgICBpZihlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuXHJcbiAgICB9XHJcbn0gKi8iLCJleHBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufVxyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuaXNDZWxzaXVzID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCB0aW1lKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmouc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy51diA9IG9iai51dixcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqLm5hbWUsXHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gb2JqLmNvdW50cnksXHJcbiAgICAgICAgdGhpcy5yZWdpb24gPSBvYmoucmVnaW9uXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3NldENhcmREYXRhfSBmcm9tIFwiLi9kb21cIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXl9XHJcblxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSA9IFwidG9kYXlcIil7XHJcblxyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gd2VhdGhlckFuZExvY2F0aW9uXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcbiAgICAvLyB0b2RheSBhbmQgY3VycmVudCBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzIC8vXHJcbiAgICByZW5kZXJQcmluY2lwYWwoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG4gICAgcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pXHJcbiAgICByZW5kZXJIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcbiAgICByZW5kZXJFeHRyYSh0b2RheSwgbG9jYXRpb24pXHJcblxyXG4gICBsZXQgY2hvc2VuRGF5ID0gXCJcIlxyXG5cclxuICAgc3dpdGNoKHRydWUpIHtcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ5ZXN0ZXJkYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0geWVzdGVyZGF5XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInRvbW9ycm93XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHRvbW9ycm93XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcImxhc3REYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gbGFzdERheVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgfVxyXG5cclxuICAgaWYoZGF5ICE9PSBcInRvZGF5XCIpIHtcclxuICAgICAgICByZW5kZXJQcmluY2lwYWwoY2hvc2VuRGF5LmRheSwgbG9jYXRpb24pXHJcbiAgICAgICAgcmVuZGVySG91cnMoY2hvc2VuRGF5LCBsb2NhdGlvbilcclxuICAgICAgICByZW5kZXJFeHRyYShjaG9zZW5EYXksIGxvY2F0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvdXJzKGZvcmVjYXN0LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpXHJcblxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHNsaWRlckNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBsZXQgaG91cnMgPSBmb3JlY2FzdC5ob3Vyc1xyXG5cclxuICAgIGhvdXJzLmZvckVhY2goIChob3VyLCBpKSA9PiB7XHJcbiAgICAgICAgaWYoaSA8IDEyKXtcclxuICAgICAgICAgICAgc2xpZGVyQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpXHJcbiAgICAgICAgfSBlbHNlIGlmKGkgPj0gMTIpe1xyXG5cclxuICAgICAgICAgICAgc2xpZGVyQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSkgIFxyXG4gICAgICAgIH0gICAgXHJcbiAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtcHJpbmNpcGFsXCIsIHdlYXRoZXIsIGxvY2F0aW9uKSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IG5lYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyQ29udGFpbmVyLmNoaWxkcmVuKVxyXG5cclxuICAgIG5lYXJBcnIuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIilcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcblxyXG4gICAgbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB5ZXN0ZXJkYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclsyXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB0b21vcnJvdy5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgbGFzdERheS5kYXksIGxvY2F0aW9uKSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGV4dHJhRGF0YSA9IGZvcmVjYXN0LmRheVxyXG5cclxuICAgIGxldCBleHRyYUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFcIilcclxuICAgIGV4dHJhQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZXh0cmFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWV4dHJhXCIsIGV4dHJhRGF0YSwgbG9jYXRpb24pKTtcclxufVxyXG4iLCJpbXBvcnQgeyBpY29uU2VsZWN0b3IgfSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiXHJcblxyXG5leHBvcnQge3NldENhcmREYXRhfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZCgpe1xyXG5cclxuICAgIGxldCBjYXJkID0gY3JlYXRlRWxlbWVudChcImFydGljbGVcIiwgXCJjYXJkXCIpXHJcbiAgICBcclxuICAgIGxldCBwbGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicGxhY2VcIilcclxuICAgIGxldCB0ZW1wID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wXCIpXHJcbiAgICBsZXQgdGVtcEZlZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBGZWVsXCIpXHJcbiAgICBsZXQgdGVtcE1pbk1heCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcE1pbk1heFwiKVxyXG4gICAgbGV0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRhdGVcIilcclxuICAgIGxldCBjbG91ZCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiY2xvdWRcIilcclxuICAgIGxldCBwcmVjaXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcFwiKVxyXG4gICAgbGV0IGh1bWlkaXR5ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJodW1pZGl0eVwiKVxyXG4gICAgbGV0IHRpbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRpbWVcIilcclxuICAgIGxldCBzbm93ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzbm93XCIpXHJcbiAgICBsZXQgd2luZCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwid2luZFwiKVxyXG4gICAgbGV0IHV2ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ1dlwiKVxyXG5cclxuICAgIGxldCBpbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaW1nXCIpXHJcbiAgICBsZXQgc3ViID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzdWJcIilcclxuXHJcbiAgIGxldCBjYXJkQXJyID0gW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl1cclxuXHJcbiAgIGNhcmRBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpfSlcclxuXHJcbiAgICByZXR1cm4ge2NhcmQsIGNhcmRBcnJ9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRDYXJkRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqKSB7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5jbG91ZH0gJWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLndpbmQpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudXY7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumBcclxuICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wQyl9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wQyl9wrpgO1xyXG4gICAgaWYoIXdlYXRoZXJPYmouaXNDZWxzaXVzKXsgXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgO1xyXG4gICAgICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wRil9wrpgO1xyXG4gICAgfSBcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcblxyXG5cclxuLyogZnVuY3Rpb24gY3VycmVudEhvdXJDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlcik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJUZXh0O1xyXG5cclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEMpfcK6YDtcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDX2ZlZWwpfcK6YFxyXG4gICAgaWYoIXdlYXRoZXIuaXNDZWxzaXVzKXtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wRl9mZWVsKX3CumB9O1xyXG5cclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gOyBcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYE51YmVzOiAke3dlYXRoZXIuY2xvdWR9JWA7XHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgcHJlY2lwOiAke3dlYXRoZXIucHJlY2lwVG90YWx9bW1gO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtZWRhZDogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGBzbm93ICR7d2VhdGhlci5zbm93Q2hhbmNlfSVgO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXIudGltZTtcclxuXHJcblxyXG4gICAgcmV0dXJuICBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxEYXlDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtkYXRlT2JqLCBmdWxsRGF5T2JqLCBmdWxsSG91cnNBcnJdID0gd2VhdGhlclxyXG4gICAgY29uc29sZS5sb2coZnVsbERheU9iailcclxuICAgIFxyXG4gICAgbGV0IGRhdGVGb3JtYXQgPSBgJHtkYXRlT2JqLnNsaWNlKDgpfS8ke2RhdGVPYmouc2xpY2UoNSwgNyl9YDtcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3RvcihmdWxsRGF5T2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoud2luZE1heCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gZnVsbERheU9iai51djtcclxuICAgIFxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wQyl9wrpgO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZighZnVsbERheU9iai5pc0NlbHNpdXMpeyBcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWluVGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLmF2Z1RlbXBGKX3CumB9O1xyXG5cclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtmdWxsRGF5T2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYoZnVsbERheU9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59ICovXHJcblxyXG5cclxuIiwiaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbiAoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSl7XHJcblxyXG4gICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcblxyXG4gICAgcmV0dXJuIFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXksIHJhd1RvZGF5QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlPYmogPSB7ZGF5OiB0b2RheURheSwgaG91cnM6IHRvZGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5LCByYXdUb21vcnJvd0Fyci5kYXRlKTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93T2JqID0ge2RheTogdG9tb3Jyb3dEYXksIGhvdXJzOiB0b21vcnJvd0hvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXksIHJhd0xhc3REYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheU9iaiA9IHtkYXk6IGxhc3REYXlEYXksIGhvdXJzOiBsYXN0RGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IFt0b2RheU9iaiwgdG9tb3Jyb3dPYmosIGxhc3REYXlPYmpdO1xyXG5cclxuICAgIHJldHVybiBmb3JlY2FzdEFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5T2JqID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHN9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCI7XHJcblxyXG5cclxubGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXHJcbmxldCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKVxyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1lbnUpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TWVudShlKSB7XHJcbiAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoZSkge1xyXG5cclxuICAgIGlmKCFuYXYuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tZW51XCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNsYXNzTmFtZSlcclxuICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGdldERhdGEoXCJidWVub3MgYWlyZXNcIilcclxuICAgIC8vbWFpbkZ1bmN0aW9uKFwiYnVlbm9zIGFpcmVzXCIpXHJcblxyXG4gICAgbGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyLmNoaWxkcmVuKVxyXG4gICAgbmVhckFyci5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVhckNhcmRzRXZlbnQpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlKXtcclxuXHJcbiAgICBpZihlLmtleSAhPT0gXCJFbnRlclwiKSB7cmV0dXJufVxyXG5cclxuICAgIGxldCBpbnB1dFZhbCA9IGlucHV0LnZhbHVlIFxyXG5cclxuICAgIGdldERhdGEoaW5wdXRWYWwpXHJcblxyXG4gICAgLy9tYWluRnVuY3Rpb24oaW5wdXRWYWwpIFxyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaW5wdXRWYWwpe1xyXG5cclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZGF5cz0zYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZHQ9MjAyNC0wMS0yNGApXHJcbiAgICBdKVxyXG5cclxuICAgIGlmKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UyLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcmVxdWVzdFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSGlzdG9yeSlcclxuXHJcbiAvKiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSkgKi9cclxuXHJcbiAgICAvLy9BQ0FBQUFBQS8vL1xyXG4gICAgLy9sZXQgW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpIFxyXG5cclxuIFxyXG4gICAgIC8vdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpIFxyXG5cclxuICAgLy9yZXR1cm4gW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldXHJcbiAgIGRhdGFIYW5kbGVyKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcblxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5cclxuXHJcbi8qIGFzeW5jIGZ1bmN0aW9uIG1haW5GdW5jdGlvbiAoaW5wdXRWYWwpIHtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgbGV0IFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XSA9IGF3YWl0IGdldERhdGEoaW5wdXRWYWwpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXZlXCIsIGRhdGFGb3JlY2FzdClcclxuICAgICAgICBjb25zb2xlLmxvZyhcImF2ZVwiLCBkYXRhSGlzdG9yeSlcclxuXHJcblxyXG4gICAgICAgbGV0IFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG5cclxuICAgICB9XHJcbiAgICBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgIFxyXG5cclxufSAqL1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCBbd2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24oZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkod2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxuXHJcblxyXG4gICAgLy9pZigpXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgZXggPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTExMTExMTExMTExMTExMTEmcT1sb25kb25cIlxyXG5cclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9