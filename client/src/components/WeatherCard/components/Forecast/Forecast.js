import DayOfWeek from './components/DayOfWeek';
import getForecast from 'apis/getForecast';
import getGeo from 'apis/getGeo';
import { useState, useEffect } from 'react';

const Forecast = ({currentCity, className}) => {
  const [data, setData] = useState([]);

  const createGroupsInDay = (threeHourForcasts, groupSize) => {
    return threeHourForcasts.reduce((result, forecast, index) => {
      const groupIndex = Math.floor(index / groupSize);
      result[groupIndex] = result[groupIndex] || [];
      result[groupIndex].push(forecast);
      return result;
    }, []);
  };

  const getDailyData = (dayForecast) => {
    const [{ date, dayOfWeek, weather }] = dayForecast;
    const dayLow = Math.min(...dayForecast.map(day => day.temperatureRange.low));
    const dayHigh = Math.max(...dayForecast.map(day => day.temperatureRange.high));
  
    return {
      dayOfWeek,
      date,
      temperatureRange: {
        low: dayLow,
        high: dayHigh
      },
      weather
    };
  }

  useEffect(()=>{
      getGeo(currentCity)
        .then(({lat, lon}) => (getForecast(lat, lon)))
        .then((forcastData) => createGroupsInDay(forcastData, 8).map((dailyData) => (getDailyData(dailyData))))
        .then((formattedData)=>setData(formattedData))
        .catch((error)=>(console.log(error)))
  }, [currentCity])


  return (
    <div className={`flex ${className}`}>
      {data.map((day)=>{return <DayOfWeek key={day} dayOfWeek={day.dayOfWeek} date={day.date} temperatureRange={day.temperatureRange} weather={day.weather} />})}
    </div>

  )
}

export default Forecast;