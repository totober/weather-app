import { iconSelector } from "./auxiliaries"

import cloudOneImg from "./img/cloud-ONE.svg"
import menuImg from "./img/menu-burger.svg"
import tempImg from "./img/temperature.svg"
import windImg from "./img/wind.svg"


export {currentHourCard, fullDayCard}




function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("p");
    let third = document.createElement("p");
    let fourth = document.createElement("p");
    let fifth = document.createElement("p");
    let sixth = document.createElement("p");
    let seventh = document.createElement("p");
    let eighth = document.createElement("p");

    let img = document.createElement("img")
    let sub = document.createElement("p")

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");
    fifth.classList.add("fifth");
    sixth.classList.add("sixth");
    seventh.classList.add("seventh");
    eighth.classList.add("eighth");

    img.classList.add("big-img");
    sub.classList.add("sub")

    first.appendChild(img)
    first.appendChild(sub)

    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)
    card.appendChild(fifth)
    card.appendChild(sixth)
    card.appendChild(seventh)
    card.appendChild(eighth)

    return card
}



function currentHourCard(className, weather, location){


    let card = createCard()
    card.classList.add(className)

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth, fifth, sixth, seventh, eighth] = cardArr

    first.firstElementChild.src = iconSelector(weather);
    first.firstElementChild.nextElementSibling.textContent = weather.weatherText;
    second.textContent = `${location.name}, ${location.country}`;
    third.textContent = `Temperatura: ${weather.tempC}º/ ST: ${weather.tempC_feel}º`;
    if(!weather.isCelsius){
        third.textContent = `Temperatura: ${weather.tempF}ºF/ ST: ${weather.tempF_feel}ºF`;
    }
    fourth.textContent = `Humedad: ${weather.humidity}%`
    fifth.textContent = `Nubes: ${weather.cloud}%`
    sixth.textContent = `Prob. de precipitaciones: ${weather.precipitation}%`

    console.log(card)
    return card
}

function fullDayCard(className, weather, location){

    let card = createCard()
    card.classList.add(className)

    console.log(weather)
    console.log(Array.isArray(weather))

    let [date, fullDayObj, fullHoursArr] = weather
    console.log(fullDayObj)
    
    let dateFormat = date.slice(5, 7) + "/" + date.slice(8)

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth, fifth, sixth, seventh, eighth] = cardArr

    first.firstElementChild.src = iconSelector(fullDayObj);
    first.firstElementChild.nextElementSibling.textContent = fullDayObj.weatherText;
    second.textContent = dateFormat;

    third.textContent = `${fullDayObj.maxTempC}º/${fullDayObj.minTempC}º`;
    if(!fullDayObj.isCelsius){ third.textContent = `${fullDayObj.maxTempF}º/${fullDayObj.minTempF}º`};

    fourth.textContent = `Prob. de precipitaciones: ${fullDayObj.precipChance}%`;
    if(!fullDayObj.isYesterday){ fourth.textContent = `Prob. de precipitaciones: ${fullDayObj.precipTotal}%`};
   

    return card
    
}





