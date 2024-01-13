import { iconSelector } from "./auxiliaries"

import cloudOneImg from "./img/cloud-ONE.svg"
import menuImg from "./img/menu-burger.svg"
import tempImg from "./img/temperature.svg"
import windImg from "./img/wind.svg"


export {currentHourCard, fullDayCard}


function createElement(element, className) {

    let el = document.createElement(element)
    el.classList.add(className)
    return el
}

function createCard(){

    let card = createElement("article", "card")
    
    //let first = createElement("div", "first")
    let place = createElement("p", "place")
    let temp = createElement("p", "temp")
    let tempFeel = createElement("p", "tempFeel")
    let cloud = createElement("p", "cloud")
    let precip = createElement("p", "precip")
    let humidity = createElement("p", "humidity")
    let time = createElement("p", "time")

    let img = createElement("img", "big-img")
    let sub = createElement("p", "sub")


    /* first.appendChild(img)
    first.appendChild(sub) */

   let cardArr = [img, sub, place, temp, tempFeel, cloud, precip, time, humidity]

   cardArr.forEach(element => {card.appendChild(element)})

    //cardArr = Array.from(card.children)
    /* cardArr.forEach(element => {
        element.style.display = "none"
    }) */
    

    return {card, cardArr}
}



function currentHourCard(className, weather, location){

    let {card, cardArr} = createCard()
    card.classList.add(className)


    /* let [first, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr */
    let [img, sub, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr

   /*  first.firstElementChild.src = iconSelector(weather);
    first.firstElementChild.nextElementSibling.textContent = weather.weatherText; */
    img.src = iconSelector(weather);
    sub.textContent = weather.weatherText;

    tempFeel.textContent = `ST: ${weather.tempC_feel}º`
    if(!weather.isCelsius){
        temp.textContent = `${weather.tempF}º`;
        tempFeel.textContent = `ST: ${weather.tempF_feel}º`};

    time.textContent = `0${weather.time}:00`;
    if(weather.time >= 10) {time.textContent = `${weather.time}:00`};

    temp.textContent = `${weather.tempC}º`;
    place.textContent = `${location.name}, ${location.country}`; 
    cloud.textContent = `Nubes: ${weather.cloud}%`;
    precip.textContent = `precip: ${weather.precipitation}%`;
    humidity.textContent = `Humedad: ${weather.humidity}%`;

    return card
}

function fullDayCard(className, weather, location){

    let {card, cardArr} = createCard()
    card.classList.add(className)

    let [date, fullDayObj, fullHoursArr] = weather
    console.log(fullDayObj)
    
    let dateFormat = `${date.slice(8)}/${date.slice(5, 7)}`;

    /* let [first, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr */
    let [img, sub, place, temp, tempFeel, cloud, precip, time, humidity] = cardArr

    /* first.firstElementChild.src = iconSelector(fullDayObj);
    first.firstElementChild.nextElementSibling.textContent = fullDayObj.weatherText; */
    img.src = iconSelector(fullDayObj);
    sub.textContent = fullDayObj.weatherText;
    time.textContent = dateFormat;

    temp.textContent = `${Number.parseInt(fullDayObj.maxTempC)}º/${Number.parseInt(fullDayObj.minTempC)}º`;
    if(!fullDayObj.isCelsius){ 
        temp.textContent = `${Number.parseInt(fullDayObj.maxTempF)}º/${Number.parseInt(fullDayObj.minTempF)}º`};

    precip.textContent = `precip. ${Number.parseInt(fullDayObj.precipChance)}%`;
    if(fullDayObj.isYesterday){ precip.textContent = `precip. ${Number.parseInt(fullDayObj.precipTotal)}mm`};

    return card
    
}





