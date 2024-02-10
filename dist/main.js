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

/// FUNCTION TO GET AND ORDER WEATHERTEXT LENGHTS, SO THEN I CAN USE STRINGCUT() FUNCTION ///

function stringLength() {

    let arrWeatherText = [];

    iconsObj.dayArr().forEach(arr => {

        let arrString = arr.toSpliced(-1, 1)

        arrString.forEach(el => {

            let obj = {
                name : el,
                length : el.length
            } 

           arrWeatherText.push(obj)
        })
    }) 

    arrWeatherText.sort((a, b) => {
        return b.length - a.length
    })

    console.log(arrWeatherText) 
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
        changeWeatherText(el)
    })
    } else {

        object.day.isDay = JSON.parse(localStorage.getItem("forecastArr"))[0].current.isDay;
        changeWeatherText(object)
    }  
}

/// CHECK THE WATHERTEXT PROPERTY AND CHANGE IT TO ALLOW THE CORRECT ICON RENDERING ///

function changeWeatherText(el) {

    if(el.day.isDay === false && el.day.weatherText.trim().toLowerCase() === "sunny"){

        el.day.weatherText = "Clear"
    } else if (el.day.isDay && el.day.weatherText.trim().toLowerCase() === "clear") {

        el.day.weatherText = "Sunny"
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
    sub.textContent = stringCut(weather.weatherText);
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
    sub.textContent = stringCut(weatherObj.weatherText);
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
    sub.textContent = stringCut(weatherObj.weatherText);
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

/// CUT WEATHERTEXT THAT IS TOO LONG TO FIT IN THE CONTAINER ///

function stringCut(objProp) {

    let str = objProp

    switch (true) {

        case str === "Moderate or heavy rain with thunder":
            str = "Moderate/heavy rain with thunder"
            break;
        case str === "Moderate or heavy snow with thunder":
            str = "Moderate/heavy rain snow thunder"
            break;
        case str === "Patchy light rain in area with thunder":
            str = "Patchy light rain with thunder"
            break;
        case str === "Moderate or heavy showers of ice pellets":
            str = "Mod/heavy showers of ice pellets"
            break;
    }  

    return str
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUNFO0FBQ0k7QUFDTTtBQUNJO0FBQ1I7QUFDUjtBQUNFO0FBQ007QUFDSTtBQUNSO0FBQ0Y7QUFDdEM7QUFDK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUIsR0FBRyxvQkFBb0IsR0FBRyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNkNBQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCw4Q0FBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsK0NBQVU7QUFDaEU7QUFDQSx5Q0FBeUMsMkNBQU07QUFDL0M7QUFDQTtBQUNBLFlBQVksNENBQU87QUFDbkI7QUFDQSxtQ0FBbUMsOENBQVM7QUFDNUM7QUFDQSxtQkFBbUIsMkNBQU07QUFDekI7QUFDQSxvQkFBb0IsNENBQU87QUFDM0I7QUFDQTtBQUNBLDJEQUEyRCwrQ0FBVTtBQUNyRTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFZO0FBQ3ZFO0FBQ0EsaUNBQWlDLGlEQUFZO0FBQzdDO0FBQ0EsbUNBQW1DLG1EQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRTRHO0FBQzVHO0FBQ3dDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV4aWxpYXJpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW50ZXJhY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1bkltZyBmcm9tIFwiLi9pbWcvc3VuLXMuc3ZnXCJcclxuaW1wb3J0IG1vb25JbWcgZnJvbSBcIi4vaW1nL21vb24tcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5RGF5SW1nIGZyb20gXCIuL2ltZy9jbG91ZHlEYXktcy5zdmdcIlxyXG5pbXBvcnQgY2xvdWR5TmlnaHRJbWcgZnJvbSBcIi4vaW1nL2Nsb3VkeU5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHRodW5kZXJJbWcgZnJvbSBcIi4vaW1nL3RodW5kZXItcy5zdmdcIlxyXG5pbXBvcnQgZm9nSW1nIGZyb20gXCIuL2ltZy9mb2ctcy5zdmdcIlxyXG5pbXBvcnQgcmFpbkltZyBmcm9tIFwiLi9pbWcvcmFpbi1zLnN2Z1wiXHJcbmltcG9ydCByYWluRGF5SW1nIGZyb20gXCIuL2ltZy9yYWluRGF5LXMuc3ZnXCJcclxuaW1wb3J0IHJhaW5OaWdodEltZyBmcm9tIFwiLi9pbWcvcmFpbk5pZ2h0LXMuc3ZnXCJcclxuaW1wb3J0IHNsZWV0SW1nIGZyb20gXCIuL2ltZy9zbGVldC1zLnN2Z1wiXHJcbmltcG9ydCBzbm93SW1nIGZyb20gXCIuL2ltZy9zbm93LXMuc3ZnXCJcclxuXHJcbmV4cG9ydCB7Y29tcGFyZU9iamVjdHMsIGljb25TZWxlY3RvciwgZ2V0UHJldmlvdXNEYXksIGNhcm91c2VsfVxyXG5cclxuLy8vIEdFVCBZRVNURVJEQVkgREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJldmlvdXNEYXkoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuXHJcbiAgICBsZXQgZnVsbERhdGUgPSBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gXHJcblxyXG4gICAgcmV0dXJuIGZ1bGxEYXRlO1xyXG59XHJcblxyXG5cclxuLy8vIEFSUkFZUyBPQkpFQ1QgRk9SIElDT04gQ09NUEFSSVRJT04gLy8vXHJcblxyXG5sZXQgaWNvbnNPYmogPSB7XHJcblxyXG4gICAgc25vdzogW1wiUGF0Y2h5IHNub3cgcG9zc2libGVcIiwgXCJCbG93aW5nIHNub3dcIiwgXCJCbGl6emFyZFwiLCBcIlBhdGNoeSBsaWdodCBzbm93XCIsIFwiTGlnaHQgc25vd1wiLCBcclxuICAgICAgICAgICAgXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLCBcIk1vZGVyYXRlIHNub3dcIiwgXCJQYXRjaHkgaGVhdnkgc25vd1wiLCBcIkhlYXZ5IHNub3dcIiwgXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIiwgc25vd0ltZ10sXHJcblxyXG4gICAgc2xlZXQ6IFtcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLCBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsIFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIiwgXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICAgICAgICAgIFwiRnJlZXppbmcgZHJpenpsZVwiLCBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIiwgXCJMaWdodCBmcmVlemluZyByYWluXCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgICAgICAgICBcIkxpZ2h0IHNsZWV0XCIsIFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIiwgXCJJY2UgcGVsbGV0c1wiLCBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsIFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLCBcclxuICAgICAgICAgICAgXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsIHNsZWV0SW1nXSxcclxuXHJcbiAgICB0aHVuZGVyOiBbXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIiwgXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsIFwiVGh1bmRlcnkgb3V0YnJlYWtzIGluIG5lYXJieVwiLFxyXG4gICAgICAgICAgICBcIlBhdGNoeSBsaWdodCByYWluIGluIGFyZWEgd2l0aCB0aHVuZGVyXCIsIHRodW5kZXJJbWddLFxyXG5cclxuICAgIGZvZzogW1wiTWlzdFwiLCBcIkZvZ1wiLCBcIkZyZWV6aW5nIGZvZ1wiLCBmb2dJbWddLFxyXG5cclxuICAgIHJhaW46IFtcIkxpZ2h0IHJhaW5cIiwgXCJNb2RlcmF0ZSByYWluXCIsIFwiSGVhdnkgcmFpblwiLCBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsIFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgICAgICAgICByYWluSW1nXSxcclxuICAgIFxyXG4gICAgY2xvdWR5OiBbXCJDbG91ZHlcIiwgXCJPdmVyY2FzdFwiLCBjbG91ZHlJbWddLFxyXG5cclxuICAgIHN1bjogW1wiU3VubnlcIiwgc3VuSW1nXSxcclxuXHJcbiAgICBtb29uOiBbXCJDbGVhclwiLCBtb29uSW1nXSxcclxuXHJcbiAgICByYWluRGF5OiBbXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLCBcIlBhdGNoeSBsaWdodCByYWluXCIsIFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLCBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIiwgXHJcbiAgICAgICAgICAgICAgICBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsIFwiUGF0Y2h5IHJhaW4gbmVhcmJ5XCIsIHJhaW5EYXlJbWddLFxyXG5cclxuICAgIHJhaW5OaWdodDogW1wiUGF0Y2h5IHJhaW4gcG9zc2libGVcIiwgXCJQYXRjaHkgbGlnaHQgcmFpblwiLCBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIiwgXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJMaWdodCByYWluIHNob3dlclwiLCBcIlBhdGNoeSByYWluIG5lYXJieVwiLCByYWluTmlnaHRJbWddLFxyXG5cclxuICAgIGNsb3VkeURheTogW1wiUGFydGx5IGNsb3VkeVwiLCBjbG91ZHlEYXlJbWddLFxyXG5cclxuICAgIGNsb3VkeU5pZ2h0OiBbXCJQYXJ0bHkgY2xvdWR5XCIsIGNsb3VkeU5pZ2h0SW1nXSxcclxuXHJcbiAgICBkYXlBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMuc3VuLCB0aGlzLnJhaW5EYXksIHRoaXMuY2xvdWR5RGF5LCB0aGlzLmNsb3VkeSwgdGhpcy5yYWluLCB0aGlzLnRodW5kZXIsIHRoaXMuZm9nLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuc25vdywgdGhpcy5zbGVldF1cclxuICAgIH0sXHJcblxyXG4gICAgbmlnaHRBcnIoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubW9vbiwgdGhpcy5yYWluTmlnaHQsIHRoaXMuY2xvdWR5TmlnaHQsIHRoaXMuY2xvdWR5LCB0aGlzLnJhaW4sIHRoaXMudGh1bmRlciwgdGhpcy5mb2csIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93LCB0aGlzLnNsZWV0XSBcclxuICAgIH1cclxufVxyXG5cclxuLy8vIEdFVCBJQ09OIEZPUiBUSEUgUkVTUEVDVElWRSBXRUFUSEVSIC8vL1xyXG5cclxuZnVuY3Rpb24gaWNvblNlbGVjdG9yKG9iail7XHJcblxyXG4gICAgbGV0IHdlYXRoZXIgPSBvYmoud2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgIGxldCBpc0RheSA9IG9iai5pc0RheSBcclxuXHJcbiAgICBsZXQgbmlnaHRPckRheSA9IGlzRGF5ID8gaWNvbnNPYmouZGF5QXJyKCkgOiBpY29uc09iai5uaWdodEFycigpO1xyXG5cclxuICAgIGxldCBpbWcgPSBudWxsXHJcblxyXG5cclxuICAgIGZvciAoY29uc3QgYXJyIG9mIG5pZ2h0T3JEYXkpe1xyXG5cclxuICAgICAgICBpZihpbWcgIT09IG51bGwpeyBicmVhayB9XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBhcnIgKSB7XHJcblxyXG4gICAgICAgICAgICBpZih3ZWF0aGVyID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGltZyA9IGFyclthcnIubGVuZ3RoIC0xXVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW1nXHJcblxyXG5cclxufSBcclxuXHJcbi8vLyBIT1VSUyBDQVJPVVNFTCAvLy9cclxuXHJcbmZ1bmN0aW9uIGNhcm91c2VsKGUpIHtcclxuXHJcbiAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0gZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidXBcIikgPyBcInVwXCIgOiBcImRvd25cIlxyXG5cclxuICAgIGlmKGV2ZW50ID09PSBcInVwXCIpIHtcclxuICAgICAgIHNsaWRlci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgc2xpZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikgIFxyXG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gXCJkb3duXCIpIHtcclxuICAgICAgICBzbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICBzbGlkZXIubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgfSBcclxufVxyXG5cclxuLy8vIEZVTkNUSU9OIFRPIEdFVCBBTkQgT1JERVIgV0VBVEhFUlRFWFQgTEVOR0hUUywgU08gVEhFTiBJIENBTiBVU0UgU1RSSU5HQ1VUKCkgRlVOQ1RJT04gLy8vXHJcblxyXG5mdW5jdGlvbiBzdHJpbmdMZW5ndGgoKSB7XHJcblxyXG4gICAgbGV0IGFycldlYXRoZXJUZXh0ID0gW107XHJcblxyXG4gICAgaWNvbnNPYmouZGF5QXJyKCkuZm9yRWFjaChhcnIgPT4ge1xyXG5cclxuICAgICAgICBsZXQgYXJyU3RyaW5nID0gYXJyLnRvU3BsaWNlZCgtMSwgMSlcclxuXHJcbiAgICAgICAgYXJyU3RyaW5nLmZvckVhY2goZWwgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWUgOiBlbCxcclxuICAgICAgICAgICAgICAgIGxlbmd0aCA6IGVsLmxlbmd0aFxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICBhcnJXZWF0aGVyVGV4dC5wdXNoKG9iailcclxuICAgICAgICB9KVxyXG4gICAgfSkgXHJcblxyXG4gICAgYXJyV2VhdGhlclRleHQuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGFycldlYXRoZXJUZXh0KSBcclxufVxyXG5cclxuICAgICAgIFxyXG4vLy8gRlVOQ1RJT04gVE8gQ09NUEFSRSBPQkpFQ1RTIFJFVFJJRVZFRCBCWSBUSEUgQVBJIChJVFMgUFJPUEVSVElFUywgVkFMVUVTLCBFVEMpIC8vL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmVPYmplY3RzIChkYXRhLCBkYXRhMiwgZGF0YTMpe1xyXG4gICAgbGV0IGlkZW0gPSBbXVxyXG5cclxuICAgIC8vLyBDT01QQVJJTkcgXCJDVVJSRU5UXCIgLy8vXHJcbiAgICBsZXQgY3VycmVudEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEuY3VycmVudClcclxuICAgIGxldCBmb3JlY2FzdEZpbHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEyLmN1cnJlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RmlsdGVyKVxyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RGaWx0ZXIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkRBWVwiIC8vL1xyXG4gICAgbGV0IGZvcmVjYXN0QXJyID0gZGF0YTIuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIGxldCBoaXN0b3J5QXJyID0gZGF0YTMuZm9yZWNhc3QuZm9yZWNhc3RkYXlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3RBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlBcnIpXHJcbiAgICBcclxuICAgIGxldCBmb3JlY2FzdERheSA9IGZvcmVjYXN0QXJyWzBdLmRheVxyXG4gICAgbGV0IGhpc3RvcnlEYXkgPSBoaXN0b3J5QXJyWzBdLmRheVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdERheSlcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeURheSlcclxuXHJcbiAgICBsZXQgZm9yZWNhc3REYXlBcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhmb3JlY2FzdERheSlcclxuICAgIGxldCBoaXN0b3J5RGF5QXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGlzdG9yeURheSlcclxuICAgIC8vY29uc29sZS5sb2coZm9yZWNhc3REYXlBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlEYXlBcnIpXHJcblxyXG4gICAgLy8vIENPTVBBUklORyBcIkhPVVJTXCIgLy8vXHJcbiAgICBsZXQgZm9yZWNhc3RIb3VyID0gZm9yZWNhc3RBcnJbMF0uaG91clswXVxyXG4gICAgbGV0IGhpc3RvcnlIb3VyID0gaGlzdG9yeUFyclswXS5ob3VyWzBdXHJcbiAgICAvL2NvbnNvbGUubG9nKGZvcmVjYXN0SG91cilcclxuICAgIC8vY29uc29sZS5sb2coaGlzdG9yeUhvdXIpXHJcblxyXG4gICAgbGV0IGZvcmVjYXN0SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGZvcmVjYXN0SG91cilcclxuICAgIGxldCBoaXN0b3J5SG91ckFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpc3RvcnlIb3VyKVxyXG4gICAgLy9jb25zb2xlLmxvZyhmb3JlY2FzdEhvdXJBcnIpXHJcbiAgICAvL2NvbnNvbGUubG9nKGhpc3RvcnlIb3VyQXJyKVxyXG5cclxuICAgIC8vLyBBQ1RVQUwgQ09NUEFSSVRJT04gLy8vICAgICAgXHJcbiAgICBjdXJyZW50RmlsdGVyLmZvckVhY2goKHByb3ApID0+e1xyXG4gICAgICAgIGZvcmVjYXN0RmlsdGVyLmZvckVhY2goKHByKSA9PntcclxuICAgICAgICAgICAgaWYocHJvcCA9PT0gcHIgKXtcclxuICAgICAgICAgICAgICAgIGlkZW0ucHVzaChwcm9wKVxyXG4gICAgICAgIH19KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImlkZW06XCIsIGlkZW0pXHJcbn1cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IHtDdXJyZW50V2VhdGhlciwgRGF5LCBIb3VyLCBMb2NhdGlvbn1cclxuXHJcbi8vLyBDTEFTUyBGT1IgQ1VSUkVOVCBTVFJVQ1RVUkFUSU9OIC8vL1xyXG5cclxuY2xhc3MgQ3VycmVudFdlYXRoZXIge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBkYXRlKXtcclxuICAgICAgICB0aGlzLndlYXRoZXJUZXh0ID0gb2JqLmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgICAgIHRoaXMud2VhdGhlckljb24gPSBvYmouY29uZGl0aW9uLmljb24sIFxyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBvYmouY2xvdWQsXHJcbiAgICAgICAgdGhpcy50ZW1wQyA9IG9iai50ZW1wX2MsXHJcbiAgICAgICAgdGhpcy50ZW1wRiA9IG9iai50ZW1wX2YsXHJcbiAgICAgICAgdGhpcy50ZW1wQ19mZWVsID0gb2JqLmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIHRoaXMudGVtcEZfZmVlbCA9IG9iai5mZWVsc2xpa2VfZixcclxuICAgICAgICB0aGlzLmh1bWlkaXR5ID0gb2JqLmh1bWlkaXR5LFxyXG4gICAgICAgIHRoaXMud2luZCA9IG9iai53aW5kX2twaCxcclxuICAgICAgICB0aGlzLnByZWNpcFRvdGFsID0gb2JqLnByZWNpcF9tbSxcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxyXG4gICAgICAgIHRoaXMuaXNEYXkgPSBvYmouaXNfZGF5ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vLyBDTEFTUyBGT1IgSE9VUiBTVFJVQ1RVUkFUSU9OIC8vL1xyXG5cclxuY2xhc3MgSG91ciBleHRlbmRzIEN1cnJlbnRXZWF0aGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgZGF0ZSwgdGltZSl7XHJcbiAgICAgICAgc3VwZXIob2JqKVxyXG4gICAgICAgIHRoaXMuc25vd1RvdGFsID0gb2JqLnNub3dfY20sXHJcbiAgICAgICAgdGhpcy5zbm93Q2hhbmNlID0gb2JqLmNoYW5jZV9vZl9zbm93LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0xBU1MgRk9SIERBWSAgU1RSVUNUVVJBVElPTiAvLy9cclxuXHJcbmNsYXNzIERheSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIGRhdGUsIG9iakN1cnJlbnQpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlclRleHQgPSBvYmouY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbiA9IG9iai5jb25kaXRpb24uaWNvbixcclxuICAgICAgICB0aGlzLm1heFRlbXBDID0gb2JqLm1heHRlbXBfYyxcclxuICAgICAgICB0aGlzLm1heFRlbXBGID0gb2JqLm1heHRlbXBfZixcclxuICAgICAgICB0aGlzLm1pblRlbXBDID0gb2JqLm1pbnRlbXBfYyxcclxuICAgICAgICB0aGlzLm1pblRlbXBGID0gb2JqLm1pbnRlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDID0gb2JqLmF2Z3RlbXBfYyxcclxuICAgICAgICB0aGlzLnRlbXBGID0gb2JqLmF2Z3RlbXBfZixcclxuICAgICAgICB0aGlzLnRlbXBDX2ZlZWwgPSBvYmpDdXJyZW50ID8gb2JqQ3VycmVudC50ZW1wQ19mZWVsIDogZmFsc2UsIC8vIFBPUlFVRSBBR1JFR1VFIEVTVE8/IFBPUlFVRSBFTiBMQSBDQVJEIEVYVFJBXHJcbiAgICAgICAgdGhpcy50ZW1wRl9mZWVsID0gb2JqQ3VycmVudCA/IG9iakN1cnJlbnQudGVtcEZfZmVlbCA6IGZhbHNlLCAvLyBORUNFU0lUTyBFU1RFIERBVE8gQURFTUFTIERFIExPUyBERUwgREFZXHJcbiAgICAgICAgdGhpcy5hdmdIdW1pZGl0eSA9IG9iai5hdmdodW1pZGl0eSwgICAgICAgICAgICAgICAgLy8gWSBFUkEgTUFTIEZBQ0lMIEFHUkVHQVJMTyBBQ0EsIFFVRSBQT05FUiBDT05ESUNJT05BTEVTXHJcbiAgICAgICAgdGhpcy53aW5kID0gb2JqLm1heHdpbmRfa3BoLFxyXG4gICAgICAgIHRoaXMucHJlY2lwVG90YWwgPSBvYmoudG90YWxwcmVjaXBfbW0sXHJcbiAgICAgICAgdGhpcy5wcmVjaXBDaGFuY2UgPSBvYmouZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICAgICAgdGhpcy5zbm93VG90YWwgPSBvYmoudG90YWxzbm93X2NtLFxyXG4gICAgICAgIHRoaXMuc25vd0NoYW5jZSA9IG9iai5kYWlseV9jaGFuY2Vfb2Zfc25vdyxcclxuICAgICAgICB0aGlzLnV2ID0gb2JqLnV2LFxyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXHJcbiAgICAgICAgdGhpcy5pc0RheSA9IHRydWUsXHJcbiAgICAgICAgdGhpcy5pc0hpc3RvcnkgPSBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0xBU1MgRk9SIExPQ0FUSU9OIFNUUlVDVFVSQVRJT04gLy8vXHJcblxyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmope1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9iai5uYW1lLFxyXG4gICAgICAgIHRoaXMuY291bnRyeSA9IG9iai5jb3VudHJ5LFxyXG4gICAgICAgIHRoaXMucmVnaW9uID0gb2JqLnJlZ2lvblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtzZXRDYXJkRGF0YSwgc2V0UHJpbmNpcGFsRGF0YSwgc2V0TmVhckRhdGEsIHNldEV4dHJhRGF0YSwgc2V0SG91ckRhdGEsIGNyZWF0ZUVycm9yQ2FyZH0gZnJvbSBcIi4vZG9tXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFEaXNwbGF5LCByZW5kZXJFcnJvcn1cclxuXHJcbi8vLyBEQVRBIERJU1BMQVkgSEFORExFUiAvLy9cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGRheSA9IFwidG9kYXlcIil7XHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG5cclxuICAgIGlzRGF5b3JOaWdodChmb3JlY2FzdEFycilcclxuICAgIGlzRGF5b3JOaWdodCh5ZXN0ZXJkYXkpXHJcblxyXG4gICAgaGFuZGxlRXJyb3JDbGFzcyhmYWxzZSlcclxuXHJcbiAgIGxldCBjaG9zZW5EYXk7XHJcbiAgIGxldCBhdHRyaWJ1dGVWYWw7XHJcblxyXG4gICBzd2l0Y2godHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcInRvZGF5XCI6XHJcbiAgICAgICAgICAgIGNob3NlbkRheSA9IHRvZGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwidG9kYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRheSA9PT0gXCJ5ZXN0ZXJkYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0geWVzdGVyZGF5XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbCA9IFwieWVzdGVyZGF5XCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkYXkgPT09IFwidG9tb3Jyb3dcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gdG9tb3Jyb3dcclxuICAgICAgICAgICAgYXR0cmlidXRlVmFsID0gXCJ0b21vcnJvd1wiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGF5ID09PSBcImxhc3REYXlcIjpcclxuICAgICAgICAgICAgY2hvc2VuRGF5ID0gbGFzdERheVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWwgPSBcImxhc3REYXlcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgfVxyXG5cclxuICAgIHJlbmRlclByaW5jaXBhbChjaG9zZW5EYXksIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpXHJcbiAgICByZW5kZXJIb3VycyhjaG9zZW5EYXkpXHJcbiAgICByZW5kZXJFeHRyYShjaG9zZW5EYXkpXHJcbiAgICAvLyBUSElTIFJFTkRFUiBBTFdBWVMgVEhFIFNBTUUgV0FZIC8vXHJcbiAgICByZW5kZXJOZWFyKGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyKVxyXG59XHJcblxyXG4vLy8gUkVOREVSIFRIRSBIT1VSUyBPRiBUSEUgREFZIC8vL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySG91cnMoZm9yZWNhc3Qpe1xyXG5cclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlclwiKVxyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgbGV0IGhvdXJzID0gZm9yZWNhc3QuaG91cnNcclxuXHJcbiAgICBob3Vycy5mb3JFYWNoKCAoaG91ciwgaSkgPT4ge1xyXG4gICAgICAgIGlmKGkgPCAxMil7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0SG91ckRhdGEoXCJjYXJkLWFzaWRlXCIsIGhvdXIpKVxyXG4gICAgICAgIH0gZWxzZSBpZihpID49IDEyKXtcclxuIFxyXG4gICAgICAgICAgICBzbGlkZXJDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXRIb3VyRGF0YShcImNhcmQtYXNpZGVcIiwgaG91cikpIFxyXG4gICAgICAgIH0gICAgXHJcbiAgIH0pXHJcbn1cclxuXHJcblxyXG4vLy8gUkVOREVSIFBSSU5DSVBBTCBEQVRBIE9GIFRIRSBEQVkgLy8vXHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcmluY2lwYWwod2VhdGhlck9iaiwgbG9jYXRpb24sIGF0dHJpYnV0ZVZhbCl7XHJcbiAgICBcclxuICAgIGxldCBwcmluY2lwYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBwcmluY2lwYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0UHJpbmNpcGFsRGF0YShcImNhcmQtcHJpbmNpcGFsXCIsIHdlYXRoZXJPYmosIGxvY2F0aW9uLCBhdHRyaWJ1dGVWYWwpKVxyXG59XHJcblxyXG4vLy8gUkVOREVSIEVYVFJBIERBVEEgT0YgVEhFIERBWSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckV4dHJhKGZvcmVjYXN0KXtcclxuXHJcbiAgICBsZXQgZXh0cmFEYXRhID0gZm9yZWNhc3QuZGF5XHJcblxyXG4gICAgbGV0IGV4dHJhQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHRyYVwiKVxyXG4gICAgZXh0cmFDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBleHRyYUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXRFeHRyYURhdGEoXCJjYXJkLWV4dHJhXCIsIGV4dHJhRGF0YSkpO1xyXG59XHJcblxyXG4vLy8gUkVOREVSIEFMTCBEQVlTOiBZRVNURVJEQVksIFRPREFZLCBUT01PUlJPVywgTEFTVERBWSAvLy9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5lYXIoZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpe1xyXG5cclxuICAgIGxldCBuZWFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZWFyXCIpXHJcbiAgICBsZXQgbmVhckFyciA9IEFycmF5LmZyb20obmVhckNvbnRhaW5lci5jaGlsZHJlbilcclxuXHJcbiAgICBuZWFyQXJyLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVySFRNTCA9IFwiXCIpXHJcblxyXG4gICAgbGV0IFt0b2RheSwgdG9tb3Jyb3csIGxhc3REYXldID0gZm9yZWNhc3RBcnJcclxuICAgIGxldCB5ZXN0ZXJkYXkgPSBoaXN0b3J5QXJyXHJcblxyXG4gICAgbmVhckFyclswXS5hcHBlbmRDaGlsZChzZXROZWFyRGF0YShcImNhcmQtbmVhclwiLCB5ZXN0ZXJkYXkuZGF5KSlcclxuICAgIG5lYXJBcnJbMV0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgdG9kYXkuZGF5KSlcclxuICAgIG5lYXJBcnJbMl0uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgdG9tb3Jyb3cuZGF5KSlcclxuICAgIG5lYXJBcnJbM10uYXBwZW5kQ2hpbGQoc2V0TmVhckRhdGEoXCJjYXJkLW5lYXJcIiwgbGFzdERheS5kYXkpKVxyXG59XHJcblxyXG5cclxuLy8vIFJFTkRFUiBFUlJPUiAvLy9cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckVycm9yKCl7XHJcbiAgIFxyXG4gICAgaGFuZGxlRXJyb3JDbGFzcyh0cnVlKVxyXG5cclxuICAgIGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW5jaXBhbFwiKVxyXG4gICAgcHJpbmNpcGFsLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjcmVhdGVFcnJvckNhcmQoKSlcclxufVxyXG5cclxuLy8vIEhBTkRMRSBUSEUgRVJST1IgQ0xBU1NFUyBGT1IgRElTUExBWSBUSEUgQ09SUkVDVCBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3JDbGFzcyhlcnJvcil7XHJcblxyXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxyXG5cclxuICAgIGxldCBtYWluQXJyID0gQXJyYXkuZnJvbShtYWluLmNoaWxkcmVuKVxyXG5cclxuICAgIGxldCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZVwiKVxyXG5cclxuICAgIGxldCBlbGVtZW50cyA9IFtib2R5LCBtYWluLCBtYWluQXJyLCBhc2lkZV0uZmxhdCgpXHJcblxyXG4gICAgaWYoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIikpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gQ0hFQ0sgSUYgQ1VSUkVOVExZIElTIERBWSBPUiBOSUdIVCBGT1IgUkVOREVSSU5HIERBVEEgV0lUSCBDT1JSRUNUIElDT05TIC8vL1xyXG5cclxuZnVuY3Rpb24gaXNEYXlvck5pZ2h0KG9iamVjdCkge1xyXG5cclxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqZWN0KSl7XHJcblxyXG4gICAgb2JqZWN0LmZvckVhY2goZWwgPT4ge1xyXG5cclxuICAgICAgICBlbC5kYXkuaXNEYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RBcnJcIikpWzBdLmN1cnJlbnQuaXNEYXk7XHJcbiAgICAgICAgY2hhbmdlV2VhdGhlclRleHQoZWwpXHJcbiAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgb2JqZWN0LmRheS5pc0RheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmb3JlY2FzdEFyclwiKSlbMF0uY3VycmVudC5pc0RheTtcclxuICAgICAgICBjaGFuZ2VXZWF0aGVyVGV4dChvYmplY3QpXHJcbiAgICB9ICBcclxufVxyXG5cclxuLy8vIENIRUNLIFRIRSBXQVRIRVJURVhUIFBST1BFUlRZIEFORCBDSEFOR0UgSVQgVE8gQUxMT1cgVEhFIENPUlJFQ1QgSUNPTiBSRU5ERVJJTkcgLy8vXHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VXZWF0aGVyVGV4dChlbCkge1xyXG5cclxuICAgIGlmKGVsLmRheS5pc0RheSA9PT0gZmFsc2UgJiYgZWwuZGF5LndlYXRoZXJUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcInN1bm55XCIpe1xyXG5cclxuICAgICAgICBlbC5kYXkud2VhdGhlclRleHQgPSBcIkNsZWFyXCJcclxuICAgIH0gZWxzZSBpZiAoZWwuZGF5LmlzRGF5ICYmIGVsLmRheS53ZWF0aGVyVGV4dC50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJjbGVhclwiKSB7XHJcblxyXG4gICAgICAgIGVsLmRheS53ZWF0aGVyVGV4dCA9IFwiU3VubnlcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGltZ0ZhY2UgZnJvbSBcIi4vaW1nL2NvbmZ1c2VkLWJsYWNrLWxpbmUuc3ZnXCI7XHJcbmltcG9ydCB7IGljb25TZWxlY3RvciB9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCJcclxuXHJcbmV4cG9ydCB7c2V0UHJpbmNpcGFsRGF0YSwgc2V0TmVhckRhdGEsIHNldEV4dHJhRGF0YSwgc2V0SG91ckRhdGEsIGNyZWF0ZUVycm9yQ2FyZH1cclxuXHJcbi8vLyBDUkVBVEUgQ09NTU9OIENBUkQgLy8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKCl7XHJcblxyXG4gICAgbGV0IGNhcmQgPSBjcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBcImNhcmRcIilcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwbGFjZVwiKVxyXG4gICAgbGV0IGRhdGUgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImRhdGVcIilcclxuICAgIGxldCB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndyYXBwZXJcIilcclxuICAgIGxldCB0ZW1wID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ0ZW1wXCIpXHJcbiAgICBsZXQgdGVtcEZlZWwgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInRlbXBGZWVsXCIpXHJcbiAgICBsZXQgdGVtcE1pbk1heCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGVtcE1pbk1heFwiKVxyXG4gICAgbGV0IGNsb3VkID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjbG91ZFwiKVxyXG4gICAgbGV0IHByZWNpcCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwicHJlY2lwXCIpXHJcbiAgICBsZXQgaHVtaWRpdHkgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImh1bWlkaXR5XCIpXHJcbiAgICBsZXQgdGltZSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwidGltZVwiKVxyXG4gICAgbGV0IHNub3cgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNub3dcIilcclxuICAgIGxldCB3aW5kID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJ3aW5kXCIpXHJcbiAgICBsZXQgdXYgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInV2XCIpXHJcblxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJpbWdcIilcclxuICAgIGxldCBzdWIgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInN1YlwiKVxyXG5cclxuICAgbGV0IGNhcmRBcnIgPSBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgICAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1diwgd3JhcHBlcl1cclxuXHJcbiAgIGNhcmRBcnIuZm9yRWFjaChlbGVtZW50ID0+IHtjYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQpfSlcclxuXHJcbiAgICByZXR1cm4ge2NhcmQsIGNhcmRBcnJ9XHJcbn1cclxuXHJcbi8vLyBTRVQgREFUQSBPRiBQUklOQ0lQQUwgQ0FSRCAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldFByaW5jaXBhbERhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqLCBsb2NhdGlvbk9iaiwgYXR0cmlidXRlVmFsKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHsgMDogaW1nLCAxOiBzdWIsIDI6IHBsYWNlLCAzOiB0ZW1wLCAgNjogZGF0ZSwgMTQ6IHdyYXBwZXIgfSA9IGNhcmRBcnJcclxuXHJcbiAgICBsZXQgd2VhdGhlciA9IHdlYXRoZXJPYmouaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpID8gd2VhdGhlck9iai5jdXJyZW50IDogd2VhdGhlck9iai5kYXk7XHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHN0cmluZ0N1dCh3ZWF0aGVyLndlYXRoZXJUZXh0KTtcclxuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25PYmoubmFtZX0sICR7bG9jYXRpb25PYmouY291bnRyeX1gOyBcclxuXHJcblxyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSA/IFxyXG4gICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXIudGVtcEYpfcK6YCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyLnRlbXBDKX3CumBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGEtZGF5XCIsIGF0dHJpYnV0ZVZhbClcclxuICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmRhdGUuc2xpY2UoOCl9LyR7d2VhdGhlci5kYXRlLnNsaWNlKDUsIDcpfSwgYXZlcmFnZSB0wrpgO1xyXG4gICAgaWYod2VhdGhlck9iai5oYXNPd25Qcm9wZXJ0eShcImN1cnJlbnRcIikpIHtcclxuICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmlzRGF5ID8gXCJUb2RheSwgY3VycmVudGx5XCIgOiBcIlRvbmlnaHQsIGN1cnJlbnRseVwiIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGxhY2UpXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRhdGUpXHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbi8vLyBTRVQgREFUQSBPRiBFWFRSQSBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gc2V0RXh0cmFEYXRhKGNsYXNzTmFtZSwgd2VhdGhlck9iaikge1xyXG5cclxuICAgIGxldCB0ZW1wT3B0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsIDpudGgtY2hpbGQoMilcIilcclxuXHJcbiAgICBsZXQge2NhcmQsIGNhcmRBcnJ9ID0gY3JlYXRlQ2FyZCgpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG5cclxuICAgIGxldCB7NDogdGVtcEZlZWwsIDU6IHRlbXBNaW5NYXgsIDc6IGNsb3VkLCA4OiBwcmVjaXAsIDEwOiBodW1pZGl0eSwgMTE6IHNub3csIFxyXG4gICAgICAgIDEyOiB3aW5kLCAxMzogdXZ9ID0gY2FyZEFyclxyXG5cclxuXHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEMpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEMpfcK6YDtcclxuICAgIGlmKHRlbXBPcHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFyYVwiKSl7IFxyXG4gICAgICAgIHRlbXBGZWVsLnRleHRDb250ZW50ID0gd2VhdGhlck9iai50ZW1wRl9mZWVsID8gXHJcbiAgICAgICAgYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEZfZmVlbCl9wrpgIDogdGVtcEZlZWwuY2xhc3NMaXN0LmFkZChcIm5vdFwiKTtcclxuICAgICAgICB0ZW1wTWluTWF4LnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWF4VGVtcEYpfcK6LyR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoubWluVGVtcEYpfcK6YDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbi8vLyBTRVQgREFUQSBPRiBFQUNIIERBWSBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gc2V0TmVhckRhdGEoY2xhc3NOYW1lLCB3ZWF0aGVyT2JqKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG4gICAgbGV0IHswOiBpbWcsIDE6IHN1YiwgMzogdGVtcCwgNjogZGF0ZSB9ID0gY2FyZEFyclxyXG5cclxuICAgIGltZy5zcmMgPSBpY29uU2VsZWN0b3Iod2VhdGhlck9iaik7XHJcbiAgICBzdWIudGV4dENvbnRlbnQgPSBzdHJpbmdDdXQod2VhdGhlck9iai53ZWF0aGVyVGV4dCk7XHJcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5kYXRlLnNsaWNlKDgpfS8ke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg1LCA3KX1gO1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wT3B0LmNsYXNzTGlzdC5jb250YWlucyhcImZhcmFcIikgPyBcclxuICAgIGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGKX3CuiBhdmcuYCA6IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBDKX3CuiBhdmcuYDtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbi8vLyBTRVQgREFUQSBPRiBIT1VSIENBUkQgLy8vXHJcblxyXG5mdW5jdGlvbiBzZXRIb3VyRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmopIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbGV0IHtjYXJkLCBjYXJkQXJyfSA9IGNyZWF0ZUNhcmQoKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuXHJcbiAgICBsZXQgezA6IGltZywgMTogc3ViLCAzOiB0ZW1wLCA5OiB0aW1lfSA9IGNhcmRBcnJcclxuXHJcbiAgICBpbWcuc3JjID0gaWNvblNlbGVjdG9yKHdlYXRoZXJPYmopO1xyXG4gICAgc3ViLnRleHRDb250ZW50ID0gc3RyaW5nQ3V0KHdlYXRoZXJPYmoud2VhdGhlclRleHQpO1xyXG4gICAgdGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGltZTtcclxuXHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpID8gXHJcbiAgICBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wRil9wrpgIDogYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEMpfcK6YDtcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG4vLy8gQ1JFQVRFIEFORCBTRVQgREFUQSBPRiBFUlJPUiBDQVJEIC8vL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXJyb3JDYXJkKCl7XHJcblxyXG4gICAgbGV0IGVyciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IGltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJlcnJvclwiKVxyXG4gICAgbGV0IHAgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImVycm9yXCIpXHJcbiAgICBpbWcuc3JjID0gaW1nRmFjZVxyXG4gICAgcC50ZXh0Q29udGVudCA9IFwidWggb2guLi4gbG9jYXRpb24gbm90IGZvdW5kXCJcclxuICAgIGVyci5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBlcnIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICByZXR1cm4gZXJyXHJcbn1cclxuXHJcbi8vLyBIRUxQIENSRUFURSBFTEVNRU5UUyAvLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuLy8vIENVVCBXRUFUSEVSVEVYVCBUSEFUIElTIFRPTyBMT05HIFRPIEZJVCBJTiBUSEUgQ09OVEFJTkVSIC8vL1xyXG5cclxuZnVuY3Rpb24gc3RyaW5nQ3V0KG9ialByb3ApIHtcclxuXHJcbiAgICBsZXQgc3RyID0gb2JqUHJvcFxyXG5cclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG5cclxuICAgICAgICBjYXNlIHN0ciA9PT0gXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiOlxyXG4gICAgICAgICAgICBzdHIgPSBcIk1vZGVyYXRlL2hlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzdHIgPT09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIjpcclxuICAgICAgICAgICAgc3RyID0gXCJNb2RlcmF0ZS9oZWF2eSByYWluIHNub3cgdGh1bmRlclwiXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc3RyID09PSBcIlBhdGNoeSBsaWdodCByYWluIGluIGFyZWEgd2l0aCB0aHVuZGVyXCI6XHJcbiAgICAgICAgICAgIHN0ciA9IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzdHIgPT09IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiOlxyXG4gICAgICAgICAgICBzdHIgPSBcIk1vZC9oZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCJcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9ICBcclxuXHJcbiAgICByZXR1cm4gc3RyXHJcbn1cclxuXHJcblxyXG4vLy8gU0VUIERBVEEgRk9SIEFMTCBUSEUgQ0FSRFMgLy8vXHJcblxyXG4vKiBmdW5jdGlvbiBzZXRDYXJkRGF0YShjbGFzc05hbWUsIHdlYXRoZXJPYmosIGxvY2F0aW9uT2JqLCBhdHRyaWJ1dGVOYW1lKSB7XHJcblxyXG4gICAgbGV0IHRlbXBPcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWwgOm50aC1jaGlsZCgyKVwiKVxyXG5cclxuICAgIGxldCB7Y2FyZCwgY2FyZEFycn0gPSBjcmVhdGVDYXJkKClcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcblxyXG5cclxuICAgIGxldCBbaW1nLCBzdWIsIHBsYWNlLCB0ZW1wLCB0ZW1wRmVlbCwgdGVtcE1pbk1heCwgZGF0ZSwgY2xvdWQsIHByZWNpcCwgdGltZSwgXHJcbiAgICAgICAgIGh1bWlkaXR5LCBzbm93LCB3aW5kLCB1dl0gPSBjYXJkQXJyXHJcblxyXG4gICAgaW1nLnNyYyA9IGljb25TZWxlY3Rvcih3ZWF0aGVyT2JqKTtcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlclRleHQ7XHJcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uT2JqLm5hbWV9LCAke2xvY2F0aW9uT2JqLmNvdW50cnl9YDsgXHJcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBcIlwiKVxyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouZGF0ZS5zbGljZSg4KX0vJHt3ZWF0aGVyT2JqLmRhdGUuc2xpY2UoNSwgNyl9YDtcclxuICAgIHRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRpbWU7XHJcbiAgICBjbG91ZC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouY2xvdWR9ICVgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmF2Z0h1bWlkaXR5fSAlYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai53aW5kKX0ga21gO1xyXG4gICAgdXYudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnV2O1xyXG5cclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQyl9wrpgO1xyXG4gICAgdGVtcEZlZWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLnRlbXBDX2ZlZWwgPyBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai50ZW1wQ19mZWVsKX3CumAgOiB0ZW1wRmVlbC5jbGFzc0xpc3QuYWRkKFwibm90XCIpO1xyXG4gICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBDKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBDKX3CumA7XHJcbiAgICBpZiggdGVtcE9wdC5jbGFzc0xpc3QuY29udGFpbnMoXCJmYXJhXCIpKXsgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbGEgayBhc2VcIilcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TnVtYmVyLnBhcnNlSW50KHdlYXRoZXJPYmoudGVtcEYpfcK6YDtcclxuICAgICAgICB0ZW1wRmVlbC50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoudGVtcEZfZmVlbCA/IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnRlbXBGX2ZlZWwpfcK6YCA6IHRlbXBGZWVsLmNsYXNzTGlzdC5hZGQoXCJub3RcIik7XHJcbiAgICAgICAgdGVtcE1pbk1heC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1heFRlbXBGKX3Cui8ke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLm1pblRlbXBGKX3CumA7XHJcbiAgICB9IFxyXG5cclxuICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcENoYW5jZSl9ICVgO1xyXG4gICAgc25vdy50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmouc25vd0NoYW5jZX0gJWA7XHJcbiAgICBpZih3ZWF0aGVyT2JqLmlzSGlzdG9yeSl7IFxyXG4gICAgICAgIHByZWNpcC50ZXh0Q29udGVudCA9IGAke051bWJlci5wYXJzZUludCh3ZWF0aGVyT2JqLnByZWNpcFRvdGFsKX0gbW1gO1xyXG4gICAgICAgIHNub3cudGV4dENvbnRlbnQgPSBgJHtOdW1iZXIucGFyc2VJbnQod2VhdGhlck9iai5zbm93VG90YWwpfSBtbWBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufSAqL1xyXG5cclxuXHJcbiIsImltcG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufSBmcm9tIFwiLi9vYmplY3RzXCI7XHJcbmltcG9ydCB7Y29tcGFyZU9iamVjdHMsIGdldFByZXZpb3VzRGF5fSBmcm9tIFwiLi9hdXhpbGlhcmllc1wiO1xyXG5pbXBvcnQge3RyaWdnZXJEYXRhRGlzcGxheSwgcmVuZGVyRXJyb3J9IGZyb20gXCIuL2Rpc3BsYXlcIjtcclxuaW1wb3J0IHtzZXRUZW1wLCBzZXRUaGVtZX0gZnJvbSBcIi4vaW50ZXJhY3Rpdml0eVwiXHJcblxyXG5leHBvcnQge2dldERhdGEsIHJldHJpZXZlRGF0YSwgaW5pdGlhbGl6ZUFwcH1cclxuXHJcbi8vLyBBUFAgQVVUT01BVElDIElOSVRJQUxJWkFUSU9OIC8vL1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIFxyXG4gICAgbGV0IHBsYWNlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2F0aW9uXCIpKVxyXG5cclxuICAgdHJ5e1xyXG5cclxuICAgIGdldERhdGEocGxhY2UubmFtZSlcclxuICAgIHNldFRoZW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpXHJcbiAgICBzZXRUZW1wKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFwiKSlcclxuICAgfSBcclxuICAgY2F0Y2goZXJyKXtcclxuXHJcbiAgICBnZXREYXRhKFwiYXJnZW50aW5hXCIpXHJcbiAgICBzZXRUaGVtZShcInRoZW1lLWRhcmtcIilcclxuICAgIHNldFRlbXAoXCJjZWxzaXVzXCIpXHJcbiAgIH1cclxufVxyXG5cclxuLy8vIEdFVCBEQVRBIEZST00gV0VBVEhFUiBBUEkgLy8vXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGlucHV0VmFsKXtcclxuXHJcbnRyeXtcclxuICAgIGxldCBbcmVzcG9uc2UsIHJlc3BvbnNlMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmRheXM9M2ApLFxyXG4gICAgICAgIGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9NjQwMWE2NTQ4YTIyNDY4OTkwMjE3MTg0MTIzMzAxMiZxPSR7aW5wdXRWYWx9JmR0PSR7Z2V0UHJldmlvdXNEYXkoKX1gKVxyXG4gICAgXSlcclxuXHJcbiAgICBpZighcmVzcG9uc2Uub2sgfHwgIXJlc3BvbnNlMi5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIHJlcXVlc3RcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2RhdGFGb3JlY2FzdCwgZGF0YUhpc3RvcnldID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICByZXNwb25zZTIuanNvbigpXHJcbiAgICBdKVxyXG5cclxuICAgIC8vLyBGVU5DVElPTiBUTyBDT01QQVJFIE9CSkVDVFMgUkVUUklFVkVEIC8vL1xyXG4gICAgLy9jb21wYXJlT2JqZWN0cyhkYXRhLCBkYXRhMiwgZGF0YTMpXHJcblxyXG4gICBkYXRhSGFuZGxlcihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxufSBjYXRjaChlcnIpe1xyXG5cclxuICAgICAgIHJlbmRlckVycm9yKClcclxuICAgIH0gIFxyXG59IFxyXG5cclxuLy8vIEhBTkRMRSBUSEUgREFUQTogU1RSVUNUVVJFIFRIRSBEQVRBLCBTVE9SRSBUSEUgREFUQSBBTkQgRElTUExBWSBUSEUgREFUQSAvLy9cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRhdGFIYW5kbGVyKGRhdGFGb3JlY2FzdCwgZGF0YUhpc3Rvcnkpe1xyXG5cclxuICAgIGxldCBbbG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyXSA9IHRyaWdnZXJEYXRhU3RydWN0dXJhdGlvbihkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KVxyXG5cclxuICAgIHN0b3JlRGF0YShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIpXHJcblxyXG4gICAgdHJpZ2dlckRhdGFEaXNwbGF5KGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycilcclxufVxyXG5cclxuLy8vIFNUT1JFIFRIRSBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gc3RvcmVEYXRhKGxvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycikge1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYXRpb25cIiwgSlNPTi5zdHJpbmdpZnkobG9jYXRpb24pKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JlY2FzdEFyclwiLCBKU09OLnN0cmluZ2lmeShmb3JlY2FzdEFycikpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpc3RvcnlBcnJcIiwgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeUFycikpXHJcblxyXG59XHJcblxyXG4vLy8gUkVUUklFVkUgVEhFIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEoKXtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9jYXRpb25cIikpXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZWNhc3RBcnJcIikpXHJcbiAgICBsZXQgaGlzdG9yeUFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaXN0b3J5QXJyXCIpKVxyXG5cclxuICAgIHJldHVybiB7bG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8gRVhBTVBMRSBPRiBUSEUgVVJMIFVTRUQgRk9SIFRIRSBBUEkgQU5EIFRIRSBESUZGRVJFTlQgUEFSVFMgLy8vXHJcblxyXG4vKiBsZXQgZXhhbXBsZSA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0xMTExMTExMTExMTExMTExMSZxPWxvbmRvblwiXHJcbmxldCBwYXNzID0gXCI/a2V5PTY0MDFhNjU0OGEyMjQ2ODk5MDIxNzE4NDEyMzMwMTJcIlxyXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCJcclxubGV0IGN1cnJlbnQgPSBcIi9jdXJyZW50Lmpzb25cIlxyXG5sZXQgcGxhY2UgPSBcInE9UGFyaXNcIiAqL1xyXG4iLCJpbXBvcnQge3RyaWdnZXJEYXRhRGlzcGxheX0gZnJvbSBcIi4vZGlzcGxheVwiXHJcbmltcG9ydCB7cmV0cmlldmVEYXRhLCBnZXREYXRhLCBpbml0aWFsaXplQXBwfSBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCB7Y2Fyb3VzZWx9IGZyb20gXCIuL2F1eGlsaWFyaWVzXCJcclxuXHJcbmV4cG9ydCB7ZWxlbWVudHMsIHNldFRlbXAsIHNldFRoZW1lfVxyXG5cclxuXHJcbi8vLyBFTEVNRU5UUyBPQkpFQ1QgV0lUSCBMSVNURU5FUlMgLy8vXHJcblxyXG5sZXQgZWxlbWVudHMgPSB7XHJcblxyXG4gICAgaW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSxcclxuICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKSxcclxuICAgIGJ0bk1lbnU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKSxcclxuICAgIHRlbXBPcHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpLFxyXG4gICAgdGhlbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWVcIiksXHJcbiAgICBuZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5lYXJcIiksXHJcbiAgICBidG5VcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cFwiKSxcclxuICAgIGJ0bkRvd246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG93blwiKSxcclxuXHJcbiAgICBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTWVudSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRpYWxpemVBcHApO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZ2V0SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5idG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcbiAgICAgICAgdGhpcy50ZW1wT3B0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VUZW1wKTtcclxuICAgICAgICB0aGlzLnRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VUaGVtZSk7ICAgXHJcbiAgICAgICAgdGhpcy5idG5VcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2Fyb3VzZWwpLFxyXG4gICAgICAgIHRoaXMuYnRuRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2Fyb3VzZWwpLCAgICAgXHJcbiAgICAgICAgdGhpcy5uZWFyQXJyKCkuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5lYXJDYXJkc0V2ZW50KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG5lYXJBcnIoKXtcclxuICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubmVhci5jaGlsZHJlbilcclxuICAgIH1cclxufSBcclxuXHJcbi8vLyBTRVQgVEhFIExJU1RFTkVSUyBPTiBUSEUgT0JKRUNUUyAvLy9cclxuXHJcbmVsZW1lbnRzLmluaXRpYWxpemUoKVxyXG5cclxuXHJcbi8vLyBHRVQgTE9DQVRJT04gRlJPTSBVU0VSIElOUFVUIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShlKXtcclxuXHJcbiAgICBpZihlLmtleSAhPT0gXCJFbnRlclwiKSB7cmV0dXJufVxyXG5cclxuICAgIGxldCBpbnB1dFZhbCA9IGVsZW1lbnRzLmlucHV0LnZhbHVlIFxyXG5cclxuICAgIGdldERhdGEoaW5wdXRWYWwpXHJcblxyXG4gICAgZWxlbWVudHMuaW5wdXQudmFsdWUgPSBcIlwiXHJcbn1cclxuXHJcbi8vLyBMSVNURU4gRk9SIENBUkQgU0VMRUNUSU9OIEZST00gVEhFIFVTRVIgQU5EIERJU1BMQVkgVEhFIERBVEEgLy8vXHJcblxyXG5mdW5jdGlvbiBuZWFyQ2FyZHNFdmVudCgpIHtcclxuXHJcbiAgICBsZXQgY2FyZERheSA9IHRoaXMuY2xhc3NOYW1lXHJcblxyXG4gICAgbGV0IHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9ID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgICB0cmlnZ2VyRGF0YURpc3BsYXkobG9jYXRpb24sIGZvcmVjYXN0QXJyLCBoaXN0b3J5QXJyLCBjYXJkRGF5KVxyXG59XHJcblxyXG5cclxuLy8vIExJU1RFTiBGT1IgVVNFUiBTRUxFQ1RJT04gT0YgVEhFIE1FTlUgLy8vXHJcblxyXG5mdW5jdGlvbiBzaG93TWVudShlKSB7XHJcbiAgICBlbGVtZW50cy5idG5NZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1tZW51XCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XHJcblxyXG4gICAgaWYoIWVsZW1lbnRzLm5hdi5jb250YWlucyhlLnRhcmdldCkpe1xyXG4gICAgICAgIGVsZW1lbnRzLmJ0bk1lbnUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1lbnVcIilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vLyBMSVNURU4gRk9SIFVTRVIgQ0hBTkdFIE9GIFRIRSBURU1QRVJBVFVSRSBTQ0FMRSAvLy9cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRlbXAoKSB7XHJcblxyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIilcclxuICAgIGxldCBhdHRyID0gZGF0ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiKVxyXG5cclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcFwiKSA9PT0gXCJmYXJhXCIpe1xyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIEZhaHJlbmhlaXRcIlxyXG4gICAgICAgIHNldFRlbXAoXCJjZWxzaXVzXCIpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJ0byBDZWxzaXVzXCJcclxuICAgICAgICBzZXRUZW1wKFwiZmFyYVwiKVxyXG4gICAgfVxyXG5cclxuICAgbGV0IHtsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnJ9ID0gcmV0cmlldmVEYXRhKClcclxuXHJcbiAgIHRyaWdnZXJEYXRhRGlzcGxheShsb2NhdGlvbiwgZm9yZWNhc3RBcnIsIGhpc3RvcnlBcnIsIGF0dHIpXHJcbn1cclxuXHJcbi8vLyBTRVQgQU5EIFNUT1JFIFRIRSBTRUxFQ1RFRCBURU1QRVJBVFVSRSAvLy9cclxuXHJcbmZ1bmN0aW9uIHNldFRlbXAodGVtcGVyYXR1cmUpIHtcclxuXHJcbiAgICBsZXQgdGVtcE9wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bCA6bnRoLWNoaWxkKDIpXCIpXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0ZW1wXCIsIHRlbXBlcmF0dXJlKVxyXG4gICAgdGVtcE9wdC5jbGFzc05hbWUgPSB0ZW1wZXJhdHVyZVxyXG59XHJcblxyXG4vLy8gTElTVEVOIEZPUiBVU0VSIENIQU5HRSBPRiBUSEUgV0VCIFRIRU1FIC8vL1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGhlbWUoKXtcclxuXHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID09PSBcInRoZW1lLWRhcmtcIil7XHJcbiAgICAgICAgc2V0VGhlbWUoXCJ0aGVtZS1saWdodFwiKVxyXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcInRvIGRhcmsgdGhlbWVcIlxyXG4gICAgICAgXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgc2V0VGhlbWUoXCJ0aGVtZS1kYXJrXCIpXHJcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwidG8gbGlnaHQgdGhlbWVcIlxyXG4gICAgfVxyXG59XHJcblxyXG4vLy8gU0VUIEFORCBTVE9SRSBUSEUgU0VMRUNURUQgVEhFTUUgLy8vXHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSl7XHJcbiAgICAgICAgICAgIFxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKVxyXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWVcclxufSIsImltcG9ydCB7Q3VycmVudFdlYXRoZXIsIERheSwgSG91ciwgTG9jYXRpb259IGZyb20gXCIuL2NsYXNzXCJcclxuXHJcbmV4cG9ydCB7dHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9ufVxyXG5cclxuLy8vIERBVEEgU1RSVUNUVVJBVElPTiBIQU5ETEVSIC8vL1xyXG5cclxuZnVuY3Rpb24gdHJpZ2dlckRhdGFTdHJ1Y3R1cmF0aW9uIChkYXRhRm9yZWNhc3QsIGRhdGFIaXN0b3J5KXtcclxuXHJcbiAgICBsZXQgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihkYXRhRm9yZWNhc3QpXHJcbiAgICBsZXQgZm9yZWNhc3RBcnIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YUZvcmVjYXN0KVxyXG4gICAgbGV0IGhpc3RvcnlBcnIgPSBnZXRIaXN0b3J5RGF0YShkYXRhSGlzdG9yeSlcclxuXHJcbiAgICByZXR1cm4gW2xvY2F0aW9uLCBmb3JlY2FzdEFyciwgaGlzdG9yeUFycl1cclxufVxyXG5cclxuLy8vIFNUUlVDVFVSRSBUT0RBWSwgVE9NT1JST1cgQU5EIExBU1REQVkgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIGdldEZvcmVjYXN0RGF0YShvYmopIHtcclxuXHJcbiAgICBsZXQgcmF3Rm9yZWNhc3RBcnIgPSBvYmouZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG5cclxuICAgIGxldCBbcmF3VG9kYXlBcnIsIHJhd1RvbW9ycm93QXJyLCByYXdMYXN0RGF5QXJyXSA9IHJhd0ZvcmVjYXN0QXJyO1xyXG5cclxuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IGdldEN1cnJlbnRXZWF0aGVyKG9iailcclxuICAgIGxldCB0b2RheURheSA9IG5ldyBEYXkocmF3VG9kYXlBcnIuZGF5LCByYXdUb2RheUFyci5kYXRlLCBjdXJyZW50V2VhdGhlcik7XHJcbiAgICBsZXQgdG9kYXlIb3Vyc0FyciA9IGdldEhvdXJzKHJhd1RvZGF5QXJyKTtcclxuICAgIGxldCB0b2RheU9iaiA9IHtjdXJyZW50OiBjdXJyZW50V2VhdGhlciwgZGF5OiB0b2RheURheSwgaG91cnM6IHRvZGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCB0b21vcnJvd0RheSA9IG5ldyBEYXkocmF3VG9tb3Jyb3dBcnIuZGF5LCByYXdUb21vcnJvd0Fyci5kYXRlKTtcclxuICAgIGxldCB0b21vcnJvd0hvdXJzQXJyID0gZ2V0SG91cnMocmF3VG9tb3Jyb3dBcnIpO1xyXG4gICAgbGV0IHRvbW9ycm93T2JqID0ge2RheTogdG9tb3Jyb3dEYXksIGhvdXJzOiB0b21vcnJvd0hvdXJzQXJyfTtcclxuXHJcbiAgICBsZXQgbGFzdERheURheSA9IG5ldyBEYXkocmF3TGFzdERheUFyci5kYXksIHJhd0xhc3REYXlBcnIuZGF0ZSk7XHJcbiAgICBsZXQgbGFzdERheUhvdXJzQXJyID0gZ2V0SG91cnMocmF3TGFzdERheUFycik7XHJcbiAgICBsZXQgbGFzdERheU9iaiA9IHtkYXk6IGxhc3REYXlEYXksIGhvdXJzOiBsYXN0RGF5SG91cnNBcnJ9O1xyXG5cclxuICAgIGxldCBmb3JlY2FzdEFyciA9IFt0b2RheU9iaiwgdG9tb3Jyb3dPYmosIGxhc3REYXlPYmpdO1xyXG5cclxuICAgIHJldHVybiBmb3JlY2FzdEFyclxyXG59XHJcblxyXG4vLy8gU1RSVUNUVVJFIFlFU1RFUkRBWSBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0SGlzdG9yeURhdGEob2JqKSB7XHJcblxyXG4gICAgbGV0IFtyYXdZZXN0ZXJkYXlBcnJdID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XHJcblxyXG4gICAgbGV0IHllc3RlcmRheURheSA9IG5ldyBEYXkocmF3WWVzdGVyZGF5QXJyLmRheSwgcmF3WWVzdGVyZGF5QXJyLmRhdGUgKVxyXG4gICAgeWVzdGVyZGF5RGF5LmlzSGlzdG9yeSA9IHRydWU7XHJcbiAgICBsZXQgeWVzdGVyZGF5SG91cnNBcnIgPSBnZXRIb3VycyhyYXdZZXN0ZXJkYXlBcnIpXHJcblxyXG4gICAgbGV0IHllc3RlcmRheU9iaiA9IHtkYXk6IHllc3RlcmRheURheSwgaG91cnM6IHllc3RlcmRheUhvdXJzQXJyfVxyXG5cclxuICAgIHJldHVybiB5ZXN0ZXJkYXlPYmpcclxufVxyXG5cclxuLy8vIFNUUlVDVFVSRSBMT0NBVElPTiBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24ob2JqKSB7XHJcblxyXG4gICAgbGV0IGxvY2F0aW9uID0gb2JqLmxvY2F0aW9uXHJcbiAgICBsZXQgbG9jYXRpb25PYmogPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uT2JqXHJcbn1cclxuXHJcblxyXG4vLy8vLy8gSEVMUEVSUyAvLy8vLy9cclxuICAgICAgICAgICAgXHJcblxyXG4vLy8gU1RSVUNUVVJFIENVUlJFTlQgREFUQSAvLy9cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKG9iail7IFxyXG5cclxuICAgIGxldCB3ZWF0aGVyID0gb2JqLmN1cnJlbnRcclxuICAgIGxldCBkYXRlID0gb2JqLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGVcclxuICAgIGxldCB3ZWF0aGVyT2JqID0gbmV3IEN1cnJlbnRXZWF0aGVyKHdlYXRoZXIsIGRhdGUpXHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJPYmpcclxufVxyXG5cclxuLy8vIFNUUlVDVFVSRSBIT1VSUyBEQVRBIC8vL1xyXG5cclxuZnVuY3Rpb24gZ2V0SG91cnMoYXJyKSB7XHJcblxyXG4gICAgcmV0dXJuIGFyci5ob3VyLm1hcCggKGhvdXIpID0+IHtcclxuICAgICAgICBsZXQgZGF0ZSA9IGhvdXIudGltZS5zbGljZSgwLCAxMClcclxuICAgICAgICBsZXQgdGltZSA9IGhvdXIudGltZS5zbGljZSgxMSlcclxuICAgICAgcmV0dXJuIG5ldyBIb3VyKGhvdXIsIGRhdGUsIHRpbWUpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==