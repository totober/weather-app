import img from "../src/img/moon.jpg";
import {test, getCurrentWeather, getLocation, getForecastHours, getForecastData, getHistoryData} from "./objects";
import {compareObjects} from "./auxiliaries";

export {getData}


let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getData(){

    /// ONE BY ONE ///

    /* let response = await fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Buenos-Aires")
    let data = await response.json()
    console.log(data)

    let response2 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3")
    let data2 = await response2.json()
    console.log(data2)
 
    let response3 = await fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    let data3 = await response3.json()
    console.log(data3)  */

    /// WITH PROMISE.ALL() ///

try{
    let [response, response2, response3] = await Promise.all([
        fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Buenos-Aires"),
        fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3"),
        fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    ])

    let [data, data2, data3] = await Promise.all([
        response.json(),
        response2.json(),
        response3.json()
    ])

    /// FUNCTION TO COMPARE OBJECTS RETRIEVED ///
    //compareObjects(data, data2, data3)


    let forecastArr = getForecastData(data2)
    let historyArr = getHistoryData(data3)

    getStructuredForecast(forecastArr)
    getStructuredHistory(historyArr)

} catch(err){
        console.log(err)
    }  
} 

function getStructuredForecast (arr){

    let [a,b,c] = arr
        console.log(a)
        console.log(b)
        console.log(c)

} 

async function getStructuredHistory(arr) {
    let y = arr
    console.log(y)
}

getData()

