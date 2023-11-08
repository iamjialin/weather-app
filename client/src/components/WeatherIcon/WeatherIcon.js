import sunnyWeather from '../../assets/weather-icons/Sunny.png'
import cloudyWeather from '../../assets/weather-icons/Cloudy.png'
import rainyWeather from '../../assets/weather-icons/Rain.png'
import snowyWeather from '../../assets/weather-icons/Snow.png'
import hailWeather from '../../assets/weather-icons/Hail.png'
import cloudyDayWeather from '../../assets/weather-icons/Cloudy_day.png'

const ICON = {
  "sunny": sunnyWeather,
  "cloudy": cloudyWeather,
  "rainy": rainyWeather,
  "snowy": snowyWeather,
  "hail": hailWeather,
  "cloudy_day": cloudyDayWeather,
}

const WeatherIcon = ({className, weather}) => {
  return (
    <img src={ICON[weather]} alt="weather icon" className={`mx-auto ${className}`} />
  )
}

export default WeatherIcon