import {getData} from "./index"
import {CurrentWeather, Day, Hour, Location} from "./class"

export {test, getLocation, getCurrentWeather, getForecastData, getHistoryData}

let test = {
    history: "last 7 days",
    forecast: "up to 3 days "
}

function getForecastData(obj) {

    let rawForecastArr = obj.forecast.forecastday;

    let [rawTodayArr, rawTomorrowArr, rawLastDayArr] = rawForecastArr;

    let todayDate = rawTodayArr.date;
    let todayDay = new Day(rawTodayArr.day);
    let todayHoursArr = getHours(rawTodayArr);
    let todayArr = [todayDate, todayDay, todayHoursArr];

    let tomorrowDate = rawTomorrowArr.date;
    let tomorrowDay = new Day(rawTomorrowArr.day);
    let tomorrowHoursArr = getHours(rawTomorrowArr);
    let tomorrowArr = [tomorrowDate, tomorrowDay, tomorrowHoursArr];

    let lastDayDate = rawLastDayArr.date;
    let lastDayDay = new Day(rawLastDayArr.day);
    let lastDayHoursArr = getHours(rawLastDayArr);
    let lastDayArr = [lastDayDate, lastDayDay, lastDayHoursArr];

    let forecastArr = [todayArr, tomorrowArr, lastDayArr];

    return forecastArr
}

function getHistoryData(obj) {

    let rawHistoryArr = obj.forecast.forecastday

    let [rawYesterdayArr] = rawHistoryArr

    let yesterdayDate = rawYesterdayArr.date 
    let yesterdayDay = new Day(rawYesterdayArr.day)
    let yesterdayHoursArr = getHours(rawYesterdayArr)

    let yesterdayArr = [yesterdayDate, yesterdayDay, yesterdayHoursArr]
    console.log(yesterdayArr)

    return yesterdayArr
}

function getLocation(obj) {

    let location = obj.location
    let locationObj = new Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 

    let weather = obj.current
    let weatherObj = new CurrentWeather(weather)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( hour => {
      return new Hour(hour)
    })
}
