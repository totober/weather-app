import {CurrentWeather, Day, Hour, Location} from "./class"

export {triggerDataStructuration}



function triggerDataStructuration (dataForecast, dataHistory){

    let weatherAndLocation = [getCurrentWeather(dataForecast), getLocation(dataForecast)]
    let forecastArr = getForecastData(dataForecast)
    let historyArr = getHistoryData(dataHistory)

    console.log(forecastArr)

    return [weatherAndLocation, forecastArr, historyArr]

}


function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;

    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

    let todayDay = new Day(rawTodayArr.day, rawTodayArr.date);
    let todayHoursArr = getHours(rawTodayArr);
    let todayObj = {day: todayDay, hours: todayHoursArr};

    let tomorrowDay = new Day(rawTomorrowArr.day, rawTomorrowArr.date);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowObj = {day: tomorrowDay, hours: tomorrowHoursArr};

    let lastDayDay = new Day(rawLastDayArr.day, rawLastDayArr.date);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayObj = {day: lastDayDay, hours: lastDayHoursArr};

    let forecastArr = [todayObj, tomorrowObj, lastDayObj];

    return forecastArr
}

function getHistoryData(obj) {

    let [rawYesterdayArr] = obj.forecast.forecastday

    let yesterdayDay = new Day(rawYesterdayArr.day, rawYesterdayArr.date )
    yesterdayDay.isHistory = true;
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayObj = {day: yesterdayDay, hours: yesterdayHoursArr}

    return yesterdayObj
}

function getLocation(obj) {

    let location = obj.location
    let locationObj = new Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 

    let weather = obj.current
    let date = obj.forecast.forecastday[0].date
    let weatherObj = new CurrentWeather(weather, date)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( (hour) => {
        let date = hour.time.slice(0, 10)
        let time = hour.time.slice(11)
      return new Hour(hour, date, time)
    })
}
