import Date from 'components/Date';
import TemperatureRange from 'components/TemperatureRange';

const DayOfWeek = ({dayOfWeek, date, temperatureRange:{high, low}, weather}) => {
  return (
    <div className="py-6 my-2 text-indigo-950">
      <Date weekday={dayOfWeek} date={date} />
      <img className="p-4" src={weather} alt={dayOfWeek} />
      <TemperatureRange high={high} low={low} />
    </div>
  )
}

export default DayOfWeek;