import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import SearchBar from "./components/SearchBar/SearchBar";
import OtherCities from "./components/OtherCities/OtherCities";

const WeatherCard = () =>{
    return(
    <div className="p-6 bg-white rounded-[48px] shadow-blue-800 grid grid-cols-[auto_auto_repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(3, auto)] gap-8">
        <CurrentCity className="row-span-3 col-span-2" />
        <Forecast className="col-span-4" />
        <SearchBar className="col-span-4" />
        <OtherCities className="col-span-4" />
    </div>
    )
}

export default WeatherCard;