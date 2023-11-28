import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/"

const API_KEY = "4d84f43c1565ac3af1b419ced8c8724a"

const OpenWeatherMap = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY,
    },
});

export default OpenWeatherMap;