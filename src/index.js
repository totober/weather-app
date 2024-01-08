import img from "../src/img/moon.jpg";
import {test, getCurrentWeather, getCurrentPlace, getHours} from "./objects"

export {getCurrentData}


let sqr = document.querySelector("div")

sqr.textContent = "no la habias creado salamin!!!"

console.log("dmx")

let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"


async function getCurrentData(){
    let response = await fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Buenos-Aires")
    let data = await response.json()
    console.log(data)

    let response2 = await fetch("http://api.weatherapi.com/v1/forecast.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&days=3")
    let data2 = await response2.json()
    console.log(data2)
 
    let response3 = await fetch("http://api.weatherapi.com/v1/history.json?key=6401a6548a224689902171841233012&q=Buenos-Aires&dt=2024-01-07")
    let data3 = await response3.json()
    console.log(data3) 
    

    function compareObjects (){
        let idem = []
        let dif = []

        // comparing current
        let currentFilter = Object.getOwnPropertyNames(data.current)
        console.log(currentFilter)
        let forecastFilter = Object.getOwnPropertyNames(data2.current)
        //console.log(forecastFilter)

        // comparing day
        let forecastArr = data2.forecast.forecastday
        let historyArr = data3.forecast.forecastday
        console.log(forecastArr)
        //console.log(historyArr)
        
        let forecastDay = forecastArr[0].day
        let historyDay = historyArr[0].day
        //console.log(forecastDay)
        //console.log(historyDay)

        let forecastDayArr = Object.getOwnPropertyNames(forecastDay)
        let historyDayArr = Object.getOwnPropertyNames(historyDay)
        //console.log(forecastDayArr)
        //console.log(historyDayArr)

        // comparing hours
        let forecastHour = forecastArr[0].hour[0]
        let historyHour = historyArr[0].hour[0]
        //console.log(forecastHour)
        //console.log(historyHour)

        let forecastHourArr = Object.getOwnPropertyNames(forecastHour)
        let historyHourArr = Object.getOwnPropertyNames(historyHour)
        //console.log(forecastHourArr)
        //console.log(historyHourArr)

        // actual comparition        
        forecastHourArr.forEach((prop) =>{
            forecastFilter.forEach((pr) =>{
                if(prop === pr ){
                    idem.push(prop)
            }})
        })

        console.log("idem:", idem)
    }

    compareObjects()

    try{
        let locationObj = getCurrentPlace(data)
        let weatherObj = getCurrentWeather(data)
        let hoursObj = getHours(data2)
        //console.log(locationObj)
        //console.log(weatherObj)


    return {locationObj, weatherObj}

    } catch(err){
        console.log(err)
    }  
} 

getCurrentData()

//let {locationObj, weatherObj} = await getCurrentData()
//console.log(weatherObj)
//console.log(locationObj)







/* async function getCurrentPlace() {
    let data = await getCurrentData()
    let location = data.location
    console.log(location)
    let locationObj = {
        localTime: location.localtime,
        name: location.name,
        country: location.country
    }
    console.log(locationObj) 
    return locationObj
}
 
async function getCurrentWeather(){
    let data = await getCurrentData()
    let weather = data.current
    console.log(weather)
    let weatherObj = {
        weatherText: weather.condition.text,
        weatherIcon: weather.condition.icon, 
        cloud: weather.cloud,
        tempC: weather.temp_c,
        tempF: weather.temp_f,
        tempC_feel: weather.feelsike_c,
        tempF_feel: weather.feelsike_f,
        humidity: weather.humidity,
        wind: weather.wind_kph,
        precipitation: weather.precip_mm
    }
    console.log(weatherObj)

    return weatherObj
} */
