import icon from 'assets/meta-icons/PM2.5.svg'
import { useEffect, useState } from 'react';
import getAirQuality from 'apis/getAirQuality';

const AirQuality = ({geo}) => {
  
  const [pm2_5, setPm2_5] = useState(null)

  useEffect(()=>{
    const {lat, lon} = geo;
    getAirQuality(lat, lon)
    .then(data => setPm2_5(data))
  }, [geo])

    return (
      <div>
        <img className="mx-auto" src={icon} alt="air quality icon" />
        <p>{pm2_5}&micro;g</p>
      </div>
    )
  }
  
  export default AirQuality;