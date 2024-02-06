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
            "Patchy light snow with thunder", "Moderate or heavy snow with thunder", "Thundery outbreaks in nearby",
            "Patchy light rain in area with thunder", _img_thunder_s_svg__WEBPACK_IMPORTED_MODULE_5__],

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

    let nightOrDay = isDay ? iconsObj.dayArr() : iconsObj.nightArr();

    let img = null


    for (const arr of nightOrDay){

        if(img !== null){ break }

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
        this.isDay = obj.is_day ? true : false
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
        this.tempC_feel = objCurrent ? objCurrent.tempC_feel : false, // PORQUE AGREGUE ESTO? PORQUE EN LA CARD EXTRA
        this.tempF_feel = objCurrent ? objCurrent.tempF_feel : false, // NECESITO ESTE DATO ADEMAS DE LOS DEL DAY
        this.avgHumidity = obj.avghumidity,                // Y ERA MAS FACIL AGREGARLO ACA, QUE PONER CONDICIONALES
        this.wind = obj.maxwind_kph,
        this.precipTotal = obj.totalprecip_mm,
        this.precipChance = obj.daily_chance_of_rain,
        this.snowTotal = obj.totalsnow_cm,
        this.snowChance = obj.daily_chance_of_snow,
        this.uv = obj.uv,
        this.date = date,
        this.isDay = true,
        this.isHistory = false
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

   let chosenDay;
   let attributeVal;

   switch(true) {
        case day === "today":
            chosenDay = today
            attributeVal = "today"
            break;
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

    renderPrincipal(chosenDay, location, attributeVal)
    renderHours(chosenDay)
    renderExtra(chosenDay)
    // this renders always the same way //
    renderNear(forecastArr, historyArr)
}

function renderHours(forecast){

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){

            sliderContainer.firstElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setHourData)("card-aside", hour))
        } else if(i >= 12){
 
            sliderContainer.lastElementChild.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setHourData)("card-aside", hour)) 
        }    
   })
}



function renderPrincipal(weatherObj, location, attributeVal){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    principalContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setPrincipalData)("card-principal", weatherObj, location, attributeVal))
}



function renderNear(forecastArr, historyArr){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    nearArr[0].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", yesterday.day))
    nearArr[1].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", today.day))
    nearArr[2].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", tomorrow.day))
    nearArr[3].appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setNearData)("card-near", lastDay.day))
}


function renderExtra(forecast){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    extraContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setExtraData)("card-extra", extraData));
}


function renderError(){
   
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
/* harmony export */   setExtraData: () => (/* binding */ setExtraData),
/* harmony export */   setHourData: () => (/* binding */ setHourData),
/* harmony export */   setNearData: () => (/* binding */ setNearData),
/* harmony export */   setPrincipalData: () => (/* binding */ setPrincipalData)
/* harmony export */ });
/* harmony import */ var _img_confused_black_line_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/confused-black-line.svg */ "./src/img/confused-black-line.svg");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");






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

function setPrincipalData(className, weatherObj, locationObj, attributeVal) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let { 0: img, 1: sub, 2: place, 3: temp,  6: date, 14: wrapper } = cardArr

    let weather = weatherObj.hasOwnProperty("current") ? weatherObj.current : weatherObj.day;

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_1__.iconSelector)(weather);
    sub.textContent = weather.weatherText;
    place.textContent = `${locationObj.name}, ${locationObj.country}`; 


    temp.textContent = tempOpt.classList.contains("fara") ? 
    `${Number.parseInt(weather.tempF)}º` : `${Number.parseInt(weather.tempC)}º`
                     
    date.setAttribute("data-day", attributeVal)
    date.textContent = weatherObj.hasOwnProperty("current") ? 
    "Today, currently" : `${weather.date.slice(8)}/${weather.date.slice(5, 7)}, average tº`;


    wrapper.appendChild(place)
    wrapper.appendChild(date)
    
    return card
}

function setExtraData(className, weatherObj) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

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
    if(tempOpt.classList.contains("fara")){ 
        tempFeel.textContent = weatherObj.tempF_feel ? 
        `${Number.parseInt(weatherObj.tempF_feel)}º` : tempFeel.classList.add("not");
        tempMinMax.textContent = `${Number.parseInt(weatherObj.maxTempF)}º/${Number.parseInt(weatherObj.minTempF)}º`;
    }

    
    return card
}

function setNearData(className, weatherObj) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let {0: img, 1: sub, 3: temp, 6: date } = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_1__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    date.textContent = `${weatherObj.date.slice(8)}/${weatherObj.date.slice(5, 7)}`;

    temp.textContent = tempOpt.classList.contains("fara") ? 
    `${Number.parseInt(weatherObj.tempF)}º avg.` : `${Number.parseInt(weatherObj.tempC)}º avg.`;
    

    return card
}

function setHourData(className, weatherObj) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let {0: img, 1: sub, 3: temp, 9: time} = cardArr

    img.src = (0,_auxiliaries__WEBPACK_IMPORTED_MODULE_1__.iconSelector)(weatherObj);
    sub.textContent = weatherObj.weatherText;
    time.textContent = weatherObj.time;

    temp.textContent = tempOpt.classList.contains("fara") ? 
    `${Number.parseInt(weatherObj.tempF)}º` : `${Number.parseInt(weatherObj.tempC)}º`;

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


/* function setCardData(className, weatherObj, locationObj, attributeName) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    let {card, cardArr} = createCard()
    card.classList.add(className)


    let [img, sub, place, temp, tempFeel, tempMinMax, date, cloud, precip, time, 
         humidity, snow, wind, uv] = cardArr

    img.src = iconSelector(weatherObj);
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

    let location = getLocation(dataForecast)
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

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
let tempOpt = document.querySelector("ul :nth-child(2)")
let theme = document.querySelector(".theme")
let near = document.querySelector(".near")
let nearArr = Array.from(near.children)

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
    setTheme(localStorage.getItem("theme"))
    setTemp(localStorage.getItem("temp"))
   } 
   catch(err){
    console.log(err)
    getData("argentina")
    setTheme("theme-dark")
    setTemp("celsius")
   }
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

   dataHandler(dataForecast, dataHistory)

} catch(err){

       (0,_display__WEBPACK_IMPORTED_MODULE_2__.renderError)()
    }  
} 

function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    if(localStorage.getItem("temp") === "fara"){
        this.textContent = "to Fahrenheit"
        setTemp("celsius")
    } else { 
        this.textContent = "to Celsius"
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



async function dataHandler(dataForecast, dataHistory){

    let [location, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0U7QUFDSTtBQUNNO0FBQ0k7QUFDUjtBQUNSO0FBQ0U7QUFDTTtBQUNJO0FBQ1I7QUFDRjtBQUN0QztBQUNBO0FBQ3FEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQixHQUFHLG9CQUFvQixHQUFHLGVBQWU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDZDQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELCtDQUFVO0FBQ2hFO0FBQ0EseUNBQXlDLDJDQUFNO0FBQy9DO0FBQ0E7QUFDQSxZQUFZLDRDQUFPO0FBQ25CO0FBQ0EsbUNBQW1DLDhDQUFTO0FBQzVDO0FBQ0EsbUJBQW1CLDJDQUFNO0FBQ3pCO0FBQ0Esb0JBQW9CLDRDQUFPO0FBQzNCO0FBQ0E7QUFDQSwyREFBMkQsK0NBQVU7QUFDckU7QUFDQTtBQUNBLDJEQUEyRCxpREFBWTtBQUN2RTtBQUNBLGlDQUFpQyxpREFBWTtBQUM3QztBQUNBLG1DQUFtQyxtREFBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYTtBQUMxRDtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTjBDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVE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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0VBQXdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcblxyXG5leHBvcnQge2NvbXBhcmVPYmplY3RzLCBpY29uU2VsZWN0b3IsIGdldFByZXZpb3VzRGF5fVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFByZXZpb3VzRGF5KCkge1xyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcblxyXG4gICAgbGV0IGZ1bGxEYXRlID0gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YFxyXG5cclxuICAgIHJldHVybiBmdWxsRGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgXCJUaHVuZGVyeSBvdXRicmVha3MgaW4gbmVhcmJ5XCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gaW4gYXJlYSB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBudWxsXHJcblxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IG51bGwpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBlYXN5Q2FyKGUpIHtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cFwiKSA/IFwidXBcIiA6IFwiZG93blwiXHJcblxyXG4gICAgaWYoZXZlbnQgPT09IFwidXBcIikge1xyXG4gICAgICAgZWxlbWVudHMuc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSAgXHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImRvd25cIikge1xyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxyXG4gICAgICAgIGVsZW1lbnRzLnNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxubGV0IGVsZW1lbnRzID0ge1xyXG4gICAgYnRuVXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyVXAgKi9lYXN5Q2FyKSxcclxuXHJcbiAgICBidG5Eb3duOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvd25cIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgLyogY2Fyb3VzZWwuc2xpZGVyRG93biAqL2Vhc3lDYXIpLFxyXG5cclxuICAgIHNsaWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxufVxyXG4gICAgICAgXHJcbiAgICAgXHJcblxyXG5cclxuXHJcbi8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIEJZIFRIRSBBUEkgKElUUyBQUk9QRVJUSUVTLCBWQUxVRVMsIEVUQykgLy8vXHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGFyZU9iamVjdHMgKGRhdGEsIGRhdGEyLCBkYXRhMyl7XHJcbiAgICBsZXQgaWRlbSA9IFtdXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkNVUlJFTlRcIiAvLy9cclxuICAgIGxldCBjdXJyZW50RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YS5jdXJyZW50KVxyXG4gICAgbGV0IGZvcmVjYXN0RmlsdGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YTIuY3VycmVudClcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRGaWx0ZXIpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdEZpbHRlcilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiREFZXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBkYXRhMi5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBkYXRhMy5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUFycilcclxuICAgIFxyXG4gICAgbGV0IGZvcmVjYXN0RGF5ID0gZm9yZWNhc3RBcnJbMF0uZGF5XHJcbiAgICBsZXQgaGlzdG9yeURheSA9IGhpc3RvcnlBcnJbMF0uZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5KVxyXG5cclxuICAgIGxldCBmb3JlY2FzdERheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0RGF5KVxyXG4gICAgbGV0IGhpc3RvcnlEYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5RGF5KVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheUFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheUFycilcclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiSE9VUlNcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEhvdXIgPSBmb3JlY2FzdEFyclswXS5ob3VyWzBdXHJcbiAgICBsZXQgaGlzdG9yeUhvdXIgPSBoaXN0b3J5QXJyWzBdLmhvdXJbMF1cclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91cilcclxuXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3RIb3VyKVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyQXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeUhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91ckFycilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXJBcnIpXHJcblxyXG4gICAgLy8vIEFDVFVBTCBDT01QQVJJVElPTiAvLy8gICAgICBcclxuICAgIGN1cnJlbnRGaWx0ZXIuZm9yRWFjaCgocHJvcCkgPT57XHJcbiAgICAgICAgZm9yZWNhc3RGaWx0ZXIuZm9yRWFjaCgocHIpID0+e1xyXG4gICAgICAgICAgICBpZihwcm9wID09PSBwciApe1xyXG4gICAgICAgICAgICAgICAgaWRlbS5wdXNoKHByb3ApXHJcbiAgICAgICAgfX0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaWRlbTpcIiwgaWRlbSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBsZXQgY2Fyb3VzZWwgPSB7XHJcbiAgICBcclxuICAgIHZhbDogMCxcclxuICAgIFxyXG4gICAgc2xpZGVyVXAoZSkge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSA0N1xyXG4gICAgXHJcbiAgICAgICAgaWYoY2Fyb3VzZWwudmFsID09PSAwIHx8IGVsZW1lbnRzLnNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVyRG93bihlKSB7XHJcblxyXG4gICAgICAgbGV0IHZhbHVlID0gLTQ3IFxyXG5cclxuICAgICAgICBpZihlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJvbmNlXCIpKSB7cmV0dXJufVxyXG5cclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcIm9uY2VcIilcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwib25jZVwiKVxyXG5cclxuICAgICAgICBjYXJvdXNlbC52YWwgKz0gdmFsdWVcclxuICAgICAgICBlbGVtZW50cy5zbGlkZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7Y2Fyb3VzZWwudmFsfXJlbWBcclxuXHJcbiAgICB9XHJcbn0gKi8iLCJleHBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufVxyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhvdXIgZXh0ZW5kcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIHRpbWUpe1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai5zbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWVcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgb2JqQ3VycmVudCl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEMgPSBvYmoubWF4dGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWF4VGVtcEYgPSBvYmoubWF4dGVtcF9mLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEMgPSBvYmoubWludGVtcF9jLFxyXG4gICAgICAgIHRoaXMubWluVGVtcEYgPSBvYmoubWludGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmouYXZndGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmouYXZndGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iakN1cnJlbnQgPyBvYmpDdXJyZW50LnRlbXBDX2ZlZWwgOiBmYWxzZSwgLy8gUE9SUVVFIEFHUkVHVUUgRVNUTz8gUE9SUVVFIEVOIExBIENBUkQgRVhUUkFcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmpDdXJyZW50ID8gb2JqQ3VycmVudC50ZW1wRl9mZWVsIDogZmFsc2UsIC8vIE5FQ0VTSVRPIEVTVEUgREFUTyBBREVNQVMgREUgTE9TIERFTCBEQVlcclxuICAgICAgICB0aGlzLmF2Z0h1bWlkaXR5ID0gb2JqLmF2Z2h1bWlkaXR5LCAgICAgICAgICAgICAgICAvLyBZIEVSQSBNQVMgRkFDSUwgQUdSRUdBUkxPIEFDQSwgUVVFIFBPTkVSIENPTkRJQ0lPTkFMRVNcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoubWF4d2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai50b3RhbHByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLnByZWNpcENoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai50b3RhbHNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMudXYgPSBvYmoudXYsXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gdHJ1ZSxcclxuICAgICAgICB0aGlzLmlzSGlzdG9yeSA9IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIExvY2F0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iail7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb2JqLm5hbWUsXHJcbiAgICAgICAgdGhpcy5jb3VudHJ5ID0gb2JqLmNvdW50cnksXHJcbiAgICAgICAgdGhpcy5yZWdpb24gPSBvYmoucmVnaW9uXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3NldENhcmREYXRhLCBzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YSwgc2V0RXh0cmFEYXRhLCBzZXRIb3VyRGF0YSwgY3JlYXRlRXJyb3JDYXJkfSBmcm9tIFwiLi9kb21cIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YURpc3BsYXksIHJlbmRlckVycm9yfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSA9IFwidG9kYXlcIil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgaGFuZGxlRXJyb3JDbGFzcyhmYWxzZSlcclxuXHJcbiAgIGxldCBjaG9zZW5EYXk7XHJcbiAgIGxldCBhdHRyaWJ1dGVWYWw7XHJcblxyXG4gICBzd2l0Y2godHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInRvZGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHRvZGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwidG9kYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ5ZXN0ZXJkYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0geWVzdGVyZGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwieWVzdGVyZGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwidG9tb3Jyb3dcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gdG9tb3Jyb3dcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ0b21vcnJvd1wiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcImxhc3REYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gbGFzdERheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcImxhc3REYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgfVxyXG5cclxuICAgIHJlbmRlclByaW5jaXBhbChjaG9zZW5EYXksIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICByZW5kZXJIb3VycyhjaG9zZW5EYXkpXHJcbiAgICByZW5kZXJFeHRyYShjaG9zZW5EYXkpXHJcbiAgICAvLyB0aGlzIHJlbmRlcnMgYWx3YXlzIHRoZSBzYW1lIHdheSAvL1xyXG4gICAgcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySG91cnMoZm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IGhvdXJzID0gZm9yZWNhc3QuaG91cnNcclxuXHJcbiAgICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0SG91ckRhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIpKVxyXG4gICAgICAgIH0gZWxzZSBpZihpID49IDEyKXtcclxuIFxyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRIb3VyRGF0YShcImNhcmQtYXNpZGVcIiwgaG91cikpIFxyXG4gICAgICAgIH0gICAgXHJcbiAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKHdlYXRoZXJPYmosIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpe1xyXG4gICAgXHJcbiAgICBsZXQgcHJpbmNpcGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgcHJpbmNpcGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldFByaW5jaXBhbERhdGEoXCJjYXJkLXByaW5jaXBhbFwiLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKXtcclxuXHJcbiAgICBsZXQgbmVhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXJDb250YWluZXIuY2hpbGRyZW4pXHJcblxyXG4gICAgbmVhckFyci5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiKVxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIG5lYXJBcnJbMF0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgeWVzdGVyZGF5LmRheSkpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSkpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvbW9ycm93LmRheSkpXHJcbiAgICBuZWFyQXJyWzNdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIGxhc3REYXkuZGF5KSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgZXh0cmFEYXRhID0gZm9yZWNhc3QuZGF5XHJcblxyXG4gICAgbGV0IGV4dHJhQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYVwiKVxyXG4gICAgZXh0cmFDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBleHRyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRFeHRyYURhdGEoXCJjYXJkLWV4dHJhXCIsIGV4dHJhRGF0YSkpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXJyb3IoKXtcclxuICAgXHJcbiAgICBoYW5kbGVFcnJvckNsYXNzKHRydWUpXHJcblxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGNyZWF0ZUVycm9yQ2FyZCgpKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3JDbGFzcyhlcnJvcil7XHJcblxyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxyXG5cclxuICAgIGxldCBtYWluQXJyID0gQXJyYXkuZnJvbShtYWluLmNoaWxkcmVuKVxyXG5cclxuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKVxyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtib2R5LCBtYWluLCBtYWluQXJyLCBhc2lkZV0uZmxhdCgpXHJcblxyXG4gICAgaWYoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIikpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBpbWdGYWNlIGZyb20gXCIuL2ltZy9jb25mdXNlZC1ibGFjay1saW5lLnN2Z1wiO1xyXG5cclxuaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YSwgc2V0RXh0cmFEYXRhLCBzZXRIb3VyRGF0YSwgY3JlYXRlRXJyb3JDYXJkfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuXHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpXHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBlbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCl7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBcImNhcmRcIilcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwbGFjZVwiKVxyXG4gICAgbGV0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRhdGVcIilcclxuICAgIGxldCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndyYXBwZXJcIilcclxuICAgIGxldCB0ZW1wID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wXCIpXHJcbiAgICBsZXQgdGVtcEZlZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBGZWVsXCIpXHJcbiAgICBsZXQgdGVtcE1pbk1heCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcE1pbk1heFwiKVxyXG4gICAgbGV0IGNsb3VkID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjbG91ZFwiKVxyXG4gICAgbGV0IHByZWNpcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwXCIpXHJcbiAgICBsZXQgaHVtaWRpdHkgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImh1bWlkaXR5XCIpXHJcbiAgICBsZXQgdGltZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGltZVwiKVxyXG4gICAgbGV0IHNub3cgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNub3dcIilcclxuICAgIGxldCB3aW5kID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3aW5kXCIpXHJcbiAgICBsZXQgdXYgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInV2XCIpXHJcblxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInN1YlwiKVxyXG5cclxuICAgbGV0IGNhcmRBcnIgPSBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1diwgd3JhcHBlcl1cclxuXHJcbiAgIGNhcmRBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpfSlcclxuXHJcbiAgICByZXR1cm4ge2NhcmQsIGNhcmRBcnJ9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByaW5jaXBhbERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlVmFsKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHsgMDogaW1nLCAxOiBzdWIsIDI6IHBsYWNlLCAzOiB0ZW1wLCAgNjogZGF0ZSwgMTQ6IHdyYXBwZXIgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IHdlYXRoZXJPYmouaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpID8gd2VhdGhlck9iai5jdXJyZW50IDogd2VhdGhlck9iai5kYXk7XHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcblxyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQyl9wrpgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gd2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikgPyBcclxuICAgIFwiVG9kYXksIGN1cnJlbnRseVwiIDogYCR7d2VhdGhlci5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXIuZGF0ZS5zbGljZSg1LCA3KX0sIGF2ZXJhZ2UgdMK6YDtcclxuXHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwbGFjZSlcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZSlcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXh0cmFEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7NDogdGVtcEZlZWwsIDU6IHRlbXBNaW5NYXgsIDc6IGNsb3VkLCA4OiBwcmVjaXAsIDEwOiBodW1pZGl0eSwgMTE6IHNub3csIFxyXG4gICAgICAgIDEyOiB3aW5kLCAxMzogdXZ9ID0gY2FyZEFyclxyXG5cclxuXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSl7IFxyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gXHJcbiAgICAgICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5lYXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDY6IGRhdGUgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6IGF2Zy5gIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6IGF2Zy5gO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SG91ckRhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHswOiBpbWcsIDE6IHN1YiwgMzogdGVtcCwgOTogdGltZX0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50aW1lO1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CumAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2FyZCgpe1xyXG5cclxuICAgIGxldCBlcnIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZXJyb3JcIilcclxuICAgIGxldCBpbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiZXJyb3JcIilcclxuICAgIGxldCBwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJlcnJvclwiKVxyXG4gICAgaW1nLnNyYyA9IGltZ0ZhY2VcclxuICAgIHAudGV4dENvbnRlbnQgPSBcInVoIG9oLi4uIGxvY2F0aW9uIG5vdCBmb3VuZFwiXHJcbiAgICBlcnIuYXBwZW5kQ2hpbGQoaW1nKVxyXG4gICAgZXJyLmFwcGVuZENoaWxkKHApXHJcblxyXG4gICAgcmV0dXJuIGVyclxyXG59XHJcblxyXG5cclxuLyogZnVuY3Rpb24gc2V0Q2FyZERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlTmFtZSkge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuXHJcbiAgICBsZXQgW2ltZywgc3ViLCBwbGFjZSwgdGVtcCwgdGVtcEZlZWwsIHRlbXBNaW5NYXgsIGRhdGUsIGNsb3VkLCBwcmVjaXAsIHRpbWUsIFxyXG4gICAgICAgICBodW1pZGl0eSwgc25vdywgd2luZCwgdXZdID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbk9iai5uYW1lfSwgJHtsb2NhdGlvbk9iai5jb3VudHJ5fWA7IFxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgXCJcIilcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcbiAgICB0aW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50aW1lO1xyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YDtcclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wQ19mZWVsID8gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcENfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wQyl9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wQyl9wrpgO1xyXG4gICAgaWYoIHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSl7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib2xhIGsgYXNlXCIpXHJcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CumA7XHJcbiAgICAgICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRl9mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgICAgIHRlbXBNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5tYXhUZW1wRil9wrovJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5taW5UZW1wRil9wrpgO1xyXG4gICAgfSBcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn0gKi9cclxuXHJcblxyXG4iLCJpbXBvcnQge0N1cnJlbnRXZWF0aGVyLCBEYXksIEhvdXIsIExvY2F0aW9ufSBmcm9tIFwiLi9jbGFzc1wiXHJcblxyXG5leHBvcnQge3RyaWdnZXJEYXRhU3RydWN0dXJhdGlvbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIHJldHVybiBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdGb3JlY2FzdEFyciA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheTtcclxuXHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gZ2V0Q3VycmVudFdlYXRoZXIob2JqKVxyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXksIHJhd1RvZGF5QXJyLmRhdGUsIGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIGxldCB0b2RheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9kYXlBcnIpO1xyXG4gICAgbGV0IHRvZGF5T2JqID0ge2N1cnJlbnQ6IGN1cnJlbnRXZWF0aGVyLCBkYXk6IHRvZGF5RGF5LCBob3VyczogdG9kYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF5ID0gbmV3IERheShyYXdUb21vcnJvd0Fyci5kYXksIHJhd1RvbW9ycm93QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvbW9ycm93SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb21vcnJvd0Fycik7XHJcbiAgICBsZXQgdG9tb3Jyb3dPYmogPSB7ZGF5OiB0b21vcnJvd0RheSwgaG91cnM6IHRvbW9ycm93SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSwgcmF3TGFzdERheUFyci5kYXRlKTtcclxuICAgIGxldCBsYXN0RGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdMYXN0RGF5QXJyKTtcclxuICAgIGxldCBsYXN0RGF5T2JqID0ge2RheTogbGFzdERheURheSwgaG91cnM6IGxhc3REYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5T2JqLCB0b21vcnJvd09iaiwgbGFzdERheU9ial07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhpc3RvcnlEYXRhKG9iaikge1xyXG5cclxuICAgIGxldCBbcmF3WWVzdGVyZGF5QXJyXSA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlEYXkgPSBuZXcgRGF5KHJhd1llc3RlcmRheUFyci5kYXksIHJhd1llc3RlcmRheUFyci5kYXRlIClcclxuICAgIHllc3RlcmRheURheS5pc0hpc3RvcnkgPSB0cnVlO1xyXG4gICAgbGV0IHllc3RlcmRheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3WWVzdGVyZGF5QXJyKVxyXG5cclxuICAgIGxldCB5ZXN0ZXJkYXlPYmogPSB7ZGF5OiB5ZXN0ZXJkYXlEYXksIGhvdXJzOiB5ZXN0ZXJkYXlIb3Vyc0Fycn1cclxuXHJcbiAgICByZXR1cm4geWVzdGVyZGF5T2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExvY2F0aW9uKG9iaikge1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IG9iai5sb2NhdGlvblxyXG4gICAgbGV0IGxvY2F0aW9uT2JqID0gbmV3IExvY2F0aW9uKGxvY2F0aW9uKVxyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbk9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihvYmopeyBcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai5jdXJyZW50XHJcbiAgICBsZXQgZGF0ZSA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlXHJcbiAgICBsZXQgd2VhdGhlck9iaiA9IG5ldyBDdXJyZW50V2VhdGhlcih3ZWF0aGVyLCBkYXRlKVxyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhvdXJzKGFycikge1xyXG5cclxuICAgIHJldHVybiBhcnIuaG91ci5tYXAoIChob3VyKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBob3VyLnRpbWUuc2xpY2UoMCwgMTApXHJcbiAgICAgICAgbGV0IHRpbWUgPSBob3VyLnRpbWUuc2xpY2UoMTEpXHJcbiAgICAgIHJldHVybiBuZXcgSG91cihob3VyLCBkYXRlLCB0aW1lKVxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0cywgZ2V0UHJldmlvdXNEYXl9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5LCByZW5kZXJFcnJvcn0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5cclxuXHJcbmxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxyXG5sZXQgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxyXG5sZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcbmxldCB0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWVcIilcclxubGV0IG5lYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxubGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXIuY2hpbGRyZW4pXHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKVxyXG5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSlcclxudGVtcE9wdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVGVtcClcclxudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRoZW1lKVxyXG5uZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZWFyQ2FyZHNFdmVudCkpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdClcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TWVudShlKSB7XHJcbiAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoZSkge1xyXG5cclxuICAgIGlmKCFuYXYuY29udGFpbnMoZS50YXJnZXQpKXtcclxuICAgICAgICBidG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tZW51XCIpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudCgpIHtcclxuXHJcbiAgICBsZXQgY2FyZERheSA9IHRoaXMuY2xhc3NOYW1lXHJcblxyXG4gICAgbGV0IHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9ID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBjYXJkRGF5KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2F0aW9uXCIpKVxyXG5cclxuICAgdHJ5e1xyXG4gICAgZ2V0RGF0YShwbGFjZS5uYW1lKVxyXG4gICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSlcclxuICAgIHNldFRlbXAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wXCIpKVxyXG4gICB9IFxyXG4gICBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgZ2V0RGF0YShcImFyZ2VudGluYVwiKVxyXG4gICAgc2V0VGhlbWUoXCJ0aGVtZS1kYXJrXCIpXHJcbiAgICBzZXRUZW1wKFwiY2Vsc2l1c1wiKVxyXG4gICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gaW5wdXQudmFsdWUgXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShpbnB1dFZhbCl7XHJcblxyXG50cnl7XHJcbiAgICBsZXQgW3Jlc3BvbnNlLCByZXNwb25zZTJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT0ke2lucHV0VmFsfSZkYXlzPTNgKSxcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTImcT0ke2lucHV0VmFsfSZkdD0ke2dldFByZXZpb3VzRGF5KCl9YClcclxuICAgIF0pXHJcblxyXG4gICAgaWYoIXJlc3BvbnNlLm9rIHx8ICFyZXNwb25zZTIub2spe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhZCByZXF1ZXN0XCIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICByZXNwb25zZS5qc29uKCksXHJcbiAgICAgICAgcmVzcG9uc2UyLmpzb24oKVxyXG4gICAgXSlcclxuXHJcbiAgICAvLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCAvLy9cclxuICAgIC8vY29tcGFyZU9iamVjdHMoZGF0YSwgZGF0YTIsIGRhdGEzKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGFGb3JlY2FzdClcclxuICAgIGNvbnNvbGUubG9nKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSlcclxuXHJcbn0gY2F0Y2goZXJyKXtcclxuXHJcbiAgICAgICByZW5kZXJFcnJvcigpXHJcbiAgICB9ICBcclxufSBcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIilcclxuICAgIGxldCBhdHRyID0gZGF0ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiKVxyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFwiKSA9PT0gXCJmYXJhXCIpe1xyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIEZhaHJlbmhlaXRcIlxyXG4gICAgICAgIHNldFRlbXAoXCJjZWxzaXVzXCIpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBDZWxzaXVzXCJcclxuICAgICAgICBzZXRUZW1wKFwiZmFyYVwiKVxyXG4gICAgfVxyXG5cclxuICAgbGV0IHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9ID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGF0dHIpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRUZW1wKHRlbXBlcmF0dXJlKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcFwiLCB0ZW1wZXJhdHVyZSlcclxuICAgIHRlbXBPcHQuY2xhc3NOYW1lID0gdGVtcGVyYXR1cmVcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRoZW1lKCl7XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJ0aGVtZS1kYXJrXCIpe1xyXG4gICAgICAgIHNldFRoZW1lKFwidGhlbWUtbGlnaHRcIilcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBkYXJrIHRoZW1lXCJcclxuICAgICAgIFxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHNldFRoZW1lKFwidGhlbWUtZGFya1wiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIGxpZ2h0IHRoZW1lXCJcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGhlbWUodGhlbWUpe1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKVxyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IHRoZW1lXHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSl7XHJcblxyXG4gICAgbGV0IFtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgc3RvcmVEYXRhKGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHN0b3JlRGF0YShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpIHtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZm9yZWNhc3RBcnJcIiwgSlNPTi5zdHJpbmdpZnkoZm9yZWNhc3RBcnIpKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaXN0b3J5QXJyXCIsIEpTT04uc3RyaW5naWZ5KGhpc3RvcnlBcnIpKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVEYXRhKCl7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2F0aW9uXCIpKVxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0QXJyXCIpKVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeUFyclwiKSlcclxuXHJcbiAgICByZXR1cm4ge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldCBleCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=