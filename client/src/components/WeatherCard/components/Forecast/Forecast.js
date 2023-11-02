import DayOfWeek from './components/DayOfWeek/DayOfWeek';

const Forecast = ({className}) => {
  return (
    <div className={`flex ${className}`}>
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
      <DayOfWeek />
    </div>

  )
}

export default Forecast;