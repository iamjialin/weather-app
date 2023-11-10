const Date = ({date, weekday, time=""}) => {

  // const [date, setDate] = useState("23 July")

  if (time) {
    return (
      <p>
        {date}, {weekday} {time}
      </p>
    )
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-bold">{weekday}</p>
      <p>{date}</p>
    </div>
  )
}

export default Date;