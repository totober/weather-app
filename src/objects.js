import {getCurrentData} from "./index"
import {CurrentWeather, Day, Hour, Location} from "./class"

export {test, getLocation, getCurrentWeather, getForecastData, getHistoryData}

let test = {
    history: "last 7 days",
    forecast: "up to 3 days "
}

function getForecastData(obj) {

    let forecastArr = obj.forecast.forecastday;

    let [todayArr, tomorrowArr, lastDayArr] = forecastArr;

    let todayDate = todayArr.date;
    let todayDay = new Day(todayArr.day);
    let todayHoursArr = getHours(todayArr);
    let todayArrParsed = [todayDate, todayDay, todayHoursArr];

    let tomorrowDate = tomorrowArr.date;
    let tomorrowDay = new Day(tomorrowArr.day);
    let tomorrowHoursArr = getHours(tomorrowArr);
    let tomorroyArrParsed = [tomorrowDate, tomorrowDay, tomorrowHoursArr];

    let lastDayDate = lastDayArr.date;
    let lastDayDay = new Day(lastDayArr.day);
    let lastDayHoursArr = getHours(lastDayArr);
    let lastDayArrParsed = [lastDayDate, lastDayDay, lastDayHoursArr];

    let forecastArrParsed = [todayArrParsed, tomorroyArrParsed, lastDayArrParsed];

    return forecastArrParsed

}

function getHistoryData(obj) {

    let historyArr = obj.forecast.forecastday
    //console.log(historyArr)

    let [yesterdayArr] = historyArr
    //console.log(yesterdayArr)

    let yesterdayDate = yesterdayArr.date 
    //console.log(yesterdayDate)

    let yesterdayHoursArr = getHours(yesterdayArr)
    //console.log(yesterdayHoursArr)

    let yesterdayDay = new Day(yesterdayArr.day)
    //console.log(yesterdayDay)


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

function getLocation(obj) {
    let location = obj.location
  
    let locationObj = new Location(location)

    return locationObj
}

function getCurrentWeather(obj){ 
    //let weather = data.current
    //console.log(weather)
    let weatherObj = new CurrentWeather(obj.current)
    //console.log(weatherObj1)
    //console.log(weatherObj)

    return weatherObj
}

function getHours(arr) {

    return arr.hour.map( hour => {
      return new Hour(hour)
    })
}

/* function getForecastHours(obj) {

    console.log(obj)
    let [today, tomorrow, lastDay] = obj.forecast.forecastday

    console.log(today)
    console.log(tomorrow)
    console.log(lastDay)

    let todayHourArr = today.hour.map( hour => {
      return new Hour(hour)
    })

    let tomorrowHourArr = tomorrow.hour.map( hour => {
        return new Hour(hour)
    })

    let lastDayHourArr = lastDay.hour.map( hour => {
        return new Hour(hour)
    })  
    
    console.log(todayHourArr)
    console.log(tomorrowHourArr)
    console.log(lastDayHourArr)

} */

