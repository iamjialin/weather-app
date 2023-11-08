import WeatherIcon from 'components/WeatherIcon/WeatherIcon'
import Name from 'components/Name/Name'
import TemperatureRange from 'components/TemperatureRange/TemperatureRange'
import BackgroundImage from 'components/BackgroundImage'
import sydeny from 'assets/city/Sydney.png';
import shanghai from 'assets/city/Shanghai.png';
import newyork from 'assets/city/Newyork.png';
import london from 'assets/city/London.png';

const CITY = {
  "Sydney": sydeny,
  "Shanghai": shanghai,
  "New York": newyork,
  "London": london,
}

const City = ({city, weather, temperatureRange:{high, low}}) => {
  const linearGradient = "linear-gradient(to bottom right, #192c61, #192c61)"
  return (
    <BackgroundImage className="px-8 grow basis-0 bg-no-repeat bg-cover bg-center bg-blend-screen text-white rounded-3xl" src={CITY[city]} linearGradient={linearGradient}>
      <WeatherIcon className="w-16" weather={weather} />
      <Name className="text-2xl" name={city} />
      <TemperatureRange high={high} low={low} />
    </BackgroundImage>
  )
}

export default City