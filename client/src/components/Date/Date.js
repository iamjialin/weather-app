const Date = ({day, month, weekday, time=""}) => {

  if (time) {
    return (
      <p>
        {day} {month}, {weekday} {time}
      </p>
    )
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-semibold">{weekday}</p>
      <p>{day} {month}</p>
    </div>
  )
}

export default Date;