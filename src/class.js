export {CurrentWeather}

class CurrentWeather {
    constructor(weather){
        this.weatherText = weather.condition.text,
        this.weatherIcon = weather.condition.icon, 
        this.cloud = weather.cloud,
        this.tempC = weather.temp_c,
        this.tempF = weather.temp_f,
        this.tempC_feel = weather.feelsike_c,
        this.tempF_feel = weather.feelsike_f,
        this.humidity = weather.humidity,
        this.wind = weather.wind_kph,
        this.precipitation = weather.precip_mm,
        this.isDay = weather.is_day
    }
}

/* class Hourly extends CurrentWeather {
    constructor(weatherHourly){
        super(weatherText,)
    }
} */