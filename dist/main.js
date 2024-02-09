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

    forecastArr.forEach(el => {
        el.day.isDay = JSON.parse(localStorage.getItem("forecastArr"))[0].current.isDay;
    })
    yesterday.day.isDay = JSON.parse(localStorage.getItem("forecastArr"))[0].current.isDay;

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
    date.textContent = weatherObj.hasOwnProperty("current") ? 
    "Today, currently" : `${weather.date.slice(8)}/${weather.date.slice(5, 7)}, average tº`;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNFO0FBQ0k7QUFDTTtBQUNJO0FBQ1I7QUFDUjtBQUNFO0FBQ007QUFDSTtBQUNSO0FBQ0Y7QUFDdEM7QUFDK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIsR0FBRyxvQkFBb0IsR0FBRyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNkNBQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4Q0FBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsK0NBQVU7QUFDaEU7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBVTtBQUNyRTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFZO0FBQ3ZFO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SzRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRTRHO0FBQzVHO0FBQ3dDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdDQUFJO0FBQ3JCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW50ZXJhY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3RvciwgZ2V0UHJldmlvdXNEYXksIGNhcm91c2VsfVxyXG5cclxuLy8vIEdFVCBZRVNURVJEQVkgREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJldmlvdXNEYXkoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuXHJcbiAgICBsZXQgZnVsbERhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gXHJcblxyXG4gICAgcmV0dXJuIGZ1bGxEYXRlO1xyXG59XHJcblxyXG5cclxuLy8vIEFSUkFZUyBPQkpFQ1QgRk9SIElDT04gQ09NUEFSSVRJT04gLy8vXHJcblxyXG5sZXQgaWNvbnNPYmogPSB7XHJcblxyXG4gICAgc25vdzogW1wiUGF0Y2h5IHNub3cgcG9zc2libGVcIiwgXCJCbG93aW5nIHNub3dcIiwgXCJCbGl6emFyZFwiLCBcIlBhdGNoeSBsaWdodCBzbm93XCIsIFwiTGlnaHQgc25vd1wiLCBcclxuICAgICAgICAgICAgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLCBcIk1vZGVyYXRlIHNub3dcIiwgXCJQYXRjaHkgaGVhdnkgc25vd1wiLCBcIkhlYXZ5IHNub3dcIiwgXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiwgc25vd0ltZ10sXHJcblxyXG4gICAgc2xlZXQ6IFtcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLCBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIiwgXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgICAgIFwiRnJlZXppbmcgZHJpenpsZVwiLCBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIiwgXCJMaWdodCBmcmVlemluZyByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgICAgICBcIkxpZ2h0IHNsZWV0XCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIiwgXCJJY2UgcGVsbGV0c1wiLCBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIHNsZWV0SW1nXSxcclxuXHJcbiAgICB0aHVuZGVyOiBbXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiVGh1bmRlcnkgb3V0YnJlYWtzIGluIG5lYXJieVwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCByYWluIGluIGFyZWEgd2l0aCB0aHVuZGVyXCIsIHRodW5kZXJJbWddLFxyXG5cclxuICAgIGZvZzogW1wiTWlzdFwiLCBcIkZvZ1wiLCBcIkZyZWV6aW5nIGZvZ1wiLCBmb2dJbWddLFxyXG5cclxuICAgIHJhaW46IFtcIkxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluXCIsIFwiSGVhdnkgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgICAgICByYWluSW1nXSxcclxuICAgIFxyXG4gICAgY2xvdWR5OiBbXCJDbG91ZHlcIiwgXCJPdmVyY2FzdFwiLCBjbG91ZHlJbWddLFxyXG5cclxuICAgIHN1bjogW1wiU3VubnlcIiwgc3VuSW1nXSxcclxuXHJcbiAgICBtb29uOiBbXCJDbGVhclwiLCBtb29uSW1nXSxcclxuXHJcbiAgICByYWluRGF5OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5EYXlJbWddLFxyXG5cclxuICAgIHJhaW5OaWdodDogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCBcIlBhdGNoeSByYWluIG5lYXJieVwiLCByYWluTmlnaHRJbWddLFxyXG5cclxuICAgIGNsb3VkeURheTogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlEYXlJbWddLFxyXG5cclxuICAgIGNsb3VkeU5pZ2h0OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeU5pZ2h0SW1nXSxcclxuXHJcbiAgICBkYXlBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuc3VuLCB0aGlzLnJhaW5EYXksIHRoaXMuY2xvdWR5RGF5LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF1cclxuICAgIH0sXHJcblxyXG4gICAgbmlnaHRBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubW9vbiwgdGhpcy5yYWluTmlnaHQsIHRoaXMuY2xvdWR5TmlnaHQsIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XSBcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEdFVCBJQ09OIEZPUiBUSEUgUkVTUEVDVElWRSBXRUFUSEVSIC8vL1xyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBudWxsXHJcblxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IG51bGwpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcbn0gXHJcblxyXG4vLy8gSE9VUlMgQ0FST1VTRUwgLy8vXHJcblxyXG5mdW5jdGlvbiBjYXJvdXNlbChlKSB7XHJcblxyXG4gICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG5cclxuICAgIGxldCBldmVudCA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInVwXCIpID8gXCJ1cFwiIDogXCJkb3duXCJcclxuXHJcbiAgICBpZihldmVudCA9PT0gXCJ1cFwiKSB7XHJcbiAgICAgICBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgICAgIHNsaWRlci5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpICBcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09IFwiZG93blwiKSB7XHJcbiAgICAgICAgc2xpZGVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXHJcbiAgICAgICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgIH0gXHJcbn1cclxuXHJcbiAgICAgICBcclxuLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgQlkgVEhFIEFQSSAoSVRTIFBST1BFUlRJRVMsIFZBTFVFUywgRVRDKSAvLy9cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wYXJlT2JqZWN0cyAoZGF0YSwgZGF0YTIsIGRhdGEzKXtcclxuICAgIGxldCBpZGVtID0gW11cclxuXHJcbiAgICAvLy8gQ09NUEFSSU5HIFwiQ1VSUkVOVFwiIC8vL1xyXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhLmN1cnJlbnQpXHJcbiAgICBsZXQgZm9yZWNhc3RGaWx0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhMi5jdXJyZW50KVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudEZpbHRlcilcclxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RmlsdGVyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJEQVlcIiAvLy9cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGRhdGEyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGRhdGEzLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5QXJyKVxyXG4gICAgXHJcbiAgICBsZXQgZm9yZWNhc3REYXkgPSBmb3JlY2FzdEFyclswXS5kYXlcclxuICAgIGxldCBoaXN0b3J5RGF5ID0gaGlzdG9yeUFyclswXS5kYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXkpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZm9yZWNhc3REYXkpXHJcbiAgICBsZXQgaGlzdG9yeURheUFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlEYXkpXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5RGF5QXJyKVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJIT1VSU1wiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0SG91ciA9IGZvcmVjYXN0QXJyWzBdLmhvdXJbMF1cclxuICAgIGxldCBoaXN0b3J5SG91ciA9IGhpc3RvcnlBcnJbMF0uaG91clswXVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyKVxyXG5cclxuICAgIGxldCBmb3JlY2FzdEhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdEhvdXIpXHJcbiAgICBsZXQgaGlzdG9yeUhvdXJBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaXN0b3J5SG91cilcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RIb3VyQXJyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoaXN0b3J5SG91ckFycilcclxuXHJcbiAgICAvLy8gQUNUVUFMIENPTVBBUklUSU9OIC8vLyAgICAgIFxyXG4gICAgY3VycmVudEZpbHRlci5mb3JFYWNoKChwcm9wKSA9PntcclxuICAgICAgICBmb3JlY2FzdEZpbHRlci5mb3JFYWNoKChwcikgPT57XHJcbiAgICAgICAgICAgIGlmKHByb3AgPT09IHByICl7XHJcbiAgICAgICAgICAgICAgICBpZGVtLnB1c2gocHJvcClcclxuICAgICAgICB9fSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJpZGVtOlwiLCBpZGVtKVxyXG59XHJcbiIsImV4cG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259XHJcblxyXG4vLy8gQ0xBU1MgRk9SIENVUlJFTlQgU1RSVUNUVVJBVElPTiAvLy9cclxuXHJcbmNsYXNzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSl7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyVGV4dCA9IG9iai5jb25kaXRpb24udGV4dCxcclxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gb2JqLmNvbmRpdGlvbi5pY29uLCBcclxuICAgICAgICB0aGlzLmNsb3VkID0gb2JqLmNsb3VkLFxyXG4gICAgICAgIHRoaXMudGVtcEMgPSBvYmoudGVtcF9jLFxyXG4gICAgICAgIHRoaXMudGVtcEYgPSBvYmoudGVtcF9mLFxyXG4gICAgICAgIHRoaXMudGVtcENfZmVlbCA9IG9iai5mZWVsc2xpa2VfYyxcclxuICAgICAgICB0aGlzLnRlbXBGX2ZlZWwgPSBvYmouZmVlbHNsaWtlX2YsXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IG9iai5odW1pZGl0eSxcclxuICAgICAgICB0aGlzLndpbmQgPSBvYmoud2luZF9rcGgsXHJcbiAgICAgICAgdGhpcy5wcmVjaXBUb3RhbCA9IG9iai5wcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcclxuICAgICAgICB0aGlzLmlzRGF5ID0gb2JqLmlzX2RheSA/IHRydWUgOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0xBU1MgRk9SIEhPVVIgU1RSVUNUVVJBVElPTiAvLy9cclxuXHJcbmNsYXNzIEhvdXIgZXh0ZW5kcyBDdXJyZW50V2VhdGhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIHRpbWUpe1xyXG4gICAgICAgIHN1cGVyKG9iailcclxuICAgICAgICB0aGlzLnNub3dUb3RhbCA9IG9iai5zbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWVcclxuICAgIH1cclxufVxyXG5cclxuLy8vIENMQVNTIEZPUiBEQVkgIFNUUlVDVFVSQVRJT04gLy8vXHJcblxyXG5jbGFzcyBEYXkge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlLCBvYmpDdXJyZW50KXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wQyA9IG9iai5tYXh0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5tYXhUZW1wRiA9IG9iai5tYXh0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wQyA9IG9iai5taW50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy5taW5UZW1wRiA9IG9iai5taW50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai5hdmd0ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai5hdmd0ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcENfZmVlbCA6IGZhbHNlLCAvLyBQT1JRVUUgQUdSRUdVRSBFU1RPPyBQT1JRVUUgRU4gTEEgQ0FSRCBFWFRSQVxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iakN1cnJlbnQgPyBvYmpDdXJyZW50LnRlbXBGX2ZlZWwgOiBmYWxzZSwgLy8gTkVDRVNJVE8gRVNURSBEQVRPIEFERU1BUyBERSBMT1MgREVMIERBWVxyXG4gICAgICAgIHRoaXMuYXZnSHVtaWRpdHkgPSBvYmouYXZnaHVtaWRpdHksICAgICAgICAgICAgICAgIC8vIFkgRVJBIE1BUyBGQUNJTCBBR1JFR0FSTE8gQUNBLCBRVUUgUE9ORVIgQ09ORElDSU9OQUxFU1xyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai5tYXh3aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnRvdGFscHJlY2lwX21tLFxyXG4gICAgICAgIHRoaXMucHJlY2lwQ2hhbmNlID0gb2JqLmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnRvdGFsc25vd19jbSxcclxuICAgICAgICB0aGlzLnNub3dDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3Nub3csXHJcbiAgICAgICAgdGhpcy51diA9IG9iai51dixcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSB0cnVlLFxyXG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuLy8vIENMQVNTIEZPUiBMT0NBVElPTiBTVFJVQ1RVUkFUSU9OIC8vL1xyXG5cclxuY2xhc3MgTG9jYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvYmoubmFtZSxcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBvYmouY291bnRyeSxcclxuICAgICAgICB0aGlzLnJlZ2lvbiA9IG9iai5yZWdpb25cclxuICAgIH1cclxufSIsImltcG9ydCB7c2V0Q2FyZERhdGEsIHNldFByaW5jaXBhbERhdGEsIHNldE5lYXJEYXRhLCBzZXRFeHRyYURhdGEsIHNldEhvdXJEYXRhLCBjcmVhdGVFcnJvckNhcmR9IGZyb20gXCIuL2RvbVwiXHJcblxyXG5leHBvcnQge3RyaWdnZXJEYXRhRGlzcGxheSwgcmVuZGVyRXJyb3J9XHJcblxyXG4vLy8gREFUQSBESVNQTEFZIEhBTkRMRVIgLy8vXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBkYXkgPSBcInRvZGF5XCIpe1xyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIGhhbmRsZUVycm9yQ2xhc3MoZmFsc2UpXHJcblxyXG4gICBsZXQgY2hvc2VuRGF5O1xyXG4gICBsZXQgYXR0cmlidXRlVmFsO1xyXG5cclxuICAgc3dpdGNoKHRydWUpIHtcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ0b2RheVwiOlxyXG4gICAgICAgICAgICBjaG9zZW5EYXkgPSB0b2RheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcInRvZGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwieWVzdGVyZGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHllc3RlcmRheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcInllc3RlcmRheVwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInRvbW9ycm93XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHRvbW9ycm93XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwidG9tb3Jyb3dcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJsYXN0RGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IGxhc3REYXlcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJsYXN0RGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgIH1cclxuXHJcbiAgICByZW5kZXJQcmluY2lwYWwoY2hvc2VuRGF5LCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKVxyXG4gICAgcmVuZGVySG91cnMoY2hvc2VuRGF5KVxyXG4gICAgcmVuZGVyRXh0cmEoY2hvc2VuRGF5KVxyXG4gICAgLy8gVEhJUyBSRU5ERVIgQUxXQVlTIFRIRSBTQU1FIFdBWSAvL1xyXG4gICAgcmVuZGVyTmVhcihmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxufVxyXG5cclxuLy8vIFJFTkRFUiBUSEUgSE9VUlMgT0YgVEhFIERBWSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvdXJzKGZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIilcclxuXHJcbiAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgc2xpZGVyQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGxldCBob3VycyA9IGZvcmVjYXN0LmhvdXJzXHJcblxyXG4gICAgaG91cnMuZm9yRWFjaCggKGhvdXIsIGkpID0+IHtcclxuICAgICAgICBpZihpIDwgMTIpe1xyXG5cclxuICAgICAgICAgICAgc2xpZGVyQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHNldEhvdXJEYXRhKFwiY2FyZC1hc2lkZVwiLCBob3VyKSlcclxuICAgICAgICB9IGVsc2UgaWYoaSA+PSAxMil7XHJcbiBcclxuICAgICAgICAgICAgc2xpZGVyQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0SG91ckRhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIpKSBcclxuICAgICAgICB9ICAgIFxyXG4gICB9KVxyXG59XHJcblxyXG5cclxuLy8vIFJFTkRFUiBQUklOQ0lQQUwgREFUQSBPRiBUSEUgREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJpbmNpcGFsKHdlYXRoZXJPYmosIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpe1xyXG4gICAgXHJcbiAgICBsZXQgcHJpbmNpcGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgcHJpbmNpcGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldFByaW5jaXBhbERhdGEoXCJjYXJkLXByaW5jaXBhbFwiLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbiwgYXR0cmlidXRlVmFsKSlcclxufVxyXG5cclxuLy8vIFJFTkRFUiBFWFRSQSBEQVRBIE9GIFRIRSBEQVkgLy8vXHJcblxyXG5mdW5jdGlvbiByZW5kZXJFeHRyYShmb3JlY2FzdCl7XHJcblxyXG4gICAgbGV0IGV4dHJhRGF0YSA9IGZvcmVjYXN0LmRheVxyXG5cclxuICAgIGxldCBleHRyYUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXh0cmFcIilcclxuICAgIGV4dHJhQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZXh0cmFDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0RXh0cmFEYXRhKFwiY2FyZC1leHRyYVwiLCBleHRyYURhdGEpKTtcclxufVxyXG5cclxuLy8vIFJFTkRFUiBBTEwgREFZUzogWUVTVEVSREFZLCBUT0RBWSwgVE9NT1JST1csIExBU1REQVkgLy8vXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKXtcclxuXHJcbiAgICBsZXQgbmVhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKVxyXG4gICAgbGV0IG5lYXJBcnIgPSBBcnJheS5mcm9tKG5lYXJDb250YWluZXIuY2hpbGRyZW4pXHJcblxyXG4gICAgbmVhckFyci5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiKVxyXG5cclxuICAgIGxldCBbdG9kYXksIHRvbW9ycm93LCBsYXN0RGF5XSA9IGZvcmVjYXN0QXJyXHJcbiAgICBsZXQgeWVzdGVyZGF5ID0gaGlzdG9yeUFyclxyXG5cclxuICAgIGZvcmVjYXN0QXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmRheS5pc0RheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlbMF0uY3VycmVudC5pc0RheTtcclxuICAgIH0pXHJcbiAgICB5ZXN0ZXJkYXkuZGF5LmlzRGF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZvcmVjYXN0QXJyXCIpKVswXS5jdXJyZW50LmlzRGF5O1xyXG5cclxuICAgIG5lYXJBcnJbMF0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgeWVzdGVyZGF5LmRheSkpXHJcbiAgICBuZWFyQXJyWzFdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvZGF5LmRheSkpXHJcbiAgICBuZWFyQXJyWzJdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIHRvbW9ycm93LmRheSkpXHJcbiAgICBuZWFyQXJyWzNdLmFwcGVuZENoaWxkKHNldE5lYXJEYXRhKFwiY2FyZC1uZWFyXCIsIGxhc3REYXkuZGF5KSlcclxuXHJcbn1cclxuXHJcbi8vLyBSRU5ERVIgRVJST1IgLy8vXHJcblxyXG5mdW5jdGlvbiByZW5kZXJFcnJvcigpe1xyXG4gICBcclxuICAgIGhhbmRsZUVycm9yQ2xhc3ModHJ1ZSlcclxuXHJcbiAgICBsZXQgcHJpbmNpcGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmluY2lwYWxcIilcclxuICAgIHByaW5jaXBhbC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3JlYXRlRXJyb3JDYXJkKCkpXHJcbn1cclxuXHJcbi8vLyBIQU5ETEUgVEhFIEVSUk9SIENMQVNTRVMgRk9SIERJU1BMQVkgVEhFIENPUlJFQ1QgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yQ2xhc3MoZXJyb3Ipe1xyXG5cclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcclxuXHJcbiAgICBsZXQgbWFpbkFyciA9IEFycmF5LmZyb20obWFpbi5jaGlsZHJlbilcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIilcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBbYm9keSwgbWFpbiwgbWFpbkFyciwgYXNpZGVdLmZsYXQoKVxyXG5cclxuICAgIGlmKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgaW1nRmFjZSBmcm9tIFwiLi9pbWcvY29uZnVzZWQtYmxhY2stbGluZS5zdmdcIjtcclxuaW1wb3J0IHsgaWNvblNlbGVjdG9yIH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtzZXRQcmluY2lwYWxEYXRhLCBzZXROZWFyRGF0YSwgc2V0RXh0cmFEYXRhLCBzZXRIb3VyRGF0YSwgY3JlYXRlRXJyb3JDYXJkfVxyXG5cclxuLy8vIENSRUFURSBDT01NT04gQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIFwiY2FyZFwiKVxyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInBsYWNlXCIpXHJcbiAgICBsZXQgZGF0ZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiZGF0ZVwiKVxyXG4gICAgbGV0IHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid3JhcHBlclwiKVxyXG4gICAgbGV0IHRlbXAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBcIilcclxuICAgIGxldCB0ZW1wRmVlbCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcEZlZWxcIilcclxuICAgIGxldCB0ZW1wTWluTWF4ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wTWluTWF4XCIpXHJcbiAgICBsZXQgY2xvdWQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNsb3VkXCIpXHJcbiAgICBsZXQgcHJlY2lwID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcmVjaXBcIilcclxuICAgIGxldCBodW1pZGl0eSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiaHVtaWRpdHlcIilcclxuICAgIGxldCB0aW1lID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0aW1lXCIpXHJcbiAgICBsZXQgc25vdyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic25vd1wiKVxyXG4gICAgbGV0IHdpbmQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcIndpbmRcIilcclxuICAgIGxldCB1diA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidXZcIilcclxuXHJcbiAgICBsZXQgaW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImltZ1wiKVxyXG4gICAgbGV0IHN1YiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic3ViXCIpXHJcblxyXG4gICBsZXQgY2FyZEFyciA9IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2LCB3cmFwcGVyXVxyXG5cclxuICAgY2FyZEFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge2NhcmQuYXBwZW5kQ2hpbGQoZWxlbWVudCl9KVxyXG5cclxuICAgIHJldHVybiB7Y2FyZCwgY2FyZEFycn1cclxufVxyXG5cclxuLy8vIFNFVCBEQVRBIE9GIFBSSU5DSVBBTCBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gc2V0UHJpbmNpcGFsRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqLCBhdHRyaWJ1dGVWYWwpIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgeyAwOiBpbWcsIDE6IHN1YiwgMjogcGxhY2UsIDM6IHRlbXAsICA2OiBkYXRlLCAxNDogd3JhcHBlciB9ID0gY2FyZEFyclxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gd2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikgPyB3ZWF0aGVyT2JqLmN1cnJlbnQgOiB3ZWF0aGVyT2JqLmRheTtcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXIpO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtZGF5XCIsIGF0dHJpYnV0ZVZhbClcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLmhhc093blByb3BlcnR5KFwiY3VycmVudFwiKSA/IFxyXG4gICAgXCJUb2RheSwgY3VycmVudGx5XCIgOiBgJHt3ZWF0aGVyLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlci5kYXRlLnNsaWNlKDUsIDcpfSwgYXZlcmFnZSB0wrpgO1xyXG5cclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBsYWNlKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkYXRlKVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gU0VUIERBVEEgT0YgRVhUUkEgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldEV4dHJhRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmopIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgezQ6IHRlbXBGZWVsLCA1OiB0ZW1wTWluTWF4LCA3OiBjbG91ZCwgODogcHJlY2lwLCAxMDogaHVtaWRpdHksIDExOiBzbm93LCBcclxuICAgICAgICAxMjogd2luZCwgMTM6IHV2fSA9IGNhcmRBcnJcclxuXHJcblxyXG4gICAgY2xvdWQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmNsb3VkfSAlYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5hdmdIdW1pZGl0eX0gJWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoud2luZCl9IGttYDtcclxuICAgIHV2LnRleHRDb250ZW50ID0gd2VhdGhlck9iai51djtcclxuXHJcbiAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBDaGFuY2UpfSAlYDtcclxuICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnNub3dDaGFuY2V9ICVgO1xyXG4gICAgaWYod2VhdGhlck9iai5pc0hpc3RvcnkpeyBcclxuICAgICAgICBwcmVjaXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5wcmVjaXBUb3RhbCl9IG1tYDtcclxuICAgICAgICBzbm93LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmouc25vd1RvdGFsKX0gbW1gXHJcbiAgICB9O1xyXG5cclxuICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wQ19mZWVsID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZih0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcEZfZmVlbCA/IFxyXG4gICAgICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gU0VUIERBVEEgT0YgRUFDSCBEQVkgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldE5lYXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDY6IGRhdGUgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDUsIDcpfWA7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6IGF2Zy5gIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6IGF2Zy5gO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuLy8vIFNFVCBEQVRBIE9GIEhPVVIgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldEhvdXJEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7MDogaW1nLCAxOiBzdWIsIDM6IHRlbXAsIDk6IHRpbWV9ID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLndlYXRoZXJUZXh0O1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YDtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gQ1JFQVRFIEFORCBTRVQgREFUQSBPRiBFUlJPUiBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXJyb3JDYXJkKCl7XHJcblxyXG4gICAgbGV0IGVyciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IHAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImVycm9yXCIpXHJcbiAgICBpbWcuc3JjID0gaW1nRmFjZVxyXG4gICAgcC50ZXh0Q29udGVudCA9IFwidWggb2guLi4gbG9jYXRpb24gbm90IGZvdW5kXCJcclxuICAgIGVyci5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBlcnIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICByZXR1cm4gZXJyXHJcbn1cclxuXHJcbi8vLyBIRUxQIENSRUFURSBFTEVNRU5UUyAvLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuXHJcbi8vLyBTRVQgREFUQSBGT1IgQUxMIFRIRSBDQVJEUyAvLy9cclxuXHJcbi8qIGZ1bmN0aW9uIHNldENhcmREYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaiwgbG9jYXRpb25PYmosIGF0dHJpYnV0ZU5hbWUpIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcblxyXG4gICAgbGV0IFtpbWcsIHN1YiwgcGxhY2UsIHRlbXAsIHRlbXBGZWVsLCB0ZW1wTWluTWF4LCBkYXRlLCBjbG91ZCwgcHJlY2lwLCB0aW1lLCBcclxuICAgICAgICAgaHVtaWRpdHksIHNub3csIHdpbmQsIHV2XSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53ZWF0aGVyVGV4dDtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIFwiXCIpXHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuICAgIGNsb3VkLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5jbG91ZH0gJWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouYXZnSHVtaWRpdHl9ICVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLndpbmQpfSBrbWA7XHJcbiAgICB1di50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudXY7XHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CumA7XHJcbiAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcENfZmVlbCA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKCB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikpeyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9sYSBrIGFzZVwiKVxyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgO1xyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH0gXHJcblxyXG4gICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwQ2hhbmNlKX0gJWA7XHJcbiAgICBzbm93LnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5zbm93Q2hhbmNlfSAlYDtcclxuICAgIGlmKHdlYXRoZXJPYmouaXNIaXN0b3J5KXsgXHJcbiAgICAgICAgcHJlY2lwLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoucHJlY2lwVG90YWwpfSBtbWA7XHJcbiAgICAgICAgc25vdy50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnNub3dUb3RhbCl9IG1tYFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59ICovXHJcblxyXG5cclxuIiwiaW1wb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259IGZyb20gXCIuL29iamVjdHNcIjtcclxuaW1wb3J0IHtjb21wYXJlT2JqZWN0cywgZ2V0UHJldmlvdXNEYXl9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCI7XHJcbmltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5LCByZW5kZXJFcnJvcn0gZnJvbSBcIi4vZGlzcGxheVwiO1xyXG5pbXBvcnQge3NldFRlbXAsIHNldFRoZW1lfSBmcm9tIFwiLi9pbnRlcmFjdGl2aXR5XCJcclxuXHJcbmV4cG9ydCB7Z2V0RGF0YSwgcmV0cmlldmVEYXRhLCBpbml0aWFsaXplQXBwfVxyXG5cclxuLy8vIEFQUCBBVVRPTUFUSUMgSU5JVElBTElaQVRJT04gLy8vXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xyXG4gICAgXHJcbiAgICBsZXQgcGxhY2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYXRpb25cIikpXHJcblxyXG4gICB0cnl7XHJcblxyXG4gICAgZ2V0RGF0YShwbGFjZS5uYW1lKVxyXG4gICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSlcclxuICAgIHNldFRlbXAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wXCIpKVxyXG4gICB9IFxyXG4gICBjYXRjaChlcnIpe1xyXG5cclxuICAgIGdldERhdGEoXCJhcmdlbnRpbmFcIilcclxuICAgIHNldFRoZW1lKFwidGhlbWUtZGFya1wiKVxyXG4gICAgc2V0VGVtcChcImNlbHNpdXNcIilcclxuICAgfVxyXG59XHJcblxyXG4vLy8gR0VUIERBVEEgRlJPTSBXRUFUSEVSIEFQSSAvLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoaW5wdXRWYWwpe1xyXG5cclxudHJ5e1xyXG4gICAgbGV0IFtyZXNwb25zZSwgcmVzcG9uc2UyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZGF5cz0zYCksXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT02NDAxYTY1NDhhMjI0Njg5OTAyMTcxODQxMjMzMDEyJnE9JHtpbnB1dFZhbH0mZHQ9JHtnZXRQcmV2aW91c0RheSgpfWApXHJcbiAgICBdKVxyXG5cclxuICAgIGlmKCFyZXNwb25zZS5vayB8fCAhcmVzcG9uc2UyLm9rKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcmVxdWVzdFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIHJlc3BvbnNlMi5qc29uKClcclxuICAgIF0pXHJcblxyXG4gICAgLy8vIEZVTkNUSU9OIFRPIENPTVBBUkUgT0JKRUNUUyBSRVRSSUVWRUQgLy8vXHJcbiAgICAvL2NvbXBhcmVPYmplY3RzKGRhdGEsIGRhdGEyLCBkYXRhMylcclxuXHJcbiAgIGRhdGFIYW5kbGVyKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG59IGNhdGNoKGVycil7XHJcblxyXG4gICAgICAgcmVuZGVyRXJyb3IoKVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG4vLy8gSEFORExFIFRIRSBEQVRBOiBTVFJVQ1RVUkUgVEhFIERBVEEsIFNUT1JFIFRIRSBEQVRBIEFORCBESVNQTEFZIFRIRSBEQVRBIC8vL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGF0YUhhbmRsZXIoZGF0YUZvcmVjYXN0LCBkYXRhSGlzdG9yeSl7XHJcblxyXG4gICAgbGV0IFtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJdID0gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnkpXHJcblxyXG4gICAgc3RvcmVEYXRhKGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG59XHJcblxyXG4vLy8gU1RPUkUgVEhFIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBzdG9yZURhdGEobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKSB7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhdGlvblwiLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbikpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVjYXN0QXJyXCIsIEpTT04uc3RyaW5naWZ5KGZvcmVjYXN0QXJyKSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeUFyclwiLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5QXJyKSlcclxuXHJcbn1cclxuXHJcbi8vLyBSRVRSSUVWRSBUSEUgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlRGF0YSgpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhdGlvblwiKSlcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlBcnJcIikpXHJcblxyXG4gICAgcmV0dXJuIHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLyBFWEFNUExFIE9GIFRIRSBVUkwgVVNFRCBGT1IgVEhFIEFQSSBBTkQgVEhFIERJRkZFUkVOVCBQQVJUUyAvLy9cclxuXHJcbi8qIGxldCBleGFtcGxlID0gXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTExMTExMTExMTExMTExMTExJnE9bG9uZG9uXCJcclxubGV0IHBhc3MgPSBcIj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMlwiXHJcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFcIlxyXG5sZXQgY3VycmVudCA9IFwiL2N1cnJlbnQuanNvblwiXHJcbmxldCBwbGFjZSA9IFwicT1QYXJpc1wiICovXHJcbiIsImltcG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5fSBmcm9tIFwiLi9kaXNwbGF5XCJcclxuaW1wb3J0IHtyZXRyaWV2ZURhdGEsIGdldERhdGEsIGluaXRpYWxpemVBcHB9IGZyb20gXCIuL2luZGV4XCJcclxuaW1wb3J0IHtjYXJvdXNlbH0gZnJvbSBcIi4vYXV4aWxpYXJpZXNcIlxyXG5cclxuZXhwb3J0IHtlbGVtZW50cywgc2V0VGVtcCwgc2V0VGhlbWV9XHJcblxyXG5cclxuLy8vIEVMRU1FTlRTIE9CSkVDVCBXSVRIIExJU1RFTkVSUyAvLy9cclxuXHJcbmxldCBlbGVtZW50cyA9IHtcclxuXHJcbiAgICBpbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLFxyXG4gICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpLFxyXG4gICAgYnRuTWVudTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpLFxyXG4gICAgdGVtcE9wdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIiksXHJcbiAgICB0aGVtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGVtZVwiKSxcclxuICAgIG5lYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmVhclwiKSxcclxuICAgIGJ0blVwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwXCIpLFxyXG4gICAgYnRuRG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kb3duXCIpLFxyXG5cclxuICAgIGluaXRpYWxpemUoKXtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpc3RlbmVycygpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhbGl6ZUFwcCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBnZXRJbnB1dFZhbHVlKTtcclxuICAgICAgICB0aGlzLmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcclxuICAgICAgICB0aGlzLnRlbXBPcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRlbXApO1xyXG4gICAgICAgIHRoaXMudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVRoZW1lKTsgICBcclxuICAgICAgICB0aGlzLmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbCksXHJcbiAgICAgICAgdGhpcy5idG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJvdXNlbCksICAgICBcclxuICAgICAgICB0aGlzLm5lYXJBcnIoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmVhckNhcmRzRXZlbnQpKTtcclxuICAgIH0sXHJcblxyXG4gICAgbmVhckFycigpe1xyXG4gICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5uZWFyLmNoaWxkcmVuKVxyXG4gICAgfVxyXG59IFxyXG5cclxuLy8vIFNFVCBUSEUgTElTVEVORVJTIE9OIFRIRSBPQkpFQ1RTIC8vL1xyXG5cclxuZWxlbWVudHMuaW5pdGlhbGl6ZSgpXHJcblxyXG5cclxuLy8vIEdFVCBMT0NBVElPTiBGUk9NIFVTRVIgSU5QVVQgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGUpe1xyXG5cclxuICAgIGlmKGUua2V5ICE9PSBcIkVudGVyXCIpIHtyZXR1cm59XHJcblxyXG4gICAgbGV0IGlucHV0VmFsID0gZWxlbWVudHMuaW5wdXQudmFsdWUgXHJcblxyXG4gICAgZ2V0RGF0YShpbnB1dFZhbClcclxufVxyXG5cclxuLy8vIExJU1RFTiBGT1IgQ0FSRCBTRUxFQ1RJT04gRlJPTSBUSEUgVVNFUiBBTkQgRElTUExBWSBUSEUgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIG5lYXJDYXJkc0V2ZW50KCkge1xyXG5cclxuICAgIGxldCBjYXJkRGF5ID0gdGhpcy5jbGFzc05hbWVcclxuXHJcbiAgICBsZXQge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn0gPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGNhcmREYXkpXHJcbn1cclxuXHJcblxyXG4vLy8gTElTVEVOIEZPUiBVU0VSIFNFTEVDVElPTiBPRiBUSEUgTUVOVSAvLy9cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KGUpIHtcclxuICAgIGVsZW1lbnRzLmJ0bk1lbnUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1lbnVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNZW51KGUpIHtcclxuXHJcbiAgICBpZighZWxlbWVudHMubmF2LmNvbnRhaW5zKGUudGFyZ2V0KSl7XHJcbiAgICAgICAgZWxlbWVudHMuYnRuTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbWVudVwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8vIExJU1RFTiBGT1IgVVNFUiBDSEFOR0UgT0YgVEhFIFRFTVBFUkFUVVJFIFNDQUxFIC8vL1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGVtcCgpIHtcclxuXHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKVxyXG4gICAgbGV0IGF0dHIgPSBkYXRlLmdldEF0dHJpYnV0ZShcImRhdGEtZGF5XCIpXHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZW1wXCIpID09PSBcImZhcmFcIil7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gRmFocmVuaGVpdFwiXHJcbiAgICAgICAgc2V0VGVtcChcImNlbHNpdXNcIilcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIENlbHNpdXNcIlxyXG4gICAgICAgIHNldFRlbXAoXCJmYXJhXCIpXHJcbiAgICB9XHJcblxyXG4gICBsZXQge2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycn0gPSByZXRyaWV2ZURhdGEoKVxyXG5cclxuICAgdHJpZ2dlckRhdGFEaXNwbGF5KGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFyciwgYXR0cilcclxufVxyXG5cclxuLy8vIFNFVCBBTkQgU1RPUkUgVEhFIFNFTEVDVEVEIFRFTVBFUkFUVVJFIC8vL1xyXG5cclxuZnVuY3Rpb24gc2V0VGVtcCh0ZW1wZXJhdHVyZSkge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRlbXBcIiwgdGVtcGVyYXR1cmUpXHJcbiAgICB0ZW1wT3B0LmNsYXNzTmFtZSA9IHRlbXBlcmF0dXJlXHJcbn1cclxuXHJcbi8vLyBMSVNURU4gRk9SIFVTRVIgQ0hBTkdFIE9GIFRIRSBXRUIgVEhFTUUgLy8vXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZSgpe1xyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwidGhlbWUtZGFya1wiKXtcclxuICAgICAgICBzZXRUaGVtZShcInRoZW1lLWxpZ2h0XCIpXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gZGFyayB0aGVtZVwiXHJcbiAgICAgICBcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBzZXRUaGVtZShcInRoZW1lLWRhcmtcIilcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBsaWdodCB0aGVtZVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBTRVQgQU5EIFNUT1JFIFRIRSBTRUxFQ1RFRCBUSEVNRSAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lKXtcclxuICAgICAgICAgICAgXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpXHJcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZVxyXG59IiwiaW1wb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn0gZnJvbSBcIi4vY2xhc3NcIlxyXG5cclxuZXhwb3J0IHt0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb259XHJcblxyXG4vLy8gREFUQSBTVFJVQ1RVUkFUSU9OIEhBTkRMRVIgLy8vXHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyRGF0YVN0cnVjdHVyYXRpb24gKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGRhdGFGb3JlY2FzdClcclxuICAgIGxldCBmb3JlY2FzdEFyciA9IGdldEZvcmVjYXN0RGF0YShkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IGdldEhpc3RvcnlEYXRhKGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIHJldHVybiBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXVxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIFRPREFZLCBUT01PUlJPVyBBTkQgTEFTVERBWSBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXRhKG9iaikge1xyXG5cclxuICAgIGxldCByYXdGb3JlY2FzdEFyciA9IG9iai5mb3JlY2FzdC5mb3JlY2FzdGRheTtcclxuXHJcblxyXG4gICAgbGV0IFtyYXdUb2RheUFyciwgcmF3VG9tb3Jyb3dBcnIsIHJhd0xhc3REYXlBcnJdID0gcmF3Rm9yZWNhc3RBcnI7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gZ2V0Q3VycmVudFdlYXRoZXIob2JqKVxyXG4gICAgbGV0IHRvZGF5RGF5ID0gbmV3IERheShyYXdUb2RheUFyci5kYXksIHJhd1RvZGF5QXJyLmRhdGUsIGN1cnJlbnRXZWF0aGVyKTtcclxuICAgIGxldCB0b2RheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9kYXlBcnIpO1xyXG4gICAgbGV0IHRvZGF5T2JqID0ge2N1cnJlbnQ6IGN1cnJlbnRXZWF0aGVyLCBkYXk6IHRvZGF5RGF5LCBob3VyczogdG9kYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IHRvbW9ycm93RGF5ID0gbmV3IERheShyYXdUb21vcnJvd0Fyci5kYXksIHJhd1RvbW9ycm93QXJyLmRhdGUpO1xyXG4gICAgbGV0IHRvbW9ycm93SG91cnNBcnIgPSBnZXRIb3VycyhyYXdUb21vcnJvd0Fycik7XHJcbiAgICBsZXQgdG9tb3Jyb3dPYmogPSB7ZGF5OiB0b21vcnJvd0RheSwgaG91cnM6IHRvbW9ycm93SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBsYXN0RGF5RGF5ID0gbmV3IERheShyYXdMYXN0RGF5QXJyLmRheSwgcmF3TGFzdERheUFyci5kYXRlKTtcclxuICAgIGxldCBsYXN0RGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdMYXN0RGF5QXJyKTtcclxuICAgIGxldCBsYXN0RGF5T2JqID0ge2RheTogbGFzdERheURheSwgaG91cnM6IGxhc3REYXlIb3Vyc0Fycn07XHJcblxyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gW3RvZGF5T2JqLCB0b21vcnJvd09iaiwgbGFzdERheU9ial07XHJcblxyXG4gICAgcmV0dXJuIGZvcmVjYXN0QXJyXHJcbn1cclxuXHJcbi8vLyBTVFJVQ1RVUkUgWUVTVEVSREFZIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRIaXN0b3J5RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgW3Jhd1llc3RlcmRheUFycl0gPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5RGF5ID0gbmV3IERheShyYXdZZXN0ZXJkYXlBcnIuZGF5LCByYXdZZXN0ZXJkYXlBcnIuZGF0ZSApXHJcbiAgICB5ZXN0ZXJkYXlEYXkuaXNIaXN0b3J5ID0gdHJ1ZTtcclxuICAgIGxldCB5ZXN0ZXJkYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1llc3RlcmRheUFycilcclxuXHJcbiAgICBsZXQgeWVzdGVyZGF5T2JqID0ge2RheTogeWVzdGVyZGF5RGF5LCBob3VyczogeWVzdGVyZGF5SG91cnNBcnJ9XHJcblxyXG4gICAgcmV0dXJuIHllc3RlcmRheU9ialxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIExPQ0FUSU9OIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbihvYmopIHtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBvYmoubG9jYXRpb25cclxuICAgIGxldCBsb2NhdGlvbk9iaiA9IG5ldyBMb2NhdGlvbihsb2NhdGlvbilcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25PYmpcclxufVxyXG5cclxuXHJcbi8vLy8vLyBIRUxQRVJTIC8vLy8vL1xyXG4gICAgICAgICAgICBcclxuXHJcbi8vLyBTVFJVQ1RVUkUgQ1VSUkVOVCBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIob2JqKXsgXHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmouY3VycmVudFxyXG4gICAgbGV0IGRhdGUgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZVxyXG4gICAgbGV0IHdlYXRoZXJPYmogPSBuZXcgQ3VycmVudFdlYXRoZXIod2VhdGhlciwgZGF0ZSlcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlck9ialxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIEhPVVJTIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBnZXRIb3VycyhhcnIpIHtcclxuXHJcbiAgICByZXR1cm4gYXJyLmhvdXIubWFwKCAoaG91cikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gaG91ci50aW1lLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgIGxldCB0aW1lID0gaG91ci50aW1lLnNsaWNlKDExKVxyXG4gICAgICByZXR1cm4gbmV3IEhvdXIoaG91ciwgZGF0ZSwgdGltZSlcclxuICAgIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9