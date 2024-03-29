import imgFace from "./img/confused-black-line.svg";
import { iconSelector } from "./auxiliaries"

export {setPrincipalData, setNearData, setExtraData, setHourData, createErrorCard}

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

    img.src = iconSelector(weather);
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

    img.src = iconSelector(weatherObj);
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

    img.src = iconSelector(weatherObj);
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
    img.src = imgFace
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


