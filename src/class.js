export {CurrentWeather, Hour}

class CurrentWeather {
    constructor(obj){
        this.weatherText = obj.condition.text,
        this.weatherIcon = obj.condition.icon, 
        this.cloud = obj.cloud,
        this.tempC = obj.temp_c,
        this.tempF = obj.temp_f,
        this.tempC_feel = obj.feelslike_c,
        this.tempF_feel = obj.feelslike_f,
        this.humidity = obj.humidity,
        this.wind = obj.wind_kph,
        this.precipitation = obj.precip_mm,
        this.isDay = obj.is_day
    }
}

class Hour extends CurrentWeather {
    constructor(obj){
        super(obj)
        this.snow = obj.snow_cm
        this.snowChance = obj.chance_of_snow
    }
}