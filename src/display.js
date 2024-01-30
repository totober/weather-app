import { getData } from "."
import {currentHourCard, fullDayCard, setCardData} from "./dom"

export {triggerDataDisplay}


function triggerDataDisplay(weatherAndLocation, forecastArr, historyArr, day = "today"){

    let [currentWeather, location] = weatherAndLocation
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    renderPrincipal(currentWeather, location)

    renderNear(forecastArr, historyArr, location)

    displayHours(/* forecastArr */today, location)

    renderExtra(/* forecastArr */today, location)


   let chosenDay = ""

   switch(true) {
        case day === "yesterday":
            chosenDay = yesterday
            break;
        case day === "tomorrow":
            chosenDay = tomorrow
            break;
        case day === "lastDay":
            chosenDay = lastDay
            break;
   }

   if(day !== "today") {
        renderPrincipal(chosenDay.day, location)
        displayHours(chosenDay, location)
        renderExtra(chosenDay, location)
    }
}

function displayHours(/* forecastArr */forecast, location){

    let slider = document.querySelector(".slider")

    slider.firstElementChild.innerHTML = ""
    slider.lastElementChild.innerHTML = ""

   // let [today, tomorrow, lastDay] = forecastArr

    let hours = forecast.hours

   hours.forEach( (hour, i) => {
        if(i < 12){
            slider.firstElementChild.appendChild(setCardData("card-aside", hour, location))
        } else if(i >= 12){

            slider.lastElementChild.appendChild(setCardData("card-aside", hour, location))  
        }
       
   })
}

function renderPrincipal(weather, location){
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(setCardData("card-principal", weather, location))

}

function renderNear(forecastArr, historyArr, location){

    let near = document.querySelector(".near")
    let nearArr = Array.from(near.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr


    nearArr[0].appendChild(setCardData("card-near", yesterday.day, location))
    nearArr[1].appendChild(setCardData("card-near", today.day, location))
    nearArr[2].appendChild(setCardData("card-near", tomorrow.day, location))
    nearArr[3].appendChild(setCardData("card-near", lastDay.day, location))
}




function renderExtra(/* forecastArr */ forecast, location){

    //let [today, tomorrow, lastDay] = forecastArr

    let extraData = forecast.day

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild(setCardData("card-extra", /* today.day */extraData, location));

}
