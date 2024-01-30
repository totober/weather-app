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
            slider.firstElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-aside", hour, location))
        } else if(i >= 12){

            slider.lastElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-aside", hour, location))  
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

    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-principal", weather, location))

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


    nearArr[0].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-near", yesterday.day, location))
    nearArr[1].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-near", today.day, location))
    nearArr[2].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-near", tomorrow.day, location))
    nearArr[3].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-near", lastDay.day, location))
}




function renderExtra(forecastArr, location){

    let [today, tomorrow, lastDay] = forecastArr

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.setCardData)("card-extra", today.day, location));

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

let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")

btnMenu.addEventListener("click", (e) => {

    btnMenu.nextElementSibling.classList.toggle("show-menu")
console.log(e)
})

window.addEventListener("click", (e) => {

    if(!nav.contains(e.target)){
        btnMenu.nextElementSibling.classList.remove("show-menu")
    }
})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3RDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2Q0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDhDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsK0NBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBVTtBQUNyRTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFZO0FBQ3ZFO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUjRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0QyQjtBQUNvQztBQUMvRDtBQUMyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaURBQVc7QUFDNUQsVUFBVTtBQUNWO0FBQ0EsZ0RBQWdELGlEQUFXO0FBQzNEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNOO0FBQ007QUFDTjtBQUM3QztBQUNnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRyxpR0FBaUcsU0FBUztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtFQUF3QjtBQUMvRTtBQUNBO0FBQ0EsSUFBSSw2REFBa0I7QUFDdEI7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk44QztBQUNhO0FBQzNEO0FBQ0EsV0FBVyx1RUFBdUU7QUFDakQ7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBLHVCQUF1Qix1Q0FBRztBQUMxQjtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRSwwQkFBMEIsdUNBQUc7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx5QkFBeUIsdUNBQUc7QUFDNUI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUNBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUFJO0FBQ3JCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcblxyXG5leHBvcnQge2NvbXBhcmVPYmplY3RzLCBpY29uU2VsZWN0b3J9XHJcblxyXG5cclxuLy8vIEFSUkFZUyBPQkpFQ1QgRk9SIElDT04gQ09NUEFSSVRJT04gLy8vXHJcblxyXG5sZXQgaWNvbnNPYmogPSB7XHJcblxyXG4gICAgc25vdzogW1wiUGF0Y2h5IHNub3cgcG9zc2libGVcIiwgXCJCbG93aW5nIHNub3dcIiwgXCJCbGl6emFyZFwiLCBcIlBhdGNoeSBsaWdodCBzbm93XCIsIFwiTGlnaHQgc25vd1wiLCBcclxuICAgICAgICAgICAgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLCBcIk1vZGVyYXRlIHNub3dcIiwgXCJQYXRjaHkgaGVhdnkgc25vd1wiLCBcIkhlYXZ5IHNub3dcIiwgXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiwgc25vd0ltZ10sXHJcblxyXG4gICAgc2xlZXQ6IFtcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLCBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIiwgXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgICAgIFwiRnJlZXppbmcgZHJpenpsZVwiLCBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIiwgXCJMaWdodCBmcmVlemluZyByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgICAgICBcIkxpZ2h0IHNsZWV0XCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIiwgXCJJY2UgcGVsbGV0c1wiLCBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIHNsZWV0SW1nXSxcclxuXHJcbiAgICB0aHVuZGVyOiBbXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsIHRodW5kZXJJbWddLFxyXG5cclxuICAgIGZvZzogW1wiTWlzdFwiLCBcIkZvZ1wiLCBcIkZyZWV6aW5nIGZvZ1wiLCBmb2dJbWddLFxyXG5cclxuICAgIHJhaW46IFtcIkxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluXCIsIFwiSGVhdnkgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgICAgICByYWluSW1nXSxcclxuICAgIFxyXG4gICAgY2xvdWR5OiBbXCJDbG91ZHlcIiwgXCJPdmVyY2FzdFwiLCBjbG91ZHlJbWddLFxyXG5cclxuICAgIHN1bjogW1wiU3VubnlcIiwgc3VuSW1nXSxcclxuXHJcbiAgICBtb29uOiBbXCJDbGVhclwiLCBtb29uSW1nXSxcclxuXHJcbiAgICByYWluRGF5OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5EYXlJbWddLFxyXG5cclxuICAgIHJhaW5OaWdodDogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCBcIlBhdGNoeSByYWluIG5lYXJieVwiLCByYWluTmlnaHRJbWddLFxyXG5cclxuICAgIGNsb3VkeURheTogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlEYXlJbWddLFxyXG5cclxuICAgIGNsb3VkeU5pZ2h0OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeU5pZ2h0SW1nXSxcclxuXHJcbiAgICBkYXlBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuc3VuLCB0aGlzLnJhaW5EYXksIHRoaXMuY2xvdWR5RGF5LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF1cclxuICAgIH0sXHJcblxyXG4gICAgbmlnaHRBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubW9vbiwgdGhpcy5yYWluTmlnaHQsIHRoaXMuY2xvdWR5TmlnaHQsIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XSBcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuICAgIGNvbnNvbGUubG9nKGlzRGF5KVxyXG5cclxuICAgIC8vLyBURVJOQVJZIE9QRVJBVE9SIC8vL1xyXG4gICAgbGV0IG5pZ2h0T3JEYXkgPSBpc0RheSA/IGljb25zT2JqLmRheUFycigpIDogaWNvbnNPYmoubmlnaHRBcnIoKTtcclxuXHJcbiAgICBsZXQgaW1nID0gXCJcIlxyXG5cclxuICAvLy8gVEhFIEZJUlNUIFRISU5HIEkgRElEIFdBUyBUV08gTE9PUFMsIE9ORSBGT1IgREFZIEFORCBPVEhFUiBGT1IgTklHSFQuXHJcbiAgLy8vIEFXRlVMLiBBTkQgSEVBVklMWSBORVNURUQuICBcclxuXHJcbiAgLyogICBpZighaXNEYXkpIHtcclxuICAgICAgICBuaWdodEFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcbiAgICAgICAvKiAgaWYoaXNEYXkpIHtcclxuICAgICAgICBkYXlBcnIuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb21lKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBhcnJheVthcnJheS5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAvLy8gVEhFTiBJIFRSWSBUTyBVU0UgRk9SIE9GIExPT1BTLCBCRUNBVVNFIEkgV0FOVEVEIFRPIEJSRUFLIFRIRSBMT09QIFdIRU4gSSBIQVZFIFRIRSBFTEVNRU5UIEkgV0FOVEVEIFxyXG5cclxuLyogICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG4gICAgLyogICAgIGZvciAoY29uc3QgYXJyIG9mIGRheUFycil7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICAvLy8gRklOQUxMWSwgSSBESUROVCBXQU5UIFRPIFVTRSAyIEVRVUFMIExPT1BTLCBTTyBSRVNPTFZFRCBUTyBVU0UgQSBURVJOQVJZIE9QRVJBVE9SIEFORCBUSEVOIEEgU0lOR0xFIExPT1AuXHJcblxyXG4gICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRPckRheSl7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuXHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbWdcclxufSBcclxuXHJcbmZ1bmN0aW9uIGVhc3lDYXIoZSkge1xyXG5cclxuICAgIGxldCBldmVudCA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInVwXCIpID8gXCJ1cFwiIDogXCJkb3duXCJcclxuXHJcbiAgICBpZihldmVudCA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpICBcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgIH0gXHJcbn1cclxuXHJcbi8qIGxldCBjYXJvdXNlbCA9IHtcclxuICAgIFxyXG4gICAgdmFsOiAwLFxyXG4gICAgXHJcbiAgICBzbGlkZXJVcChlKSB7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDQ3XHJcbiAgICBcclxuICAgICAgICBpZihjYXJvdXNlbC52YWwgPT09IDAgfHwgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9uY2VcIikpIHtyZXR1cm59XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJvbmNlXCIpXHJcblxyXG4gICAgICAgIGNhcm91c2VsLnZhbCArPSB2YWx1ZVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtjYXJvdXNlbC52YWx9cmVtYFxyXG4gICAgfSxcclxuXHJcbiAgICBzbGlkZXJEb3duKGUpIHtcclxuXHJcbiAgICAgICBsZXQgdmFsdWUgPSAtNDcgXHJcblxyXG4gICAgICAgIGlmKGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm9uY2VcIikpIHtyZXR1cm59XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJvbmNlXCIpXHJcblxyXG4gICAgICAgIGNhcm91c2VsLnZhbCArPSB2YWx1ZVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtjYXJvdXNlbC52YWx9cmVtYFxyXG5cclxuICAgIH1cclxufSAqL1xyXG5cclxuXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcbiAgICBidG5VcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAvKiBjYXJvdXNlbC5zbGlkZXJVcCAqL2Vhc3lDYXIpLFxyXG5cclxuICAgIGJ0bkRvd246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG93blwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAvKiBjYXJvdXNlbC5zbGlkZXJEb3duICovZWFzeUNhciksXHJcblxyXG4gICAgc2xpZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG59XHJcbiAgICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCBCWSBUSEUgQVBJIChJVFMgUFJPUEVSVElFUywgVkFMVUVTLCBFVEMpIC8vL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RGaWx0ZXIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkRBWVwiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcbiAgICBcclxuICAgIGxldCBmb3JlY2FzdERheSA9IGZvcmVjYXN0QXJyWzBdLmRheVxyXG4gICAgbGV0IGhpc3RvcnlEYXkgPSBoaXN0b3J5QXJyWzBdLmRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheSlcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheSlcclxuXHJcbiAgICBsZXQgZm9yZWNhc3REYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdERheSlcclxuICAgIGxldCBoaXN0b3J5RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeURheSlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXlBcnIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkhPVVJTXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyID0gZm9yZWNhc3RBcnJbMF0uaG91clswXVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyID0gaGlzdG9yeUFyclswXS5ob3VyWzBdXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91cilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXIpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0SG91cilcclxuICAgIGxldCBoaXN0b3J5SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyQXJyKVxyXG5cclxuICAgIC8vLyBBQ1RVQUwgQ09NUEFSSVRJT04gLy8vICAgICAgXHJcbiAgICBjdXJyZW50RmlsdGVyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn0iLCJleHBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufVxyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuaXNDZWxzaXVzID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCB0aW1lKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmouc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy51diA9IG9iai51dixcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgLy90aGlzLmxvY2FsVGltZSA9IG9iai5sb2NhbHRpbWUsXHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqLm5hbWUsXHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gb2JqLmNvdW50cnksXHJcbiAgICAgICAgdGhpcy5yZWdpb24gPSBvYmoucmVnaW9uXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi5cIlxyXG5pbXBvcnQge2N1cnJlbnRIb3VyQ2FyZCwgZnVsbERheUNhcmQsIHNldENhcmREYXRhfSBmcm9tIFwiLi9kb21cIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXl9XHJcblxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpe1xyXG5cclxuICAgIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IHdlYXRoZXJBbmRMb2NhdGlvblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAvLyBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG4gICAgcmVuZGVyUHJpbmNpcGFsKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbi8qICAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KSAqL1xyXG5cclxuICAgIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyhmb3JlY2FzdEFyciwgbG9jYXRpb24pXHJcblxyXG4gICAgcmVuZGVyRXh0cmEoZm9yZWNhc3RBcnIsIGxvY2F0aW9uKVxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikge1xyXG5cclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoaGlzdG9yeU9yRm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcblxyXG4gICAgbmVhci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgaGlzdG9yeU9yRm9yZWNhc3QpKVxyXG59ICovXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG91cnMoZm9yZWNhc3RBcnIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICAvKiBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIikgKi9cclxuICAgIGxldCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG5cclxuICAgIHNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBzbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuXHJcblxyXG4gICAgbGV0IGhvdXJzID0gdG9kYXkuaG91cnNcclxuXHJcbiAgIGhvdXJzLmZvckVhY2goIChob3VyLCBpKSA9PiB7XHJcbiAgICAgICAgaWYoaSA8IDEyKXtcclxuICAgICAgICAgICAgc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpXHJcbiAgICAgICAgfSBlbHNlIGlmKGkgPj0gMTIpe1xyXG5cclxuICAgICAgICAgICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSkgIFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICB9KVxyXG59XHJcblxyXG4vLyBBIFZFUiBMQSBOVUVWQVxyXG5cclxuLyogZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhcImEgdmVyIGNvbW8gZnVuY2FcIilcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbCh3ZWF0aGVyLCBsb2NhdGlvbil7XHJcbiAgICBjb25zb2xlLmxvZyhcImEgdmVyIGNvbW8gZnVuY2FcIilcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtcHJpbmNpcGFsXCIsIHdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQSBWRVIgTEEgTlVFVkFcclxuXHJcblxyXG4vKiBmdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKXtcclxuICAgIGNvbnNvbGUubG9nKFwibmVhciBjaGVlZVwiKVxyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcblxyXG4gICAgbmVhci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgeWVzdGVyZGF5KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvZGF5KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvbW9ycm93KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGxhc3REYXkpKVxyXG59ICovXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyLmNoaWxkcmVuKVxyXG5cclxuICAgIG5lYXJBcnIuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIilcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRvZGF5XCIsIHRvZGF5KVxyXG4gICAgY29uc29sZS5sb2coXCJ5ZXN0ZXJkYXlcIiwgeWVzdGVyZGF5KVxyXG5cclxuXHJcbiAgICBuZWFyQXJyWzBdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHllc3RlcmRheS5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbMV0uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHRvbW9ycm93LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclszXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCBsYXN0RGF5LmRheSwgbG9jYXRpb24pKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeHRyYShmb3JlY2FzdEFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcblxyXG4gICAgbGV0IGV4dHJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYVwiKVxyXG4gICAgZXh0cmEuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBleHRyYS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtZXh0cmFcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbikpO1xyXG5cclxufVxyXG5cclxuLyogZnVuY3Rpb24gZXZlbnREaXNwbGF5TGlzdGVuZXIoZSl7XHJcblxyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XHJcblxyXG5cclxuXHJcbn0gKi9cclxuIiwiaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtzZXRDYXJkRGF0YX1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIFwiY2FyZFwiKVxyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInBsYWNlXCIpXHJcbiAgICBsZXQgdGVtcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcFwiKVxyXG4gICAgbGV0IHRlbXBGZWVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wRmVlbFwiKVxyXG4gICAgbGV0IHRlbXBNaW5NYXggPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBNaW5NYXhcIilcclxuICAgIGxldCBkYXRlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXRlXCIpXHJcbiAgICBsZXQgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNsb3VkXCIpXHJcbiAgICBsZXQgcHJlY2lwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBcIilcclxuICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiaHVtaWRpdHlcIilcclxuICAgIGxldCB0aW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0aW1lXCIpXHJcbiAgICBsZXQgc25vdyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic25vd1wiKVxyXG4gICAgbGV0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndpbmRcIilcclxuICAgIGxldCB1diA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXZcIilcclxuXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImltZ1wiKVxyXG4gICAgbGV0IHN1YiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic3ViXCIpXHJcblxyXG4gICBsZXQgY2FyZEFyciA9IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdXHJcblxyXG4gICBjYXJkQXJyLmZvckVhY2goZWxlbWVudCA9PiB7Y2FyZC5hcHBlbmRDaGlsZChlbGVtZW50KX0pXHJcblxyXG4gICAgcmV0dXJuIHtjYXJkLCBjYXJkQXJyfVxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gY3VycmVudEhvdXJDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlcik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJUZXh0O1xyXG5cclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEMpfcK6YDtcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDX2ZlZWwpfcK6YFxyXG4gICAgaWYoIXdlYXRoZXIuaXNDZWxzaXVzKXtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wRl9mZWVsKX3CumB9O1xyXG5cclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24ubmFtZX0sICR7bG9jYXRpb24uY291bnRyeX1gOyBcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYE51YmVzOiAke3dlYXRoZXIuY2xvdWR9JWA7XHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgcHJlY2lwOiAke3dlYXRoZXIucHJlY2lwVG90YWx9bW1gO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtZWRhZDogJHt3ZWF0aGVyLmh1bWlkaXR5fSVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGBzbm93ICR7d2VhdGhlci5zbm93Q2hhbmNlfSVgO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXIudGltZTtcclxuXHJcblxyXG4gICAgcmV0dXJuICBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxEYXlDYXJkKGNsYXNzTmFtZSwgd2VhdGhlciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtkYXRlT2JqLCBmdWxsRGF5T2JqLCBmdWxsSG91cnNBcnJdID0gd2VhdGhlclxyXG4gICAgY29uc29sZS5sb2coZnVsbERheU9iailcclxuICAgIFxyXG4gICAgbGV0IGRhdGVGb3JtYXQgPSBgJHtkYXRlT2JqLnNsaWNlKDgpfS8ke2RhdGVPYmouc2xpY2UoNSwgNyl9YDtcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3RvcihmdWxsRGF5T2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoud2luZE1heCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gZnVsbERheU9iai51djtcclxuICAgIFxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wQyl9wrpgO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZighZnVsbERheU9iai5pc0NlbHNpdXMpeyBcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWluVGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLmF2Z1RlbXBGKX3CumB9O1xyXG5cclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtmdWxsRGF5T2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYoZnVsbERheU9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59ICovXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q2FyZERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaikge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbk9iai5uYW1lfSwgJHtsb2NhdGlvbk9iai5jb3VudHJ5fWA7IFxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcENfZmVlbCl9wrpgXHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCF3ZWF0aGVyT2JqLmlzQ2Vsc2l1cyl7IFxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YDtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKHdlYXRoZXJPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5cclxuIiwiXHJcbi8qIGltcG9ydCB7dGVzdCwgZ2V0Q3VycmVudFdlYXRoZXIsIGdldExvY2F0aW9uLCBnZXRGb3JlY2FzdEhvdXJzLCBnZXRGb3JlY2FzdERhdGEsIGdldEhpc3RvcnlEYXRhfSBmcm9tIFwiLi9vYmplY3RzXCI7ICovXHJcbmltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHN9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7Y3VycmVudEhvdXJDYXJkLCBmdWxsRGF5Q2FyZH0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCI7XHJcblxyXG5leHBvcnQge2dldERhdGF9XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdClcclxubGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGdldElucHV0VmFsdWUpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG5lYXJDYXJkc0V2ZW50KGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBnZXREYXRhKFwiYnVlbm9zIGFpcmVzXCIpXHJcblxyXG4gICAgbGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyLmNoaWxkcmVuKVxyXG4gICAgbmVhckFyci5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVhckNhcmRzRXZlbnQpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG5cclxuICAgIGxldCBpbnB1dFZhbCA9IGlucHV0LnZhbHVlXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxuICAgIFxyXG5cclxufVxyXG5cclxubGV0IGV4ID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxuXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaW5wdXRWYWwpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlucHV0VmFsKVxyXG50cnl7XHJcbiAgICBsZXQgW3Jlc3BvbnNlLCByZXNwb25zZTJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT0ke2lucHV0VmFsfSZkYXlzPTNgKSxcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT0ke2lucHV0VmFsfSZkdD0yMDI0LTAxLTI0YClcclxuICAgIF0pXHJcblxyXG4gICAgbGV0IFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICByZXNwb25zZS5qc29uKCksXHJcbiAgICAgICAgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgXSlcclxuXHJcbiAgICAvLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCAvLy9cclxuICAgIC8vY29tcGFyZU9iamVjdHMoZGF0YSwgZGF0YTIsIGRhdGEzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGFGb3JlY2FzdClcclxuICAgIGNvbnNvbGUubG9nKGRhdGFIaXN0b3J5KVxyXG5cclxuIC8qICAgIGxldCB3ZWF0aGVyQW5kTG9jYXRpb24gPSBbZ2V0Q3VycmVudFdlYXRoZXIoZGF0YUZvcmVjYXN0KSwgZ2V0TG9jYXRpb24oZGF0YUZvcmVjYXN0KV1cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KSAqL1xyXG5cclxuICAgbGV0IFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxuIFxyXG4gICAgdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxyXG5sZXQgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxyXG5cclxuYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHJcbiAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpXHJcbmNvbnNvbGUubG9nKGUpXHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblxyXG4gICAgaWYoIW5hdi5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgIGJ0bk1lbnUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1lbnVcIilcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vKiBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRGF0YShhcnJheSl7XHJcblxyXG4gICAgbGV0IFtjdXJyZW50QW5kTG9jYXRpb25BcnIsIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IGFycmF5XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50QW5kTG9jYXRpb25BcnIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIGNvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcblxyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gY3VycmVudEFuZExvY2F0aW9uQXJyXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3cpXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdERheSlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG4gICAgY29uc29sZS5sb2coeWVzdGVyZGF5KVxyXG5cclxuICAgIC8qIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pXHJcblxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh5ZXN0ZXJkYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b21vcnJvdylcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QobGFzdERheSlcclxuXHJcbiAgICBkaXNwbGF5SG91cnModG9kYXksIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlNYW5hZ2VyKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbiwgeWVzdGVyZGF5LCB0b2RheSwgdG9tb3Jyb3csIGxhc3REYXkpXHJcblxyXG59ICovXHJcblxyXG4vKiBmdW5jdGlvbiBnZXRTdHJ1Y3R1cmVkRm9yZWNhc3QgKGFycil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gYXJyXHJcbiAgICAgICAgY29uc29sZS5sb2codG9kYXkpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9tb3Jyb3cpXHJcbiAgICAgICAgY29uc29sZS5sb2cobGFzdERheSlcclxuICAgIFxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgdG9kYXkpKVxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgdG9tb3Jyb3cpKVxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgbGFzdERheSkpXHJcblxyXG4gICAgY29uc29sZS5sb2codG9kYXlbMl0pXHJcbiAgICAvL2FzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZCh0b2RheVsyXSkpXHJcblxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEhpc3RvcnkoYXJyKSB7XHJcbiAgICBsZXQgeSA9IGFyclxyXG4gICAgY29uc29sZS5sb2coeSlcclxuICAgIGxldCBjaGlsZCA9IG5lYXIuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgIGNvbnNvbGUubG9nKGNoaWxkKVxyXG4gICAgbmVhci5pbnNlcnRCZWZvcmUoZnVsbERheUNhcmQoXCJuZWFyXCIsIHkpLCBjaGlsZClcclxufSAqL1xyXG5cclxuLyogZnVuY3Rpb24gZ2V0V2VhdGhlckFuZExvY2F0aW9uKGFycil7XHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pXHJcblxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcInByaW5jaXBhbFwiLCBjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pKSBcclxufSAqL1xyXG5cclxuLyogZnVuY3Rpb24gZGlzcGxheU1hbmFnZXIoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uLCB5ZXN0ZXJkYXksIHRvZGF5LCB0b21vcnJvdywgbGFzdERheSl7XHJcblxyXG4gICAgZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHllc3RlcmRheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9kYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvbW9ycm93KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChsYXN0RGF5KVxyXG5cclxuICAgIGRpc3BsYXlIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSB7XHJcblxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcblxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcInByaW5jaXBhbFwiLCBjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdChoaXN0b3J5T3JGb3JlY2FzdCl7XHJcblxyXG4gICAgbGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBoaXN0b3J5T3JGb3JlY2FzdCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb3Vycyh0b2RheSwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKVxyXG5cclxuICAgIGxldCBob3VycyA9IHRvZGF5LnNwbGljZSgpXHJcblxyXG4gICAgbGV0IGhvdXJzdGVzdCA9IFtob3Vyc1swXSwgaG91cnNbMV0sIGhvdXJzWzJdLCBob3Vyc1szXSwgaG91cnNbNF0sIGhvdXJzWzVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzWzZdLCBob3Vyc1s3XSwgaG91cnNbOF1dXHJcblxyXG4gICBob3Vyc3Rlc3QuZm9yRWFjaCggaG91ciA9PiB7XHJcbiAgICAgICAgYXNpZGUuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwiYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKVxyXG4gICB9KVxyXG5cclxuXHJcbiAgICAvL2FzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZCgpKVxyXG59ICovXHJcblxyXG5cclxuXHJcblxyXG4vL2dldERhdGEoKVxyXG5cclxuIiwiaW1wb3J0IHtnZXREYXRhLCBnZXRJbnB1dFZhbHVlfSBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259IGZyb20gXCIuL2NsYXNzXCJcclxuXHJcbi8qIGV4cG9ydCB7dGVzdCwgZ2V0TG9jYXRpb24sIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRGb3JlY2FzdERhdGEsIGdldEhpc3RvcnlEYXRhfSAqL1xyXG5leHBvcnQge3RyaWdnZXJEYXRhU3RydWN0dXJhdGlvbn1cclxuXHJcbmxldCB0ZXN0ID0ge1xyXG4gICAgaGlzdG9yeTogXCJsYXN0IDcgZGF5c1wiLFxyXG4gICAgZm9yZWNhc3Q6IFwidXAgdG8gMyBkYXlzIFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbiAoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSl7XHJcblxyXG4gICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcblxyXG4gICAgcmV0dXJuIFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcbiAgICBsZXQgcmF3TG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuXHJcbiAgICBsZXQgW3Jhd1RvZGF5QXJyLCByYXdUb21vcnJvd0FyciwgcmF3TGFzdERheUFycl0gPSByYXdGb3JlY2FzdEFycjtcclxuXHJcbiAvKiAgICBsZXQgdG9kYXlEYXRlID0gcmF3VG9kYXlBcnIuZGF0ZTtcclxuICAgIGxldCB0b2RheURheSA9IG5ldyBEYXkocmF3VG9kYXlBcnIuZGF5KTtcclxuICAgIGxldCB0b2RheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9kYXlBcnIpO1xyXG4gICAgbGV0IHRvZGF5QXJyID0gW3RvZGF5RGF0ZSwgdG9kYXlEYXksIHRvZGF5SG91cnNBcnJdOyAqL1xyXG5cclxuICAgIGxldCB0b2RheURheSA9IG5ldyBEYXkocmF3VG9kYXlBcnIuZGF5LCByYXdUb2RheUFyci5kYXRlKTtcclxuICAgIGxldCB0b2RheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9kYXlBcnIpO1xyXG4gICAgbGV0IHRvZGF5QXJyID0ge2RheTogdG9kYXlEYXksIGhvdXJzOiB0b2RheUhvdXJzQXJyfTtcclxuXHJcbi8qICAgICBsZXQgdG9tb3Jyb3dEYXRlID0gcmF3VG9tb3Jyb3dBcnIuZGF0ZTtcclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5KTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93QXJyID0gW3RvbW9ycm93RGF0ZSwgdG9tb3Jyb3dEYXksIHRvbW9ycm93SG91cnNBcnJdOyAqL1xyXG4gICAgbGV0IHRvbW9ycm93RGF5ID0gbmV3IERheShyYXdUb21vcnJvd0Fyci5kYXksIHJhd1RvbW9ycm93QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvbW9ycm93SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb21vcnJvd0Fycik7XHJcbiAgICBsZXQgdG9tb3Jyb3dBcnIgPSB7ZGF5OiB0b21vcnJvd0RheSwgaG91cnM6IHRvbW9ycm93SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSwgcmF3TGFzdERheUFyci5kYXRlKTtcclxuICAgIGxldCBsYXN0RGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdMYXN0RGF5QXJyKTtcclxuICAgIGxldCBsYXN0RGF5QXJyID0ge2RheTogbGFzdERheURheSwgaG91cnM6IGxhc3REYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5QXJyLCB0b21vcnJvd0FyciwgbGFzdERheUFycl07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCBbcmF3WWVzdGVyZGF5QXJyXSA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHJhd1llc3RlcmRheUFyci5kYXksIHJhd1llc3RlcmRheUFyci5kYXRlIClcclxuICAgIHllc3RlcmRheURheS5pc0hpc3RvcnkgPSB0cnVlO1xyXG4gICAgbGV0IHllc3RlcmRheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3WWVzdGVyZGF5QXJyKVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlBcnIgPSB7ZGF5OiB5ZXN0ZXJkYXlEYXksIGhvdXJzOiB5ZXN0ZXJkYXlIb3Vyc0Fycn1cclxuXHJcbiAgICByZXR1cm4geWVzdGVyZGF5QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKG9iaikge1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IG9iai5sb2NhdGlvblxyXG4gICAgbGV0IGxvY2F0aW9uT2JqID0gbmV3IExvY2F0aW9uKGxvY2F0aW9uKVxyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbk9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihvYmopeyBcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai5jdXJyZW50XHJcbiAgICBsZXQgZGF0ZSA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlXHJcbiAgICBsZXQgd2VhdGhlck9iaiA9IG5ldyBDdXJyZW50V2VhdGhlcih3ZWF0aGVyLCBkYXRlKVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvdXJzKGFycikge1xyXG5cclxuICAgIHJldHVybiBhcnIuaG91ci5tYXAoIChob3VyKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBob3VyLnRpbWUuc2xpY2UoMCwgMTApXHJcbiAgICAgICAgbGV0IHRpbWUgPSBob3VyLnRpbWUuc2xpY2UoMTEpXHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyLCBkYXRlLCB0aW1lKVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=