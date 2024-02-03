import imgFace from "./img/confused-black-line.svg";

import { iconSelector } from "./auxiliaries"



export {setCardData, setPrincipalData, setNearData, setExtraData, setHourData, createErrorCard}

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

    img.src = iconSelector(weather);
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

    img.src = iconSelector(weatherObj);
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

    img.src = iconSelector(weatherObj);
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
    img.src = imgFace
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


