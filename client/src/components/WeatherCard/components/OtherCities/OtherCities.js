import { useEffect, useState } from 'react'
import City from './components/City'
import getGeo from 'apis/getGeo'
import getCurrentWeather from 'apis/getCurrentWeather'


// // initial other cities
// const CITIES = [
//   {name: 'Melbourne', lat: -37.840935, lon: 144.946457},
//   {name: 'Sydney', lat: -33.865143, lon: 151.209900},
//   {name: 'Brisbane', lat: -27.470125, lon: 153.021072},
//   {name: 'Perth', lat: -31.952854, lon: 115.857342},
//   {name: 'Adelaide', lat: -34.9285, lon: 138.6007},
// ]


// const DATA = [
//   {
//     "city":"Sydney",
//     "weather": "sunny",
//     "temperatureRange": {
//       "high": "25",
//       "low": "20"
//     }
//   },
//   {
//     "city":"Shanghai",
//     "weather": "cloudy",
//     "temperatureRange": {
//       "high": "20",
//       "low": "18"
//     }
//   },
//   {
//     "city":"New York",
//     "weather": "rainy",
//     "temperatureRange": {
//       "high": "23",
//       "low": "20"
//     }
//   },
//   {
//     "city":"London",
//     "weather": "snowy",
//     "temperatureRange": {
//       "high": "23",
//       "low": "20"
//     }
//   }
// ]

const COLORS = [
  "rgba(104, 152, 243, 0.8)",
  "rgba(104, 152, 243, 0.8)",
  "rgba(98, 118, 232, 0.8)",
  "rgba(118, 111, 223, 0.8)",
]

const OtherCities = ({cities, className}) => {

  const [data, setData] = useState([])

  useEffect(()=>{
    const citiesData = cities.map(
      (city) => getGeo(city)
                  .then(({lat, lon}) => getCurrentWeather(lat, lon))
                  .then((data)=> ({city:city, weather: data.weather, temperatureRange: {high: data.temperatureRange.high, low: data.temperatureRange.low}}))
                  .catch(error => console.log(city, error))
    )

    Promise.all(citiesData)
    .then(data => setData(data))

  }, [cities])

  return (
    <div className={`flex items-center justify-items-center gap-6 px-2 ${className}`}>
      {data.map((city, index)=>{return <City key={city.city} city={city.city} weather={city.weather} color={COLORS[index]} temperatureRange={city.temperatureRange} />})}
    </div>
  )
}

export default OtherCities;