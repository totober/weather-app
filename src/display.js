import {currentHourCard, fullDayCard, setCardData} from "./dom"

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

    renderNear(forecastArr, historyArr, location)

    displayHours(forecastArr, location)

    renderExtra(forecastArr)
}


/* function displayCurrentCard(currentWeather, location) {

    let principal = document.querySelector(".principal")

    principal.appendChild(currentHourCard("principal", currentWeather, location))

}

function displayHistoryAndForecast(historyOrForecast){

    let near = document.querySelector(".near")

    near.innerHTML = ""

    near.appendChild(fullDayCard("near", historyOrForecast))
} */

function displayHours(forecastArr, location){

    /* let aside = document.querySelector("aside") */
    let slider = document.querySelector(".slider")

    slider.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr


    let hours = today[2]

   hours.forEach( hour => {
        slider.appendChild(currentHourCard("aside", hour, location))
   })
}

// A VER LA NUEVA

/* function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(currentHourCard("principal", currentWeather, location))

} */

function renderPrincipal(currentWeather, location){
    console.log("a ver como funca")
    
    let principal = document.querySelector(".principal")
    principal.innerHTML = ""

    principal.appendChild(setCardData("principal", currentWeather, location, currentWeather.date))

}



// A VER LA NUEVA


/* function renderNear(forecastArr, historyArr){
    console.log("near cheee")

    let near = document.querySelector(".near")

    near.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    near.appendChild(fullDayCard("near", yesterday))
    near.appendChild(fullDayCard("near", today))
    near.appendChild(fullDayCard("near", tomorrow))
    near.appendChild(fullDayCard("near", lastDay))
} */

function renderNear(forecastArr, historyArr, location){

    let near = document.querySelector(".near")

    near.innerHTML = ""

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    console.log("today", today)
    console.log("yesterday", yesterday)


    near.appendChild(setCardData("near", yesterday[1], location, yesterday[0]))
    near.appendChild(setCardData("near", today[1], location, today[0]))
    near.appendChild(setCardData("near", tomorrow[1], location, tomorrow[0]))
    near.appendChild(setCardData("near", lastDay[1], location, lastDay[0]))
}




function renderExtra(forecastArr){

    let [today, tomorrow, lastDay] = forecastArr

    let extra = document.querySelector(".extra")
    extra.innerHTML = "";

    extra.appendChild(fullDayCard("extra", today));

}
