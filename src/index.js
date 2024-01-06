import img from "../src/img/moon.jpg";
import {test, getCurrentWeather, getCurrentPlace} from "./objects"

export {getCurrentData}

console.log(test)
console.log(img)

let sqr = document.querySelector("div")

sqr.textContent = "no la habias creado salamin!!!"

let ex = "https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london"

let pass = "?key=6401a6548a224689902171841233012"
let url = "http://api.weatherapi.com/v1"
let current = "/current.json"
let place = "q=Paris"

async function getCurrentData(){
    let response = await fetch("http://api.weatherapi.com/v1/current.json?key=6401a6548a224689902171841233012&q=Paris")
    let data = await response.json()
    /* console.log(data)
    console.log(data.current)
    console.log(data.location) */
    try{
        let locationObj = getCurrentPlace(data)
        let weatherObj = getCurrentWeather(data)
        console.log(locationObj)
        console.log(weatherObj)


    return {locationObj, weatherObj}

    } catch(err){
        console.log(err)
    }
    

   
   
} 

getCurrentData()

let {locationObj, weatherObj} = await getCurrentData()
console.log(weatherObj)
console.log(locationObj)



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
