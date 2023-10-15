import WeatherIcon from 'components/WeatherIcon/WeatherIcon'
import Name from 'components/Name/Name'
import TemperatureRange from 'components/TemperatureRange/TemperatureRange'

const City = () => {
  return (
    <div>
      <WeatherIcon />
      <Name />
      <TemperatureRange />
    </div>
  )
}

export default City