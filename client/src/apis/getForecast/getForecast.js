import OpenWeatherMap from "libs/OpenWeatherMap";
import format from 'date-fns/format';

const getForecast = (lat, lon) => OpenWeatherMap
    .get("/data/2.5/forecast", {
        params: {
            lat: lat,
            lon: lon,
            cnt: 40,
            units: "metric",
        }
    })
    .then((response) => response.data)
    .then((data) => data.list.slice(8)
                            .map((item) => ({
                                dayOfWeek: format(item.dt * 1000, "eeee"), 
                                date: format(item.dt * 1000, "d MMMM"),
                                temperatureRange: {
                                    low: parseInt(item.main.temp_min),
                                    high: parseInt(item.main.temp_max)
                                },
                                weather: item.weather[0].main,
                            })))
    .catch((error)=>(console.log(error)));

export default getForecast;