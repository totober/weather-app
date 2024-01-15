import {currentHourCard, fullDayCard} from "./dom"

export {triggerDataDisplay}

function triggerDataDisplay(weatherAndLocation, forecastArr, historyArr){

    let [currentWeather, location] = weatherAndLocation
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

   // displayCurrentCard(currentWeather, location)
    renderPrincipal(currentWeather, location)

/*     displayHistoryAndForecast(yesterday)
    displayHistoryAndForecast(today)
    displayHistoryAndForecast(tomorrow)
    displayHistoryAndForecast(lastDay) */

    renderNear(forecastArr, historyArr)

    displayHours(forecastArr, location)

    renderExtra(forecastArr)
}


function displayCurrentCard(currentWeather, location) {

    let principal = document.querySelector(".principal")

    principal.appendChild(currentHourCard("principal", currentWeather, location))

}

function displayHistoryAndForecast(historyOrForecast){

    let near = document.querySelector(".near")

    near.innerHTML = ""

    near.appendChild(fullDayCard("near", historyOrForecast))
}

function displayHours(forecastArr, location){

    let aside = document.querySelector("aside")

    aside.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr

    let hours = today[2]

    let hourstest = [hours[0], hours[1], hours[2], hours[3], hours[4], hours[5],
                    hours[6], hours[7], hours[8]]

   hourstest.forEach( hour => {
        aside.appendChild(currentHourCard("aside", hour, location))
   })
}

function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(currentHourCard("principal", currentWeather, location))

}

function renderNear(forecastArr, historyArr){
    console.log("near cheee")

    let near = document.querySelector(".near")

    near.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    near.appendChild(fullDayCard("near", yesterday))
    near.appendChild(fullDayCard("near", today))
    near.appendChild(fullDayCard("near", tomorrow))
    near.appendChild(fullDayCard("near", lastDay))
}

function renderExtra(forecastArr){

    let [today, tomorrow, lastDay] = forecastArr

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild(fullDayCard("extra", today));

}
