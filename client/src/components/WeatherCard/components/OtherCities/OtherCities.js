import City from './components/City'

const DATA = [
  {
    "city":"Sydney",
    "weather": "sunny",
    "temperatureRange": {
      "high": "25",
      "low": "20"
    }
  },
  {
    "city":"Shanghai",
    "weather": "cloudy",
    "temperatureRange": {
      "high": "20",
      "low": "18"
    }
  },
  {
    "city":"New York",
    "weather": "rainy",
    "temperatureRange": {
      "high": "23",
      "low": "20"
    }
  },
  {
    "city":"London",
    "weather": "snowy",
    "temperatureRange": {
      "high": "23",
      "low": "20"
    }
  }
]

const COLORS = [
  "rgba(104, 152, 243, 0.8)",
  "rgba(104, 152, 243, 0.8)",
  "rgba(98, 118, 232, 0.8)",
  "rgba(118, 111, 223, 0.8)",
]

const OtherCities = ({className}) => {
  return (
    <div className={`flex gap-6 px-2 ${className}`}>
      {DATA.map((city, index)=>{return <City key={city.city} city={city.city} weather={city.weather} color={COLORS[index]} temperatureRange={city.temperatureRange} />})}
    </div>
  )
}

export default OtherCities;