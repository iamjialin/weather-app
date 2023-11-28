import AirQuality from './components/AirQuality';
import Humidity from './components/Humidity';
import Somatosensory from './components/Somatosensory';
import Wind from './components/Wind';

const Meta = ({geo, humidity, windSpeed, somatosensory}) =>{
    return (
    <div className="flex gap-8 justify-center bg-white text-indigo-950 rounded-2xl p-5">
        <Humidity humidity={humidity} />
        <Wind windSpeed={windSpeed} />
        <AirQuality geo={geo} />
        <Somatosensory somatosensory={somatosensory} />
    </div>
    
    );
}
export default Meta;