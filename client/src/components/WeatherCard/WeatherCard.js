import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import SearchBar from "./components/SearchBar/SearchBar";
import OtherCities from "./components/OtherCities/OtherCities";

const WeatherCard = () =>{
    return(
    <div>
        <CurrentCity />
        <Forecast />
        <SearchBar />
        <OtherCities />
    </div>
    )
}

export default WeatherCard;