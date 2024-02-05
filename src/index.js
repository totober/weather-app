import {triggerDataStructuration} from "./objects";
import {compareObjects, getPreviousDay} from "./auxiliaries";
import {triggerDataDisplay, renderError} from "./display";

import imgFace from "./img/confused-black-line.svg";
import imgFace2 from "./img/confused-white-line.svg";


let input = document.querySelector("input")
let nav = document.querySelector("nav")
let btnMenu = document.querySelector(".menu")
let tempOpt = document.querySelector("ul :nth-child(2)")
let theme = document.querySelector(".theme")
let near = document.querySelector(".near")
let nearArr = Array.from(near.children)
let dialog = document.querySelector("dialog")


input.addEventListener("keydown", getInputValue)
btnMenu.addEventListener("click", showMenu)
tempOpt.addEventListener("click", changeTemp)
theme.addEventListener("click", changeTheme)
nearArr.forEach(element => element.addEventListener("click", nearCardsEvent))
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

    let {location, forecastArr, historyArr} = retrieveData()

    triggerDataDisplay(location, forecastArr, historyArr, cardDay)
}


function init() {
    
    
    let place = JSON.parse(localStorage.getItem("location"))

   try{
    getData(place.name)
   } 
   catch(err){
    console.log(err)
    getData("argentina")
   }
    //getData("buenos aires")
    //mainFunction("buenos aires")


    setTheme(localStorage.getItem("theme"))
    setTemp(localStorage.getItem("temp"))
    

}


function getInputValue(e){

    if(e.key !== "Enter") {return}

    let inputVal = input.value 

    getData(inputVal)

}



async function getData(inputVal){

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
   dataHandler(dataForecast, dataHistory)

} catch(err){
    console.log(err)
    
       // showDialog()
       renderError()
    }  
} 


function showDialog(){
    dialog.showModal()

    let img = dialog.firstElementChild
    img.src = imgFace 
}



/* function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    this.classList.toggle("fara")

    if(this.classList.contains("fara")){
        this.textContent = "to Celsius"
        localStorage.setItem("temp", "fara")
    } else { 
        this.textContent = "to Fahrenheit"
        localStorage.setItem("temp", "celsius")
    }

   let {location, forecastArr, historyArr} = retrieveData()

   triggerDataDisplay(location, forecastArr, historyArr, attr)
} */



function changeTemp() {

    let date = document.querySelector(".date")
    let attr = date.getAttribute("data-day")

    if(localStorage.getItem("temp") === "fara"){
        this.textContent = "to Fahrenheit"
        setTemp("celsius")
    } else { 
        this.textContent = "to Celsius"
        setTemp("fara")
    }

   let {location, forecastArr, historyArr} = retrieveData()

   triggerDataDisplay(location, forecastArr, historyArr, attr)
}

function setTemp(temperature) {

    let tempOpt = document.querySelector("ul :nth-child(2)")

    localStorage.setItem("temp", temperature)
    tempOpt.className = temperature
}


/* function changeTheme(){

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
} */

function changeTheme(){

    if(localStorage.getItem("theme") === "theme-dark"){
        setTheme("theme-light")
        this.textContent = "to dark theme"
       
    } else{
        setTheme("theme-dark")
        this.textContent = "to light theme"
    }
}

function setTheme(theme){
    
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
}



async function dataHandler(dataForecast, dataHistory, day){

    let [location, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)

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

    return {location, forecastArr, historyArr}
}











let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"
let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"
