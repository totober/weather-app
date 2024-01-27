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

    console.log(obj)
    console.log(obj.weatherText)
    let weather = obj.weatherText.toLowerCase().trim()
    let isDay = obj.isDay 
    console.log(isDay)

    /// TERNARY OPERATOR ///
    let nightOrDay = isDay ? iconsObj.dayArr() : iconsObj.nightArr();
    console.log(nightOrDay)

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

    console.log(e)
    
    let event = e.target.classList.contains("up") ? "up" : "down"

    if(event === "up") {
       elements.slider.firstElementChild.classList.add("show")
       elements.slider.lastElementChild.classList.remove("show")  
    } else if (event === "down") {
        elements.slider.firstElementChild.classList.remove("show")
        elements.slider.lastElementChild.classList.add("show")
    }
    
   
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

let lab = document.documentElement
console.log(lab)
lab.style.setProperty("--black-bg", "red")


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNJO0FBQ007QUFDSTtBQUNSO0FBQ1I7QUFDRTtBQUNNO0FBQ0k7QUFDUjtBQUNGO0FBQ3RDO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw2Q0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDhDQUFRO0FBQ2hFO0FBQ0E7QUFDQSxxRkFBcUYsK0NBQVU7QUFDL0Y7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLHFDQUFxQywrQ0FBVTtBQUMvQztBQUNBO0FBQ0EscUNBQXFDLGlEQUFZO0FBQ2pEO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UjRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0QyQjtBQUNvQztBQUMvRDtBQUMyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaURBQVc7QUFDNUQsVUFBVTtBQUNWO0FBQ0EsZ0RBQWdELGlEQUFXO0FBQzNEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdW5JbWcgZnJvbSBcIi4vaW1nL3N1bi1zLnN2Z1wiXHJcbmltcG9ydCBtb29uSW1nIGZyb20gXCIuL2ltZy9tb29uLXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5LXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeURheUltZyBmcm9tIFwiLi9pbWcvY2xvdWR5RGF5LXMuc3ZnXCJcclxuaW1wb3J0IGNsb3VkeU5pZ2h0SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlOaWdodC1zLnN2Z1wiXHJcbmltcG9ydCB0aHVuZGVySW1nIGZyb20gXCIuL2ltZy90aHVuZGVyLXMuc3ZnXCJcclxuaW1wb3J0IGZvZ0ltZyBmcm9tIFwiLi9pbWcvZm9nLXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5JbWcgZnJvbSBcIi4vaW1nL3JhaW4tcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkRheUltZyBmcm9tIFwiLi9pbWcvcmFpbkRheS1zLnN2Z1wiXHJcbmltcG9ydCByYWluTmlnaHRJbWcgZnJvbSBcIi4vaW1nL3JhaW5OaWdodC1zLnN2Z1wiXHJcbmltcG9ydCBzbGVldEltZyBmcm9tIFwiLi9pbWcvc2xlZXQtcy5zdmdcIlxyXG5pbXBvcnQgc25vd0ltZyBmcm9tIFwiLi9pbWcvc25vdy1zLnN2Z1wiXHJcblxyXG5cclxuZXhwb3J0IHtjb21wYXJlT2JqZWN0cywgaWNvblNlbGVjdG9yfVxyXG5cclxuXHJcbi8vLyBBUlJBWVMgT0JKRUNUIEZPUiBJQ09OIENPTVBBUklUSU9OIC8vL1xyXG5cclxubGV0IGljb25zT2JqID0ge1xyXG5cclxuICAgIHNub3c6IFtcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsIFwiQmxvd2luZyBzbm93XCIsIFwiQmxpenphcmRcIiwgXCJQYXRjaHkgbGlnaHQgc25vd1wiLCBcIkxpZ2h0IHNub3dcIiwgXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIiwgXCJNb2RlcmF0ZSBzbm93XCIsIFwiUGF0Y2h5IGhlYXZ5IHNub3dcIiwgXCJIZWF2eSBzbm93XCIsIFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsIHNub3dJbWddLFxyXG5cclxuICAgIHNsZWV0OiBbXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIiwgXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsIFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgICAgICBcIkZyZWV6aW5nIGRyaXp6bGVcIiwgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICAgICAgXCJMaWdodCBzbGVldFwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsIFwiSWNlIHBlbGxldHNcIiwgXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLCBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBzbGVldEltZ10sXHJcblxyXG4gICAgdGh1bmRlcjogW1wiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICAgICAgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLCB0aHVuZGVySW1nXSxcclxuXHJcbiAgICBmb2c6IFtcIk1pc3RcIiwgXCJGb2dcIiwgXCJGcmVlemluZyBmb2dcIiwgZm9nSW1nXSxcclxuXHJcbiAgICByYWluOiBbXCJMaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpblwiLCBcIkhlYXZ5IHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLCBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICAgICAgcmFpbkltZ10sXHJcbiAgICBcclxuICAgIGNsb3VkeTogW1wiQ2xvdWR5XCIsIFwiT3ZlcmNhc3RcIiwgY2xvdWR5SW1nXSxcclxuXHJcbiAgICBzdW46IFtcIlN1bm55XCIsIHN1bkltZ10sXHJcblxyXG4gICAgbW9vbjogW1wiQ2xlYXJcIiwgbW9vbkltZ10sXHJcblxyXG4gICAgcmFpbkRheTogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCByYWluRGF5SW1nXSxcclxuXHJcbiAgICByYWluTmlnaHQ6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgcmFpbk5pZ2h0SW1nXSxcclxuXHJcbiAgICBjbG91ZHlEYXk6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5RGF5SW1nXSxcclxuXHJcbiAgICBjbG91ZHlOaWdodDogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlOaWdodEltZ10sXHJcblxyXG4gICAgZGF5QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN1biwgdGhpcy5yYWluRGF5LCB0aGlzLmNsb3VkeURheSwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdXHJcbiAgICB9LFxyXG5cclxuICAgIG5pZ2h0QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLm1vb24sIHRoaXMucmFpbk5pZ2h0LCB0aGlzLmNsb3VkeU5pZ2h0LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF0gXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGljb25TZWxlY3RvcihvYmope1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG9iailcclxuICAgIGNvbnNvbGUubG9nKG9iai53ZWF0aGVyVGV4dClcclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLndlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXkgXHJcbiAgICBjb25zb2xlLmxvZyhpc0RheSlcclxuXHJcbiAgICAvLy8gVEVSTkFSWSBPUEVSQVRPUiAvLy9cclxuICAgIGxldCBuaWdodE9yRGF5ID0gaXNEYXkgPyBpY29uc09iai5kYXlBcnIoKSA6IGljb25zT2JqLm5pZ2h0QXJyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhuaWdodE9yRGF5KVxyXG5cclxuICAgIGxldCBpbWcgPSBcIlwiXHJcblxyXG4gIC8vLyBUSEUgRklSU1QgVEhJTkcgSSBESUQgV0FTIFRXTyBMT09QUywgT05FIEZPUiBEQVkgQU5EIE9USEVSIEZPUiBOSUdIVC5cclxuICAvLy8gQVdGVUwuIEFORCBIRUFWSUxZIE5FU1RFRC4gIFxyXG5cclxuICAvKiAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuICAgICAgIC8qICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG5cclxuIC8vLyBUSEVOIEkgVFJZIFRPIFVTRSBGT1IgT0YgTE9PUFMsIEJFQ0FVU0UgSSBXQU5URUQgVE8gQlJFQUsgVEhFIExPT1AgV0hFTiBJIEhBVkUgVEhFIEVMRU1FTlQgSSBXQU5URUQgXHJcblxyXG4vKiAgICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAgICAgZm9yIChjb25zdCBhcnIgb2YgZGF5QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIC8vLyBGSU5BTExZLCBJIERJRE5UIFdBTlQgVE8gVVNFIDIgRVFVQUwgTE9PUFMsIFNPIFJFU09MVkVEIFRPIFVTRSBBIFRFUk5BUlkgT1BFUkFUT1IgQU5EIFRIRU4gQSBTSU5HTEUgTE9PUC5cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodE9yRGF5KXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG5cclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltZ1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZWFzeUNhcihlKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIFxyXG4gICAgbGV0IGV2ZW50ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyBcInVwXCIgOiBcImRvd25cIlxyXG5cclxuICAgIGlmKGV2ZW50ID09PSBcInVwXCIpIHtcclxuICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikgIFxyXG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5sZXQgY2Fyb3VzZWwgPSB7XHJcbiAgICBcclxuICAgIHZhbDogMCxcclxuICAgIFxyXG4gICAgc2xpZGVyVXAoZSkge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSA0N1xyXG4gICAgXHJcbiAgICAgICAgaWYoY2Fyb3VzZWwudmFsID09PSAwIHx8IGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVyRG93bihlKSB7XHJcblxyXG4gICAgICAgbGV0IHZhbHVlID0gLTQ3IFxyXG5cclxuICAgICAgICBpZihlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG4gICAgYnRuVXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyVXAgKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBidG5Eb3duOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvd25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyRG93biAqL2Vhc3lDYXIpLFxyXG5cclxuICAgIHNsaWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxufVxyXG4gICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgQlkgVEhFIEFQSSAoSVRTIFBST1BFUlRJRVMsIFZBTFVFUywgRVRDKSAvLy9cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59IiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5hdmdIdW1pZGl0eSA9IG9iai5hdmdodW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoubWF4d2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai50b3RhbHByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLnByZWNpcENoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai50b3RhbHNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMudXYgPSBvYmoudXYsXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gdHJ1ZSxcclxuICAgICAgICB0aGlzLmlzSGlzdG9yeSA9IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuaXNDZWxzaXVzID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIC8vdGhpcy5sb2NhbFRpbWUgPSBvYmoubG9jYWx0aW1lLFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gXCIuXCJcclxuaW1wb3J0IHtjdXJyZW50SG91ckNhcmQsIGZ1bGxEYXlDYXJkLCBzZXRDYXJkRGF0YX0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKXtcclxuXHJcbiAgICBsZXQgW2N1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbl0gPSB3ZWF0aGVyQW5kTG9jYXRpb25cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgLy8gZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbilcclxuICAgIHJlbmRlclByaW5jaXBhbChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pXHJcblxyXG4vKiAgICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh5ZXN0ZXJkYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b21vcnJvdylcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QobGFzdERheSkgKi9cclxuXHJcbiAgICByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5SG91cnMoZm9yZWNhc3RBcnIsIGxvY2F0aW9uKVxyXG5cclxuICAgIHJlbmRlckV4dHJhKGZvcmVjYXN0QXJyLCBsb2NhdGlvbilcclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pIHtcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGhpc3RvcnlPckZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGhpc3RvcnlPckZvcmVjYXN0KSlcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUhvdXJzKGZvcmVjYXN0QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgLyogbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpICovXHJcbiAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxuXHJcbiAgICBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcblxyXG5cclxuICAgIGxldCBob3VycyA9IHRvZGF5LmhvdXJzXHJcblxyXG4gICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcbiAgICAgICAgICAgIHNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKVxyXG4gICAgICAgIH0gZWxzZSBpZihpID49IDEyKXtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgfSlcclxufVxyXG5cclxuLy8gQSBWRVIgTEEgTlVFVkFcclxuXHJcbi8qIGZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pe1xyXG4gICAgY29uc29sZS5sb2coXCJhIHZlciBjb21vIGZ1bmNhXCIpXHJcbiAgICBcclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3VycmVudEhvdXJDYXJkKFwicHJpbmNpcGFsXCIsIGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59ICovXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcmluY2lwYWwod2VhdGhlciwgbG9jYXRpb24pe1xyXG4gICAgY29uc29sZS5sb2coXCJhIHZlciBjb21vIGZ1bmNhXCIpXHJcbiAgICBcclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLXByaW5jaXBhbFwiLCB3ZWF0aGVyLCBsb2NhdGlvbikpXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIEEgVkVSIExBIE5VRVZBXHJcblxyXG5cclxuLyogZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycil7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5lYXIgY2hlZWVcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5cclxuICAgIG5lYXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHllc3RlcmRheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b2RheSkpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB0b21vcnJvdykpXHJcbiAgICBuZWFyLmFwcGVuZENoaWxkKGZ1bGxEYXlDYXJkKFwibmVhclwiLCBsYXN0RGF5KSlcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhci5jaGlsZHJlbilcclxuXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVySFRNTCA9IFwiXCIpXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0b2RheVwiLCB0b2RheSlcclxuICAgIGNvbnNvbGUubG9nKFwieWVzdGVyZGF5XCIsIHllc3RlcmRheSlcclxuXHJcblxyXG4gICAgbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB5ZXN0ZXJkYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclsyXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB0b21vcnJvdy5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgbGFzdERheS5kYXksIGxvY2F0aW9uKSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXh0cmEoZm9yZWNhc3RBcnIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG5cclxuICAgIGxldCBleHRyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFcIilcclxuICAgIGV4dHJhLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZXh0cmEuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWV4dHJhXCIsIHRvZGF5LmRheSwgbG9jYXRpb24pKTtcclxuXHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIGV2ZW50RGlzcGxheUxpc3RlbmVyKGUpe1xyXG5cclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxyXG5cclxuXHJcblxyXG59ICovXHJcbiIsImltcG9ydCB7IGljb25TZWxlY3RvciB9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCJcclxuXHJcbmV4cG9ydCB7c2V0Q2FyZERhdGF9XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBlbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCl7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBcImNhcmRcIilcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwbGFjZVwiKVxyXG4gICAgbGV0IHRlbXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBcIilcclxuICAgIGxldCB0ZW1wRmVlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcEZlZWxcIilcclxuICAgIGxldCB0ZW1wTWluTWF4ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wTWluTWF4XCIpXHJcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF0ZVwiKVxyXG4gICAgbGV0IGNsb3VkID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjbG91ZFwiKVxyXG4gICAgbGV0IHByZWNpcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwXCIpXHJcbiAgICBsZXQgaHVtaWRpdHkgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImh1bWlkaXR5XCIpXHJcbiAgICBsZXQgdGltZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGltZVwiKVxyXG4gICAgbGV0IHNub3cgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNub3dcIilcclxuICAgIGxldCB3aW5kID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3aW5kXCIpXHJcbiAgICBsZXQgdXYgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInV2XCIpXHJcblxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInN1YlwiKVxyXG5cclxuICAgbGV0IGNhcmRBcnIgPSBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XVxyXG5cclxuICAgY2FyZEFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge2NhcmQuYXBwZW5kQ2hpbGQoZWxlbWVudCl9KVxyXG5cclxuICAgIHJldHVybiB7Y2FyZCwgY2FyZEFycn1cclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGN1cnJlbnRIb3VyQ2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQ19mZWVsKX3CumBcclxuICAgIGlmKCF3ZWF0aGVyLmlzQ2Vsc2l1cyl7XHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEZfZmVlbCl9wrpgfTtcclxuXHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDsgXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGBOdWJlczogJHt3ZWF0aGVyLmNsb3VkfSVgO1xyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYHByZWNpcDogJHt3ZWF0aGVyLnByZWNpcFRvdGFsfW1tYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWVkYWQ6ICR7d2VhdGhlci5odW1pZGl0eX0lYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgc25vdyAke3dlYXRoZXIuc25vd0NoYW5jZX0lYDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRpbWU7XHJcblxyXG5cclxuICAgIHJldHVybiAgY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsRGF5Q2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbZGF0ZU9iaiwgZnVsbERheU9iaiwgZnVsbEhvdXJzQXJyXSA9IHdlYXRoZXJcclxuICAgIGNvbnNvbGUubG9nKGZ1bGxEYXlPYmopXHJcbiAgICBcclxuICAgIGxldCBkYXRlRm9ybWF0ID0gYCR7ZGF0ZU9iai5zbGljZSg4KX0vJHtkYXRlT2JqLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3IoZnVsbERheU9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSBmdWxsRGF5T2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2Z1bGxEYXlPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLndpbmRNYXgpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoudXY7XHJcbiAgICBcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouYXZnVGVtcEMpfcK6YDtcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5tYXhUZW1wQyl9wrovJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5taW5UZW1wQyl9wrpgO1xyXG4gICAgaWYoIWZ1bGxEYXlPYmouaXNDZWxzaXVzKXsgXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wRil9wrpgfTtcclxuXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKGZ1bGxEYXlPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufSAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldENhcmREYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmopIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50aW1lO1xyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YDtcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YFxyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZighd2VhdGhlck9iai5pc0NlbHNpdXMpeyBcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRl9mZWVsKX3CumA7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9IFxyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcbiIsIlxyXG4vKiBpbXBvcnQge3Rlc3QsIGdldEN1cnJlbnRXZWF0aGVyLCBnZXRMb2NhdGlvbiwgZ2V0Rm9yZWNhc3RIb3VycywgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX0gZnJvbSBcIi4vb2JqZWN0c1wiOyAqL1xyXG5pbXBvcnQge3RyaWdnZXJEYXRhU3RydWN0dXJhdGlvbn0gZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5pbXBvcnQge2NvbXBhcmVPYmplY3RzfSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge2N1cnJlbnRIb3VyQ2FyZCwgZnVsbERheUNhcmR9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQge3RyaWdnZXJEYXRhRGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IHtnZXREYXRhfVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpXHJcbmxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKVxyXG5cclxubGV0IGxhYiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG5jb25zb2xlLmxvZyhsYWIpXHJcbmxhYi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmxhY2stYmdcIiwgXCJyZWRcIilcclxuXHJcblxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0RGF0YShcImJ1ZW5vcyBhaXJlc1wiKVxyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhci5jaGlsZHJlbilcclxuICAgIG5lYXJBcnIuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lYXJDYXJkc0V2ZW50KSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlKXtcclxuXHJcbiAgICBpZihlLmtleSAhPT0gXCJFbnRlclwiKSB7cmV0dXJufVxyXG5cclxuXHJcbiAgICBsZXQgaW5wdXRWYWwgPSBpbnB1dC52YWx1ZVxyXG5cclxuICAgIGdldERhdGEoaW5wdXRWYWwpXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcblxyXG5sZXQgcGFzcyA9IFwiP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyXCJcclxubGV0IHVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiXHJcbmxldCBjdXJyZW50ID0gXCIvY3VycmVudC5qc29uXCJcclxubGV0IHBsYWNlID0gXCJxPVBhcmlzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGlucHV0VmFsKXtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFZhbClcclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZGF5cz0zYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZHQ9MjAyNC0wMS0yNGApXHJcbiAgICBdKVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhRm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhSGlzdG9yeSlcclxuXHJcbiAvKiAgICBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSkgKi9cclxuXHJcbiAgIGxldCBbd2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24oZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbiBcclxuICAgIHRyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG5cclxufSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0gIFxyXG59IFxyXG5cclxuXHJcblxyXG5cclxuLyogZnVuY3Rpb24gZ2V0U3RydWN0dXJlZERhdGEoYXJyYXkpe1xyXG5cclxuICAgIGxldCBbY3VycmVudEFuZExvY2F0aW9uQXJyLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSBhcnJheVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEFuZExvY2F0aW9uQXJyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICBjb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG5cclxuICAgIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IGN1cnJlbnRBbmRMb2NhdGlvbkFyclxyXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpXHJcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3REYXkpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuICAgIGNvbnNvbGUubG9nKHllc3RlcmRheSlcclxuXHJcbiAgICAvKiBkaXNwbGF5Q3VycmVudENhcmQoY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKVxyXG5cclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoeWVzdGVyZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b2RheSlcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QodG9tb3Jyb3cpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KGxhc3REYXkpXHJcblxyXG4gICAgZGlzcGxheUhvdXJzKHRvZGF5LCBsb2NhdGlvbilcclxuXHJcbiAgICBkaXNwbGF5TWFuYWdlcihjdXJyZW50V2VhdGhlciwgbG9jYXRpb24sIHllc3RlcmRheSwgdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5KVxyXG5cclxufSAqL1xyXG5cclxuLyogZnVuY3Rpb24gZ2V0U3RydWN0dXJlZEZvcmVjYXN0IChhcnIpe1xyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGFyclxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvbW9ycm93KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhc3REYXkpXHJcbiAgICBcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvZGF5KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIHRvbW9ycm93KSlcclxuICAgIG5lYXIuYXBwZW5kQ2hpbGQoZnVsbERheUNhcmQoXCJuZWFyXCIsIGxhc3REYXkpKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZGF5WzJdKVxyXG4gICAgLy9hc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQodG9kYXlbMl0pKVxyXG5cclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldFN0cnVjdHVyZWRIaXN0b3J5KGFycikge1xyXG4gICAgbGV0IHkgPSBhcnJcclxuICAgIGNvbnNvbGUubG9nKHkpXHJcbiAgICBsZXQgY2hpbGQgPSBuZWFyLmZpcnN0RWxlbWVudENoaWxkXHJcbiAgICBjb25zb2xlLmxvZyhjaGlsZClcclxuICAgIG5lYXIuaW5zZXJ0QmVmb3JlKGZ1bGxEYXlDYXJkKFwibmVhclwiLCB5KSwgY2hpbGQpXHJcbn0gKi9cclxuXHJcbi8qIGZ1bmN0aW9uIGdldFdlYXRoZXJBbmRMb2NhdGlvbihhcnIpe1xyXG4gICAgbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gYXJyXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSkgXHJcbn0gKi9cclxuXHJcbi8qIGZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbiwgeWVzdGVyZGF5LCB0b2RheSwgdG9tb3Jyb3csIGxhc3REYXkpe1xyXG5cclxuICAgIGRpc3BsYXlDdXJyZW50Q2FyZChjdXJyZW50V2VhdGhlciwgbG9jYXRpb24pXHJcblxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh5ZXN0ZXJkYXkpXHJcbiAgICBkaXNwbGF5SGlzdG9yeUFuZEZvcmVjYXN0KHRvZGF5KVxyXG4gICAgZGlzcGxheUhpc3RvcnlBbmRGb3JlY2FzdCh0b21vcnJvdylcclxuICAgIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QobGFzdERheSlcclxuXHJcbiAgICBkaXNwbGF5SG91cnModG9kYXksIGxvY2F0aW9uKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRDYXJkKGN1cnJlbnRXZWF0aGVyLCBsb2NhdGlvbikge1xyXG5cclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG5cclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoXCJwcmluY2lwYWxcIiwgY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uKSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIaXN0b3J5QW5kRm9yZWNhc3QoaGlzdG9yeU9yRm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBuZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcblxyXG4gICAgbmVhci5hcHBlbmRDaGlsZChmdWxsRGF5Q2FyZChcIm5lYXJcIiwgaGlzdG9yeU9yRm9yZWNhc3QpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG91cnModG9kYXksIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIilcclxuXHJcbiAgICBsZXQgaG91cnMgPSB0b2RheS5zcGxpY2UoKVxyXG5cclxuICAgIGxldCBob3Vyc3Rlc3QgPSBbaG91cnNbMF0sIGhvdXJzWzFdLCBob3Vyc1syXSwgaG91cnNbM10sIGhvdXJzWzRdLCBob3Vyc1s1XSxcclxuICAgICAgICAgICAgICAgICAgICBob3Vyc1s2XSwgaG91cnNbN10sIGhvdXJzWzhdXVxyXG5cclxuICAgaG91cnN0ZXN0LmZvckVhY2goIGhvdXIgPT4ge1xyXG4gICAgICAgIGFzaWRlLmFwcGVuZENoaWxkKGN1cnJlbnRIb3VyQ2FyZChcImFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgfSlcclxuXHJcblxyXG4gICAgLy9hc2lkZS5hcHBlbmRDaGlsZChjdXJyZW50SG91ckNhcmQoKSlcclxufSAqL1xyXG5cclxuXHJcblxyXG5cclxuLy9nZXREYXRhKClcclxuXHJcbiIsImltcG9ydCB7Z2V0RGF0YSwgZ2V0SW5wdXRWYWx1ZX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5pbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG4vKiBleHBvcnQge3Rlc3QsIGdldExvY2F0aW9uLCBnZXRDdXJyZW50V2VhdGhlciwgZ2V0Rm9yZWNhc3REYXRhLCBnZXRIaXN0b3J5RGF0YX0gKi9cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259XHJcblxyXG5sZXQgdGVzdCA9IHtcclxuICAgIGhpc3Rvcnk6IFwibGFzdCA3IGRheXNcIixcclxuICAgIGZvcmVjYXN0OiBcInVwIHRvIDMgZGF5cyBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCB3ZWF0aGVyQW5kTG9jYXRpb24gPSBbZ2V0Q3VycmVudFdlYXRoZXIoZGF0YUZvcmVjYXN0KSwgZ2V0TG9jYXRpb24oZGF0YUZvcmVjYXN0KV1cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG5cclxuICAgIHJldHVybiBbd2VhdGhlckFuZExvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0ZvcmVjYXN0QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG4gICAgbGV0IHJhd0xvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gLyogICAgbGV0IHRvZGF5RGF0ZSA9IHJhd1RvZGF5QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyciA9IFt0b2RheURhdGUsIHRvZGF5RGF5LCB0b2RheUhvdXJzQXJyXTsgKi9cclxuXHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSwgcmF3VG9kYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheUFyciA9IHtkYXk6IHRvZGF5RGF5LCBob3VyczogdG9kYXlIb3Vyc0Fycn07XHJcblxyXG4vKiAgICAgbGV0IHRvbW9ycm93RGF0ZSA9IHJhd1RvbW9ycm93QXJyLmRhdGU7XHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd0FyciA9IFt0b21vcnJvd0RhdGUsIHRvbW9ycm93RGF5LCB0b21vcnJvd0hvdXJzQXJyXTsgKi9cclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5LCByYXdUb21vcnJvd0Fyci5kYXRlKTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93QXJyID0ge2RheTogdG9tb3Jyb3dEYXksIGhvdXJzOiB0b21vcnJvd0hvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXksIHJhd0xhc3REYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheUFyciA9IHtkYXk6IGxhc3REYXlEYXksIGhvdXJzOiBsYXN0RGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IFt0b2RheUFyciwgdG9tb3Jyb3dBcnIsIGxhc3REYXlBcnJdO1xyXG5cclxuICAgIHJldHVybiBmb3JlY2FzdEFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5QXJyID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheUFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9