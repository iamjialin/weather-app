const TemperatureRange = ({high, low}) => {
  return (
    <p className="text-center">{low}&deg;~{high}&deg;</p>
  )
}

export default TemperatureRange;