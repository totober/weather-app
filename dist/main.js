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
/* harmony export */   carousel: () => (/* binding */ carousel),
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















/// GET YESTERDAY DAY ///

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

/// GET ICON FOR THE RESPECTIVE WEATHER ///

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

/// HOURS CAROUSEL ///

function carousel(e) {

    let slider = document.querySelector(".slider");

    let event = e.target.classList.contains("up") ? "up" : "down"

    if(event === "up") {
       slider.firstElementChild.classList.add("show")
       slider.lastElementChild.classList.remove("show")  
    } else if (event === "down") {
        slider.firstElementChild.classList.remove("show")
        slider.lastElementChild.classList.add("show")
    } 
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


/// CLASS FOR CURRENT STRUCTURATION ///

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

/// CLASS FOR HOUR STRUCTURATION ///

class Hour extends CurrentWeather {
    constructor(obj, date, time){
        super(obj)
        this.snowTotal = obj.snow_cm,
        this.snowChance = obj.chance_of_snow,
        this.date = date,
        this.time = time
    }
}

/// CLASS FOR DAY  STRUCTURATION ///

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

/// CLASS FOR LOCATION STRUCTURATION ///

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




/// DATA DISPLAY HANDLER ///

function triggerDataDisplay(location, forecastArr, historyArr, day = "today"){

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    isDayorNight(forecastArr)
    isDayorNight(yesterday)

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
    // THIS RENDER ALWAYS THE SAME WAY //
    renderNear(forecastArr, historyArr)
}

/// RENDER THE HOURS OF THE DAY ///

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


/// RENDER PRINCIPAL DATA OF THE DAY ///

function renderPrincipal(weatherObj, location, attributeVal){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    principalContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setPrincipalData)("card-principal", weatherObj, location, attributeVal))
}

/// RENDER EXTRA DATA OF THE DAY ///

function renderExtra(forecast){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    extraContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.setExtraData)("card-extra", extraData));
}

/// RENDER ALL DAYS: YESTERDAY, TODAY, TOMORROW, LASTDAY ///

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


/// RENDER ERROR ///

function renderError(){
   
    handleErrorClass(true)

    let principal = document.querySelector(".principal")
    principal.innerHTML = ""
    principal.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createErrorCard)())
}

/// HANDLE THE ERROR CLASSES FOR DISPLAY THE CORRECT DATA ///

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

/// CHECK IF CURRENTLY IS DAY OR NIGHT FOR RENDERING DATA WITH CORRECT ICONS ///

function isDayorNight(object) {

    if(Array.isArray(object)){

    object.forEach(el => {
        el.day.isDay = JSON.parse(localStorage.getItem("forecastArr"))[0].current.isDay;
    })
    } else {
        object.day.isDay = JSON.parse(localStorage.getItem("forecastArr"))[0].current.isDay;
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





/// CREATE COMMON CARD ///

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

/// SET DATA OF PRINCIPAL CARD ///

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
    date.textContent = `${weather.date.slice(8)}/${weather.date.slice(5, 7)}, average tº`;
    if(weatherObj.hasOwnProperty("current")) {
       date.textContent = weather.isDay ? "Today, currently" : "Tonight, currently" 
    }
    


    wrapper.appendChild(place)
    wrapper.appendChild(date)
    
    return card
}

/// SET DATA OF EXTRA CARD ///

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

/// SET DATA OF EACH DAY CARD ///

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

/// SET DATA OF HOUR CARD ///

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

/// CREATE AND SET DATA OF ERROR CARD ///

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

/// HELP CREATE ELEMENTS ///

function createElement(element, className) {

    let el = document.createElement(element)
    el.classList.add(className)
    return el
}


/// SET DATA FOR ALL THE CARDS ///

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   retrieveData: () => (/* binding */ retrieveData)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _interactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactivity */ "./src/interactivity.js");







/// APP AUTOMATIC INITIALIZATION ///

function initializeApp() {
    
    let place = JSON.parse(localStorage.getItem("location"))

   try{

    getData(place.name)
    ;(0,_interactivity__WEBPACK_IMPORTED_MODULE_3__.setTheme)(localStorage.getItem("theme"))
    ;(0,_interactivity__WEBPACK_IMPORTED_MODULE_3__.setTemp)(localStorage.getItem("temp"))
   } 
   catch(err){

    getData("argentina")
    ;(0,_interactivity__WEBPACK_IMPORTED_MODULE_3__.setTheme)("theme-dark")
    ;(0,_interactivity__WEBPACK_IMPORTED_MODULE_3__.setTemp)("celsius")
   }
}

/// GET DATA FROM WEATHER API ///

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

   dataHandler(dataForecast, dataHistory)

} catch(err){

       (0,_display__WEBPACK_IMPORTED_MODULE_2__.renderError)()
    }  
} 

/// HANDLE THE DATA: STRUCTURE THE DATA, STORE THE DATA AND DISPLAY THE DATA ///

async function dataHandler(dataForecast, dataHistory){

    let [location, forecastArr, historyArr] = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.triggerDataStructuration)(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)

    ;(0,_display__WEBPACK_IMPORTED_MODULE_2__.triggerDataDisplay)(location, forecastArr, historyArr)
}

/// STORE THE DATA ///

function storeData(location, forecastArr, historyArr) {

    localStorage.setItem("location", JSON.stringify(location))
    localStorage.setItem("forecastArr", JSON.stringify(forecastArr))
    localStorage.setItem("historyArr", JSON.stringify(historyArr))

}

/// RETRIEVE THE DATA ///

function retrieveData(){

    let location = JSON.parse(localStorage.getItem("location"))
    let forecastArr = JSON.parse(localStorage.getItem("forecastArr"))
    let historyArr = JSON.parse(localStorage.getItem("historyArr"))

    return {location, forecastArr, historyArr}
}




/// EXAMPLE OF THE URL USED FOR THE API AND THE DIFFERENT PARTS ///

/* let example = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"
let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris" */


/***/ }),

/***/ "./src/interactivity.js":
/*!******************************!*\
  !*** ./src/interactivity.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   setTemp: () => (/* binding */ setTemp),
/* harmony export */   setTheme: () => (/* binding */ setTheme)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _auxiliaries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auxiliaries */ "./src/auxiliaries.js");







/// ELEMENTS OBJECT WITH LISTENERS ///

let elements = {

    input: document.querySelector("input"),
    nav: document.querySelector("nav"),
    btnMenu: document.querySelector(".menu"),
    tempOpt: document.querySelector("ul :nth-child(2)"),
    theme: document.querySelector(".theme"),
    near: document.querySelector(".near"),
    btnUp: document.querySelector(".up"),
    btnDown: document.querySelector(".down"),

    initialize(){
        this.addListeners()
    },

    addListeners(){
        window.addEventListener("click", closeMenu);
        window.addEventListener("load", _index__WEBPACK_IMPORTED_MODULE_1__.initializeApp);
        this.input.addEventListener("keydown", getInputValue);
        this.btnMenu.addEventListener("click", showMenu);
        this.tempOpt.addEventListener("click", changeTemp);
        this.theme.addEventListener("click", changeTheme);   
        this.btnUp.addEventListener("click", _auxiliaries__WEBPACK_IMPORTED_MODULE_2__.carousel),
        this.btnDown.addEventListener("click", _auxiliaries__WEBPACK_IMPORTED_MODULE_2__.carousel),     
        this.nearArr().forEach(element => element.addEventListener("click", nearCardsEvent));
    },

    nearArr(){
       return Array.from(this.near.children)
    }
} 

/// SET THE LISTENERS ON THE OBJECTS ///

elements.initialize()


/// GET LOCATION FROM USER INPUT ///

function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = elements.input.value 

    ;(0,_index__WEBPACK_IMPORTED_MODULE_1__.getData)(inputVal)

    elements.input.value = ""
}

/// LISTEN FOR CARD SELECTION FROM THE USER AND DISPLAY THE DATA ///

function nearCardsEvent() {

    let cardDay = this.className

    let {location, forecastArr, historyArr} = (0,_index__WEBPACK_IMPORTED_MODULE_1__.retrieveData)()

    ;(0,_display__WEBPACK_IMPORTED_MODULE_0__.triggerDataDisplay)(location, forecastArr, historyArr, cardDay)
}


/// LISTEN FOR USER SELECTION OF THE MENU ///

function showMenu(e) {
    elements.btnMenu.nextElementSibling.classList.toggle("show-menu")
}

function closeMenu(e) {

    if(!elements.nav.contains(e.target)){
        elements.btnMenu.nextElementSibling.classList.remove("show-menu")
    }
}


/// LISTEN FOR USER CHANGE OF THE TEMPERATURE SCALE ///

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

   let {location, forecastArr, historyArr} = (0,_index__WEBPACK_IMPORTED_MODULE_1__.retrieveData)()

   ;(0,_display__WEBPACK_IMPORTED_MODULE_0__.triggerDataDisplay)(location, forecastArr, historyArr, attr)
}

/// SET AND STORE THE SELECTED TEMPERATURE ///

function setTemp(temperature) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    localStorage.setItem("temp", temperature)
    tempOpt.className = temperature
}

/// LISTEN FOR USER CHANGE OF THE WEB THEME ///

function changeTheme(){

    if(localStorage.getItem("theme") === "theme-dark"){
        setTheme("theme-light")
        this.textContent = "to dark theme"
       
    } else{
        setTheme("theme-dark")
        this.textContent = "to light theme"
    }
}

/// SET AND STORE THE SELECTED THEME ///

function setTheme(theme){
            
localStorage.setItem("theme", theme)
document.documentElement.className = theme
}

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




/// DATA STRUCTURATION HANDLER ///

function triggerDataStructuration (dataForecast, dataHistory){

    let location = getLocation(dataForecast)
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    return [location, forecastArr, historyArr]
}

/// STRUCTURE TODAY, TOMORROW AND LASTDAY DATA ///

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

/// STRUCTURE YESTERDAY DATA ///

function getHistoryData(obj) {

    let [rawYesterdayArr] = obj.forecast.forecastday

    let yesterdayDay = new _class__WEBPACK_IMPORTED_MODULE_0__.Day(rawYesterdayArr.day, rawYesterdayArr.date )
    yesterdayDay.isHistory = true;
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayObj = {day: yesterdayDay, hours: yesterdayHoursArr}

    return yesterdayObj
}

/// STRUCTURE LOCATION DATA ///

function getLocation(obj) {

    let location = obj.location
    let locationObj = new _class__WEBPACK_IMPORTED_MODULE_0__.Location(location)

    return locationObj
}


////// HELPERS //////
            

/// STRUCTURE CURRENT DATA ///

function getCurrentWeather(obj){ 

    let weather = obj.current
    let date = obj.forecast.forecastday[0].date
    let weatherObj = new _class__WEBPACK_IMPORTED_MODULE_0__.CurrentWeather(weather, date)

    return weatherObj
}

/// STRUCTURE HOURS DATA ///

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNFO0FBQ0k7QUFDTTtBQUNJO0FBQ1I7QUFDUjtBQUNFO0FBQ007QUFDSTtBQUNSO0FBQ0Y7QUFDdEM7QUFDK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIsR0FBRyxvQkFBb0IsR0FBRyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNkNBQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4Q0FBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsK0NBQVU7QUFDaEU7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBVTtBQUNyRTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFZO0FBQ3ZFO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRTRHO0FBQzVHO0FBQ3dDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0NBQUk7QUFDckIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXhpbGlhcmllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbnRlcmFjdGl2aXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3VuSW1nIGZyb20gXCIuL2ltZy9zdW4tcy5zdmdcIlxyXG5pbXBvcnQgbW9vbkltZyBmcm9tIFwiLi9pbWcvbW9vbi1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlEYXlJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeURheS1zLnN2Z1wiXHJcbmltcG9ydCBjbG91ZHlOaWdodEltZyBmcm9tIFwiLi9pbWcvY2xvdWR5TmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgdGh1bmRlckltZyBmcm9tIFwiLi9pbWcvdGh1bmRlci1zLnN2Z1wiXHJcbmltcG9ydCBmb2dJbWcgZnJvbSBcIi4vaW1nL2ZvZy1zLnN2Z1wiXHJcbmltcG9ydCByYWluSW1nIGZyb20gXCIuL2ltZy9yYWluLXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5EYXlJbWcgZnJvbSBcIi4vaW1nL3JhaW5EYXktcy5zdmdcIlxyXG5pbXBvcnQgcmFpbk5pZ2h0SW1nIGZyb20gXCIuL2ltZy9yYWluTmlnaHQtcy5zdmdcIlxyXG5pbXBvcnQgc2xlZXRJbWcgZnJvbSBcIi4vaW1nL3NsZWV0LXMuc3ZnXCJcclxuaW1wb3J0IHNub3dJbWcgZnJvbSBcIi4vaW1nL3Nub3ctcy5zdmdcIlxyXG5cclxuZXhwb3J0IHtjb21wYXJlT2JqZWN0cywgaWNvblNlbGVjdG9yLCBnZXRQcmV2aW91c0RheSwgY2Fyb3VzZWx9XHJcblxyXG4vLy8gR0VUIFlFU1RFUkRBWSBEQVkgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRQcmV2aW91c0RheSgpIHtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpO1xyXG5cclxuICAgIGxldCBmdWxsRGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWBcclxuXHJcbiAgICByZXR1cm4gZnVsbERhdGU7XHJcbn1cclxuXHJcblxyXG4vLy8gQVJSQVlTIE9CSkVDVCBGT1IgSUNPTiBDT01QQVJJVElPTiAvLy9cclxuXHJcbmxldCBpY29uc09iaiA9IHtcclxuXHJcbiAgICBzbm93OiBbXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLCBcIkJsb3dpbmcgc25vd1wiLCBcIkJsaXp6YXJkXCIsIFwiUGF0Y2h5IGxpZ2h0IHNub3dcIiwgXCJMaWdodCBzbm93XCIsIFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsIFwiTW9kZXJhdGUgc25vd1wiLCBcIlBhdGNoeSBoZWF2eSBzbm93XCIsIFwiSGVhdnkgc25vd1wiLCBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLCBzbm93SW1nXSxcclxuXHJcbiAgICBzbGVldDogW1wiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLCBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgICAgICAgICAgXCJGcmVlemluZyBkcml6emxlXCIsIFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLCBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICAgICAgICAgIFwiTGlnaHQgc2xlZXRcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLCBcIkljZSBwZWxsZXRzXCIsIFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIiwgXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIFxyXG4gICAgICAgICAgICBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIiwgc2xlZXRJbWddLFxyXG5cclxuICAgIHRodW5kZXI6IFtcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIiwgXCJUaHVuZGVyeSBvdXRicmVha3MgaW4gbmVhcmJ5XCIsXHJcbiAgICAgICAgICAgIFwiUGF0Y2h5IGxpZ2h0IHJhaW4gaW4gYXJlYSB3aXRoIHRodW5kZXJcIiwgdGh1bmRlckltZ10sXHJcblxyXG4gICAgZm9nOiBbXCJNaXN0XCIsIFwiRm9nXCIsIFwiRnJlZXppbmcgZm9nXCIsIGZvZ0ltZ10sXHJcblxyXG4gICAgcmFpbjogW1wiTGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW5cIiwgXCJIZWF2eSByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIiwgXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICAgICAgICAgIHJhaW5JbWddLFxyXG4gICAgXHJcbiAgICBjbG91ZHk6IFtcIkNsb3VkeVwiLCBcIk92ZXJjYXN0XCIsIGNsb3VkeUltZ10sXHJcblxyXG4gICAgc3VuOiBbXCJTdW5ueVwiLCBzdW5JbWddLFxyXG5cclxuICAgIG1vb246IFtcIkNsZWFyXCIsIG1vb25JbWddLFxyXG5cclxuICAgIHJhaW5EYXk6IFtcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsIFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLCBcclxuICAgICAgICAgICAgICAgIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiwgXCJQYXRjaHkgcmFpbiBuZWFyYnlcIiwgcmFpbkRheUltZ10sXHJcblxyXG4gICAgcmFpbk5pZ2h0OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5OaWdodEltZ10sXHJcblxyXG4gICAgY2xvdWR5RGF5OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeURheUltZ10sXHJcblxyXG4gICAgY2xvdWR5TmlnaHQ6IFtcIlBhcnRseSBjbG91ZHlcIiwgY2xvdWR5TmlnaHRJbWddLFxyXG5cclxuICAgIGRheUFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zdW4sIHRoaXMucmFpbkRheSwgdGhpcy5jbG91ZHlEYXksIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XVxyXG4gICAgfSxcclxuXHJcbiAgICBuaWdodEFycigpe1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5tb29uLCB0aGlzLnJhaW5OaWdodCwgdGhpcy5jbG91ZHlOaWdodCwgdGhpcy5jbG91ZHksIHRoaXMucmFpbiwgdGhpcy50aHVuZGVyLCB0aGlzLmZvZywgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNub3csIHRoaXMuc2xlZXRdIFxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gR0VUIElDT04gRk9SIFRIRSBSRVNQRUNUSVZFIFdFQVRIRVIgLy8vXHJcblxyXG5mdW5jdGlvbiBpY29uU2VsZWN0b3Iob2JqKXtcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IG9iai53ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLnRyaW0oKVxyXG4gICAgbGV0IGlzRGF5ID0gb2JqLmlzRGF5IFxyXG5cclxuICAgIGxldCBuaWdodE9yRGF5ID0gaXNEYXkgPyBpY29uc09iai5kYXlBcnIoKSA6IGljb25zT2JqLm5pZ2h0QXJyKCk7XHJcblxyXG4gICAgbGV0IGltZyA9IG51bGxcclxuXHJcblxyXG4gICAgZm9yIChjb25zdCBhcnIgb2YgbmlnaHRPckRheSl7XHJcblxyXG4gICAgICAgIGlmKGltZyAhPT0gbnVsbCl7IGJyZWFrIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFyciApIHtcclxuXHJcbiAgICAgICAgICAgIGlmKHdlYXRoZXIgPT09IGVsZW1lbnQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nID0gYXJyW2Fyci5sZW5ndGggLTFdXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbWdcclxufSBcclxuXHJcbi8vLyBIT1VSUyBDQVJPVVNFTCAvLy9cclxuXHJcbmZ1bmN0aW9uIGNhcm91c2VsKGUpIHtcclxuXHJcbiAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyBcInVwXCIgOiBcImRvd25cIlxyXG5cclxuICAgIGlmKGV2ZW50ID09PSBcInVwXCIpIHtcclxuICAgICAgIHNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikgIFxyXG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICBzbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgfSBcclxufVxyXG5cclxuICAgICAgIFxyXG4vLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCBCWSBUSEUgQVBJIChJVFMgUFJPUEVSVElFUywgVkFMVUVTLCBFVEMpIC8vL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RGaWx0ZXIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkRBWVwiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcbiAgICBcclxuICAgIGxldCBmb3JlY2FzdERheSA9IGZvcmVjYXN0QXJyWzBdLmRheVxyXG4gICAgbGV0IGhpc3RvcnlEYXkgPSBoaXN0b3J5QXJyWzBdLmRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheSlcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheSlcclxuXHJcbiAgICBsZXQgZm9yZWNhc3REYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdERheSlcclxuICAgIGxldCBoaXN0b3J5RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeURheSlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXlBcnIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkhPVVJTXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyID0gZm9yZWNhc3RBcnJbMF0uaG91clswXVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyID0gaGlzdG9yeUFyclswXS5ob3VyWzBdXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91cilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXIpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0SG91cilcclxuICAgIGxldCBoaXN0b3J5SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyQXJyKVxyXG5cclxuICAgIC8vLyBBQ1RVQUwgQ09NUEFSSVRJT04gLy8vICAgICAgXHJcbiAgICBjdXJyZW50RmlsdGVyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn1cclxuIiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbi8vLyBDTEFTUyBGT1IgQ1VSUkVOVCBTVFJVQ1RVUkFUSU9OIC8vL1xyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBDTEFTUyBGT1IgSE9VUiBTVFJVQ1RVUkFUSU9OIC8vL1xyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0xBU1MgRk9SIERBWSAgU1RSVUNUVVJBVElPTiAvLy9cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIG9iakN1cnJlbnQpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDX2ZlZWwgPSBvYmpDdXJyZW50ID8gb2JqQ3VycmVudC50ZW1wQ19mZWVsIDogZmFsc2UsIC8vIFBPUlFVRSBBR1JFR1VFIEVTVE8/IFBPUlFVRSBFTiBMQSBDQVJEIEVYVFJBXHJcbiAgICAgICAgdGhpcy50ZW1wRl9mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcEZfZmVlbCA6IGZhbHNlLCAvLyBORUNFU0lUTyBFU1RFIERBVE8gQURFTUFTIERFIExPUyBERUwgREFZXHJcbiAgICAgICAgdGhpcy5hdmdIdW1pZGl0eSA9IG9iai5hdmdodW1pZGl0eSwgICAgICAgICAgICAgICAgLy8gWSBFUkEgTUFTIEZBQ0lMIEFHUkVHQVJMTyBBQ0EsIFFVRSBQT05FUiBDT05ESUNJT05BTEVTXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLnV2ID0gb2JqLnV2LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IHRydWUsXHJcbiAgICAgICAgdGhpcy5pc0hpc3RvcnkgPSBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0xBU1MgRk9SIExPQ0FUSU9OIFNUUlVDVFVSQVRJT04gLy8vXHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtzZXRDYXJkRGF0YSwgc2V0UHJpbmNpcGFsRGF0YSwgc2V0TmVhckRhdGEsIHNldEV4dHJhRGF0YSwgc2V0SG91ckRhdGEsIGNyZWF0ZUVycm9yQ2FyZH0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5LCByZW5kZXJFcnJvcn1cclxuXHJcbi8vLyBEQVRBIERJU1BMQVkgSEFORExFUiAvLy9cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSA9IFwidG9kYXlcIil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgaXNEYXlvck5pZ2h0KGZvcmVjYXN0QXJyKVxyXG4gICAgaXNEYXlvck5pZ2h0KHllc3RlcmRheSlcclxuXHJcbiAgICBoYW5kbGVFcnJvckNsYXNzKGZhbHNlKVxyXG5cclxuICAgbGV0IGNob3NlbkRheTtcclxuICAgbGV0IGF0dHJpYnV0ZVZhbDtcclxuXHJcbiAgIHN3aXRjaCh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwidG9kYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gdG9kYXlcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ0b2RheVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInllc3RlcmRheVwiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSB5ZXN0ZXJkYXlcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ5ZXN0ZXJkYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ0b21vcnJvd1wiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSB0b21vcnJvd1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcInRvbW9ycm93XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwibGFzdERheVwiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSBsYXN0RGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwibGFzdERheVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICB9XHJcblxyXG4gICAgcmVuZGVyUHJpbmNpcGFsKGNob3NlbkRheSwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbClcclxuICAgIHJlbmRlckhvdXJzKGNob3NlbkRheSlcclxuICAgIHJlbmRlckV4dHJhKGNob3NlbkRheSlcclxuICAgIC8vIFRISVMgUkVOREVSIEFMV0FZUyBUSEUgU0FNRSBXQVkgLy9cclxuICAgIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcbn1cclxuXHJcbi8vLyBSRU5ERVIgVEhFIEhPVVJTIE9GIFRIRSBEQVkgLy8vXHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb3Vycyhmb3JlY2FzdCl7XHJcblxyXG4gICAgbGV0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpXHJcblxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHNsaWRlckNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBsZXQgaG91cnMgPSBmb3JlY2FzdC5ob3Vyc1xyXG5cclxuICAgIGhvdXJzLmZvckVhY2goIChob3VyLCBpKSA9PiB7XHJcbiAgICAgICAgaWYoaSA8IDEyKXtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRIb3VyRGF0YShcImNhcmQtYXNpZGVcIiwgaG91cikpXHJcbiAgICAgICAgfSBlbHNlIGlmKGkgPj0gMTIpe1xyXG4gXHJcbiAgICAgICAgICAgIHNsaWRlckNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldEhvdXJEYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyKSkgXHJcbiAgICAgICAgfSAgICBcclxuICAgfSlcclxufVxyXG5cclxuXHJcbi8vLyBSRU5ERVIgUFJJTkNJUEFMIERBVEEgT0YgVEhFIERBWSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByaW5jaXBhbCh3ZWF0aGVyT2JqLCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKXtcclxuICAgIFxyXG4gICAgbGV0IHByaW5jaXBhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWxDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRQcmluY2lwYWxEYXRhKFwiY2FyZC1wcmluY2lwYWxcIiwgd2VhdGhlck9iaiwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbCkpXHJcbn1cclxuXHJcbi8vLyBSRU5ERVIgRVhUUkEgREFUQSBPRiBUSEUgREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXh0cmEoZm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBleHRyYURhdGEgPSBmb3JlY2FzdC5kYXlcclxuXHJcbiAgICBsZXQgZXh0cmFDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4dHJhXCIpXHJcbiAgICBleHRyYUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGV4dHJhQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldEV4dHJhRGF0YShcImNhcmQtZXh0cmFcIiwgZXh0cmFEYXRhKSk7XHJcbn1cclxuXHJcbi8vLyBSRU5ERVIgQUxMIERBWVM6IFlFU1RFUkRBWSwgVE9EQVksIFRPTU9SUk9XLCBMQVNUREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycil7XHJcblxyXG4gICAgbGV0IG5lYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIilcclxuICAgIGxldCBuZWFyQXJyID0gQXJyYXkuZnJvbShuZWFyQ29udGFpbmVyLmNoaWxkcmVuKVxyXG5cclxuICAgIG5lYXJBcnIuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIilcclxuXHJcbiAgICBsZXQgW3RvZGF5LCB0b21vcnJvdywgbGFzdERheV0gPSBmb3JlY2FzdEFyclxyXG4gICAgbGV0IHllc3RlcmRheSA9IGhpc3RvcnlBcnJcclxuXHJcbiAgICBuZWFyQXJyWzBdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHllc3RlcmRheS5kYXkpKVxyXG4gICAgbmVhckFyclsxXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB0b2RheS5kYXkpKVxyXG4gICAgbmVhckFyclsyXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB0b21vcnJvdy5kYXkpKVxyXG4gICAgbmVhckFyclszXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCBsYXN0RGF5LmRheSkpXHJcbn1cclxuXHJcblxyXG4vLy8gUkVOREVSIEVSUk9SIC8vL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRXJyb3IoKXtcclxuICAgXHJcbiAgICBoYW5kbGVFcnJvckNsYXNzKHRydWUpXHJcblxyXG4gICAgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbmNpcGFsXCIpXHJcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgcHJpbmNpcGFsLmFwcGVuZENoaWxkKGNyZWF0ZUVycm9yQ2FyZCgpKVxyXG59XHJcblxyXG4vLy8gSEFORExFIFRIRSBFUlJPUiBDTEFTU0VTIEZPUiBESVNQTEFZIFRIRSBDT1JSRUNUIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFcnJvckNsYXNzKGVycm9yKXtcclxuXHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXHJcblxyXG4gICAgbGV0IG1haW5BcnIgPSBBcnJheS5mcm9tKG1haW4uY2hpbGRyZW4pXHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlXCIpXHJcblxyXG4gICAgbGV0IGVsZW1lbnRzID0gW2JvZHksIG1haW4sIG1haW5BcnIsIGFzaWRlXS5mbGF0KClcclxuXHJcbiAgICBpZihlcnJvcikge1xyXG5cclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIikpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBDSEVDSyBJRiBDVVJSRU5UTFkgSVMgREFZIE9SIE5JR0hUIEZPUiBSRU5ERVJJTkcgREFUQSBXSVRIIENPUlJFQ1QgSUNPTlMgLy8vXHJcblxyXG5mdW5jdGlvbiBpc0RheW9yTmlnaHQob2JqZWN0KSB7XHJcblxyXG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmplY3QpKXtcclxuXHJcbiAgICBvYmplY3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuZGF5LmlzRGF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0QXJyXCIpKVswXS5jdXJyZW50LmlzRGF5O1xyXG4gICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqZWN0LmRheS5pc0RheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlbMF0uY3VycmVudC5pc0RheTtcclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IGltZ0ZhY2UgZnJvbSBcIi4vaW1nL2NvbmZ1c2VkLWJsYWNrLWxpbmUuc3ZnXCI7XHJcbmltcG9ydCB7IGljb25TZWxlY3RvciB9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCJcclxuXHJcbmV4cG9ydCB7c2V0UHJpbmNpcGFsRGF0YSwgc2V0TmVhckRhdGEsIHNldEV4dHJhRGF0YSwgc2V0SG91ckRhdGEsIGNyZWF0ZUVycm9yQ2FyZH1cclxuXHJcbi8vLyBDUkVBVEUgQ09NTU9OIENBUkQgLy8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCl7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBcImNhcmRcIilcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwbGFjZVwiKVxyXG4gICAgbGV0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRhdGVcIilcclxuICAgIGxldCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndyYXBwZXJcIilcclxuICAgIGxldCB0ZW1wID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wXCIpXHJcbiAgICBsZXQgdGVtcEZlZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBGZWVsXCIpXHJcbiAgICBsZXQgdGVtcE1pbk1heCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcE1pbk1heFwiKVxyXG4gICAgbGV0IGNsb3VkID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjbG91ZFwiKVxyXG4gICAgbGV0IHByZWNpcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwXCIpXHJcbiAgICBsZXQgaHVtaWRpdHkgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImh1bWlkaXR5XCIpXHJcbiAgICBsZXQgdGltZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGltZVwiKVxyXG4gICAgbGV0IHNub3cgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNub3dcIilcclxuICAgIGxldCB3aW5kID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3aW5kXCIpXHJcbiAgICBsZXQgdXYgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInV2XCIpXHJcblxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInN1YlwiKVxyXG5cclxuICAgbGV0IGNhcmRBcnIgPSBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1diwgd3JhcHBlcl1cclxuXHJcbiAgIGNhcmRBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpfSlcclxuXHJcbiAgICByZXR1cm4ge2NhcmQsIGNhcmRBcnJ9XHJcbn1cclxuXHJcbi8vLyBTRVQgREFUQSBPRiBQUklOQ0lQQUwgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldFByaW5jaXBhbERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlVmFsKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHsgMDogaW1nLCAxOiBzdWIsIDI6IHBsYWNlLCAzOiB0ZW1wLCAgNjogZGF0ZSwgMTQ6IHdyYXBwZXIgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IHdlYXRoZXJPYmouaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpID8gd2VhdGhlck9iai5jdXJyZW50IDogd2VhdGhlck9iai5kYXk7XHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcblxyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBGKX3CumAgOiBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlci50ZW1wQyl9wrpgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXIuZGF0ZS5zbGljZSg1LCA3KX0sIGF2ZXJhZ2UgdMK6YDtcclxuICAgIGlmKHdlYXRoZXJPYmouaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpKSB7XHJcbiAgICAgICBkYXRlLnRleHRDb250ZW50ID0gd2VhdGhlci5pc0RheSA/IFwiVG9kYXksIGN1cnJlbnRseVwiIDogXCJUb25pZ2h0LCBjdXJyZW50bHlcIiBcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBsYWNlKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gU0VUIERBVEEgT0YgRVhUUkEgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldEV4dHJhRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmopIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgezQ6IHRlbXBGZWVsLCA1OiB0ZW1wTWluTWF4LCA3OiBjbG91ZCwgODogcHJlY2lwLCAxMDogaHVtaWRpdHksIDExOiBzbm93LCBcclxuICAgICAgICAxMjogd2luZCwgMTM6IHV2fSA9IGNhcmRBcnJcclxuXHJcblxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wQ19mZWVsID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZih0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcEZfZmVlbCA/IFxyXG4gICAgICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gU0VUIERBVEEgT0YgRUFDSCBEQVkgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldE5lYXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDY6IGRhdGUgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6IGF2Zy5gIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6IGF2Zy5gO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuLy8vIFNFVCBEQVRBIE9GIEhPVVIgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldEhvdXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDk6IHRpbWV9ID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YDtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gQ1JFQVRFIEFORCBTRVQgREFUQSBPRiBFUlJPUiBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXJyb3JDYXJkKCl7XHJcblxyXG4gICAgbGV0IGVyciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IHAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImVycm9yXCIpXHJcbiAgICBpbWcuc3JjID0gaW1nRmFjZVxyXG4gICAgcC50ZXh0Q29udGVudCA9IFwidWggb2guLi4gbG9jYXRpb24gbm90IGZvdW5kXCJcclxuICAgIGVyci5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBlcnIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICByZXR1cm4gZXJyXHJcbn1cclxuXHJcbi8vLyBIRUxQIENSRUFURSBFTEVNRU5UUyAvLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuXHJcbi8vLyBTRVQgREFUQSBGT1IgQUxMIFRIRSBDQVJEUyAvLy9cclxuXHJcbi8qIGZ1bmN0aW9uIHNldENhcmREYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZU5hbWUpIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIFwiXCIpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5jbG91ZH0gJWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLndpbmQpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudXY7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcENfZmVlbCA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9sYSBrIGFzZVwiKVxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKHdlYXRoZXJPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59ICovXHJcblxyXG5cclxuIiwiaW1wb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0cywgZ2V0UHJldmlvdXNEYXl9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5LCByZW5kZXJFcnJvcn0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5pbXBvcnQge3NldFRlbXAsIHNldFRoZW1lfSBmcm9tIFwiLi9pbnRlcmFjdGl2aXR5XCJcclxuXHJcbmV4cG9ydCB7Z2V0RGF0YSwgcmV0cmlldmVEYXRhLCBpbml0aWFsaXplQXBwfVxyXG5cclxuLy8vIEFQUCBBVVRPTUFUSUMgSU5JVElBTElaQVRJT04gLy8vXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYXRpb25cIikpXHJcblxyXG4gICB0cnl7XHJcblxyXG4gICAgZ2V0RGF0YShwbGFjZS5uYW1lKVxyXG4gICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSlcclxuICAgIHNldFRlbXAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wXCIpKVxyXG4gICB9IFxyXG4gICBjYXRjaChlcnIpe1xyXG5cclxuICAgIGdldERhdGEoXCJhcmdlbnRpbmFcIilcclxuICAgIHNldFRoZW1lKFwidGhlbWUtZGFya1wiKVxyXG4gICAgc2V0VGVtcChcImNlbHNpdXNcIilcclxuICAgfVxyXG59XHJcblxyXG4vLy8gR0VUIERBVEEgRlJPTSBXRUFUSEVSIEFQSSAvLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaW5wdXRWYWwpe1xyXG5cclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZGF5cz0zYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZHQ9JHtnZXRQcmV2aW91c0RheSgpfWApXHJcbiAgICBdKVxyXG5cclxuICAgIGlmKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UyLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcmVxdWVzdFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgIGRhdGFIYW5kbGVyKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG59IGNhdGNoKGVycil7XHJcblxyXG4gICAgICAgcmVuZGVyRXJyb3IoKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG4vLy8gSEFORExFIFRIRSBEQVRBOiBTVFJVQ1RVUkUgVEhFIERBVEEsIFNUT1JFIFRIRSBEQVRBIEFORCBESVNQTEFZIFRIRSBEQVRBIC8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSl7XHJcblxyXG4gICAgbGV0IFtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgc3RvcmVEYXRhKGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG59XHJcblxyXG4vLy8gU1RPUkUgVEhFIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBzdG9yZURhdGEobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSB7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvblwiLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0QXJyXCIsIEpTT04uc3RyaW5naWZ5KGZvcmVjYXN0QXJyKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeUFyclwiLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5QXJyKSlcclxuXHJcbn1cclxuXHJcbi8vLyBSRVRSSUVWRSBUSEUgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhdGlvblwiKSlcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlBcnJcIikpXHJcblxyXG4gICAgcmV0dXJuIHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLyBFWEFNUExFIE9GIFRIRSBVUkwgVVNFRCBGT1IgVEhFIEFQSSBBTkQgVEhFIERJRkZFUkVOVCBQQVJUUyAvLy9cclxuXHJcbi8qIGxldCBleGFtcGxlID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiICovXHJcbiIsImltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHtyZXRyaWV2ZURhdGEsIGdldERhdGEsIGluaXRpYWxpemVBcHB9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtjYXJvdXNlbH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtlbGVtZW50cywgc2V0VGVtcCwgc2V0VGhlbWV9XHJcblxyXG5cclxuLy8vIEVMRU1FTlRTIE9CSkVDVCBXSVRIIExJU1RFTkVSUyAvLy9cclxuXHJcbmxldCBlbGVtZW50cyA9IHtcclxuXHJcbiAgICBpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLFxyXG4gICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLFxyXG4gICAgYnRuTWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpLFxyXG4gICAgdGVtcE9wdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIiksXHJcbiAgICB0aGVtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVwiKSxcclxuICAgIG5lYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKSxcclxuICAgIGJ0blVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpLFxyXG4gICAgYnRuRG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpLFxyXG5cclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpc3RlbmVycygpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhbGl6ZUFwcCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKTtcclxuICAgICAgICB0aGlzLmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcclxuICAgICAgICB0aGlzLnRlbXBPcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRlbXApO1xyXG4gICAgICAgIHRoaXMudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRoZW1lKTsgICBcclxuICAgICAgICB0aGlzLmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbCksXHJcbiAgICAgICAgdGhpcy5idG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbCksICAgICBcclxuICAgICAgICB0aGlzLm5lYXJBcnIoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVhckNhcmRzRXZlbnQpKTtcclxuICAgIH0sXHJcblxyXG4gICAgbmVhckFycigpe1xyXG4gICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5uZWFyLmNoaWxkcmVuKVxyXG4gICAgfVxyXG59IFxyXG5cclxuLy8vIFNFVCBUSEUgTElTVEVORVJTIE9OIFRIRSBPQkpFQ1RTIC8vL1xyXG5cclxuZWxlbWVudHMuaW5pdGlhbGl6ZSgpXHJcblxyXG5cclxuLy8vIEdFVCBMT0NBVElPTiBGUk9NIFVTRVIgSU5QVVQgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gZWxlbWVudHMuaW5wdXQudmFsdWUgXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxuXHJcbiAgICBlbGVtZW50cy5pbnB1dC52YWx1ZSA9IFwiXCJcclxufVxyXG5cclxuLy8vIExJU1RFTiBGT1IgQ0FSRCBTRUxFQ1RJT04gRlJPTSBUSEUgVVNFUiBBTkQgRElTUExBWSBUSEUgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIG5lYXJDYXJkc0V2ZW50KCkge1xyXG5cclxuICAgIGxldCBjYXJkRGF5ID0gdGhpcy5jbGFzc05hbWVcclxuXHJcbiAgICBsZXQge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn0gPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGNhcmREYXkpXHJcbn1cclxuXHJcblxyXG4vLy8gTElTVEVOIEZPUiBVU0VSIFNFTEVDVElPTiBPRiBUSEUgTUVOVSAvLy9cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KGUpIHtcclxuICAgIGVsZW1lbnRzLmJ0bk1lbnUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1lbnVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcclxuXHJcbiAgICBpZighZWxlbWVudHMubmF2LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgZWxlbWVudHMuYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbWVudVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8vIExJU1RFTiBGT1IgVVNFUiBDSEFOR0UgT0YgVEhFIFRFTVBFUkFUVVJFIFNDQUxFIC8vL1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKVxyXG4gICAgbGV0IGF0dHIgPSBkYXRlLmdldEF0dHJpYnV0ZShcImRhdGEtZGF5XCIpXHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wXCIpID09PSBcImZhcmFcIil7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gRmFocmVuaGVpdFwiXHJcbiAgICAgICAgc2V0VGVtcChcImNlbHNpdXNcIilcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIENlbHNpdXNcIlxyXG4gICAgICAgIHNldFRlbXAoXCJmYXJhXCIpXHJcbiAgICB9XHJcblxyXG4gICBsZXQge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn0gPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgdHJpZ2dlckRhdGFEaXNwbGF5KGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgYXR0cilcclxufVxyXG5cclxuLy8vIFNFVCBBTkQgU1RPUkUgVEhFIFNFTEVDVEVEIFRFTVBFUkFUVVJFIC8vL1xyXG5cclxuZnVuY3Rpb24gc2V0VGVtcCh0ZW1wZXJhdHVyZSkge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlbXBcIiwgdGVtcGVyYXR1cmUpXHJcbiAgICB0ZW1wT3B0LmNsYXNzTmFtZSA9IHRlbXBlcmF0dXJlXHJcbn1cclxuXHJcbi8vLyBMSVNURU4gRk9SIFVTRVIgQ0hBTkdFIE9GIFRIRSBXRUIgVEhFTUUgLy8vXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZSgpe1xyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwidGhlbWUtZGFya1wiKXtcclxuICAgICAgICBzZXRUaGVtZShcInRoZW1lLWxpZ2h0XCIpXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gZGFyayB0aGVtZVwiXHJcbiAgICAgICBcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBzZXRUaGVtZShcInRoZW1lLWRhcmtcIilcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBsaWdodCB0aGVtZVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBTRVQgQU5EIFNUT1JFIFRIRSBTRUxFQ1RFRCBUSEVNRSAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lKXtcclxuICAgICAgICAgICAgXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpXHJcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZVxyXG59IiwiaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259XHJcblxyXG4vLy8gREFUQSBTVFJVQ1RVUkFUSU9OIEhBTkRMRVIgLy8vXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIHJldHVybiBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIFRPREFZLCBUT01PUlJPVyBBTkQgTEFTVERBWSBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdGb3JlY2FzdEFyciA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheTtcclxuXHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gZ2V0Q3VycmVudFdlYXRoZXIob2JqKVxyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXksIHJhd1RvZGF5QXJyLmRhdGUsIGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIGxldCB0b2RheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9kYXlBcnIpO1xyXG4gICAgbGV0IHRvZGF5T2JqID0ge2N1cnJlbnQ6IGN1cnJlbnRXZWF0aGVyLCBkYXk6IHRvZGF5RGF5LCBob3VyczogdG9kYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF5ID0gbmV3IERheShyYXdUb21vcnJvd0Fyci5kYXksIHJhd1RvbW9ycm93QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvbW9ycm93SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb21vcnJvd0Fycik7XHJcbiAgICBsZXQgdG9tb3Jyb3dPYmogPSB7ZGF5OiB0b21vcnJvd0RheSwgaG91cnM6IHRvbW9ycm93SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSwgcmF3TGFzdERheUFyci5kYXRlKTtcclxuICAgIGxldCBsYXN0RGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdMYXN0RGF5QXJyKTtcclxuICAgIGxldCBsYXN0RGF5T2JqID0ge2RheTogbGFzdERheURheSwgaG91cnM6IGxhc3REYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5T2JqLCB0b21vcnJvd09iaiwgbGFzdERheU9ial07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbi8vLyBTVFJVQ1RVUkUgWUVTVEVSREFZIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5T2JqID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheU9ialxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIExPQ0FUSU9OIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuXHJcbi8vLy8vLyBIRUxQRVJTIC8vLy8vL1xyXG4gICAgICAgICAgICBcclxuXHJcbi8vLyBTVFJVQ1RVUkUgQ1VSUkVOVCBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIEhPVVJTIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9