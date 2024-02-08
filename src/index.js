import {triggerDataStructuration} from "./objects";
import {compareObjects, getPreviousDay} from "./auxiliaries";
import {triggerDataDisplay, renderError} from "./display";
import {setTemp, setTheme} from "./interactivity"

export {getData, retrieveData, initializeApp}

/// APP AUTOMATIC INITIALIZATION ///

function initializeApp() {
    
    let place = JSON.parse(localStorage.getItem("location"))

   try{

    getData(place.name)
    setTheme(localStorage.getItem("theme"))
    setTemp(localStorage.getItem("temp"))
   } 
   catch(err){

    getData("argentina")
    setTheme("theme-dark")
    setTemp("celsius")
   }
}

/// GET DATA FROM WEATHER API ///

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

   dataHandler(dataForecast, dataHistory)

} catch(err){

       renderError()
    }  
} 

/// HANDLE THE DATA: STRUCTURE THE DATA, STORE THE DATA AND DISPLAY THE DATA ///

async function dataHandler(dataForecast, dataHistory){

    let [location, forecastArr, historyArr] = triggerDataStructuration(dataForecast, dataHistory)

    storeData(location, forecastArr, historyArr)

    triggerDataDisplay(location, forecastArr, historyArr)
}

/// STORE THE DATA ///

function storeData(location, forecastArr, historyArr) {

    localStorage.setItem("location", JSON.stringify(location))
    localStorage.setItem("forecastArr", JSON.stringify(forecastArr))
    localStorage.setItem("historyArr", JSON.stringify(historyArr))

}

/// RETRIEVE THE DATA ///

function retrieveData(){

    let location = JSON.parse(localStorage.getItem("location"))
    let forecastArr = JSON.parse(localStorage.getItem("forecastArr"))
    let historyArr = JSON.parse(localStorage.getItem("historyArr"))

    return {location, forecastArr, historyArr}
}









/// EXAMPLE OF THE URL USED FOR THE API AND THE DIFFERENT PARTS ///

/* let example = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"
let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris" */
