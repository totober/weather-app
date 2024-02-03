import {setCardData, setPrincipalData, setNearData, setExtraData, setHourData, createErrorCard} from "./dom"

export {triggerDataDisplay, renderError}


function triggerDataDisplay(location, forecastArr, historyArr, day = "today"){


    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    handleErrorClass(false)

    // this renders always the same way //
    renderNear(forecastArr, historyArr, location)
    // today and current are the default values //
    renderPrincipal(/* currentWeather */ today, location, "today")
    renderHours(today, location)
    renderExtra(today, location)

   let chosenDay = ""
   let attributeVal = ""

   switch(true) {
        case day === "yesterday":
            chosenDay = yesterday
            attributeVal = "yesterday"
            break;
        case day === "tomorrow":
            chosenDay = tomorrow
            attributeVal = "tomorrow"
            break;
        case day === "lastDay":
            chosenDay = lastDay
            attributeVal = "lastDay"
            break;
   }

   if(day !== "today") {
        renderPrincipal(chosenDay.day, location, attributeVal)
        renderHours(chosenDay, location)
        renderExtra(chosenDay, location)
    }
}



function renderHours(forecast, location){
    
    let aside = document.querySelector("aside")

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){
            /* sliderContainer.firstElementChild.appendChild(setCardData("card-aside", hour, location)) */
            sliderContainer.firstElementChild.appendChild(setHourData("card-aside", hour, location))
        } else if(i >= 12){

            /* sliderContainer.lastElementChild.appendChild(setCardData("card-aside", hour, location))  */ 
            sliderContainer.lastElementChild.appendChild(setHourData("card-aside", hour, location)) 
        }    
   })
}



function renderPrincipal(weather, location, attributeVal){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    //principalContainer.appendChild(setCardData("card-principal", weather, location))
    principalContainer.appendChild(setPrincipalData("card-principal", weather, location, attributeVal))
}



function renderNear(forecastArr, historyArr, location){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr


    /* nearArr[0].appendChild(setCardData("card-near", yesterday.day, location))
    nearArr[1].appendChild(setCardData("card-near", today.day, location))
    nearArr[2].appendChild(setCardData("card-near", tomorrow.day, location))
    nearArr[3].appendChild(setCardData("card-near", lastDay.day, location)) */

    nearArr[0].appendChild(setNearData("card-near", yesterday.day, location, "data-day-yesterday"))
    nearArr[1].appendChild(setNearData("card-near", today.day, location, "data-day-today"))
    nearArr[2].appendChild(setNearData("card-near", tomorrow.day, location, "data-day-tomorrow"))
    nearArr[3].appendChild(setNearData("card-near", lastDay.day, location, "data-day-lastDay"))
}


function renderExtra(forecast, location){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    /* extraContainer.appendChild(setCardData("card-extra", extraData, location)); */
    extraContainer.appendChild(setExtraData("card-extra", extraData, location));
}

function renderError(){

    let body = document.body
   
    handleErrorClass(true)

    let principal = document.querySelector(".principal")
    principal.innerHTML = ""
    principal.appendChild(createErrorCard())
}

function handleErrorClass(error){

    let body = document.body

    let main = document.querySelector("main")

    let mainArr = Array.from(main.children)

    let aside = document.querySelector("aside")

    let elements = [body, main, mainArr, aside].flat()

    if(error) {

        elements.forEach(el => el.classList.add("error"))
    } else {
        
        elements.forEach(el => el.classList.remove("error"))
    }
}
