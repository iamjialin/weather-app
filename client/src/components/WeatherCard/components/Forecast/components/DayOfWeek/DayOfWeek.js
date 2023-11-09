import Date from 'components/Date';
import TemperatureRange from 'components/TemperatureRange';
import WeatherIcon from 'components/WeatherIcon';

const DayOfWeek = ({dayOfWeek, date, temperatureRange:{high, low}, weather}) => {
  return (
    <div className="mt-8 text-indigo-950">
      <Date weekday={dayOfWeek} date={date} />
      <WeatherIcon className="px-4 py-2" weather={weather} />
      <TemperatureRange high={high} low={low} />
    </div>
  )
}

export default DayOfWeek;