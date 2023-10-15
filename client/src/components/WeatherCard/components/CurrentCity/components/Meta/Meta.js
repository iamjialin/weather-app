import AirQuality from './components/AirQuality';
import Humidity from './components/Humidity';
import Somatosensory from './components/Somatosensory';
import Wind from './components/Wind';

const Meta = () =>{
    return (
    <div>
        <AirQuality />
        <Humidity />
        <Somatosensory />
        <Wind />
    </div>
    
    );
}
export default Meta;