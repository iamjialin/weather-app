import icon from 'assets/meta-icons/PM2.5.svg'

const AirQuality = () => {
    return (
      <div>
        <img className="mx-auto" src={icon} alt="air quality icon" />
        <p>75&micro;g</p>

      </div>
    )
  }
  
  export default AirQuality;