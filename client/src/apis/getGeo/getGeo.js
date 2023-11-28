import OpenWeatherMap from "libs/OpenWeatherMap";

const getGeo = (city) => OpenWeatherMap
    .get("/geo/1.0/direct", {
    params: {
        q: city,
        limit: 1,
        }
    })
    .then((response) => response.data[0])
    .then((data) => ({
        lat: data.lat,
        lon: data.lon,
        }))
    .catch((err) => console.log(err));

export default getGeo;