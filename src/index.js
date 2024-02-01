import {triggerDataStructuration} from "./objects";
import {compareObjects, getPreviousDay} from "./auxiliaries";
import {triggerDataDisplay} from "./display";


let input = document.querySelector("input")
let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")
let tempOpt = document.querySelector(".tempOpt")

input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
window.addEventListener("click", closeMenu)
window.addEventListener("load", init)


function showMenu(e) {
    btnMenu.nextElementSibling.classList.toggle("show-menu")
}


function closeMenu(e) {

    if(!nav.contains(e.target)){
        btnMenu.nextElementSibling.classList.remove("show-menu")
    }
}


function nearCardsEvent() {

    let cardDay = this.className

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    
    getData(placeVal, cardDay)
}


function init() {
    getData("buenos aires")
    //mainFunction("buenos aires")

    let near = document.querySelector(".near")
    let nearArr = Array.from(near.children)
    nearArr.forEach(element => element.addEventListener("click", nearCardsEvent))
}


function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = input.value 

    getData(inputVal)

    //mainFunction(inputVal) 
}



async function getData(inputVal, day = "today"){

console.log(day)

try{
    let [response, response2] = await Promise.all([
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=${inputVal}&days=3`),
        fetch(`http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=${inputVal}&dt=${getPreviousDay()}`)
    ])

    if(!response.ok || !response2.ok){
        throw new Error("bad request")
    }

    let [dataForecast, dataHistory] = await Promise.all([
        response.json(),
        response2.json()
    ])

    /// FUNCTION TO COMPARE OBJECTS RETRIEVED ///
    //compareObjects(data, data2, data3)

    console.log(dataForecast)
    console.log(dataHistory)

 /*    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory) */

    ///ACAAAAAA///
    //let [weatherAndLocation, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory) 

 
     //triggerDataDisplay(weatherAndLocation, forecastArr, historyArr) 

   //return [dataForecast, dataHistory]
   dataHandler(dataForecast, dataHistory, day)

} catch(err){
    console.log(err)

    }  
} 

let body = document.body
console.log(body)

function changeTemp() {

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
    } else { 
        this.textContent = "to Farenheit"
    }

    getData(placeVal, attr)

}



/* async function mainFunction (inputVal) {

    try{
        let [dataForecast, dataHistory] = await getData(inputVal)

        console.log("ave", dataForecast)
        console.log("ave", dataHistory)


       let [weatherAndLocation, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory)



        triggerDataDisplay(weatherAndLocation, forecastArr, historyArr)

     }
    catch(err) {
        console.log(err)
    }
   

} */


async function dataHandler(dataForecast, dataHistory, day){

    let [location, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory)

    triggerDataDisplay(location, forecastArr, historyArr, day)
}













let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"