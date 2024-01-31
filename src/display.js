import {setCardData} from "./dom"

export {triggerDataDisplay}


function triggerDataDisplay(/* weatherAndLocation */ location, forecastArr, historyArr, day){

    /* let [currentWeather, location] = weatherAndLocation */
    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    // today and current are the default values //
    renderPrincipal(/* currentWeather */ today.current, location)
    renderNear(forecastArr, historyArr, location)
    renderHours(today, location)
    renderExtra(today, location)

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
        renderHours(chosenDay, location)
        renderExtra(chosenDay, location)
    }
}



function renderHours(forecast, location){

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){
            sliderContainer.firstElementChild.appendChild(setCardData("card-aside", hour, location))
        } else if(i >= 12){

            sliderContainer.lastElementChild.appendChild(setCardData("card-aside", hour, location))  
        }    
   })
}



function renderPrincipal(weather, location){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    principalContainer.appendChild(setCardData("card-principal", weather, location))
}



function renderNear(forecastArr, historyArr, location){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr


    nearArr[0].appendChild(setCardData("card-near", yesterday.day, location))
    nearArr[1].appendChild(setCardData("card-near", today.day, location))
    nearArr[2].appendChild(setCardData("card-near", tomorrow.day, location))
    nearArr[3].appendChild(setCardData("card-near", lastDay.day, location))
}


function renderExtra(forecast, location){

/*     if (forecast.hasOwnProperty("current")) {
        console.log("wenas")
        extraContainer.appendChild(setCardData("card-extra", extraData, location));
    } */

    let extraData = forecast.day
    console.log(forecast)
    console.log(extraData)

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    extraContainer.appendChild(setCardData("card-extra", extraData, location));
}
