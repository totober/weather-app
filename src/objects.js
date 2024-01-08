import {getCurrentData} from "./index"
import {CurrentWeather, Hour} from "./class"

export {test, getCurrentPlace, getCurrentWeather, getHours}

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

function getCurrentWeather(obj){ 
    //let weather = data.current
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
    let weatherObj = new CurrentWeather(obj.current)
    //console.log(weatherObj1)
   console.log(weatherObj)

    return weatherObj
}

function getHours(obj) {

    let forecastArr = obj.forecast.forecastday
    //let historyArr = obj.forecast.forecastday
    console.log(forecastArr)
    //console.log(historyArr)
    console.log("laman")

    let [today, tomorrow, last] = forecastArr

    //console.log(today)
    //console.log(tomorrow)
    //console.log(last)

    let hourArr = today.hour.map( hour => {
      return new Hour(hour)
    })

    console.log("hourArr:", hourArr[5])
    console.log("today:", today.hour[5])

    
    //let hourObj = new Hour()
}