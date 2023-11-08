import DayOfWeek from './components/DayOfWeek';

const DATA = [
  {
    "dayOfWeek": "Monday",
    "date":"24 July",
    "weather": "sunny",
    "temperatureRange": {
      "high": "25",
      "low": "20"
    }
  },
  {
    "dayOfWeek": "Tuesday",
    "date":"25 July",
    "weather": "cloudy",
    "temperatureRange": {
      "high": "20",
      "low": "18"
    }
  },
  {
    "dayOfWeek": "Wednesday",
    "date":"26 July",
    "weather": "rainy",
    "temperatureRange": {
      "high": "23",
      "low": "20"
    }
  },
  {
    "dayOfWeek": "Thursday",
    "date":"27 July",
    "weather": "snowy",
    "temperatureRange": {
      "high": "32",
      "low": "20"
    }
  }
]
const Forecast = ({className}) => {
  return (
    <div className={`flex ${className}`}>
      {DATA.map((day)=>{return <DayOfWeek key={day} dayOfWeek={day.dayOfWeek} date={day.date} temperatureRange={day.temperatureRange} weather={day.weather} />})}
    </div>

  )
}

export default Forecast;