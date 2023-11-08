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

const OtherCities = ({className}) => {
  return (
    <div className={`flex gap-6 px-2 ${className}`}>
      {DATA.map((city)=>{return <City key={city.city} city={city.city} weather={city.weather} temperatureRange={city.temperatureRange} />})}
    </div>
  )
}

export default OtherCities;