import sunnyWeather from '../../assets/weather-icons/Sunny.png'
import cloudyWeather from '../../assets/weather-icons/Cloudy.png'
import rainyWeather from '../../assets/weather-icons/Rain.png'
import snowyWeather from '../../assets/weather-icons/Snow.png'
import cloudyDayWeather from '../../assets/weather-icons/Cloudy_day.png'

const ICON = {
  "Clear": sunnyWeather,
  "Clouds": cloudyDayWeather, 
  "Thunderstorm": rainyWeather,
  "Rain": rainyWeather,
  "Drizzle": rainyWeather,
  "Snow": snowyWeather,
  "Mist": cloudyWeather, 
  "Smoke": cloudyWeather,
  "Haze": cloudyWeather,
  "Dust": cloudyWeather,
  "Fog": cloudyWeather,
  "Sand": cloudyWeather,
  "Ash": cloudyWeather,
  "Squall": cloudyWeather,
  "Tornado": cloudyWeather
};


const WeatherIcon = ({className, weather}) => {
  return (
    <img src={ICON[weather]} alt="weather icon" className={`mx-auto ${className}`} />
  )
}

export default WeatherIcon