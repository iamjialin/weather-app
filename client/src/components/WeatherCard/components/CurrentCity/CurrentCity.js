import Meta from "./components/Meta";
import Date from "components/Date";
import Name from "components/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "components/TemperatureRange"
import WeatherIcon from "components/WeatherIcon";
import BackgroundImage from "components/BackgroundImage";
import backgroundImage from 'assets/backgrounds/Sunny_background.png';
import getGeo from "apis/getGeo";
import getCurrentWeather from "apis/getCurrentWeather";
import { useState, useEffect } from "react";

const CurrentCity = ({currentCity, className}) => {
  const linearGradient = "linear-gradient(to bottom, #82ACFD, #3D7FF9)";
  const [data, setData] = useState({
                                    date:null, 
                                    temperatureRange: { high: null, low: null },
                                    temperature: null,
                                    dayOfWeek: null,
                                    weather: null,
                                    humidity: null,
                                    windSpeed: null,
                                    somatosensory: null,
                                    time: null,
                                  });
  const [geo, setGeo] = useState({lat: null, lon: null});

  useEffect(()=>{
    getGeo(currentCity)
    .then(({lat, lon}) => { setGeo({lat, lon}); return getCurrentWeather(lat, lon)})
    .then((response)=> setData(response))
    .catch((error)=> console.log(error))
  }, [currentCity])

  return (
    <BackgroundImage className={`bg-no-repeat bg-cover rounded-[30px] text-white p-5 ${className}`} src={backgroundImage} linearGradient={linearGradient} >
      <Date date={data.date} dayOfWeek={data.dayOfWeek} time={data.time} />
      <Name name={currentCity} className="text-3xl pt-6 pb-8" />
      <Temperature temperature={data.temperature} />
      <TemperatureRange high={data.temperatureRange.high} low={data.temperatureRange.low} />
      <WeatherIcon className="mb-6" weather={data.weather} />
      <Meta geo={geo} humidity={data.humidity} windSpeed={data.windSpeed} somatosensory={data.somatosensory} />
    </BackgroundImage>
  )
}

export default CurrentCity;