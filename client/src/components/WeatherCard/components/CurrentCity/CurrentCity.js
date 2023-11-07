import Meta from "./components/Meta";
import Date from "components/Date";
import Name from "components/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "components/TemperatureRange"
import WeatherIcon from "components/WeatherIcon";
import BackgroundImage from "components/BackgroundImage";
import backgroundImage from 'assets/backgrounds/Sunny_background.png'

const DATA = {
  day: "23",
  month: "July",
  weekday: "Sunday",
  time: "12:00",
  weather: "sunny",
}

const CurrentCity = ({className}) => {
  const linearGradient = "linear-gradient(to bottom, #82ACFD, #3D7FF9)"


  return (
    <BackgroundImage className={`bg-no-repeat bg-cover rounded-[30px] text-white p-5 m-2 ${className}`} src={backgroundImage} linearGradient={linearGradient} >
      <Date day={DATA.day} month={DATA.month} weekday={DATA.weekday} time={DATA.time} />
      <Name className="text-3xl py-8" />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon className="mb-6" weather={DATA.weather} />
      <Meta />
    </BackgroundImage>
  )
}

export default CurrentCity;