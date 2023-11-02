import CurrentCity from "./components/CurrentCity/CurrentCity";
import Forecast from "./components/Forecast/Forecast";
import SearchBar from "./components/SearchBar/SearchBar";
import OtherCities from "./components/OtherCities/OtherCities";

const WeatherCard = () =>{
    return(
    <div className="w-4/5 h-4/5 bg-white rounded-3xl shadow-blue-800 grid grid-cols-6 grid-rows-3">
        <CurrentCity className="border-4 border-red-600 row-span-6 col-span-2" />
        <Forecast className="border-4 border-cyan-600 col-span-4" />
        <SearchBar className="border-4 border-orange-600 col-span-4" />
        <OtherCities className="border-4 border-green-600 col-span-4" />
    </div>
    )
}

export default WeatherCard;