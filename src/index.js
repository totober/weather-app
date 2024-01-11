
import {test, getCurrentWeather, getLocation, getForecastHours, getForecastData, getHistoryData} from "./objects";
import {compareObjects} from "./auxiliaries";
import {currentHourCard, fullDayCard} from "./dom";

export {getData}

let principal = document.querySelector(".principal")
let near = document.querySelector(".near")

let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getData(){

try{
    let [response, response2] = await Promise.all([
        fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3"),
        fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    ])

    let [dataForecast, dataHistory] = await Promise.all([
        response.json(),
        response2.json()
    ])

    /// FUNCTION TO COMPARE OBJECTS RETRIEVED ///
    //compareObjects(data, data2, data3)

    console.log(dataForecast)
    console.log(dataHistory)

    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    getStructuredForecast(forecastArr)
    getStructuredHistory(historyArr)
    getWeatherAndLocation(weatherAndLocation)


} catch(err){
        console.log(err)
    }  
} 

function getStructuredForecast (arr){

    let [today, tomorrow, lastDay] = arr
        console.log(today)
        console.log(tomorrow)
        console.log(lastDay)
    
    near.appendChild(fullDayCard("near", today))
   // near.appendChild(fullDayCard("near", tomorrow))

} 

function getStructuredHistory(arr) {
    let y = arr
    console.log(y)
    //near.appendChild(fullDayCard("near", y))
}

function getWeatherAndLocation(arr){
    let [currentWeather, location] = arr
    console.log(currentWeather)
    console.log(location)

    principal.appendChild(currentHourCard("principal", currentWeather, location)) 
}


getData()

