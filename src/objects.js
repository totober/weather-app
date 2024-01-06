import {getCurrentData} from "./index"

export {test, getCurrentPlace, getCurrentWeather}

let test = {
    name: "what im even doing"
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
    //console.log(weatherObj)

    return weatherObj
}