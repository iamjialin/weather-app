import Meta from "./components/Meta";
import Date from "components/Date";
import Name from "components/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "components/TemperatureRange"
import WeatherIcon from "components/WeatherIcon";
import BackgroundImage from "components/BackgroundImage";
import backgroundImage from 'assets/backgrounds/Sunny_background.png'

const DATA = {
  date: "23 July",
  weekday: "Sunday",
  time: "12:00",
  weather: "sunny",
  temperature: "25",
  temperatureRange: {
    high: "32",
    low: "20"
  }
}

const CurrentCity = ({className}) => {
  const linearGradient = "linear-gradient(to bottom, #82ACFD, #3D7FF9)"


  return (
    <BackgroundImage className={`bg-no-repeat bg-cover rounded-[30px] text-white p-5 ${className}`} src={backgroundImage} linearGradient={linearGradient} >
      <Date date={DATA.date} weekday={DATA.weekday} time={DATA.time} />
      <Name name="Sydney" className="text-3xl py-8" />
      <Temperature temperature={DATA.temperature} />
      <TemperatureRange high={DATA.temperatureRange.high} low={DATA.temperatureRange.low} />
      <WeatherIcon className="mb-6" weather={DATA.weather} />
      <Meta />
    </BackgroundImage>
  )
}

export default CurrentCity;