import OpenWeatherMap from "libs/OpenWeatherMap";
import format from 'date-fns/format';

const getCurrentWeather = (lat, lon) => OpenWeatherMap
    .get("/data/2.5/weather", {
        params: {
            lat: lat,
            lon: lon,
            units: "metric",
        }
    })
    .then((response) => response.data)
    .then((data) => ({
        date: format(data.dt * 1000, "d MMMM"), 
        dayOfWeek: format(data.dt * 1000, "eeee"), 
        weather: data.weather[0].main,
        time: format(data.dt * 1000, "pp"),
        temperature: parseInt(data.main.temp),
        temperatureRange: {
          high: parseInt(data.main.temp_max),
          low: parseInt(data.main.temp_min)
        },
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        somatosensory: data.main.feels_like,
    }))

export default getCurrentWeather;