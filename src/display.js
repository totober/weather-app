import {setCardData, setPrincipalData, setNearData, setExtraData, setHourData, createErrorCard} from "./dom"

export {triggerDataDisplay, renderError}

/// DATA DISPLAY HANDLER ///

function triggerDataDisplay(location, forecastArr, historyArr, day = "today"){

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    handleErrorClass(false)

   let chosenDay;
   let attributeVal;

   switch(true) {
        case day === "today":
            chosenDay = today
            attributeVal = "today"
            break;
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

    renderPrincipal(chosenDay, location, attributeVal)
    renderHours(chosenDay)
    renderExtra(chosenDay)
    // THIS RENDER ALWAYS THE SAME WAY //
    renderNear(forecastArr, historyArr)
}

/// RENDER THE HOURS OF THE DAY ///

function renderHours(forecast){

    let sliderContainer = document.querySelector(".slider")

    sliderContainer.firstElementChild.innerHTML = ""
    sliderContainer.lastElementChild.innerHTML = ""

    let hours = forecast.hours

    hours.forEach( (hour, i) => {
        if(i < 12){

            sliderContainer.firstElementChild.appendChild(setHourData("card-aside", hour))
        } else if(i >= 12){
 
            sliderContainer.lastElementChild.appendChild(setHourData("card-aside", hour)) 
        }    
   })
}


/// RENDER PRINCIPAL DATA OF THE DAY ///

function renderPrincipal(weatherObj, location, attributeVal){
    
    let principalContainer = document.querySelector(".principal")
    principalContainer.innerHTML = ""

    principalContainer.appendChild(setPrincipalData("card-principal", weatherObj, location, attributeVal))
}

/// RENDER EXTRA DATA OF THE DAY ///

function renderExtra(forecast){

    let extraData = forecast.day

    let extraContainer = document.querySelector(".extra")
    extraContainer.innerHTML = "";

    extraContainer.appendChild(setExtraData("card-extra", extraData));
}

/// RENDER ALL DAYS: YESTERDAY, TODAY, TOMORROW, LASTDAY ///

function renderNear(forecastArr, historyArr){

    let nearContainer = document.querySelector(".near")
    let nearArr = Array.from(nearContainer.children)

    nearArr.forEach(element => element.innerHTML = "")

    let [today, tomorrow, lastDay] = forecastArr
    let yesterday = historyArr

    nearArr[0].appendChild(setNearData("card-near", yesterday.day))
    nearArr[1].appendChild(setNearData("card-near", today.day))
    nearArr[2].appendChild(setNearData("card-near", tomorrow.day))
    nearArr[3].appendChild(setNearData("card-near", lastDay.day))
}

/// RENDER ERROR ///

function renderError(){
   
    handleErrorClass(true)

    let principal = document.querySelector(".principal")
    principal.innerHTML = ""
    principal.appendChild(createErrorCard())
}

/// HANDLE THE ERROR CLASSES FOR DISPLAY THE CORRECT DATA ///

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
