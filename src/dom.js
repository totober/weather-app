import { iconSelector } from "./auxiliaries"

import cloudOneImg from "./img/cloud-ONE.svg"
import menuImg from "./img/menu-burger.svg"
import tempImg from "./img/temperature.svg"
import windImg from "./img/wind.svg"


export {createPrincipal, iconSelector}




function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("p");
    let third = document.createElement("p");
    let fourth = document.createElement("p");
    let fifth = document.createElement("p");
    let img = document.createElement("img")
    let sub = document.createElement("p")

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");
    fifth.classList.add("fifth");

    img.classList.add("big-img");
    sub.classList.add("sub")

    first.appendChild(img)
    first.appendChild(sub)

    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)
    card.appendChild(fifth)

    return card
}



function createPrincipal(current, location){


    let card = createCard()
    card.classList.add("principal")

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth] = cardArr

    first.firstElementChild.src = iconSelector(current);
    first.firstElementChild.nextElementSibling.textContent = current.weatherText;
    second.textContent = `${location.name}, ${location.country}`;
    third.textContent = `Temperatura: ${current.tempC}º/ ST: ${current.tempC_feel}º`;
    fourth.textContent = `Humedad: ${current.humidity}%`

    console.log(card)
    return card
}


