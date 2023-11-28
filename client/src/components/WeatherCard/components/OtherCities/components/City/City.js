import WeatherIcon from 'components/WeatherIcon/WeatherIcon'
import Name from 'components/Name/Name'
import TemperatureRange from 'components/TemperatureRange/TemperatureRange'
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

const City = ({city, weather, color, temperatureRange:{high, low}}) => {
  return (
    <div className="w-44 py-4 bg-no-repeat bg-cover bg-center text-white rounded-3xl shadow-2xl shadow-indigo-200" style={{backgroundImage: `linear-gradient(to bottom, ${color}, ${color}), url(${CITY[city]})`}}>
      <WeatherIcon className="w-12" weather={weather} />
      <Name className="text-2xl py-2" name={city} />
      <TemperatureRange high={high} low={low} />
    </div>
  )
}

export default City