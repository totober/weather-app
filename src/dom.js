import sunImg from "./img/sun.svg"
import moonImg from "./img/moon.svg"
import cloudyImg from "./img/cloudy.svg"
import cloudyDayImg from "./img/cloudyDay.svg"
import cloudyNightImg from "./img/cloudyNight.svg"
import thunderImg from "./img/thunder.svg"
import fogImg from "./img/fog.svg"
import rainImg from "./img/rain.svg"
import rainDayImg from "./img/rainDay.svg"
import rainNightImg from "./img/rainNight.svg"
import sleetImg from "./img/sleet.svg"
import snowImg from "./img/snow.svg"

import cloudOneImg from "./img/cloud-ONE.svg"
import menuImg from "./img/menu-burger.svg"
import tempImg from "./img/temperature.svg"
import windImg from "./img/wind.svg"


export {createPrincipal, iconSelector}




function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("div");
    let third = document.createElement("div");
    let fourth = document.createElement("div");
    let img = document.createElement("img")

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");
    img.classList.add("big-img");

    first.appendChild(img)
    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)

    return card
}



function createPrincipal(current, location){

    iconSelector(current)

    let card = createCard()
    card.classList.add("principal")

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth] = cardArr

    first.firstElementChild.src = sunImg;
    second.textContent = `${location.name}, ${location.country}`;
    third.textContent = `Temperatura: ${current.tempC}º/ ST: ${current.tempC_feel}º`;
    fourth.textContent = `Humedad: ${current.humidity}%`

    console.log(card)
    return card
}


/*function iconSelector(){


 let iconArr = []
iconsJson.forEach(obj => {
    for (let [key, value] of Object.entries(obj)) {
        if(key === "day"){
            iconArr.push([key, value])
        } else if (key === "night"){
            iconArr.push([key, value])
        }
    }
})

console.log(iconArr) */


function iconSelector(obj){

    let weather = obj.weatherText
    let isDay = obj.isDay

   /*  commonArr.forEach(arr => {
        arr.forEach((string, i, array) => {
            if(weather === string){
                console.log(array[array.length -1])
                return array[array.length -1]
            }
        })
    }) */

    commonArr.forEach(arr => {
        arr.forEach((string, i, array) => {
            if(weather === string){
                console.log(array[array.length -1])
                return array[array.length -1]
            }
        })
    })


    if(!isDay) {
        nightArr.forEach(arr => {
            arr.forEach((string, i, array) => {
                if(weather === string) {
                    console.log(array[array.length -1])
                    return array[array.length - 1]
                }
            })
        })
    }

    if(isDay) {
        dayArr.forEach(arr => {
            arr.forEach((string, i, array) => {
                if(weather === string) {
                    console.log(array[array.length -1])
                    return array[array.length - 1]
                }
            })
        })
    }



}




let snow = ["Patchy snow possible", "Blowing snow", "Blizzard", "Patchy light snow", "Light snow", 
            "Patchy moderate snow", "Moderate snow", "Patchy heavy snow", "Heavy snow", "Light snow showers",
            "Moderate or heavy snow showers", snowImg];

let sleet = ["Patchy sleet possible", "Patchy freezing drizzle possible", "Patchy light drizzle", "Light drizzle",
            "Freezing drizzle", "Heavy freezing drizzle", "Light freezing rain", "Moderate or heavy freezing rain",
            "Light sleet", "Moderate or heavy sleet", "Ice pellets", "Light sleet showers",
            "Moderate or heavy sleet showers", "Light showers of ice pellets", 
            "Moderate or heavy showers of ice pellets", sleetImg];


let fog = ["Mist", "Fog", "Freezing fog", fogImg];

let thunder = ["Thundery outbreaks possible", "Patchy light rain with thunder", "Moderate or heavy rain with thunder",
                "Patchy light snow with thunder", "Moderate or heavy snow with thunder", thunderImg];

let rain = ["Light rain", "Moderate rain", "Heavy rain", "Moderate or heavy rain shower", "Torrential rain shower",
            rainImg];

let cloudy = ["Cloudy", "Overcast", cloudyImg];

let sun = ["Sunny", sunImg];

let moon = ["Clear", moonImg];

let rainDay = ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", rainDayImg];

let rainNight = ["Patchy rain possible", "Patchy light rain", "Moderate rain at times", "Heavy rain at times", 
                "Light rain shower", rainNightImg];

let cloudyDay = ["Partly cloudy", cloudyDayImg];

let cloudyNight = ["Partly cloudy", cloudyNightImg];

let commonArr = [fog, thunder, rain, cloudy]

let dayArr = [sun, rainDay, cloudyDay]

let nightArr = [moon, rainNight, cloudyNight]