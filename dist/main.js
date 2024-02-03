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
/* harmony export */   getPreviousDay: () => (/* binding */ getPreviousDay),
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

















function getPreviousDay() {

    let date = new Date()
    date.setDate(date.getDate() - 1);

    let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    return fullDate;
}



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
    constructor(obj, date, objCurrent){
        this.weatherText = obj.condition.text,
        this.weatherIcon = obj.condition.icon,
        this.maxTempC = obj.maxtemp_c,
        this.maxTempF = obj.maxtemp_f,
        this.minTempC = obj.mintemp_c,
        this.minTempF = obj.mintemp_f,
        this.tempC = obj.avgtemp_c,
        this.tempF = obj.avgtemp_f,
        this.tempC_feel = objCurrent ? objCurrent.tempC_feel : false,
        this.tempF_feel = objCurrent ? objCurrent.tempF_feel : false,
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
/* harmony export */   renderError: () => (/* binding */ renderError),
/* harmony export */   triggerDataDisplay: () => (/* binding */ triggerDataDisplay)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





function triggerDataDisplay(location, forecastArr, historyArr, day = "today"){


    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    handleErrorClass(false)

    // this renders always the same way //
    renderNear(forecastArr, historyArr, location)
    // today and current are the default values //
    renderPrincipal(/* currentWeather */ today, location, "today")
    renderHours(today, location)
    renderExtra(today, location)

   let chosenDay = ""
   let attributeVal = ""

   switch(true) {
        case day === "yesterday":
            chosenDay = yesterday
            attributeVal = "yesterday"
            break;
        case day === "tomorrow":
            chosenDay = tomorrow
            attributeVal = "tomorrow"
            break;
        case day === "lastDay":
            chosenDay = lastDay
            attributeVal = "lastDay"
            break;
   }

   if(day !== "today") {
        renderPrincipal(chosenDay.day, location, attributeVal)
        renderHours(chosenDay, location)
        renderExtra(chosenDay, location)
    }
}



function renderHours(forecast, location){
    
    let aside = document.querySelector("aside")

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){
            /* sliderContainer.firstElementChild.appendChild(setCardData("card-aside", hour, location)) */
            sliderContainer.firstElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setHourData)("card-aside", hour, location))
        } else if(i >= 12){

            /* sliderContainer.lastElementChild.appendChild(setCardData("card-aside", hour, location))  */ 
            sliderContainer.lastElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setHourData)("card-aside", hour, location)) 
        }    
   })
}



function renderPrincipal(weather, location, attributeVal){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    //principalContainer.appendChild(setCardData("card-principal", weather, location))
    principalContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setPrincipalData)("card-principal", weather, location, attributeVal))
}



function renderNear(forecastArr, historyArr, location){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr


    /* nearArr[0].appendChild(setCardData("card-near", yesterday.day, location))
    nearArr[1].appendChild(setCardData("card-near", today.day, location))
    nearArr[2].appendChild(setCardData("card-near", tomorrow.day, location))
    nearArr[3].appendChild(setCardData("card-near", lastDay.day, location)) */

    nearArr[0].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", yesterday.day, location, "data-day-yesterday"))
    nearArr[1].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", today.day, location, "data-day-today"))
    nearArr[2].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", tomorrow.day, location, "data-day-tomorrow"))
    nearArr[3].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", lastDay.day, location, "data-day-lastDay"))
}


function renderExtra(forecast, location){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    /* extraContainer.appendChild(setCardData("card-extra", extraData, location)); */
    extraContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setExtraData)("card-extra", extraData, location));
}

function renderError(){

    let body = document.body
   
    handleErrorClass(true)

    let principal = document.querySelector(".principal")
    principal.innerHTML = ""
    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createErrorCard)())
}

function handleErrorClass(error){

    let body = document.body

    let main = document.querySelector("main")

    let mainArr = Array.from(main.children)

    let aside = document.querySelector("aside")

    let elements = [body, main, mainArr, aside].flat()

    if(error) {

        elements.forEach(el => el.classList.add("error"))
    } else {
        
        elements.forEach(el => el.classList.remove("error"))
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
/* harmony export */   createErrorCard: () => (/* binding */ createErrorCard),
/* harmony export */   setCardData: () => (/* binding */ setCardData),
/* harmony export */   setExtraData: () => (/* binding */ setExtraData),
/* harmony export */   setHourData: () => (/* binding */ setHourData),
/* harmony export */   setNearData: () => (/* binding */ setNearData),
/* harmony export */   setPrincipalData: () => (/* binding */ setPrincipalData)
/* harmony export */ });
/* harmony import */ var _img_confused_black_line_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/confused-black-line.svg */ "./src/img/confused-black-line.svg");
/* harmony import */ var _img_confused_white_line_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/confused-white-line.svg */ "./src/img/confused-white-line.svg");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");









//let tempOpt = document.querySelector(".tempOpt")
let tempOpt = document.querySelector("ul :nth-child(2)")

function createElement(element, className) {

    let el = document.createElement(element)
    el.classList.add(className)
    return el
}

function createCard(){

    let card = createElement("article", "card")
    
    let place = createElement("p", "place")
    let date = createElement("p", "date")
    let wrapper = createElement("div", "wrapper")
    let temp = createElement("p", "temp")
    let tempFeel = createElement("p", "tempFeel")
    let tempMinMax = createElement("p", "tempMinMax")
    let cloud = createElement("p", "cloud")
    let precip = createElement("p", "precip")
    let humidity = createElement("p", "humidity")
    let time = createElement("p", "time")
    let snow = createElement("p", "snow")
    let wind = createElement("p", "wind")
    let uv = createElement("p", "uv")

    let img = createElement("img", "img")
    let sub = createElement("p", "sub")

   let cardArr = [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
                  humidity, snow, wind, uv, wrapper]

   cardArr.forEach(element => {card.appendChild(element)})

    return {card, cardArr}
}


function setCardData(className, weatherObj, locationObj, attributeName) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
         humidity, snow, wind, uv] = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_2__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    place.textContent = `${locationObj.name}, ${locationObj.country}`; 
    date.setAttribute(attributeName, "")
    date.textContent = `${weatherObj.date.slice(8)}/${weatherObj.date.slice(5, 7)}`;
    time.textContent = weatherObj.time;
    cloud.textContent = `${weatherObj.cloud} %`;
    humidity.textContent = `${weatherObj.avgHumidity} %`;
    wind.textContent = `${Number.parseInt(weatherObj.wind)} km`;
    uv.textContent = weatherObj.uv;

    temp.textContent = `${Number.parseInt(weatherObj.tempC)}º`;
    tempFeel.textContent = weatherObj.tempC_feel ? `${Number.parseInt(weatherObj.tempC_feel)}º` : tempFeel.classList.add("not");
    tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempC)}º/${Number.parseInt(weatherObj.minTempC)}º`;
    if( tempOpt.classList.contains("fara") /* tempOpt.className === "fara" */){ 
        console.log("ola k ase")
        temp.textContent = `${Number.parseInt(weatherObj.tempF)}º`;
        tempFeel.textContent = weatherObj.tempF_feel ? `${Number.parseInt(weatherObj.tempF_feel)}º` : tempFeel.classList.add("not");
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


function setPrincipalData(className, weatherObj, locationObj, attributeVal) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let { 0: img, 1: sub, 2: place, 3: temp,  6: date, 14: wrapper } = cardArr

    let weather = "";
    if (weatherObj.hasOwnProperty("current")) {
       weather = weatherObj.current
    } else {
        weather = weatherObj
    }

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_2__.iconSelector)(weather);
    sub.textContent = weather.weatherText;
    place.textContent = `${locationObj.name}, ${locationObj.country}`; 


    temp.textContent = tempOpt.classList.contains("fara") /* tempOpt.className === "fara" */ ? 
    `${Number.parseInt(weather.tempF)}º` : `${Number.parseInt(weather.tempC)}º`
                     
    date.setAttribute("data-day", attributeVal)
    date.textContent = `${weather.date.slice(8)}/${weather.date.slice(5, 7)}, average tº`;

    if (weatherObj.hasOwnProperty("current")) {
        date.textContent = "Today, currently";
    }

    wrapper.appendChild(place)
    wrapper.appendChild(date)
    
    return card
}

function setExtraData(className, weatherObj, locationObj) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let {4: tempFeel, 5: tempMinMax, 7: cloud, 8: precip, 10: humidity, 11: snow, 
            12: wind, 13: uv} = cardArr


    cloud.textContent = `${weatherObj.cloud} %`;
    humidity.textContent = `${weatherObj.avgHumidity} %`;
    wind.textContent = `${Number.parseInt(weatherObj.wind)} km`;
    uv.textContent = weatherObj.uv;

    precip.textContent = `${Number.parseInt(weatherObj.precipChance)} %`;
    snow.textContent = `${weatherObj.snowChance} %`;
    if(weatherObj.isHistory){ 
        precip.textContent = `${Number.parseInt(weatherObj.precipTotal)} mm`;
        snow.textContent = `${Number.parseInt(weatherObj.snowTotal)} mm`
    };

    tempFeel.textContent = weatherObj.tempC_feel ? 
    `${Number.parseInt(weatherObj.tempC_feel)}º` : tempFeel.classList.add("not");
    tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempC)}º/${Number.parseInt(weatherObj.minTempC)}º`;
    if(tempOpt.classList.contains("fara")) /* tempOpt.className === "fara" */{ 
        tempFeel.textContent = weatherObj.tempF_feel ? 
        `${Number.parseInt(weatherObj.tempF_feel)}º` : tempFeel.classList.add("not");
        tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempF)}º/${Number.parseInt(weatherObj.minTempF)}º`;
    } 
    
    return card
}

function setNearData(className, weatherObj, locationObj, attributeName) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let {0: img, 1: sub, 3: temp, 6: date } = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_2__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    date.setAttribute(attributeName, "")
    date.textContent = `${weatherObj.date.slice(8)}/${weatherObj.date.slice(5, 7)}`;

    temp.textContent = tempOpt.classList.contains("fara") /* tempOpt.className === "fara" */ ? 
    `${Number.parseInt(weatherObj.tempF)}º avg.` : `${Number.parseInt(weatherObj.tempC)}º avg.`;
    

    return card
}

function setHourData(className, weatherObj, locationObj) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let {0: img, 1: sub, 3: temp, 9: time} = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_2__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    time.textContent = weatherObj.time;

    temp.textContent = 
    weatherObj.isCelsius ? `${Number.parseInt(weatherObj.tempC)}º`
                         : `${Number.parseInt(weatherObj.tempF)}º`;

    return card
}

function createErrorCard(){

    let err = createElement("div", "error")
    let img = createElement("img", "error")
    let p = createElement("p", "error")
    img.src = _img_confused_black_line_svg__WEBPACK_IMPORTED_MODULE_0__
    p.textContent = "uh oh... location not found"
    err.appendChild(img)
    err.appendChild(p)

    return err
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

    /* let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)] */
    let location = getLocation(dataForecast)
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    console.log(forecastArr)

    return [location, forecastArr, historyArr]

}


function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;


    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

    let currentWeather = getCurrentWeather(obj)
    let todayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawTodayArr.day, rawTodayArr.date, currentWeather);
    let todayHoursArr = getHours(rawTodayArr);
    let todayObj = {current: currentWeather, day: todayDay, hours: todayHoursArr};

    let tomorrowDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawTomorrowArr.day, rawTomorrowArr.date);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowObj = {day: tomorrowDay, hours: tomorrowHoursArr};

    let lastDayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawLastDayArr.day, rawLastDayArr.date);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayObj = {day: lastDayDay, hours: lastDayHoursArr};

    let forecastArr = [todayObj, tomorrowObj, lastDayObj];

    console.log(forecastArr)

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

/***/ "./src/img/confused-black-line.svg":
/*!*****************************************!*\
  !*** ./src/img/confused-black-line.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0861ba0157fb52ce6a35.svg";

/***/ }),

/***/ "./src/img/confused-white-line.svg":
/*!*****************************************!*\
  !*** ./src/img/confused-white-line.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea987edb8c645b7224ff.svg";

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
/* harmony import */ var _img_confused_black_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/confused-black-line.svg */ "./src/img/confused-black-line.svg");
/* harmony import */ var _img_confused_white_line_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/confused-white-line.svg */ "./src/img/confused-white-line.svg");








let input = document.querySelector("input")
let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")
let tempOpt = document.querySelector("ul :nth-child(2)")
let theme = document.querySelector(".theme")
let near = document.querySelector(".near")
let nearArr = Array.from(near.children)
let dialog = document.querySelector("dialog")


input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
theme.addEventListener("click", changeTheme)
nearArr.forEach(element => element.addEventListener("click", nearCardsEvent))
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


    let cardDay = this.className

    let {location, forecastArr, historyArr} = retrieveData()

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr, cardDay)
}


function init() {
    
    
    let place = JSON.parse(localStorage.getItem("location"))

   try{
    getData(place.name)
   } 
   catch(err){
    console.log(err)
    getData("argentina")
   }
    //getData("buenos aires")
    //mainFunction("buenos aires")


    setTheme(localStorage.getItem("theme"))
    setTemp(localStorage.getItem("temp"))
    

}


function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = input.value 

    getData(inputVal)

}



async function getData(inputVal){

try{
    let [response, response2] = await Promise.all([
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=${inputVal}&days=3`),
        fetch(`http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=${inputVal}&dt=${(0,_auxiliaries__WEBPACK_IMPORTED_MODULE_1__.getPreviousDay)()}`)
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
    
       // showDialog()
       ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.renderError)()
    }  
} 


function showDialog(){
    dialog.showModal()

    let img = dialog.firstElementChild
    img.src = _img_confused_black_line_svg__WEBPACK_IMPORTED_MODULE_3__ 
}



/* function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
        localStorage.setItem("temp", "fara")
    } else { 
        this.textContent = "to Fahrenheit"
        localStorage.setItem("temp", "celsius")
    }

   let {location, forecastArr, historyArr} = retrieveData()

   triggerDataDisplay(location, forecastArr, historyArr, attr)
} */



function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    if(localStorage.getItem("temp") === "fara"){
        this.textContent = "to Celsius"
        setTemp("celsius")
    } else { 
        this.textContent = "to Fahrenheit"
        setTemp("fara")
    }

   let {location, forecastArr, historyArr} = retrieveData()

   ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr, attr)
}

function setTemp(temperature) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    localStorage.setItem("temp", temperature)
    tempOpt.className = temperature
}


/* function changeTheme(){

    let body = document.body

    if(body.classList.contains("theme-dark")){
        body.classList.remove("theme-dark")
        body.classList.add("theme-light")
        this.textContent = "Dark theme"
       
    } else {
        body.classList.remove("theme-light")
        body.classList.add("theme-dark")
        this.textContent = "Light theme"
    }
} */

function changeTheme(){

    if(localStorage.getItem("theme") === "theme-dark"){
        setTheme("theme-light")
        this.textContent = "to dark theme"
       
    } else{
        setTheme("theme-dark")
        this.textContent = "to light theme"
    }
}

function setTheme(theme){
    
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
}



async function dataHandler(dataForecast, dataHistory, day){

    let [location, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr, day)
}



function storeData(location, forecastArr, historyArr) {

    localStorage.setItem("location", JSON.stringify(location))
    localStorage.setItem("forecastArr", JSON.stringify(forecastArr))
    localStorage.setItem("historyArr", JSON.stringify(historyArr))

}

function retrieveData(){

    let location = JSON.parse(localStorage.getItem("location"))
    let forecastArr = JSON.parse(localStorage.getItem("forecastArr"))
    let historyArr = JSON.parse(localStorage.getItem("historyArr"))

    return {location, forecastArr, historyArr}
}











let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"
let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelIwQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUQ0RztBQUM1RztBQUN3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxpREFBVztBQUNyRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHlEQUF5RCxpREFBVztBQUNwRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzREFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRyxpR0FBaUcsU0FBUyxNQUFNLDREQUFjLEdBQUc7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0RBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMseURBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUNBQW1DO0FBQzNDO0FBQ0EsR0FBRyw2REFBa0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0VBQXdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcblxyXG5leHBvcnQge2NvbXBhcmVPYmplY3RzLCBpY29uU2VsZWN0b3IsIGdldFByZXZpb3VzRGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFByZXZpb3VzRGF5KCkge1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgbGV0IGZ1bGxEYXRlID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YFxyXG5cclxuICAgIHJldHVybiBmdWxsRGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLndlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXkgXHJcblxyXG4gICAgLy8vIFRFUk5BUlkgT1BFUkFUT1IgLy8vXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBcIlwiXHJcblxyXG4gIC8vLyBUSEUgRklSU1QgVEhJTkcgSSBESUQgV0FTIFRXTyBMT09QUywgT05FIEZPUiBEQVkgQU5EIE9USEVSIEZPUiBOSUdIVC5cclxuICAvLy8gQVdGVUwuIEFORCBIRUFWSUxZIE5FU1RFRC4gIFxyXG5cclxuICAvKiAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuICAgICAgIC8qICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG5cclxuIC8vLyBUSEVOIEkgVFJZIFRPIFVTRSBGT1IgT0YgTE9PUFMsIEJFQ0FVU0UgSSBXQU5URUQgVE8gQlJFQUsgVEhFIExPT1AgV0hFTiBJIEhBVkUgVEhFIEVMRU1FTlQgSSBXQU5URUQgXHJcblxyXG4vKiAgICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAgICAgZm9yIChjb25zdCBhcnIgb2YgZGF5QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIC8vLyBGSU5BTExZLCBJIERJRE5UIFdBTlQgVE8gVVNFIDIgRVFVQUwgTE9PUFMsIFNPIFJFU09MVkVEIFRPIFVTRSBBIFRFUk5BUlkgT1BFUkFUT1IgQU5EIFRIRU4gQSBTSU5HTEUgTE9PUC5cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodE9yRGF5KXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG5cclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltZ1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZWFzeUNhcihlKSB7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyBcInVwXCIgOiBcImRvd25cIlxyXG5cclxuICAgIGlmKGV2ZW50ID09PSBcInVwXCIpIHtcclxuICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikgIFxyXG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmxldCBlbGVtZW50cyA9IHtcclxuICAgIGJ0blVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIC8qIGNhcm91c2VsLnNsaWRlclVwICovZWFzeUNhciksXHJcblxyXG4gICAgYnRuRG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIC8qIGNhcm91c2VsLnNsaWRlckRvd24gKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBzbGlkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpXHJcbn1cclxuICAgICAgIFxyXG4gICAgIFxyXG5cclxuXHJcblxyXG4vLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCBCWSBUSEUgQVBJIChJVFMgUFJPUEVSVElFUywgVkFMVUVTLCBFVEMpIC8vL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RGaWx0ZXIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkRBWVwiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcbiAgICBcclxuICAgIGxldCBmb3JlY2FzdERheSA9IGZvcmVjYXN0QXJyWzBdLmRheVxyXG4gICAgbGV0IGhpc3RvcnlEYXkgPSBoaXN0b3J5QXJyWzBdLmRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheSlcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheSlcclxuXHJcbiAgICBsZXQgZm9yZWNhc3REYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdERheSlcclxuICAgIGxldCBoaXN0b3J5RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeURheSlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXlBcnIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkhPVVJTXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyID0gZm9yZWNhc3RBcnJbMF0uaG91clswXVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyID0gaGlzdG9yeUFyclswXS5ob3VyWzBdXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91cilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXIpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0SG91cilcclxuICAgIGxldCBoaXN0b3J5SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyQXJyKVxyXG5cclxuICAgIC8vLyBBQ1RVQUwgQ09NUEFSSVRJT04gLy8vICAgICAgXHJcbiAgICBjdXJyZW50RmlsdGVyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogbGV0IGNhcm91c2VsID0ge1xyXG4gICAgXHJcbiAgICB2YWw6IDAsXHJcbiAgICBcclxuICAgIHNsaWRlclVwKGUpIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gNDdcclxuICAgIFxyXG4gICAgICAgIGlmKGNhcm91c2VsLnZhbCA9PT0gMCB8fCBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25jZVwiKSkge3JldHVybn1cclxuXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJvbmNlXCIpXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuXHJcbiAgICAgICAgY2Fyb3VzZWwudmFsICs9IHZhbHVlXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLnN0eWxlLm1hcmdpblRvcCA9IGAke2Nhcm91c2VsLnZhbH1yZW1gXHJcbiAgICB9LFxyXG5cclxuICAgIHNsaWRlckRvd24oZSkge1xyXG5cclxuICAgICAgIGxldCB2YWx1ZSA9IC00NyBcclxuXHJcbiAgICAgICAgaWYoZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25jZVwiKSkge3JldHVybn1cclxuXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJvbmNlXCIpXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuXHJcbiAgICAgICAgY2Fyb3VzZWwudmFsICs9IHZhbHVlXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLnN0eWxlLm1hcmdpblRvcCA9IGAke2Nhcm91c2VsLnZhbH1yZW1gXHJcblxyXG4gICAgfVxyXG59ICovIiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCBvYmpDdXJyZW50KXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcENfZmVlbCA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iakN1cnJlbnQgPyBvYmpDdXJyZW50LnRlbXBGX2ZlZWwgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy51diA9IG9iai51dixcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqLm5hbWUsXHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gb2JqLmNvdW50cnksXHJcbiAgICAgICAgdGhpcy5yZWdpb24gPSBvYmoucmVnaW9uXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3NldENhcmREYXRhLCBzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YSwgc2V0RXh0cmFEYXRhLCBzZXRIb3VyRGF0YSwgY3JlYXRlRXJyb3JDYXJkfSBmcm9tIFwiLi9kb21cIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXksIHJlbmRlckVycm9yfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSA9IFwidG9kYXlcIil7XHJcblxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIGhhbmRsZUVycm9yQ2xhc3MoZmFsc2UpXHJcblxyXG4gICAgLy8gdGhpcyByZW5kZXJzIGFsd2F5cyB0aGUgc2FtZSB3YXkgLy9cclxuICAgIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGxvY2F0aW9uKVxyXG4gICAgLy8gdG9kYXkgYW5kIGN1cnJlbnQgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcyAvL1xyXG4gICAgcmVuZGVyUHJpbmNpcGFsKC8qIGN1cnJlbnRXZWF0aGVyICovIHRvZGF5LCBsb2NhdGlvbiwgXCJ0b2RheVwiKVxyXG4gICAgcmVuZGVySG91cnModG9kYXksIGxvY2F0aW9uKVxyXG4gICAgcmVuZGVyRXh0cmEodG9kYXksIGxvY2F0aW9uKVxyXG5cclxuICAgbGV0IGNob3NlbkRheSA9IFwiXCJcclxuICAgbGV0IGF0dHJpYnV0ZVZhbCA9IFwiXCJcclxuXHJcbiAgIHN3aXRjaCh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwieWVzdGVyZGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHllc3RlcmRheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcInllc3RlcmRheVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInRvbW9ycm93XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHRvbW9ycm93XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwidG9tb3Jyb3dcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJsYXN0RGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IGxhc3REYXlcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJsYXN0RGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgIH1cclxuXHJcbiAgIGlmKGRheSAhPT0gXCJ0b2RheVwiKSB7XHJcbiAgICAgICAgcmVuZGVyUHJpbmNpcGFsKGNob3NlbkRheS5kYXksIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICAgICAgcmVuZGVySG91cnMoY2hvc2VuRGF5LCBsb2NhdGlvbilcclxuICAgICAgICByZW5kZXJFeHRyYShjaG9zZW5EYXksIGxvY2F0aW9uKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvdXJzKGZvcmVjYXN0LCBsb2NhdGlvbil7XHJcbiAgICBcclxuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKVxyXG5cclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IGhvdXJzID0gZm9yZWNhc3QuaG91cnNcclxuXHJcbiAgICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcbiAgICAgICAgICAgIC8qIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKSAqL1xyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0SG91ckRhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgICAgICB9IGVsc2UgaWYoaSA+PSAxMil7XHJcblxyXG4gICAgICAgICAgICAvKiBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKSAgKi8gXHJcbiAgICAgICAgICAgIHNsaWRlckNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldEhvdXJEYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpIFxyXG4gICAgICAgIH0gICAgXHJcbiAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKHdlYXRoZXIsIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpe1xyXG4gICAgXHJcbiAgICBsZXQgcHJpbmNpcGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgLy9wcmluY2lwYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLXByaW5jaXBhbFwiLCB3ZWF0aGVyLCBsb2NhdGlvbikpXHJcbiAgICBwcmluY2lwYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0UHJpbmNpcGFsRGF0YShcImNhcmQtcHJpbmNpcGFsXCIsIHdlYXRoZXIsIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQgbmVhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXJDb250YWluZXIuY2hpbGRyZW4pXHJcblxyXG4gICAgbmVhckFyci5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiKVxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuXHJcbiAgICAvKiBuZWFyQXJyWzBdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHllc3RlcmRheS5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbMV0uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHRvbW9ycm93LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclszXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCBsYXN0RGF5LmRheSwgbG9jYXRpb24pKSAqL1xyXG5cclxuICAgIG5lYXJBcnJbMF0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgeWVzdGVyZGF5LmRheSwgbG9jYXRpb24sIFwiZGF0YS1kYXkteWVzdGVyZGF5XCIpKVxyXG4gICAgbmVhckFyclsxXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB0b2RheS5kYXksIGxvY2F0aW9uLCBcImRhdGEtZGF5LXRvZGF5XCIpKVxyXG4gICAgbmVhckFyclsyXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB0b21vcnJvdy5kYXksIGxvY2F0aW9uLCBcImRhdGEtZGF5LXRvbW9ycm93XCIpKVxyXG4gICAgbmVhckFyclszXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCBsYXN0RGF5LmRheSwgbG9jYXRpb24sIFwiZGF0YS1kYXktbGFzdERheVwiKSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0LCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IGV4dHJhRGF0YSA9IGZvcmVjYXN0LmRheVxyXG5cclxuICAgIGxldCBleHRyYUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFcIilcclxuICAgIGV4dHJhQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgLyogZXh0cmFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWV4dHJhXCIsIGV4dHJhRGF0YSwgbG9jYXRpb24pKTsgKi9cclxuICAgIGV4dHJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldEV4dHJhRGF0YShcImNhcmQtZXh0cmFcIiwgZXh0cmFEYXRhLCBsb2NhdGlvbikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJFcnJvcigpe1xyXG5cclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG4gICBcclxuICAgIGhhbmRsZUVycm9yQ2xhc3ModHJ1ZSlcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3JlYXRlRXJyb3JDYXJkKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yQ2xhc3MoZXJyb3Ipe1xyXG5cclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcclxuXHJcbiAgICBsZXQgbWFpbkFyciA9IEFycmF5LmZyb20obWFpbi5jaGlsZHJlbilcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIilcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbYm9keSwgbWFpbiwgbWFpbkFyciwgYXNpZGVdLmZsYXQoKVxyXG5cclxuICAgIGlmKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgaW1nRmFjZSBmcm9tIFwiLi9pbWcvY29uZnVzZWQtYmxhY2stbGluZS5zdmdcIjtcclxuaW1wb3J0IGltZ0ZhY2UyIGZyb20gXCIuL2ltZy9jb25mdXNlZC13aGl0ZS1saW5lLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuXHJcblxyXG5leHBvcnQge3NldENhcmREYXRhLCBzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YSwgc2V0RXh0cmFEYXRhLCBzZXRIb3VyRGF0YSwgY3JlYXRlRXJyb3JDYXJkfVxyXG5cclxuLy9sZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcE9wdFwiKVxyXG5sZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIFwiY2FyZFwiKVxyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInBsYWNlXCIpXHJcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF0ZVwiKVxyXG4gICAgbGV0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid3JhcHBlclwiKVxyXG4gICAgbGV0IHRlbXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBcIilcclxuICAgIGxldCB0ZW1wRmVlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcEZlZWxcIilcclxuICAgIGxldCB0ZW1wTWluTWF4ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wTWluTWF4XCIpXHJcbiAgICBsZXQgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNsb3VkXCIpXHJcbiAgICBsZXQgcHJlY2lwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBcIilcclxuICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiaHVtaWRpdHlcIilcclxuICAgIGxldCB0aW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0aW1lXCIpXHJcbiAgICBsZXQgc25vdyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic25vd1wiKVxyXG4gICAgbGV0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndpbmRcIilcclxuICAgIGxldCB1diA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXZcIilcclxuXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImltZ1wiKVxyXG4gICAgbGV0IHN1YiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic3ViXCIpXHJcblxyXG4gICBsZXQgY2FyZEFyciA9IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2LCB3cmFwcGVyXVxyXG5cclxuICAgY2FyZEFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge2NhcmQuYXBwZW5kQ2hpbGQoZWxlbWVudCl9KVxyXG5cclxuICAgIHJldHVybiB7Y2FyZCwgY2FyZEFycn1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldENhcmREYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZU5hbWUpIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBcIlwiKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZiggdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpIC8qIHRlbXBPcHQuY2xhc3NOYW1lID09PSBcImZhcmFcIiAqLyl7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib2xhIGsgYXNlXCIpXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRl9mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wRil9wrpgO1xyXG4gICAgfSBcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRQcmluY2lwYWxEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZVZhbCkge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHsgMDogaW1nLCAxOiBzdWIsIDI6IHBsYWNlLCAzOiB0ZW1wLCAgNjogZGF0ZSwgMTQ6IHdyYXBwZXIgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IFwiXCI7XHJcbiAgICBpZiAod2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgIHdlYXRoZXIgPSB3ZWF0aGVyT2JqLmN1cnJlbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VhdGhlciA9IHdlYXRoZXJPYmpcclxuICAgIH1cclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSAvKiB0ZW1wT3B0LmNsYXNzTmFtZSA9PT0gXCJmYXJhXCIgKi8gPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQyl9wrpgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXIuZGF0ZS5zbGljZSg1LCA3KX0sIGF2ZXJhZ2UgdMK6YDtcclxuXHJcbiAgICBpZiAod2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gXCJUb2RheSwgY3VycmVudGx5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwbGFjZSlcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXh0cmFEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmopIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7NDogdGVtcEZlZWwsIDU6IHRlbXBNaW5NYXgsIDc6IGNsb3VkLCA4OiBwcmVjaXAsIDEwOiBodW1pZGl0eSwgMTE6IHNub3csIFxyXG4gICAgICAgICAgICAxMjogd2luZCwgMTM6IHV2fSA9IGNhcmRBcnJcclxuXHJcblxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wQ19mZWVsID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZih0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpIC8qIHRlbXBPcHQuY2xhc3NOYW1lID09PSBcImZhcmFcIiAqL3sgXHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwgPyBcclxuICAgICAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRl9mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wRil9wrpgO1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmVhckRhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlTmFtZSkge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHswOiBpbWcsIDE6IHN1YiwgMzogdGVtcCwgNjogZGF0ZSB9ID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgXCJcIilcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSAvKiB0ZW1wT3B0LmNsYXNzTmFtZSA9PT0gXCJmYXJhXCIgKi8gPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CuiBhdmcuYCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CuiBhdmcuYDtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEhvdXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmopIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDk6IHRpbWV9ID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gXHJcbiAgICB3ZWF0aGVyT2JqLmlzQ2Vsc2l1cyA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CumBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6YDtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFcnJvckNhcmQoKXtcclxuXHJcbiAgICBsZXQgZXJyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImVycm9yXCIpXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImVycm9yXCIpXHJcbiAgICBsZXQgcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZXJyb3JcIilcclxuICAgIGltZy5zcmMgPSBpbWdGYWNlXHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJ1aCBvaC4uLiBsb2NhdGlvbiBub3QgZm91bmRcIlxyXG4gICAgZXJyLmFwcGVuZENoaWxkKGltZylcclxuICAgIGVyci5hcHBlbmRDaGlsZChwKVxyXG5cclxuICAgIHJldHVybiBlcnJcclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGN1cnJlbnRIb3VyQ2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQ19mZWVsKX3CumBcclxuICAgIGlmKCF3ZWF0aGVyLmlzQ2Vsc2l1cyl7XHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEZfZmVlbCl9wrpgfTtcclxuXHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDsgXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGBOdWJlczogJHt3ZWF0aGVyLmNsb3VkfSVgO1xyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYHByZWNpcDogJHt3ZWF0aGVyLnByZWNpcFRvdGFsfW1tYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWVkYWQ6ICR7d2VhdGhlci5odW1pZGl0eX0lYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgc25vdyAke3dlYXRoZXIuc25vd0NoYW5jZX0lYDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRpbWU7XHJcblxyXG5cclxuICAgIHJldHVybiAgY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsRGF5Q2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbZGF0ZU9iaiwgZnVsbERheU9iaiwgZnVsbEhvdXJzQXJyXSA9IHdlYXRoZXJcclxuICAgIGNvbnNvbGUubG9nKGZ1bGxEYXlPYmopXHJcbiAgICBcclxuICAgIGxldCBkYXRlRm9ybWF0ID0gYCR7ZGF0ZU9iai5zbGljZSg4KX0vJHtkYXRlT2JqLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3IoZnVsbERheU9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSBmdWxsRGF5T2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2Z1bGxEYXlPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLndpbmRNYXgpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoudXY7XHJcbiAgICBcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouYXZnVGVtcEMpfcK6YDtcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5tYXhUZW1wQyl9wrovJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5taW5UZW1wQyl9wrpgO1xyXG4gICAgaWYoIWZ1bGxEYXlPYmouaXNDZWxzaXVzKXsgXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wRil9wrpgfTtcclxuXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKGZ1bGxEYXlPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufSAqL1xyXG5cclxuXHJcbiIsImltcG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259IGZyb20gXCIuL2NsYXNzXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIC8qIGxldCB3ZWF0aGVyQW5kTG9jYXRpb24gPSBbZ2V0Q3VycmVudFdlYXRoZXIoZGF0YUZvcmVjYXN0KSwgZ2V0TG9jYXRpb24oZGF0YUZvcmVjYXN0KV0gKi9cclxuICAgIGxldCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG5cclxuICAgIHJldHVybiBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IGdldEN1cnJlbnRXZWF0aGVyKG9iailcclxuICAgIGxldCB0b2RheURheSA9IG5ldyBEYXkocmF3VG9kYXlBcnIuZGF5LCByYXdUb2RheUFyci5kYXRlLCBjdXJyZW50V2VhdGhlcik7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheU9iaiA9IHtjdXJyZW50OiBjdXJyZW50V2VhdGhlciwgZGF5OiB0b2RheURheSwgaG91cnM6IHRvZGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5LCByYXdUb21vcnJvd0Fyci5kYXRlKTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93T2JqID0ge2RheTogdG9tb3Jyb3dEYXksIGhvdXJzOiB0b21vcnJvd0hvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXksIHJhd0xhc3REYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheU9iaiA9IHtkYXk6IGxhc3REYXlEYXksIGhvdXJzOiBsYXN0RGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IFt0b2RheU9iaiwgdG9tb3Jyb3dPYmosIGxhc3REYXlPYmpdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG5cclxuICAgIHJldHVybiBmb3JlY2FzdEFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5T2JqID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHMsIGdldFByZXZpb3VzRGF5fSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge3RyaWdnZXJEYXRhRGlzcGxheSwgcmVuZGVyRXJyb3J9IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuXHJcbmltcG9ydCBpbWdGYWNlIGZyb20gXCIuL2ltZy9jb25mdXNlZC1ibGFjay1saW5lLnN2Z1wiO1xyXG5pbXBvcnQgaW1nRmFjZTIgZnJvbSBcIi4vaW1nL2NvbmZ1c2VkLXdoaXRlLWxpbmUuc3ZnXCI7XHJcblxyXG5cclxubGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXHJcbmxldCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpXHJcbmxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxubGV0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVwiKVxyXG5sZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG5sZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhci5jaGlsZHJlbilcclxubGV0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIilcclxuXHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKVxyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSlcclxudGVtcE9wdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVGVtcClcclxudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRoZW1lKVxyXG5uZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWFyQ2FyZHNFdmVudCkpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdClcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TWVudShlKSB7XHJcbiAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoZSkge1xyXG5cclxuICAgIGlmKCFuYXYuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tZW51XCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudCgpIHtcclxuXHJcblxyXG4gICAgbGV0IGNhcmREYXkgPSB0aGlzLmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCB7bG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyfSA9IHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICAgdHJpZ2dlckRhdGFEaXNwbGF5KGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgY2FyZERheSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2F0aW9uXCIpKVxyXG5cclxuICAgdHJ5e1xyXG4gICAgZ2V0RGF0YShwbGFjZS5uYW1lKVxyXG4gICB9IFxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgZ2V0RGF0YShcImFyZ2VudGluYVwiKVxyXG4gICB9XHJcbiAgICAvL2dldERhdGEoXCJidWVub3MgYWlyZXNcIilcclxuICAgIC8vbWFpbkZ1bmN0aW9uKFwiYnVlbm9zIGFpcmVzXCIpXHJcblxyXG5cclxuICAgIHNldFRoZW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpXHJcbiAgICBzZXRUZW1wKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFwiKSlcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZSl7XHJcblxyXG4gICAgaWYoZS5rZXkgIT09IFwiRW50ZXJcIikge3JldHVybn1cclxuXHJcbiAgICBsZXQgaW5wdXRWYWwgPSBpbnB1dC52YWx1ZSBcclxuXHJcbiAgICBnZXREYXRhKGlucHV0VmFsKVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGlucHV0VmFsKXtcclxuXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmRheXM9M2ApLFxyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmR0PSR7Z2V0UHJldmlvdXNEYXkoKX1gKVxyXG4gICAgXSlcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlMi5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIHJlcXVlc3RcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUZvcmVjYXN0KVxyXG4gICAgY29uc29sZS5sb2coZGF0YUhpc3RvcnkpXHJcblxyXG4gLyogICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpICovXHJcblxyXG4gICAgLy8vQUNBQUFBQUEvLy9cclxuICAgIC8vbGV0IFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KSBcclxuXHJcbiBcclxuICAgICAvL3RyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSBcclxuXHJcbiAgIC8vcmV0dXJuIFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XVxyXG4gICBkYXRhSGFuZGxlcihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxufSBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgXHJcbiAgICAgICAvLyBzaG93RGlhbG9nKClcclxuICAgICAgIHJlbmRlckVycm9yKClcclxuICAgIH0gIFxyXG59IFxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coKXtcclxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxyXG5cclxuICAgIGxldCBpbWcgPSBkaWFsb2cuZmlyc3RFbGVtZW50Q2hpbGRcclxuICAgIGltZy5zcmMgPSBpbWdGYWNlIFxyXG59XHJcblxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIilcclxuICAgIGxldCBhdHRyID0gZGF0ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiKVxyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImZhcmFcIilcclxuXHJcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpe1xyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIENlbHNpdXNcIlxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFwiLCBcImZhcmFcIilcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIEZhaHJlbmhlaXRcIlxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFwiLCBcImNlbHNpdXNcIilcclxuICAgIH1cclxuXHJcbiAgIGxldCB7bG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyfSA9IHJldHJpZXZlRGF0YSgpXHJcblxyXG4gICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBhdHRyKVxyXG59ICovXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIilcclxuICAgIGxldCBhdHRyID0gZGF0ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiKVxyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFwiKSA9PT0gXCJmYXJhXCIpe1xyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIENlbHNpdXNcIlxyXG4gICAgICAgIHNldFRlbXAoXCJjZWxzaXVzXCIpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBGYWhyZW5oZWl0XCJcclxuICAgICAgICBzZXRUZW1wKFwiZmFyYVwiKVxyXG4gICAgfVxyXG5cclxuICAgbGV0IHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9ID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGF0dHIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRlbXAodGVtcGVyYXR1cmUpIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wXCIsIHRlbXBlcmF0dXJlKVxyXG4gICAgdGVtcE9wdC5jbGFzc05hbWUgPSB0ZW1wZXJhdHVyZVxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gY2hhbmdlVGhlbWUoKXtcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgICBpZihib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLWRhcmtcIikpe1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLWRhcmtcIilcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1saWdodFwiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIkRhcmsgdGhlbWVcIlxyXG4gICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLWxpZ2h0XCIpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwidGhlbWUtZGFya1wiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIkxpZ2h0IHRoZW1lXCJcclxuICAgIH1cclxufSAqL1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUoKXtcclxuXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09PSBcInRoZW1lLWRhcmtcIil7XHJcbiAgICAgICAgc2V0VGhlbWUoXCJ0aGVtZS1saWdodFwiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIGRhcmsgdGhlbWVcIlxyXG4gICAgICAgXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgc2V0VGhlbWUoXCJ0aGVtZS1kYXJrXCIpXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gbGlnaHQgdGhlbWVcIlxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSl7XHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYXRhSGFuZGxlcihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5LCBkYXkpe1xyXG5cclxuICAgIGxldCBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIHN0b3JlRGF0YShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcblxyXG4gICAgdHJpZ2dlckRhdGFEaXNwbGF5KGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgZGF5KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpIHtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RBcnJcIiwgSlNPTi5zdHJpbmdpZnkoZm9yZWNhc3RBcnIpKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaXN0b3J5QXJyXCIsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnlBcnIpKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCl7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2F0aW9uXCIpKVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0QXJyXCIpKVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeUFyclwiKSlcclxuXHJcbiAgICByZXR1cm4ge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=