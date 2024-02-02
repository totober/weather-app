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
/* harmony export */   triggerDataDisplay: () => (/* binding */ triggerDataDisplay)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





function triggerDataDisplay(/* weatherAndLocation */ location, forecastArr, historyArr, day){

    /* let [currentWeather, location] = weatherAndLocation */
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    // today and current are the default values //
    renderPrincipal(/* currentWeather */ today, location, "today")
    renderNear(forecastArr, historyArr, location)
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

/*     if (forecast.hasOwnProperty("current")) {
        console.log("wenas")
        extraContainer.appendChild(setCardData("card-extra", extraData, location));
    } */

    let extraData = forecast.day
    console.log(forecast)
    console.log(extraData)

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
/* harmony export */   setCardData: () => (/* binding */ setCardData),
/* harmony export */   setNearData: () => (/* binding */ setNearData),
/* harmony export */   setPrincipalData: () => (/* binding */ setPrincipalData)
/* harmony export */ });
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");




let tempOpt = document.querySelector(".tempOpt")


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

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weatherObj);
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
    if( tempOpt.classList.contains("fara")){ 
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

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
        humidity, snow, wind, uv, wrapper] = cardArr

    let weather = "";
    if (weatherObj.hasOwnProperty("current")) {
       weather = weatherObj.current
    } else {
        weather = weatherObj
    }

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weather);
    sub.textContent = weatherObj.weatherText;
    place.textContent = `${locationObj.name}, ${locationObj.country}`; 


    temp.textContent = tempOpt.classList.contains("fara") ? 
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

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
        humidity, snow, wind, uv] = cardArr


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
    if(tempOpt.classList.contains("fara")){ 
        tempFeel.textContent = weatherObj.tempF_feel ? 
        `${Number.parseInt(weatherObj.tempF_feel)}º` : tempFeel.classList.add("not");
        tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempF)}º/${Number.parseInt(weatherObj.minTempF)}º`;
    } 
    
    return card
}

function setNearData(className, weatherObj, locationObj, attributeName) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
        humidity, snow, wind, uv] = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    date.setAttribute(attributeName, "")
    date.textContent = `${weatherObj.date.slice(8)}/${weatherObj.date.slice(5, 7)}`;

    temp.textContent = tempOpt.classList.contains("fara") ? 
    `${Number.parseInt(weatherObj.tempF)}º avg.` : `${Number.parseInt(weatherObj.tempC)}º avg.`;
    

    return card
}

function setHourData(className, weatherObj, locationObj) {

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
        humidity, snow, wind, uv] = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_0__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    time.textContent = weatherObj.time;

    temp.textContent = 
    weatherObj.isCelsius ? `${Number.parseInt(weatherObj.tempC)}º`
                         : `${Number.parseInt(weatherObj.tempF)}º`;

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
let tempOpt = document.querySelector(".tempOpt")
let theme = document.querySelector(".theme")

input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
theme.addEventListener("click", changeTheme)
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

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    
    getData(placeVal, cardDay)
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
    //triggerDataDisplay()
}



async function getData(inputVal, day = "today"){

console.log(day)

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
   dataHandler(dataForecast, dataHistory, day)

} catch(err){
    console.log(err)

    }  
} 


function changeTemp() {

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
    } else { 
        this.textContent = "to Fahrenheit"
    }

    //getData(placeVal, attr)

   let [location, forecastArr, historyArr] = retrieveData()
   console.log("aca devolvemos la data")

   ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr, attr)

   console.log("ERA GUARDAR LOS DATOS PAPAAAAAA")
 
}

function changeTheme(){

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


async function dataHandler(dataForecast, dataHistory, day){

    let [location, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)
    console.log("aca store data")

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

    return [location, forecastArr, historyArr]
}









let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0U7QUFDSTtBQUNNO0FBQ0k7QUFDUjtBQUNSO0FBQ0U7QUFDTTtBQUNJO0FBQ1I7QUFDRjtBQUN0QztBQUNBO0FBQ3FEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQixHQUFHLG9CQUFvQixHQUFHLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZDQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQVE7QUFDaEU7QUFDQTtBQUNBLHFGQUFxRiwrQ0FBVTtBQUMvRjtBQUNBLHlDQUF5QywyQ0FBTTtBQUMvQztBQUNBO0FBQ0EsWUFBWSw0Q0FBTztBQUNuQjtBQUNBLG1DQUFtQyw4Q0FBUztBQUM1QztBQUNBLG1CQUFtQiwyQ0FBTTtBQUN6QjtBQUNBLG9CQUFvQiw0Q0FBTztBQUMzQjtBQUNBO0FBQ0EsMkRBQTJELCtDQUFVO0FBQ3JFO0FBQ0E7QUFDQSwyREFBMkQsaURBQVk7QUFDdkU7QUFDQSxpQ0FBaUMsaURBQVk7QUFDN0M7QUFDQSxtQ0FBbUMsbURBQWM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelIwQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RGdFO0FBQ2hFO0FBQzJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGlEQUFXO0FBQ3JFLFVBQVU7QUFDVjtBQUNBLHlEQUF5RCxpREFBVztBQUNwRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzREFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBVztBQUN0QywyQkFBMkIsaURBQVc7QUFDdEMsMkJBQTJCLGlEQUFXO0FBQ3RDLDJCQUEyQixpREFBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaURBQVc7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xINEM7QUFDNUM7QUFDbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBWTtBQUMxQjtBQUNBLDJCQUEyQixpQkFBaUIsSUFBSSxvQkFBb0I7QUFDcEU7QUFDQSwwQkFBMEIseUJBQXlCLEdBQUcsNEJBQTRCO0FBQ2xGO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3Qyw4QkFBOEIsd0JBQXdCO0FBQ3RELDBCQUEwQixrQ0FBa0M7QUFDNUQ7QUFDQTtBQUNBLDBCQUEwQixrQ0FBa0M7QUFDNUQsc0RBQXNELHVDQUF1QztBQUM3RixnQ0FBZ0MscUNBQXFDLElBQUkscUNBQXFDO0FBQzlHO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFLDBEQUEwRCx1Q0FBdUM7QUFDakcsb0NBQW9DLHFDQUFxQyxJQUFJLHFDQUFxQztBQUNsSDtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0EsZ0NBQWdDLHlDQUF5QztBQUN6RSw4QkFBOEIsdUNBQXVDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFZO0FBQzFCO0FBQ0EsMkJBQTJCLGlCQUFpQixJQUFJLG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtCQUErQixRQUFRLCtCQUErQjtBQUM3RTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQixHQUFHLHlCQUF5QjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0JBQWtCO0FBQzdDLDhCQUE4Qix3QkFBd0I7QUFDdEQsMEJBQTBCLGtDQUFrQztBQUM1RDtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0EsZ0NBQWdDLHlDQUF5QztBQUN6RSw4QkFBOEIsdUNBQXVDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUNBQXVDO0FBQzlDLGdDQUFnQyxxQ0FBcUMsSUFBSSxxQ0FBcUM7QUFDOUc7QUFDQTtBQUNBLFdBQVcsdUNBQXVDO0FBQ2xELG9DQUFvQyxxQ0FBcUMsSUFBSSxxQ0FBcUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVk7QUFDMUI7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUIsR0FBRyw0QkFBNEI7QUFDbEY7QUFDQTtBQUNBLE9BQU8sa0NBQWtDLGFBQWEsa0NBQWtDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0JBQStCO0FBQ3pELGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQSw4QkFBOEIsK0JBQStCO0FBQzdELHNDQUFzQyxvQ0FBb0M7QUFDMUU7QUFDQSwyQkFBMkIsY0FBYyxJQUFJLGlCQUFpQjtBQUM5RCxrQ0FBa0MsY0FBYztBQUNoRCxvQ0FBb0Msb0JBQW9CO0FBQ3hELHVDQUF1QyxpQkFBaUI7QUFDeEQsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLEdBQUcsb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQsMEJBQTBCLHFDQUFxQztBQUMvRDtBQUNBO0FBQ0EsOEJBQThCLHFDQUFxQztBQUNuRSwwQkFBMEIscUNBQXFDLElBQUkscUNBQXFDO0FBQ3hHO0FBQ0EsOEJBQThCLHFDQUFxQyxJQUFJLHFDQUFxQztBQUM1RyxrQ0FBa0MscUNBQXFDO0FBQ3ZFO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFLDhCQUE4Qix1Q0FBdUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xRMkQ7QUFDM0Q7QUFDaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQUc7QUFDMUI7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSwwQkFBMEIsdUNBQUc7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSx5QkFBeUIsdUNBQUc7QUFDNUI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVDQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3Q0FBSTtBQUNyQixLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJtRDtBQUNVO0FBQ2hCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csU0FBUztBQUMzRyxpR0FBaUcsU0FBUyxNQUFNLDREQUFjLEdBQUc7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNkRBQWtCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtFQUF3QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VuSW1nIGZyb20gXCIuL2ltZy9zdW4tcy5zdmdcIlxyXG5pbXBvcnQgbW9vbkltZyBmcm9tIFwiLi9pbWcvbW9vbi1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlEYXlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeURheS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlOaWdodEltZyBmcm9tIFwiLi9pbWcvY2xvdWR5TmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgdGh1bmRlckltZyBmcm9tIFwiLi9pbWcvdGh1bmRlci1zLnN2Z1wiXHJcbmltcG9ydCBmb2dJbWcgZnJvbSBcIi4vaW1nL2ZvZy1zLnN2Z1wiXHJcbmltcG9ydCByYWluSW1nIGZyb20gXCIuL2ltZy9yYWluLXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5EYXlJbWcgZnJvbSBcIi4vaW1nL3JhaW5EYXktcy5zdmdcIlxyXG5pbXBvcnQgcmFpbk5pZ2h0SW1nIGZyb20gXCIuL2ltZy9yYWluTmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgc2xlZXRJbWcgZnJvbSBcIi4vaW1nL3NsZWV0LXMuc3ZnXCJcclxuaW1wb3J0IHNub3dJbWcgZnJvbSBcIi4vaW1nL3Nub3ctcy5zdmdcIlxyXG5cclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3RvciwgZ2V0UHJldmlvdXNEYXl9XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UHJldmlvdXNEYXkoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuXHJcbiAgICBsZXQgZnVsbERhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gXHJcblxyXG4gICAgcmV0dXJuIGZ1bGxEYXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLyBBUlJBWVMgT0JKRUNUIEZPUiBJQ09OIENPTVBBUklUSU9OIC8vL1xyXG5cclxubGV0IGljb25zT2JqID0ge1xyXG5cclxuICAgIHNub3c6IFtcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsIFwiQmxvd2luZyBzbm93XCIsIFwiQmxpenphcmRcIiwgXCJQYXRjaHkgbGlnaHQgc25vd1wiLCBcIkxpZ2h0IHNub3dcIiwgXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIiwgXCJNb2RlcmF0ZSBzbm93XCIsIFwiUGF0Y2h5IGhlYXZ5IHNub3dcIiwgXCJIZWF2eSBzbm93XCIsIFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsIHNub3dJbWddLFxyXG5cclxuICAgIHNsZWV0OiBbXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIiwgXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsIFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgICAgICAgICBcIkZyZWV6aW5nIGRyaXp6bGVcIiwgXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsIFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgICAgICAgICAgXCJMaWdodCBzbGVldFwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsIFwiSWNlIHBlbGxldHNcIiwgXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLCBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgXHJcbiAgICAgICAgICAgIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBzbGVldEltZ10sXHJcblxyXG4gICAgdGh1bmRlcjogW1wiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgICAgICAgICAgXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLCB0aHVuZGVySW1nXSxcclxuXHJcbiAgICBmb2c6IFtcIk1pc3RcIiwgXCJGb2dcIiwgXCJGcmVlemluZyBmb2dcIiwgZm9nSW1nXSxcclxuXHJcbiAgICByYWluOiBbXCJMaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpblwiLCBcIkhlYXZ5IHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLCBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgICAgICAgICAgcmFpbkltZ10sXHJcbiAgICBcclxuICAgIGNsb3VkeTogW1wiQ2xvdWR5XCIsIFwiT3ZlcmNhc3RcIiwgY2xvdWR5SW1nXSxcclxuXHJcbiAgICBzdW46IFtcIlN1bm55XCIsIHN1bkltZ10sXHJcblxyXG4gICAgbW9vbjogW1wiQ2xlYXJcIiwgbW9vbkltZ10sXHJcblxyXG4gICAgcmFpbkRheTogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCBcIlBhdGNoeSByYWluIG5lYXJieVwiLCByYWluRGF5SW1nXSxcclxuXHJcbiAgICByYWluTmlnaHQ6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbk5pZ2h0SW1nXSxcclxuXHJcbiAgICBjbG91ZHlEYXk6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5RGF5SW1nXSxcclxuXHJcbiAgICBjbG91ZHlOaWdodDogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlOaWdodEltZ10sXHJcblxyXG4gICAgZGF5QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN1biwgdGhpcy5yYWluRGF5LCB0aGlzLmNsb3VkeURheSwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdXHJcbiAgICB9LFxyXG5cclxuICAgIG5pZ2h0QXJyKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLm1vb24sIHRoaXMucmFpbk5pZ2h0LCB0aGlzLmNsb3VkeU5pZ2h0LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF0gXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpY29uU2VsZWN0b3Iob2JqKXtcclxuXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuXHJcbiAgICAvLy8gVEVSTkFSWSBPUEVSQVRPUiAvLy9cclxuICAgIGxldCBuaWdodE9yRGF5ID0gaXNEYXkgPyBpY29uc09iai5kYXlBcnIoKSA6IGljb25zT2JqLm5pZ2h0QXJyKCk7XHJcblxyXG4gICAgbGV0IGltZyA9IFwiXCJcclxuXHJcbiAgLy8vIFRIRSBGSVJTVCBUSElORyBJIERJRCBXQVMgVFdPIExPT1BTLCBPTkUgRk9SIERBWSBBTkQgT1RIRVIgRk9SIE5JR0hULlxyXG4gIC8vLyBBV0ZVTC4gQU5EIEhFQVZJTFkgTkVTVEVELiAgXHJcblxyXG4gIC8qICAgaWYoIWlzRGF5KSB7XHJcbiAgICAgICAgbmlnaHRBcnIuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgICAgIGFyci5zb21lKChzdHJpbmcsIGksIGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih3ZWF0aGVyID09PSBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBhcnJheVthcnJheS5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSAqL1xyXG4gICAgICAgLyogIGlmKGlzRGF5KSB7XHJcbiAgICAgICAgZGF5QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuXHJcblxyXG4gLy8vIFRIRU4gSSBUUlkgVE8gVVNFIEZPUiBPRiBMT09QUywgQkVDQVVTRSBJIFdBTlRFRCBUTyBCUkVBSyBUSEUgTE9PUCBXSEVOIEkgSEFWRSBUSEUgRUxFTUVOVCBJIFdBTlRFRCBcclxuXHJcbi8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodEFycil7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gXCJcIil7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qICAgICBmb3IgKGNvbnN0IGFyciBvZiBkYXlBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcblxyXG4gICAgLy8vIEZJTkFMTFksIEkgRElETlQgV0FOVCBUTyBVU0UgMiBFUVVBTCBMT09QUywgU08gUkVTT0xWRUQgVE8gVVNFIEEgVEVSTkFSWSBPUEVSQVRPUiBBTkQgVEhFTiBBIFNJTkdMRSBMT09QLlxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBlYXN5Q2FyKGUpIHtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cFwiKSA/IFwidXBcIiA6IFwiZG93blwiXHJcblxyXG4gICAgaWYoZXZlbnQgPT09IFwidXBcIikge1xyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSAgXHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImRvd25cIikge1xyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG4gICAgYnRuVXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyVXAgKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBidG5Eb3duOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvd25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyRG93biAqL2Vhc3lDYXIpLFxyXG5cclxuICAgIHNsaWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxufVxyXG4gICAgICAgXHJcbiAgICAgXHJcblxyXG5cclxuXHJcbi8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIEJZIFRIRSBBUEkgKElUUyBQUk9QRVJUSUVTLCBWQUxVRVMsIEVUQykgLy8vXHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMgKGRhdGEsIGRhdGEyLCBkYXRhMyl7XHJcbiAgICBsZXQgaWRlbSA9IFtdXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkNVUlJFTlRcIiAvLy9cclxuICAgIGxldCBjdXJyZW50RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YS5jdXJyZW50KVxyXG4gICAgbGV0IGZvcmVjYXN0RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YTIuY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGN1cnJlbnRGaWx0ZXIuZm9yRWFjaCgocHJvcCkgPT57XHJcbiAgICAgICAgZm9yZWNhc3RGaWx0ZXIuZm9yRWFjaCgocHIpID0+e1xyXG4gICAgICAgICAgICBpZihwcm9wID09PSBwciApe1xyXG4gICAgICAgICAgICAgICAgaWRlbS5wdXNoKHByb3ApXHJcbiAgICAgICAgfX0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWRlbTpcIiwgaWRlbSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBsZXQgY2Fyb3VzZWwgPSB7XHJcbiAgICBcclxuICAgIHZhbDogMCxcclxuICAgIFxyXG4gICAgc2xpZGVyVXAoZSkge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSA0N1xyXG4gICAgXHJcbiAgICAgICAgaWYoY2Fyb3VzZWwudmFsID09PSAwIHx8IGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVyRG93bihlKSB7XHJcblxyXG4gICAgICAgbGV0IHZhbHVlID0gLTQ3IFxyXG5cclxuICAgICAgICBpZihlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuXHJcbiAgICB9XHJcbn0gKi8iLCJleHBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufVxyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuaXNDZWxzaXVzID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBIb3VyIGV4dGVuZHMgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCB0aW1lKXtcclxuICAgICAgICBzdXBlcihvYmopXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmouc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIG9iakN1cnJlbnQpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDX2ZlZWwgPSBvYmpDdXJyZW50ID8gb2JqQ3VycmVudC50ZW1wQ19mZWVsIDogZmFsc2UsXHJcbiAgICAgICAgdGhpcy50ZW1wRl9mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcEZfZmVlbCA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLnV2ID0gb2JqLnV2LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IHRydWUsXHJcbiAgICAgICAgdGhpcy5pc0hpc3RvcnkgPSBmYWxzZSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTG9jYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmoubmFtZSxcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBvYmouY291bnRyeSxcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IG9iai5yZWdpb25cclxuICAgIH1cclxufSIsImltcG9ydCB7c2V0Q2FyZERhdGEsIHNldFByaW5jaXBhbERhdGEsIHNldE5lYXJEYXRhfSBmcm9tIFwiLi9kb21cIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXl9XHJcblxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFEaXNwbGF5KC8qIHdlYXRoZXJBbmRMb2NhdGlvbiAqLyBsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSl7XHJcblxyXG4gICAgLyogbGV0IFtjdXJyZW50V2VhdGhlciwgbG9jYXRpb25dID0gd2VhdGhlckFuZExvY2F0aW9uICovXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcbiAgICAvLyB0b2RheSBhbmQgY3VycmVudCBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzIC8vXHJcbiAgICByZW5kZXJQcmluY2lwYWwoLyogY3VycmVudFdlYXRoZXIgKi8gdG9kYXksIGxvY2F0aW9uLCBcInRvZGF5XCIpXHJcbiAgICByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbilcclxuICAgIHJlbmRlckhvdXJzKHRvZGF5LCBsb2NhdGlvbilcclxuICAgIHJlbmRlckV4dHJhKHRvZGF5LCBsb2NhdGlvbilcclxuXHJcbiAgIGxldCBjaG9zZW5EYXkgPSBcIlwiXHJcbiAgIGxldCBhdHRyaWJ1dGVWYWwgPSBcIlwiXHJcblxyXG4gICBzd2l0Y2godHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInllc3RlcmRheVwiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSB5ZXN0ZXJkYXlcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ5ZXN0ZXJkYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ0b21vcnJvd1wiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSB0b21vcnJvd1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcInRvbW9ycm93XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwibGFzdERheVwiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSBsYXN0RGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwibGFzdERheVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICB9XHJcblxyXG4gICBpZihkYXkgIT09IFwidG9kYXlcIikge1xyXG4gICAgICAgIHJlbmRlclByaW5jaXBhbChjaG9zZW5EYXkuZGF5LCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKVxyXG4gICAgICAgIHJlbmRlckhvdXJzKGNob3NlbkRheSwgbG9jYXRpb24pXHJcbiAgICAgICAgcmVuZGVyRXh0cmEoY2hvc2VuRGF5LCBsb2NhdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb3Vycyhmb3JlY2FzdCwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IGhvdXJzID0gZm9yZWNhc3QuaG91cnNcclxuXHJcbiAgICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcbiAgICAgICAgICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKVxyXG4gICAgICAgIH0gZWxzZSBpZihpID49IDEyKXtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlckNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyLCBsb2NhdGlvbikpICBcclxuICAgICAgICB9ICAgIFxyXG4gICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbCh3ZWF0aGVyLCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKXtcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIC8vcHJpbmNpcGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1wcmluY2lwYWxcIiwgd2VhdGhlciwgbG9jYXRpb24pKVxyXG4gICAgcHJpbmNpcGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldFByaW5jaXBhbERhdGEoXCJjYXJkLXByaW5jaXBhbFwiLCB3ZWF0aGVyLCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IG5lYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyQ29udGFpbmVyLmNoaWxkcmVuKVxyXG5cclxuICAgIG5lYXJBcnIuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIilcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcblxyXG4gICAgLyogbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB5ZXN0ZXJkYXkuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclsyXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB0b21vcnJvdy5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgbGFzdERheS5kYXksIGxvY2F0aW9uKSkgKi9cclxuXHJcbiAgICBuZWFyQXJyWzBdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHllc3RlcmRheS5kYXksIGxvY2F0aW9uLCBcImRhdGEtZGF5LXllc3RlcmRheVwiKSlcclxuICAgIG5lYXJBcnJbMV0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgdG9kYXkuZGF5LCBsb2NhdGlvbiwgXCJkYXRhLWRheS10b2RheVwiKSlcclxuICAgIG5lYXJBcnJbMl0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgdG9tb3Jyb3cuZGF5LCBsb2NhdGlvbiwgXCJkYXRhLWRheS10b21vcnJvd1wiKSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgbGFzdERheS5kYXksIGxvY2F0aW9uLCBcImRhdGEtZGF5LWxhc3REYXlcIikpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeHRyYShmb3JlY2FzdCwgbG9jYXRpb24pe1xyXG5cclxuLyogICAgIGlmIChmb3JlY2FzdC5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlbmFzXCIpXHJcbiAgICAgICAgZXh0cmFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWV4dHJhXCIsIGV4dHJhRGF0YSwgbG9jYXRpb24pKTtcclxuICAgIH0gKi9cclxuXHJcbiAgICBsZXQgZXh0cmFEYXRhID0gZm9yZWNhc3QuZGF5XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdClcclxuICAgIGNvbnNvbGUubG9nKGV4dHJhRGF0YSlcclxuXHJcbiAgICBsZXQgZXh0cmFDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhXCIpXHJcbiAgICBleHRyYUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGV4dHJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1leHRyYVwiLCBleHRyYURhdGEsIGxvY2F0aW9uKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtzZXRDYXJkRGF0YSwgc2V0UHJpbmNpcGFsRGF0YSwgc2V0TmVhckRhdGF9XHJcblxyXG5sZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcE9wdFwiKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZCgpe1xyXG5cclxuICAgIGxldCBjYXJkID0gY3JlYXRlRWxlbWVudChcImFydGljbGVcIiwgXCJjYXJkXCIpXHJcbiAgICBcclxuICAgIGxldCBwbGFjZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicGxhY2VcIilcclxuICAgIGxldCBkYXRlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJkYXRlXCIpXHJcbiAgICBsZXQgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ3cmFwcGVyXCIpXHJcbiAgICBsZXQgdGVtcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcFwiKVxyXG4gICAgbGV0IHRlbXBGZWVsID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wRmVlbFwiKVxyXG4gICAgbGV0IHRlbXBNaW5NYXggPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBNaW5NYXhcIilcclxuICAgIGxldCBjbG91ZCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiY2xvdWRcIilcclxuICAgIGxldCBwcmVjaXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInByZWNpcFwiKVxyXG4gICAgbGV0IGh1bWlkaXR5ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJodW1pZGl0eVwiKVxyXG4gICAgbGV0IHRpbWUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRpbWVcIilcclxuICAgIGxldCBzbm93ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzbm93XCIpXHJcbiAgICBsZXQgd2luZCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwid2luZFwiKVxyXG4gICAgbGV0IHV2ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ1dlwiKVxyXG5cclxuICAgIGxldCBpbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaW1nXCIpXHJcbiAgICBsZXQgc3ViID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzdWJcIilcclxuXHJcbiAgIGxldCBjYXJkQXJyID0gW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIFxyXG4gICAgICAgICAgICAgICAgICBodW1pZGl0eSwgc25vdywgd2luZCwgdXYsIHdyYXBwZXJdXHJcblxyXG4gICBjYXJkQXJyLmZvckVhY2goZWxlbWVudCA9PiB7Y2FyZC5hcHBlbmRDaGlsZChlbGVtZW50KX0pXHJcblxyXG4gICAgcmV0dXJuIHtjYXJkLCBjYXJkQXJyfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q2FyZERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlTmFtZSkge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIFwiXCIpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5jbG91ZH0gJWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLndpbmQpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudXY7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcENfZmVlbCA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9sYSBrIGFzZVwiKVxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKHdlYXRoZXJPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0UHJpbmNpcGFsRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqLCBhdHRyaWJ1dGVWYWwpIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2LCB3cmFwcGVyXSA9IGNhcmRBcnJcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IFwiXCI7XHJcbiAgICBpZiAod2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgIHdlYXRoZXIgPSB3ZWF0aGVyT2JqLmN1cnJlbnRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VhdGhlciA9IHdlYXRoZXJPYmpcclxuICAgIH1cclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtZGF5XCIsIGF0dHJpYnV0ZVZhbClcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlci5kYXRlLnNsaWNlKDUsIDcpfSwgYXZlcmFnZSB0wrpgO1xyXG5cclxuICAgIGlmICh3ZWF0aGVyT2JqLmhhc093blByb3BlcnR5KFwiY3VycmVudFwiKSkge1xyXG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBcIlRvZGF5LCBjdXJyZW50bHlcIjtcclxuICAgIH1cclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBsYWNlKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFeHRyYURhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaikge1xyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSl7IFxyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gXHJcbiAgICAgICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5lYXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZU5hbWUpIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIFwiXCIpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CuiBhdmcuYCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CuiBhdmcuYDtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEhvdXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmopIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IFxyXG4gICAgd2VhdGhlck9iai5pc0NlbHNpdXMgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CumA7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcbi8qIGZ1bmN0aW9uIGN1cnJlbnRIb3VyQ2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGBTVDogJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQ19mZWVsKX3CumBcclxuICAgIGlmKCF3ZWF0aGVyLmlzQ2Vsc2l1cyl7XHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEZfZmVlbCl9wrpgfTtcclxuXHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDsgXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGBOdWJlczogJHt3ZWF0aGVyLmNsb3VkfSVgO1xyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYHByZWNpcDogJHt3ZWF0aGVyLnByZWNpcFRvdGFsfW1tYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWVkYWQ6ICR7d2VhdGhlci5odW1pZGl0eX0lYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgc25vdyAke3dlYXRoZXIuc25vd0NoYW5jZX0lYDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRpbWU7XHJcblxyXG5cclxuICAgIHJldHVybiAgY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsRGF5Q2FyZChjbGFzc05hbWUsIHdlYXRoZXIsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbZGF0ZU9iaiwgZnVsbERheU9iaiwgZnVsbEhvdXJzQXJyXSA9IHdlYXRoZXJcclxuICAgIGNvbnNvbGUubG9nKGZ1bGxEYXlPYmopXHJcbiAgICBcclxuICAgIGxldCBkYXRlRm9ybWF0ID0gYCR7ZGF0ZU9iai5zbGljZSg4KX0vJHtkYXRlT2JqLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3IoZnVsbERheU9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSBmdWxsRGF5T2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQ7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2Z1bGxEYXlPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLndpbmRNYXgpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IGZ1bGxEYXlPYmoudXY7XHJcbiAgICBcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouYXZnVGVtcEMpfcK6YDtcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5tYXhUZW1wQyl9wrovJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5taW5UZW1wQyl9wrpgO1xyXG4gICAgaWYoIWZ1bGxEYXlPYmouaXNDZWxzaXVzKXsgXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5hdmdUZW1wRil9wrpgfTtcclxuXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7ZnVsbERheU9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKGZ1bGxEYXlPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufSAqL1xyXG5cclxuXHJcbiIsImltcG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259IGZyb20gXCIuL2NsYXNzXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIC8qIGxldCB3ZWF0aGVyQW5kTG9jYXRpb24gPSBbZ2V0Q3VycmVudFdlYXRoZXIoZGF0YUZvcmVjYXN0KSwgZ2V0TG9jYXRpb24oZGF0YUZvcmVjYXN0KV0gKi9cclxuICAgIGxldCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG5cclxuICAgIHJldHVybiBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IGdldEN1cnJlbnRXZWF0aGVyKG9iailcclxuICAgIGxldCB0b2RheURheSA9IG5ldyBEYXkocmF3VG9kYXlBcnIuZGF5LCByYXdUb2RheUFyci5kYXRlLCBjdXJyZW50V2VhdGhlcik7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheU9iaiA9IHtjdXJyZW50OiBjdXJyZW50V2VhdGhlciwgZGF5OiB0b2RheURheSwgaG91cnM6IHRvZGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5LCByYXdUb21vcnJvd0Fyci5kYXRlKTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93T2JqID0ge2RheTogdG9tb3Jyb3dEYXksIGhvdXJzOiB0b21vcnJvd0hvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXksIHJhd0xhc3REYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheU9iaiA9IHtkYXk6IGxhc3REYXlEYXksIGhvdXJzOiBsYXN0RGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IFt0b2RheU9iaiwgdG9tb3Jyb3dPYmosIGxhc3REYXlPYmpdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG5cclxuICAgIHJldHVybiBmb3JlY2FzdEFyclxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5T2JqID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheU9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHMsIGdldFByZXZpb3VzRGF5fSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge3RyaWdnZXJEYXRhRGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5cclxuXHJcbmxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxyXG5sZXQgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxyXG5sZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcE9wdFwiKVxyXG5sZXQgdGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRoZW1lXCIpXHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKVxyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSlcclxudGVtcE9wdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVGVtcClcclxudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRoZW1lKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd01lbnUoZSkge1xyXG4gICAgYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcclxuXHJcbiAgICBpZighbmF2LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbWVudVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmVhckNhcmRzRXZlbnQoKSB7XHJcblxyXG4gICAgbGV0IGNhcmREYXkgPSB0aGlzLmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VcIilcclxuICAgIGxldCBwbGFjZVZhbCA9IHBsYWNlLnRleHRDb250ZW50XHJcbiAgICBcclxuICAgIGdldERhdGEocGxhY2VWYWwsIGNhcmREYXkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0RGF0YShcImJ1ZW5vcyBhaXJlc1wiKVxyXG4gICAgLy9tYWluRnVuY3Rpb24oXCJidWVub3MgYWlyZXNcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXIuY2hpbGRyZW4pXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWFyQ2FyZHNFdmVudCkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gaW5wdXQudmFsdWUgXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbiAgICAvL21haW5GdW5jdGlvbihpbnB1dFZhbCkgXHJcbiAgICAvL3RyaWdnZXJEYXRhRGlzcGxheSgpXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpbnB1dFZhbCwgZGF5ID0gXCJ0b2RheVwiKXtcclxuXHJcbmNvbnNvbGUubG9nKGRheSlcclxuXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmRheXM9M2ApLFxyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmR0PSR7Z2V0UHJldmlvdXNEYXkoKX1gKVxyXG4gICAgXSlcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlMi5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIHJlcXVlc3RcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUZvcmVjYXN0KVxyXG4gICAgY29uc29sZS5sb2coZGF0YUhpc3RvcnkpXHJcblxyXG4gLyogICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpICovXHJcblxyXG4gICAgLy8vQUNBQUFBQUEvLy9cclxuICAgIC8vbGV0IFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KSBcclxuXHJcbiBcclxuICAgICAvL3RyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSBcclxuXHJcbiAgIC8vcmV0dXJuIFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XVxyXG4gICBkYXRhSGFuZGxlcihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5LCBkYXkpXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcblxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHtcclxuXHJcbiAgICBsZXQgcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlXCIpXHJcbiAgICBsZXQgcGxhY2VWYWwgPSBwbGFjZS50ZXh0Q29udGVudFxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIilcclxuICAgIGxldCBhdHRyID0gZGF0ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiKVxyXG5cclxuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImZhcmFcIilcclxuXHJcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpe1xyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIENlbHNpdXNcIlxyXG4gICAgfSBlbHNlIHsgXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gRmFocmVuaGVpdFwiXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXREYXRhKHBsYWNlVmFsLCBhdHRyKVxyXG5cclxuICAgbGV0IFtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gcmV0cmlldmVEYXRhKClcclxuICAgY29uc29sZS5sb2coXCJhY2EgZGV2b2x2ZW1vcyBsYSBkYXRhXCIpXHJcblxyXG4gICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBhdHRyKVxyXG5cclxuICAgY29uc29sZS5sb2coXCJFUkEgR1VBUkRBUiBMT1MgREFUT1MgUEFQQUFBQUFBXCIpXHJcbiBcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUoKXtcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgICBpZihib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInRoZW1lLWRhcmtcIikpe1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLWRhcmtcIilcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1saWdodFwiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIkRhcmsgdGhlbWVcIlxyXG4gICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lLWxpZ2h0XCIpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwidGhlbWUtZGFya1wiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIkxpZ2h0IHRoZW1lXCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogYXN5bmMgZnVuY3Rpb24gbWFpbkZ1bmN0aW9uIChpbnB1dFZhbCkge1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdmVcIiwgZGF0YUZvcmVjYXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXZlXCIsIGRhdGFIaXN0b3J5KVxyXG5cclxuXHJcbiAgICAgICBsZXQgW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG5cclxuXHJcbiAgICAgICAgdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcblxyXG4gICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICAgXHJcblxyXG59ICovXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSwgZGF5KXtcclxuXHJcbiAgICBsZXQgW2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24oZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBzdG9yZURhdGEobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG4gICAgY29uc29sZS5sb2coXCJhY2Egc3RvcmUgZGF0YVwiKVxyXG5cclxuICAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzdG9yZURhdGEobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSB7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvblwiLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0QXJyXCIsIEpTT04uc3RyaW5naWZ5KGZvcmVjYXN0QXJyKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeUFyclwiLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5QXJyKSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhdGlvblwiKSlcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlBcnJcIikpXHJcblxyXG4gICAgcmV0dXJuIFtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxubGV0IGV4ID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxuXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==