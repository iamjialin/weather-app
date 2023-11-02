import Meta from "./components/Meta";
import Date from "components/Date";
import Name from "components/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "components/TemperatureRange"
import WeatherIcon from "components/WeatherIcon";

const CurrentCity = ({className}) => {
  return (
    <div className={className}>
      <Date />
      <Name />
      <Temperature />
      <TemperatureRange />
      <WeatherIcon />
      <Meta />
    </div>
  )
}

export default CurrentCity;