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

let carousel = {
    
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
}



let elements = {
    btnUp: document.querySelector(".up")
    .addEventListener("click", carousel.sliderUp),

    btnDown: document.querySelector(".down")
    .addEventListener("click", carousel.sliderDown),

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
        //this.localTime = obj.localtime,
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");






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

    renderExtra(forecastArr, location)
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

    slider.firstElementChild.innerHTML = ""
    slider.lastElementChild.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr


    let hours = today.hours

   hours.forEach( (hour, i) => {
        if(i < 12){
            slider.firstElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("aside", hour, location))
        } else if(i >= 12){

            slider.lastElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("aside", hour, location))  
        }
       
   })
}

// A VER LA NUEVA

/* function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(currentHourCard("principal", currentWeather, location))

} */

function renderPrincipal(weather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("principal", weather, location))

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
    let nearArr = Array.from(near.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    console.log("today", today)
    console.log("yesterday", yesterday)


    nearArr[0].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("near", yesterday.day, location))
    nearArr[1].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("near", today.day, location))
    nearArr[2].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("near", tomorrow.day, location))
    nearArr[3].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("near", lastDay.day, location))
}




function renderExtra(forecastArr, location){

    let [today, tomorrow, lastDay] = forecastArr

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("extra", today.day, location));

}

/* function eventDisplayListener(e){

    let target = e.target



} */


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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");

/* import {test, getCurrentWeather, getLocation, getForecastHours, getForecastData, getHistoryData} from "./objects"; */







window.addEventListener("load", init)
let input = document.querySelector("input")
input.addEventListener("keydown", getInputValue)


function nearCardsEvent(e) {
    console.log(this)
}

function init() {
    getData("buenos aires")

    let near = document.querySelector(".near")
    let nearArr = Array.from(near.children)
    nearArr.forEach(element => element.addEventListener("click", nearCardsEvent))
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
        fetch(`http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=${inputVal}&dt=2024-01-24`)
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

    console.log(forecastArr)

    return [weatherAndLocation, forecastArr, historyArr]

}


function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;
    let rawLocation = obj.location

    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

 /*    let todayDate = rawTodayArr.date;
    let todayDay = new Day(rawTodayArr.day);
    let todayHoursArr = getHours(rawTodayArr);
    let todayArr = [todayDate, todayDay, todayHoursArr]; */

    let todayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawTodayArr.day, rawTodayArr.date);
    let todayHoursArr = getHours(rawTodayArr);
    let todayArr = {day: todayDay, hours: todayHoursArr};

/*     let tomorrowDate = rawTomorrowArr.date;
    let tomorrowDay = new Day(rawTomorrowArr.day);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowArr = [tomorrowDate, tomorrowDay, tomorrowHoursArr]; */
    let tomorrowDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawTomorrowArr.day, rawTomorrowArr.date);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowArr = {day: tomorrowDay, hours: tomorrowHoursArr};

    let lastDayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawLastDayArr.day, rawLastDayArr.date);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayArr = {day: lastDayDay, hours: lastDayHoursArr};

    let forecastArr = [todayArr, tomorrowArr, lastDayArr];

    return forecastArr
}

function getHistoryData(obj) {

    let [rawYesterdayArr] = obj.forecast.forecastday

    let yesterdayDay = new _class__WEBPACK_IMPORTED_MODULE_1__.Day(rawYesterdayArr.day, rawYesterdayArr.date )
    yesterdayDay.isHistory = true;
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayArr = {day: yesterdayDay, hours: yesterdayHoursArr}

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDJCO0FBQ29DO0FBQy9EO0FBQzJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpREFBVztBQUM1RCxVQUFVO0FBQ1Y7QUFDQSxnREFBZ0QsaURBQVc7QUFDM0Q7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRyxpR0FBaUcsU0FBUztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtFQUF3QjtBQUMvRTtBQUNBO0FBQ0EsSUFBSSw2REFBa0I7QUFDdEI7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNOEM7QUFDYTtBQUMzRDtBQUNBLFdBQVcsdUVBQXVFO0FBQ2pEO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSx1QkFBdUIsdUNBQUc7QUFDMUI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckUsMEJBQTBCLHVDQUFHO0FBQzdCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EseUJBQXlCLHVDQUFHO0FBQzVCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVDQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3Q0FBSTtBQUNyQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdW5JbWcgZnJvbSBcIi4vaW1nL3N1bi1zLnN2Z1wiXHJcbmltcG9ydCBtb29uSW1nIGZyb20gXCIuL2ltZy9tb29uLXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5LXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeURheUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5RGF5LXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeU5pZ2h0SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlOaWdodC1zLnN2Z1wiXHJcbmltcG9ydCB0aHVuZGVySW1nIGZyb20gXCIuL2ltZy90aHVuZGVyLXMuc3ZnXCJcclxuaW1wb3J0IGZvZ0ltZyBmcm9tIFwiLi9pbWcvZm9nLXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5JbWcgZnJvbSBcIi4vaW1nL3JhaW4tcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkRheUltZyBmcm9tIFwiLi9pbWcvcmFpbkRheS1zLnN2Z1wiXHJcbmltcG9ydCByYWluTmlnaHRJbWcgZnJvbSBcIi4vaW1nL3JhaW5OaWdodC1zLnN2Z1wiXHJcbmltcG9ydCBzbGVldEltZyBmcm9tIFwiLi9pbWcvc2xlZXQtcy5zdmdcIlxyXG5pbXBvcnQgc25vd0ltZyBmcm9tIFwiLi9pbWcvc25vdy1zLnN2Z1wiXHJcblxyXG5cclxuZXhwb3J0IHtjb21wYXJlT2JqZWN0cywgaWNvblNlbGVjdG9yfVxyXG5cclxuXHJcbi8vLyBBUlJBWVMgT0JKRUNUIEZPUiBJQ09OIENPTVBBUklUSU9OIC8vL1xyXG5cclxubGV0IGljb25zT2JqID0ge1xyXG5cclxuICAgIHNub3c6IFtcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsIFwiQmxvd2luZyBzbm93XCIsIFwiQmxpenphcmRcIiwgXCJQYXRjaHkgbGlnaHQgc25vd1wiLCBcIkxpZ2h0IHNub3dcIiwgXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIiwgXCJNb2RlcmF0ZSBzbm93XCIsIFwiUGF0Y2h5IGhlYXZ5IHNub3dcIiwgXCJIZWF2eSBzbm93XCIsIFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsIHNub3dJbWddLFxyXG5cclxuICAgIHNsZWV0OiBbXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIiwgXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsIFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgICAgICBcIkZyZWV6aW5nIGRyaXp6bGVcIiwgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICAgICAgXCJMaWdodCBzbGVldFwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsIFwiSWNlIHBlbGxldHNcIiwgXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLCBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBzbGVldEltZ10sXHJcblxyXG4gICAgdGh1bmRlcjogW1wiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICAgICAgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLCB0aHVuZGVySW1nXSxcclxuXHJcbiAgICBmb2c6IFtcIk1pc3RcIiwgXCJGb2dcIiwgXCJGcmVlemluZyBmb2dcIiwgZm9nSW1nXSxcclxuXHJcbiAgICByYWluOiBbXCJMaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpblwiLCBcIkhlYXZ5IHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLCBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICAgICAgcmFpbkltZ10sXHJcbiAgICBcclxuICAgIGNsb3VkeTogW1wiQ2xvdWR5XCIsIFwiT3ZlcmNhc3RcIiwgY2xvdWR5SW1nXSxcclxuXHJcbiAgICBzdW46IFtcIlN1bm55XCIsIHN1bkltZ10sXHJcblxyXG4gICAgbW9vbjogW1wiQ2xlYXJcIiwgbW9vbkltZ10sXHJcblxyXG4gICAgcmFpbkRheTogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCByYWluRGF5SW1nXSxcclxuXHJcbiAgICByYWluTmlnaHQ6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgcmFpbk5pZ2h0SW1nXSxcclxuXHJcbiAgICBjbG91ZHlEYXk6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5RGF5SW1nXSxcclxuXHJcbiAgICBjbG91ZHlOaWdodDogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlOaWdodEltZ10sXHJcblxyXG4gICAgZGF5QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN1biwgdGhpcy5yYWluRGF5LCB0aGlzLmNsb3VkeURheSwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdXHJcbiAgICB9LFxyXG5cclxuICAgIG5pZ2h0QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLm1vb24sIHRoaXMucmFpbk5pZ2h0LCB0aGlzLmNsb3VkeU5pZ2h0LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF0gXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGljb25TZWxlY3RvcihvYmope1xyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLndlYXRoZXJUZXh0O1xyXG4gICAgbGV0IGlzRGF5ID0gb2JqLmlzRGF5IFxyXG5cclxuICAgIC8vLyBURVJOQVJZIE9QRVJBVE9SIC8vL1xyXG4gICAgbGV0IG5pZ2h0T3JEYXkgPSBpc0RheSA/IGljb25zT2JqLmRheUFycigpIDogaWNvbnNPYmoubmlnaHRBcnIoKTtcclxuXHJcbiAgICBsZXQgaW1nID0gXCJcIlxyXG5cclxuICAvLy8gVEhFIEZJUlNUIFRISU5HIEkgRElEIFdBUyBUV08gTE9PUFMsIE9ORSBGT1IgREFZIEFORCBPVEhFUiBGT1IgTklHSFQuXHJcbiAgLy8vIEFXRlVMLiBBTkQgSEVBVklMWSBORVNURUQuICBcclxuXHJcbiAgLyogICBpZighaXNEYXkpIHtcclxuICAgICAgICBuaWdodEFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcbiAgICAgICAvKiAgaWYoaXNEYXkpIHtcclxuICAgICAgICBkYXlBcnIuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb21lKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBhcnJheVthcnJheS5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAvLy8gVEhFTiBJIFRSWSBUTyBVU0UgRk9SIE9GIExPT1BTLCBCRUNBVVNFIEkgV0FOVEVEIFRPIEJSRUFLIFRIRSBMT09QIFdIRU4gSSBIQVZFIFRIRSBFTEVNRU5UIEkgV0FOVEVEIFxyXG5cclxuLyogICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogICAgIGZvciAoY29uc3QgYXJyIG9mIGRheUFycil7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICAvLy8gRklOQUxMWSwgSSBESUROVCBXQU5UIFRPIFVTRSAyIEVRVUFMIExPT1BTLCBTTyBSRVNPTFZFRCBUTyBVU0UgQSBURVJOQVJZIE9QRVJBVE9SIEFORCBUSEVOIEEgU0lOR0xFIExPT1AuXHJcblxyXG4gICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRPckRheSl7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbWdcclxufSBcclxuXHJcbmxldCBjYXJvdXNlbCA9IHtcclxuICAgIFxyXG4gICAgdmFsOiAwLFxyXG4gICAgXHJcbiAgICBzbGlkZXJVcChlKSB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDQ3XHJcbiAgICBcclxuICAgICAgICBpZihjYXJvdXNlbC52YWwgPT09IDAgfHwgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9uY2VcIikpIHtyZXR1cm59XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJvbmNlXCIpXHJcblxyXG4gICAgICAgIGNhcm91c2VsLnZhbCArPSB2YWx1ZVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtjYXJvdXNlbC52YWx9cmVtYFxyXG4gICAgfSxcclxuXHJcbiAgICBzbGlkZXJEb3duKGUpIHtcclxuXHJcbiAgICAgICBsZXQgdmFsdWUgPSAtNDcgXHJcblxyXG4gICAgICAgIGlmKGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9uY2VcIikpIHtyZXR1cm59XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJvbmNlXCIpXHJcblxyXG4gICAgICAgIGNhcm91c2VsLnZhbCArPSB2YWx1ZVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtjYXJvdXNlbC52YWx9cmVtYFxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcbiAgICBidG5VcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbC5zbGlkZXJVcCksXHJcblxyXG4gICAgYnRuRG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcm91c2VsLnNsaWRlckRvd24pLFxyXG5cclxuICAgIHNsaWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxufVxyXG4gICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgQlkgVEhFIEFQSSAoSVRTIFBST1BFUlRJRVMsIFZBTFVFUywgRVRDKSAvLy9cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5hdmdIdW1pZGl0eSA9IG9iai5hdmdodW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoubWF4d2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai50b3RhbHByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLnByZWNpcENoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai50b3RhbHNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMudXYgPSBvYmoudXYsXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gdHJ1ZSxcclxuICAgICAgICB0aGlzLmlzSGlzdG9yeSA9IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuaXNDZWxzaXVzID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIC8vdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuXCJcclxuaW1wb3J0IHtjdXJyZW50SG91ckNhcmQsIGZ1bGxEYXlDYXJkLCBzZXRDYXJkRGF0YX0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKXtcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSB3ZWF0aGVyQW5kTG9jYXRpb25cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgLy8gZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuICAgIHJlbmRlclByaW5jaXBhbChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pXHJcblxyXG4vKiAgICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh5ZXN0ZXJkYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b21vcnJvdylcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QobGFzdERheSkgKi9cclxuXHJcbiAgICByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SG91cnMoZm9yZWNhc3RBcnIsIGxvY2F0aW9uKVxyXG5cclxuICAgIHJlbmRlckV4dHJhKGZvcmVjYXN0QXJyLCBsb2NhdGlvbilcclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pIHtcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGhpc3RvcnlPckZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGhpc3RvcnlPckZvcmVjYXN0KSlcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJzKGZvcmVjYXN0QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgLyogbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpICovXHJcbiAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxuXHJcbiAgICBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcblxyXG5cclxuICAgIGxldCBob3VycyA9IHRvZGF5LmhvdXJzXHJcblxyXG4gICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcbiAgICAgICAgICAgIHNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgICAgICB9IGVsc2UgaWYoaSA+PSAxMil7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSkgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICB9KVxyXG59XHJcblxyXG4vLyBBIFZFUiBMQSBOVUVWQVxyXG5cclxuLyogZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhcImEgdmVyIGNvbW8gZnVuY2FcIilcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbCh3ZWF0aGVyLCBsb2NhdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhcImEgdmVyIGNvbW8gZnVuY2FcIilcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcInByaW5jaXBhbFwiLCB3ZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIEEgVkVSIExBIE5VRVZBXHJcblxyXG5cclxuLyogZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycil7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5lYXIgY2hlZWVcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHllc3RlcmRheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b2RheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b21vcnJvdykpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBsYXN0RGF5KSlcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhci5jaGlsZHJlbilcclxuXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVySFRNTCA9IFwiXCIpXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2RheVwiLCB0b2RheSlcclxuICAgIGNvbnNvbGUubG9nKFwieWVzdGVyZGF5XCIsIHllc3RlcmRheSlcclxuXHJcblxyXG4gICAgbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcIm5lYXJcIiwgeWVzdGVyZGF5LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclsxXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcIm5lYXJcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwibmVhclwiLCB0b21vcnJvdy5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJuZWFyXCIsIGxhc3REYXkuZGF5LCBsb2NhdGlvbikpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuXHJcbiAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhXCIpXHJcbiAgICBleHRyYS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGV4dHJhLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiZXh0cmFcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbikpO1xyXG5cclxufVxyXG5cclxuLyogZnVuY3Rpb24gZXZlbnREaXNwbGF5TGlzdGVuZXIoZSl7XHJcblxyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XHJcblxyXG5cclxuXHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtzZXRDYXJkRGF0YX1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIFwiY2FyZFwiKVxyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInBsYWNlXCIpXHJcbiAgICBsZXQgdGVtcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcFwiKVxyXG4gICAgbGV0IHRlbXBGZWVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wRmVlbFwiKVxyXG4gICAgbGV0IHRlbXBNaW5NYXggPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBNaW5NYXhcIilcclxuICAgIGxldCBkYXRlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXRlXCIpXHJcbiAgICBsZXQgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNsb3VkXCIpXHJcbiAgICBsZXQgcHJlY2lwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBcIilcclxuICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiaHVtaWRpdHlcIilcclxuICAgIGxldCB0aW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0aW1lXCIpXHJcbiAgICBsZXQgc25vdyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic25vd1wiKVxyXG4gICAgbGV0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndpbmRcIilcclxuICAgIGxldCB1diA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXZcIilcclxuXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImltZ1wiKVxyXG4gICAgbGV0IHN1YiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic3ViXCIpXHJcblxyXG4gICBsZXQgY2FyZEFyciA9IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdXHJcblxyXG4gICBjYXJkQXJyLmZvckVhY2goZWxlbWVudCA9PiB7Y2FyZC5hcHBlbmRDaGlsZChlbGVtZW50KX0pXHJcblxyXG4gICAgcmV0dXJuIHtjYXJkLCBjYXJkQXJyfVxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gY3VycmVudEhvdXJDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlcik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJUZXh0O1xyXG5cclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEMpfcK6YDtcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDX2ZlZWwpfcK6YFxyXG4gICAgaWYoIXdlYXRoZXIuaXNDZWxzaXVzKXtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wRl9mZWVsKX3CumB9O1xyXG5cclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gOyBcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYE51YmVzOiAke3dlYXRoZXIuY2xvdWR9JWA7XHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgcHJlY2lwOiAke3dlYXRoZXIucHJlY2lwVG90YWx9bW1gO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtZWRhZDogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGBzbm93ICR7d2VhdGhlci5zbm93Q2hhbmNlfSVgO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXIudGltZTtcclxuXHJcblxyXG4gICAgcmV0dXJuICBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxEYXlDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtkYXRlT2JqLCBmdWxsRGF5T2JqLCBmdWxsSG91cnNBcnJdID0gd2VhdGhlclxyXG4gICAgY29uc29sZS5sb2coZnVsbERheU9iailcclxuICAgIFxyXG4gICAgbGV0IGRhdGVGb3JtYXQgPSBgJHtkYXRlT2JqLnNsaWNlKDgpfS8ke2RhdGVPYmouc2xpY2UoNSwgNyl9YDtcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3RvcihmdWxsRGF5T2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoud2luZE1heCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gZnVsbERheU9iai51djtcclxuICAgIFxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wQyl9wrpgO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZighZnVsbERheU9iai5pc0NlbHNpdXMpeyBcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWluVGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLmF2Z1RlbXBGKX3CumB9O1xyXG5cclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtmdWxsRGF5T2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYoZnVsbERheU9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59ICovXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q2FyZERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaikge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbk9iai5uYW1lfSwgJHtsb2NhdGlvbk9iai5jb3VudHJ5fWA7IFxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcENfZmVlbCl9wrpgXHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCF3ZWF0aGVyT2JqLmlzQ2Vsc2l1cyl7IFxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YDtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKHdlYXRoZXJPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5cclxuIiwiXHJcbi8qIGltcG9ydCB7dGVzdCwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldExvY2F0aW9uLCBnZXRGb3JlY2FzdEhvdXJzLCBnZXRGb3JlY2FzdERhdGEsIGdldEhpc3RvcnlEYXRhfSBmcm9tIFwiLi9vYmplY3RzXCI7ICovXHJcbmltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHN9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7Y3VycmVudEhvdXJDYXJkLCBmdWxsRGF5Q2FyZH0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCI7XHJcblxyXG5leHBvcnQge2dldERhdGF9XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdClcclxubGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGdldElucHV0VmFsdWUpXHJcblxyXG5cclxuZnVuY3Rpb24gbmVhckNhcmRzRXZlbnQoZSkge1xyXG4gICAgY29uc29sZS5sb2codGhpcylcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGdldERhdGEoXCJidWVub3MgYWlyZXNcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXIuY2hpbGRyZW4pXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWFyQ2FyZHNFdmVudCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZSl7XHJcblxyXG4gICAgaWYoZS5rZXkgIT09IFwiRW50ZXJcIikge3JldHVybn1cclxuXHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gaW5wdXQudmFsdWVcclxuXHJcbiAgICBnZXREYXRhKGlucHV0VmFsKVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5sZXQgZXggPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTExMTExMTExMTExMTExMTEmcT1sb25kb25cIlxyXG5cclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpbnB1dFZhbCl7XHJcblxyXG4gICAgY29uc29sZS5sb2coaW5wdXRWYWwpXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmRheXM9M2ApLFxyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmR0PTIwMjQtMDEtMjRgKVxyXG4gICAgXSlcclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUZvcmVjYXN0KVxyXG4gICAgY29uc29sZS5sb2coZGF0YUhpc3RvcnkpXHJcblxyXG4gLyogICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpICovXHJcblxyXG4gICBsZXQgW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG4gXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkod2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxuXHJcbn0gY2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9ICBcclxufSBcclxuXHJcblxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFN0cnVjdHVyZWREYXRhKGFycmF5KXtcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRBbmRMb2NhdGlvbkFyciwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gYXJyYXlcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRBbmRMb2NhdGlvbkFycilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBjdXJyZW50QW5kTG9jYXRpb25BcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvdylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0RGF5KVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcbiAgICBjb25zb2xlLmxvZyh5ZXN0ZXJkYXkpXHJcblxyXG4gICAgLyogZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcblxyXG4gICAgZGlzcGxheU1hbmFnZXIoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uLCB5ZXN0ZXJkYXksIHRvZGF5LCB0b21vcnJvdywgbGFzdERheSlcclxuXHJcbn0gKi9cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFN0cnVjdHVyZWRGb3JlY2FzdCAoYXJyKXtcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBhcnJcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2RheSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0b21vcnJvdylcclxuICAgICAgICBjb25zb2xlLmxvZyhsYXN0RGF5KVxyXG4gICAgXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b2RheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b21vcnJvdykpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBsYXN0RGF5KSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2RheVsyXSlcclxuICAgIC8vYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKHRvZGF5WzJdKSlcclxuXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkSGlzdG9yeShhcnIpIHtcclxuICAgIGxldCB5ID0gYXJyXHJcbiAgICBjb25zb2xlLmxvZyh5KVxyXG4gICAgbGV0IGNoaWxkID0gbmVhci5maXJzdEVsZW1lbnRDaGlsZFxyXG4gICAgY29uc29sZS5sb2coY2hpbGQpXHJcbiAgICBuZWFyLmluc2VydEJlZm9yZShmdWxsRGF5Q2FyZChcIm5lYXJcIiwgeSksIGNoaWxkKVxyXG59ICovXHJcblxyXG4vKiBmdW5jdGlvbiBnZXRXZWF0aGVyQW5kTG9jYXRpb24oYXJyKXtcclxuICAgIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IGFyclxyXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpXHJcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpIFxyXG59ICovXHJcblxyXG4vKiBmdW5jdGlvbiBkaXNwbGF5TWFuYWdlcihjdXJyZW50V2VhdGhlciwgbG9jYXRpb24sIHllc3RlcmRheSwgdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5KXtcclxuXHJcbiAgICBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoeWVzdGVyZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b2RheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9tb3Jyb3cpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGxhc3REYXkpXHJcblxyXG4gICAgZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pIHtcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGhpc3RvcnlPckZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGhpc3RvcnlPckZvcmVjYXN0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpXHJcblxyXG4gICAgbGV0IGhvdXJzID0gdG9kYXkuc3BsaWNlKClcclxuXHJcbiAgICBsZXQgaG91cnN0ZXN0ID0gW2hvdXJzWzBdLCBob3Vyc1sxXSwgaG91cnNbMl0sIGhvdXJzWzNdLCBob3Vyc1s0XSwgaG91cnNbNV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnNbNl0sIGhvdXJzWzddLCBob3Vyc1s4XV1cclxuXHJcbiAgIGhvdXJzdGVzdC5mb3JFYWNoKCBob3VyID0+IHtcclxuICAgICAgICBhc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJhc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpXHJcbiAgIH0pXHJcblxyXG5cclxuICAgIC8vYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKCkpXHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcbi8vZ2V0RGF0YSgpXHJcblxyXG4iLCJpbXBvcnQge2dldERhdGEsIGdldElucHV0VmFsdWV9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuLyogZXhwb3J0IHt0ZXN0LCBnZXRMb2NhdGlvbiwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldEZvcmVjYXN0RGF0YSwgZ2V0SGlzdG9yeURhdGF9ICovXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufVxyXG5cclxubGV0IHRlc3QgPSB7XHJcbiAgICBoaXN0b3J5OiBcImxhc3QgNyBkYXlzXCIsXHJcbiAgICBmb3JlY2FzdDogXCJ1cCB0byAzIGRheXMgXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uIChkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KXtcclxuXHJcbiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuXHJcbiAgICByZXR1cm4gW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdGb3JlY2FzdEFyciA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheTtcclxuICAgIGxldCByYXdMb2NhdGlvbiA9IG9iai5sb2NhdGlvblxyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuIC8qICAgIGxldCB0b2RheURhdGUgPSByYXdUb2RheUFyci5kYXRlO1xyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXkpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlBcnIgPSBbdG9kYXlEYXRlLCB0b2RheURheSwgdG9kYXlIb3Vyc0Fycl07ICovXHJcblxyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXksIHJhd1RvZGF5QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlBcnIgPSB7ZGF5OiB0b2RheURheSwgaG91cnM6IHRvZGF5SG91cnNBcnJ9O1xyXG5cclxuLyogICAgIGxldCB0b21vcnJvd0RhdGUgPSByYXdUb21vcnJvd0Fyci5kYXRlO1xyXG4gICAgbGV0IHRvbW9ycm93RGF5ID0gbmV3IERheShyYXdUb21vcnJvd0Fyci5kYXkpO1xyXG4gICAgbGV0IHRvbW9ycm93SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb21vcnJvd0Fycik7XHJcbiAgICBsZXQgdG9tb3Jyb3dBcnIgPSBbdG9tb3Jyb3dEYXRlLCB0b21vcnJvd0RheSwgdG9tb3Jyb3dIb3Vyc0Fycl07ICovXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSwgcmF3VG9tb3Jyb3dBcnIuZGF0ZSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd0FyciA9IHtkYXk6IHRvbW9ycm93RGF5LCBob3VyczogdG9tb3Jyb3dIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGxhc3REYXlEYXkgPSBuZXcgRGF5KHJhd0xhc3REYXlBcnIuZGF5LCByYXdMYXN0RGF5QXJyLmRhdGUpO1xyXG4gICAgbGV0IGxhc3REYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd0xhc3REYXlBcnIpO1xyXG4gICAgbGV0IGxhc3REYXlBcnIgPSB7ZGF5OiBsYXN0RGF5RGF5LCBob3VyczogbGFzdERheUhvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBbdG9kYXlBcnIsIHRvbW9ycm93QXJyLCBsYXN0RGF5QXJyXTtcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IHllc3RlcmRheURheSA9IG5ldyBEYXkocmF3WWVzdGVyZGF5QXJyLmRheSwgcmF3WWVzdGVyZGF5QXJyLmRhdGUgKVxyXG4gICAgeWVzdGVyZGF5RGF5LmlzSGlzdG9yeSA9IHRydWU7XHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheUFyciA9IHtkYXk6IHllc3RlcmRheURheSwgaG91cnM6IHllc3RlcmRheUhvdXJzQXJyfVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCBkYXRlID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGVcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIsIGRhdGUpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggKGhvdXIpID0+IHtcclxuICAgICAgICBsZXQgZGF0ZSA9IGhvdXIudGltZS5zbGljZSgwLCAxMClcclxuICAgICAgICBsZXQgdGltZSA9IGhvdXIudGltZS5zbGljZSgxMSlcclxuICAgICAgcmV0dXJuIG5ldyBIb3VyKGhvdXIsIGRhdGUsIHRpbWUpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==