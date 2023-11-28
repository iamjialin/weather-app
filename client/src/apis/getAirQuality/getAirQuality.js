import OpenWeatherMap from "libs/OpenWeatherMap";

const getAirQuality = (lat, lon) => OpenWeatherMap
    .get("/data/2.5/air_pollution", {
        params:{
            lat: lat,
            lon: lon
        }
    })
    .then((response) => response.data)
    .then((data) => (data.list[0].components.pm2_5))
    .catch(error => console.log(error))

export default getAirQuality