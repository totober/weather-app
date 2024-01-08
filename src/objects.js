import {getCurrentData} from "./index"
import {CurrentWeather} from "./class"

export {test, getCurrentPlace, getCurrentWeather}

let test = {
    history: "last 7 days",
    forecast: "up to 3 days "
}

/* function getDate(){
    let rawDate = new Date()
     let year = rawDate.getFullYear()
     console.log(year)
     let month = rawDate.getMonth() + 1
     console.log(month)
     let day = rawDate.getDate()
     console.log(day)
     let date = year + month + day
 
     console.log(date)
     return date
 } */

 function func() {
    let forecastArr = data2.forecast.forecastday
    let historyArr = data3.forecast.forecastday
    console.log(forecastArr)
    console.log(historyArr)

    let forecastEl = forecastArr[0].day
    let historyEl = historyArr[0].day

    console.log(forecastEl)
    console.log(historyEl)
 }



function getCurrentPlace(data) {
    let location = data.location
    //console.log(location)
    let locationObj = {
        localTime: location.localtime,
        name: location.name,
        country: location.country
    }
    //console.log(locationObj) 
    return locationObj
}

function getCurrentWeather(data){ 
    let weather = data.current
    //console.log(weather)
 /*    let weatherObj1 = {
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
    } */
    let weatherObj = new CurrentWeather(weather)
    //console.log(weatherObj1)
   // console.log(weatherObj)

    return weatherObj
}