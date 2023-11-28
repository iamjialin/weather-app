const Date = ({date, weekday, time=""}) => {
  return (
    time ? (
      <p>
        {date}, {weekday} {time}
      </p>
    ) : (
      <div className="text-center">
        <p className="text-2xl font-bold">{weekday}</p>
        <p>{date}</p>
      </div>
    )
  )
}

export default Date;