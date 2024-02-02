import {triggerDataStructuration} from "./objects";
import {compareObjects, getPreviousDay} from "./auxiliaries";
import {triggerDataDisplay} from "./display";


let input = document.querySelector("input")
let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")
let tempOpt = document.querySelector(".tempOpt")
let theme = document.querySelector(".theme")

input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
theme.addEventListener("click", changeTheme)
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
    //triggerDataDisplay()
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


function changeTemp() {

    let place = document.querySelector(".place")
    let placeVal = place.textContent
    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
    } else { 
        this.textContent = "to Fahrenheit"
    }

    //getData(placeVal, attr)

   let [location, forecastArr, historyArr] = retrieveData()
   console.log("aca devolvemos la data")

   triggerDataDisplay(location, forecastArr, historyArr, attr)

   console.log("ERA GUARDAR LOS DATOS PAPAAAAAA")
 
}

function changeTheme(){

    let body = document.body

    if(body.classList.contains("theme-dark")){
        body.classList.remove("theme-dark")
        body.classList.add("theme-light")
        this.textContent = "Dark theme"
       
    } else {
        body.classList.remove("theme-light")
        body.classList.add("theme-dark")
        this.textContent = "Light theme"
    }

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

    storeData(location, forecastArr, historyArr)
    console.log("aca store data")

    triggerDataDisplay(location, forecastArr, historyArr, day)
}



function storeData(location, forecastArr, historyArr) {

    localStorage.setItem("location", JSON.stringify(location))
    localStorage.setItem("forecastArr", JSON.stringify(forecastArr))
    localStorage.setItem("historyArr", JSON.stringify(historyArr))

}

function retrieveData(){

    let location = JSON.parse(localStorage.getItem("location"))
    let forecastArr = JSON.parse(localStorage.getItem("forecastArr"))
    let historyArr = JSON.parse(localStorage.getItem("historyArr"))

    return [location, forecastArr, historyArr]
}









let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"