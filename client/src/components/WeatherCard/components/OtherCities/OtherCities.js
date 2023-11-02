import City from './components/City/City';
const OtherCities = ({className}) => {
  return (
    <div className={`flex ${className}`}>
      <City />
      <City />
      <City />
      <City />
    </div>
  )
}

export default OtherCities;