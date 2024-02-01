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

input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
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

let body = document.body
console.log(body)

function changeTemp() {

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
    } else { 
        this.textContent = "to Farenheit"
    }

    getData(placeVal, attr)

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

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr, day)
}













let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxrRUFBd0I7QUFDdEU7QUFDQSxJQUFJLDZEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcblxyXG5leHBvcnQge2NvbXBhcmVPYmplY3RzLCBpY29uU2VsZWN0b3IsIGdldFByZXZpb3VzRGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFByZXZpb3VzRGF5KCkge1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgbGV0IGZ1bGxEYXRlID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YFxyXG5cclxuICAgIHJldHVybiBmdWxsRGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLndlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICBsZXQgaXNEYXkgPSBvYmouaXNEYXkgXHJcblxyXG4gICAgLy8vIFRFUk5BUlkgT1BFUkFUT1IgLy8vXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBcIlwiXHJcblxyXG4gIC8vLyBUSEUgRklSU1QgVEhJTkcgSSBESUQgV0FTIFRXTyBMT09QUywgT05FIEZPUiBEQVkgQU5EIE9USEVSIEZPUiBOSUdIVC5cclxuICAvLy8gQVdGVUwuIEFORCBIRUFWSUxZIE5FU1RFRC4gIFxyXG5cclxuICAvKiAgIGlmKCFpc0RheSkge1xyXG4gICAgICAgIG5pZ2h0QXJyLmZvckVhY2goYXJyID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZyAhPT0gXCJcIil7IHJldHVybiB9XHJcblxyXG4gICAgICAgICAgICBhcnIuc29tZSgoc3RyaW5nLCBpLCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nID0gYXJyYXlbYXJyYXkubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gKi9cclxuICAgICAgIC8qICBpZihpc0RheSkge1xyXG4gICAgICAgIGRheUFyci5mb3JFYWNoKGFyciA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbWcgIT09IFwiXCIpeyByZXR1cm4gfVxyXG5cclxuICAgICAgICAgICAgYXJyLnNvbWUoKHN0cmluZywgaSwgYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyA9IGFycmF5W2FycmF5Lmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICovXHJcblxyXG5cclxuIC8vLyBUSEVOIEkgVFJZIFRPIFVTRSBGT1IgT0YgTE9PUFMsIEJFQ0FVU0UgSSBXQU5URUQgVE8gQlJFQUsgVEhFIExPT1AgV0hFTiBJIEhBVkUgVEhFIEVMRU1FTlQgSSBXQU5URUQgXHJcblxyXG4vKiAgICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRBcnIpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IFwiXCIpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICAvKiAgICAgZm9yIChjb25zdCBhcnIgb2YgZGF5QXJyKXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIC8vLyBGSU5BTExZLCBJIERJRE5UIFdBTlQgVE8gVVNFIDIgRVFVQUwgTE9PUFMsIFNPIFJFU09MVkVEIFRPIFVTRSBBIFRFUk5BUlkgT1BFUkFUT1IgQU5EIFRIRU4gQSBTSU5HTEUgTE9PUC5cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFyciBvZiBuaWdodE9yRGF5KXtcclxuXHJcbiAgICAgICAgaWYoaW1nICE9PSBcIlwiKXsgYnJlYWsgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyICkge1xyXG5cclxuICAgICAgICAgICAgaWYod2VhdGhlciA9PT0gZWxlbWVudC50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBhcnJbYXJyLmxlbmd0aCAtMV1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGltZ1xyXG59IFxyXG5cclxuZnVuY3Rpb24gZWFzeUNhcihlKSB7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyBcInVwXCIgOiBcImRvd25cIlxyXG5cclxuICAgIGlmKGV2ZW50ID09PSBcInVwXCIpIHtcclxuICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikgIFxyXG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbmxldCBlbGVtZW50cyA9IHtcclxuICAgIGJ0blVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIC8qIGNhcm91c2VsLnNsaWRlclVwICovZWFzeUNhciksXHJcblxyXG4gICAgYnRuRG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIC8qIGNhcm91c2VsLnNsaWRlckRvd24gKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBzbGlkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpXHJcbn1cclxuICAgICAgIFxyXG4gICAgIFxyXG5cclxuXHJcblxyXG4vLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCBCWSBUSEUgQVBJIChJVFMgUFJPUEVSVElFUywgVkFMVUVTLCBFVEMpIC8vL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RGaWx0ZXIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkRBWVwiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcbiAgICBcclxuICAgIGxldCBmb3JlY2FzdERheSA9IGZvcmVjYXN0QXJyWzBdLmRheVxyXG4gICAgbGV0IGhpc3RvcnlEYXkgPSBoaXN0b3J5QXJyWzBdLmRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheSlcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheSlcclxuXHJcbiAgICBsZXQgZm9yZWNhc3REYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdERheSlcclxuICAgIGxldCBoaXN0b3J5RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeURheSlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXlBcnIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkhPVVJTXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyID0gZm9yZWNhc3RBcnJbMF0uaG91clswXVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyID0gaGlzdG9yeUFyclswXS5ob3VyWzBdXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91cilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXIpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0SG91cilcclxuICAgIGxldCBoaXN0b3J5SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyQXJyKVxyXG5cclxuICAgIC8vLyBBQ1RVQUwgQ09NUEFSSVRJT04gLy8vICAgICAgXHJcbiAgICBjdXJyZW50RmlsdGVyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogbGV0IGNhcm91c2VsID0ge1xyXG4gICAgXHJcbiAgICB2YWw6IDAsXHJcbiAgICBcclxuICAgIHNsaWRlclVwKGUpIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gNDdcclxuICAgIFxyXG4gICAgICAgIGlmKGNhcm91c2VsLnZhbCA9PT0gMCB8fCBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25jZVwiKSkge3JldHVybn1cclxuXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJvbmNlXCIpXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuXHJcbiAgICAgICAgY2Fyb3VzZWwudmFsICs9IHZhbHVlXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLnN0eWxlLm1hcmdpblRvcCA9IGAke2Nhcm91c2VsLnZhbH1yZW1gXHJcbiAgICB9LFxyXG5cclxuICAgIHNsaWRlckRvd24oZSkge1xyXG5cclxuICAgICAgIGxldCB2YWx1ZSA9IC00NyBcclxuXHJcbiAgICAgICAgaWYoZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwib25jZVwiKSkge3JldHVybn1cclxuXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJvbmNlXCIpXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuXHJcbiAgICAgICAgY2Fyb3VzZWwudmFsICs9IHZhbHVlXHJcbiAgICAgICAgZWxlbWVudHMuc2xpZGVyLnN0eWxlLm1hcmdpblRvcCA9IGAke2Nhcm91c2VsLnZhbH1yZW1gXHJcblxyXG4gICAgfVxyXG59ICovIiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmlzQ2Vsc2l1cyA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCBvYmpDdXJyZW50KXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcENfZmVlbCA6IGZhbHNlLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iakN1cnJlbnQgPyBvYmpDdXJyZW50LnRlbXBGX2ZlZWwgOiBmYWxzZSxcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy51diA9IG9iai51dixcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgdGhpcy5pc0NlbHNpdXMgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqLm5hbWUsXHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gb2JqLmNvdW50cnksXHJcbiAgICAgICAgdGhpcy5yZWdpb24gPSBvYmoucmVnaW9uXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3NldENhcmREYXRhLCBzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YX0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheSgvKiB3ZWF0aGVyQW5kTG9jYXRpb24gKi8gbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBkYXkpe1xyXG5cclxuICAgIC8qIGxldCBbY3VycmVudFdlYXRoZXIsIGxvY2F0aW9uXSA9IHdlYXRoZXJBbmRMb2NhdGlvbiAqL1xyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgLy8gdG9kYXkgYW5kIGN1cnJlbnQgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcyAvL1xyXG4gICAgcmVuZGVyUHJpbmNpcGFsKC8qIGN1cnJlbnRXZWF0aGVyICovIHRvZGF5LCBsb2NhdGlvbiwgXCJ0b2RheVwiKVxyXG4gICAgcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pXHJcbiAgICByZW5kZXJIb3Vycyh0b2RheSwgbG9jYXRpb24pXHJcbiAgICByZW5kZXJFeHRyYSh0b2RheSwgbG9jYXRpb24pXHJcblxyXG4gICBsZXQgY2hvc2VuRGF5ID0gXCJcIlxyXG4gICBsZXQgYXR0cmlidXRlVmFsID0gXCJcIlxyXG5cclxuICAgc3dpdGNoKHRydWUpIHtcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ5ZXN0ZXJkYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0geWVzdGVyZGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwieWVzdGVyZGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwidG9tb3Jyb3dcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gdG9tb3Jyb3dcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ0b21vcnJvd1wiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcImxhc3REYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gbGFzdERheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcImxhc3REYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgfVxyXG5cclxuICAgaWYoZGF5ICE9PSBcInRvZGF5XCIpIHtcclxuICAgICAgICByZW5kZXJQcmluY2lwYWwoY2hvc2VuRGF5LmRheSwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbClcclxuICAgICAgICByZW5kZXJIb3VycyhjaG9zZW5EYXksIGxvY2F0aW9uKVxyXG4gICAgICAgIHJlbmRlckV4dHJhKGNob3NlbkRheSwgbG9jYXRpb24pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVySG91cnMoZm9yZWNhc3QsIGxvY2F0aW9uKXtcclxuXHJcbiAgICBsZXQgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxuXHJcbiAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBob3VycyA9IGZvcmVjYXN0LmhvdXJzXHJcblxyXG4gICAgaG91cnMuZm9yRWFjaCggKGhvdXIsIGkpID0+IHtcclxuICAgICAgICBpZihpIDwgMTIpe1xyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIsIGxvY2F0aW9uKSlcclxuICAgICAgICB9IGVsc2UgaWYoaSA+PSAxMil7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtYXNpZGVcIiwgaG91ciwgbG9jYXRpb24pKSAgXHJcbiAgICAgICAgfSAgICBcclxuICAgfSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcmluY2lwYWwod2VhdGhlciwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbCl7XHJcbiAgICBcclxuICAgIGxldCBwcmluY2lwYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3ByaW5jaXBhbENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtcHJpbmNpcGFsXCIsIHdlYXRoZXIsIGxvY2F0aW9uKSlcclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRQcmluY2lwYWxEYXRhKFwiY2FyZC1wcmluY2lwYWxcIiwgd2VhdGhlciwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbCkpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgbG9jYXRpb24pe1xyXG5cclxuICAgIGxldCBuZWFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhckNvbnRhaW5lci5jaGlsZHJlbilcclxuXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVySFRNTCA9IFwiXCIpXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG5cclxuICAgIC8qIG5lYXJBcnJbMF0uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgeWVzdGVyZGF5LmRheSwgbG9jYXRpb24pKVxyXG4gICAgbmVhckFyclsxXS5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtbmVhclwiLCB0b2RheS5kYXksIGxvY2F0aW9uKSlcclxuICAgIG5lYXJBcnJbMl0uYXBwZW5kQ2hpbGQoc2V0Q2FyZERhdGEoXCJjYXJkLW5lYXJcIiwgdG9tb3Jyb3cuZGF5LCBsb2NhdGlvbikpXHJcbiAgICBuZWFyQXJyWzNdLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1uZWFyXCIsIGxhc3REYXkuZGF5LCBsb2NhdGlvbikpICovXHJcblxyXG4gICAgbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB5ZXN0ZXJkYXkuZGF5LCBsb2NhdGlvbiwgXCJkYXRhLWRheS15ZXN0ZXJkYXlcIikpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSwgbG9jYXRpb24sIFwiZGF0YS1kYXktdG9kYXlcIikpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvbW9ycm93LmRheSwgbG9jYXRpb24sIFwiZGF0YS1kYXktdG9tb3Jyb3dcIikpXHJcbiAgICBuZWFyQXJyWzNdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIGxhc3REYXkuZGF5LCBsb2NhdGlvbiwgXCJkYXRhLWRheS1sYXN0RGF5XCIpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXh0cmEoZm9yZWNhc3QsIGxvY2F0aW9uKXtcclxuXHJcbi8qICAgICBpZiAoZm9yZWNhc3QuaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3ZW5hc1wiKVxyXG4gICAgICAgIGV4dHJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldENhcmREYXRhKFwiY2FyZC1leHRyYVwiLCBleHRyYURhdGEsIGxvY2F0aW9uKSk7XHJcbiAgICB9ICovXHJcblxyXG4gICAgbGV0IGV4dHJhRGF0YSA9IGZvcmVjYXN0LmRheVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpXHJcbiAgICBjb25zb2xlLmxvZyhleHRyYURhdGEpXHJcblxyXG4gICAgbGV0IGV4dHJhQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYVwiKVxyXG4gICAgZXh0cmFDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBleHRyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRDYXJkRGF0YShcImNhcmQtZXh0cmFcIiwgZXh0cmFEYXRhLCBsb2NhdGlvbikpO1xyXG59XHJcbiIsImltcG9ydCB7IGljb25TZWxlY3RvciB9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCJcclxuXHJcbmV4cG9ydCB7c2V0Q2FyZERhdGEsIHNldFByaW5jaXBhbERhdGEsIHNldE5lYXJEYXRhfVxyXG5cclxubGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBPcHRcIilcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG5cclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgcmV0dXJuIGVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIFwiY2FyZFwiKVxyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInBsYWNlXCIpXHJcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF0ZVwiKVxyXG4gICAgbGV0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid3JhcHBlclwiKVxyXG4gICAgbGV0IHRlbXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBcIilcclxuICAgIGxldCB0ZW1wRmVlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcEZlZWxcIilcclxuICAgIGxldCB0ZW1wTWluTWF4ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wTWluTWF4XCIpXHJcbiAgICBsZXQgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNsb3VkXCIpXHJcbiAgICBsZXQgcHJlY2lwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBcIilcclxuICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiaHVtaWRpdHlcIilcclxuICAgIGxldCB0aW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0aW1lXCIpXHJcbiAgICBsZXQgc25vdyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic25vd1wiKVxyXG4gICAgbGV0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndpbmRcIilcclxuICAgIGxldCB1diA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXZcIilcclxuXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImltZ1wiKVxyXG4gICAgbGV0IHN1YiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic3ViXCIpXHJcblxyXG4gICBsZXQgY2FyZEFyciA9IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2LCB3cmFwcGVyXVxyXG5cclxuICAgY2FyZEFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge2NhcmQuYXBwZW5kQ2hpbGQoZWxlbWVudCl9KVxyXG5cclxuICAgIHJldHVybiB7Y2FyZCwgY2FyZEFycn1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldENhcmREYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZU5hbWUpIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBcIlwiKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZiggdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpKXsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbGEgayBhc2VcIilcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcEZfZmVlbCA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9IFxyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFByaW5jaXBhbERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlVmFsKSB7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIFxyXG4gICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1diwgd3JhcHBlcl0gPSBjYXJkQXJyXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBcIlwiO1xyXG4gICAgaWYgKHdlYXRoZXJPYmouaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpKSB7XHJcbiAgICAgICB3ZWF0aGVyID0gd2VhdGhlck9iai5jdXJyZW50XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlYXRoZXIgPSB3ZWF0aGVyT2JqXHJcbiAgICB9XHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcblxyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQyl9wrpgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXIuZGF0ZS5zbGljZSg1LCA3KX0sIGF2ZXJhZ2UgdMK6YDtcclxuXHJcbiAgICBpZiAod2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gXCJUb2RheSwgY3VycmVudGx5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwbGFjZSlcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXh0cmFEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmopIHtcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcblxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wQ19mZWVsID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZih0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcEZfZmVlbCA/IFxyXG4gICAgICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROZWFyRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqLCBhdHRyaWJ1dGVOYW1lKSB7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIFxyXG4gICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBcIlwiKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrogYXZnLmAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrogYXZnLmA7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRIb3VyRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqKSB7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIFxyXG4gICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50aW1lO1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBcclxuICAgIHdlYXRoZXJPYmouaXNDZWxzaXVzID8gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcblxyXG4vKiBmdW5jdGlvbiBjdXJyZW50SG91ckNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclRleHQ7XHJcblxyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSBgU1Q6ICR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcENfZmVlbCl9wrpgXHJcbiAgICBpZighd2VhdGhlci5pc0NlbHNpdXMpe1xyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYFNUOiAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGX2ZlZWwpfcK6YH07XHJcblxyXG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5uYW1lfSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7IFxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgTnViZXM6ICR7d2VhdGhlci5jbG91ZH0lYDtcclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGBwcmVjaXA6ICR7d2VhdGhlci5wcmVjaXBUb3RhbH1tbWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1lZGFkOiAke3dlYXRoZXIuaHVtaWRpdHl9JWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYHNub3cgJHt3ZWF0aGVyLnNub3dDaGFuY2V9JWA7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlci50aW1lO1xyXG5cclxuXHJcbiAgICByZXR1cm4gIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gZnVsbERheUNhcmQoY2xhc3NOYW1lLCB3ZWF0aGVyLCBsb2NhdGlvbil7XHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgW2RhdGVPYmosIGZ1bGxEYXlPYmosIGZ1bGxIb3Vyc0Fycl0gPSB3ZWF0aGVyXHJcbiAgICBjb25zb2xlLmxvZyhmdWxsRGF5T2JqKVxyXG4gICAgXHJcbiAgICBsZXQgZGF0ZUZvcm1hdCA9IGAke2RhdGVPYmouc2xpY2UoOCl9LyR7ZGF0ZU9iai5zbGljZSg1LCA3KX1gO1xyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKGZ1bGxEYXlPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gZnVsbERheU9iai53ZWF0aGVyVGV4dDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSBkYXRlRm9ybWF0O1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtmdWxsRGF5T2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai53aW5kTWF4KX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSBmdWxsRGF5T2JqLnV2O1xyXG4gICAgXHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLmF2Z1RlbXBDKX3CumA7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCFmdWxsRGF5T2JqLmlzQ2Vsc2l1cyl7IFxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5taW5UZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KGZ1bGxEYXlPYmouYXZnVGVtcEYpfcK6YH07XHJcblxyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke2Z1bGxEYXlPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZihmdWxsRGF5T2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludChmdWxsRGF5T2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQoZnVsbERheU9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn0gKi9cclxuXHJcblxyXG4iLCJpbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3RyaWdnZXJEYXRhU3RydWN0dXJhdGlvbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uIChkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KXtcclxuXHJcbiAgICAvKiBsZXQgd2VhdGhlckFuZExvY2F0aW9uID0gW2dldEN1cnJlbnRXZWF0aGVyKGRhdGFGb3JlY2FzdCksIGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdCldICovXHJcbiAgICBsZXQgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuXHJcbiAgICByZXR1cm4gW2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl1cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlY2FzdERhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IHJhd0ZvcmVjYXN0QXJyID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuXHJcbiAgICBsZXQgW3Jhd1RvZGF5QXJyLCByYXdUb21vcnJvd0FyciwgcmF3TGFzdERheUFycl0gPSByYXdGb3JlY2FzdEFycjtcclxuXHJcbiAgICBsZXQgY3VycmVudFdlYXRoZXIgPSBnZXRDdXJyZW50V2VhdGhlcihvYmopXHJcbiAgICBsZXQgdG9kYXlEYXkgPSBuZXcgRGF5KHJhd1RvZGF5QXJyLmRheSwgcmF3VG9kYXlBcnIuZGF0ZSwgY3VycmVudFdlYXRoZXIpO1xyXG4gICAgbGV0IHRvZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb2RheUFycik7XHJcbiAgICBsZXQgdG9kYXlPYmogPSB7Y3VycmVudDogY3VycmVudFdlYXRoZXIsIGRheTogdG9kYXlEYXksIGhvdXJzOiB0b2RheUhvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgdG9tb3Jyb3dEYXkgPSBuZXcgRGF5KHJhd1RvbW9ycm93QXJyLmRheSwgcmF3VG9tb3Jyb3dBcnIuZGF0ZSk7XHJcbiAgICBsZXQgdG9tb3Jyb3dIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvbW9ycm93QXJyKTtcclxuICAgIGxldCB0b21vcnJvd09iaiA9IHtkYXk6IHRvbW9ycm93RGF5LCBob3VyczogdG9tb3Jyb3dIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGxhc3REYXlEYXkgPSBuZXcgRGF5KHJhd0xhc3REYXlBcnIuZGF5LCByYXdMYXN0RGF5QXJyLmRhdGUpO1xyXG4gICAgbGV0IGxhc3REYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd0xhc3REYXlBcnIpO1xyXG4gICAgbGV0IGxhc3REYXlPYmogPSB7ZGF5OiBsYXN0RGF5RGF5LCBob3VyczogbGFzdERheUhvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBbdG9kYXlPYmosIHRvbW9ycm93T2JqLCBsYXN0RGF5T2JqXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuXHJcbiAgICByZXR1cm4gZm9yZWNhc3RBcnJcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IHllc3RlcmRheURheSA9IG5ldyBEYXkocmF3WWVzdGVyZGF5QXJyLmRheSwgcmF3WWVzdGVyZGF5QXJyLmRhdGUgKVxyXG4gICAgeWVzdGVyZGF5RGF5LmlzSGlzdG9yeSA9IHRydWU7XHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheU9iaiA9IHtkYXk6IHllc3RlcmRheURheSwgaG91cnM6IHllc3RlcmRheUhvdXJzQXJyfVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCBkYXRlID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGVcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIsIGRhdGUpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggKGhvdXIpID0+IHtcclxuICAgICAgICBsZXQgZGF0ZSA9IGhvdXIudGltZS5zbGljZSgwLCAxMClcclxuICAgICAgICBsZXQgdGltZSA9IGhvdXIudGltZS5zbGljZSgxMSlcclxuICAgICAgcmV0dXJuIG5ldyBIb3VyKGhvdXIsIGRhdGUsIHRpbWUpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge3RyaWdnZXJEYXRhU3RydWN0dXJhdGlvbn0gZnJvbSBcIi4vb2JqZWN0c1wiO1xyXG5pbXBvcnQge2NvbXBhcmVPYmplY3RzLCBnZXRQcmV2aW91c0RheX0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIjtcclxuaW1wb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXl9IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuXHJcblxyXG5sZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcclxubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcclxubGV0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIilcclxubGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBPcHRcIilcclxuXHJcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGdldElucHV0VmFsdWUpXHJcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KVxyXG50ZW1wT3B0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VUZW1wKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXQpXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd01lbnUoZSkge1xyXG4gICAgYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbWVudVwiKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcclxuXHJcbiAgICBpZighbmF2LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbWVudVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmVhckNhcmRzRXZlbnQoKSB7XHJcblxyXG4gICAgbGV0IGNhcmREYXkgPSB0aGlzLmNsYXNzTmFtZVxyXG5cclxuICAgIGxldCBwbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VcIilcclxuICAgIGxldCBwbGFjZVZhbCA9IHBsYWNlLnRleHRDb250ZW50XHJcbiAgICBcclxuICAgIGdldERhdGEocGxhY2VWYWwsIGNhcmREYXkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0RGF0YShcImJ1ZW5vcyBhaXJlc1wiKVxyXG4gICAgLy9tYWluRnVuY3Rpb24oXCJidWVub3MgYWlyZXNcIilcclxuXHJcbiAgICBsZXQgbmVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXIuY2hpbGRyZW4pXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWFyQ2FyZHNFdmVudCkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gaW5wdXQudmFsdWUgXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbiAgICAvL21haW5GdW5jdGlvbihpbnB1dFZhbCkgXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpbnB1dFZhbCwgZGF5ID0gXCJ0b2RheVwiKXtcclxuXHJcbmNvbnNvbGUubG9nKGRheSlcclxuXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmRheXM9M2ApLFxyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmR0PSR7Z2V0UHJldmlvdXNEYXkoKX1gKVxyXG4gICAgXSlcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlMi5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIHJlcXVlc3RcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YUZvcmVjYXN0KVxyXG4gICAgY29uc29sZS5sb2coZGF0YUhpc3RvcnkpXHJcblxyXG4gLyogICAgbGV0IHdlYXRoZXJBbmRMb2NhdGlvbiA9IFtnZXRDdXJyZW50V2VhdGhlcihkYXRhRm9yZWNhc3QpLCBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZ2V0SGlzdG9yeURhdGEoZGF0YUhpc3RvcnkpICovXHJcblxyXG4gICAgLy8vQUNBQUFBQUEvLy9cclxuICAgIC8vbGV0IFt3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KSBcclxuXHJcbiBcclxuICAgICAvL3RyaWdnZXJEYXRhRGlzcGxheSh3ZWF0aGVyQW5kTG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSBcclxuXHJcbiAgIC8vcmV0dXJuIFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XVxyXG4gICBkYXRhSGFuZGxlcihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5LCBkYXkpXHJcblxyXG59IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcblxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5sZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuY29uc29sZS5sb2coYm9keSlcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XHJcblxyXG4gICAgbGV0IHBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZVwiKVxyXG4gICAgbGV0IHBsYWNlVmFsID0gcGxhY2UudGV4dENvbnRlbnRcclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpXHJcbiAgICBsZXQgYXR0ciA9IGRhdGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXlcIilcclxuXHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJmYXJhXCIpXHJcblxyXG4gICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpKXtcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBDZWxzaXVzXCJcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIEZhcmVuaGVpdFwiXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YShwbGFjZVZhbCwgYXR0cilcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogYXN5bmMgZnVuY3Rpb24gbWFpbkZ1bmN0aW9uIChpbnB1dFZhbCkge1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhdmVcIiwgZGF0YUZvcmVjYXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXZlXCIsIGRhdGFIaXN0b3J5KVxyXG5cclxuXHJcbiAgICAgICBsZXQgW3dlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG5cclxuXHJcbiAgICAgICAgdHJpZ2dlckRhdGFEaXNwbGF5KHdlYXRoZXJBbmRMb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcblxyXG4gICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICAgXHJcblxyXG59ICovXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSwgZGF5KXtcclxuXHJcbiAgICBsZXQgW2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl0gPSB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24oZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBkYXkpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcblxyXG5sZXQgcGFzcyA9IFwiP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyXCJcclxubGV0IHVybCA9IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiXHJcbmxldCBjdXJyZW50ID0gXCIvY3VycmVudC5qc29uXCJcclxubGV0IHBsYWNlID0gXCJxPVBhcmlzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=