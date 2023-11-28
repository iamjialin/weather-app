import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import OtherCities from "./components/OtherCities";
import { useState } from "react";


const WeatherCard = () =>{

    const [currentCity, setCurrentCity] = useState("Melbourne");
    const otherCities = ['Sydney', 'Shanghai', 'New York', 'London'];

    return(
    <div className="p-8 bg-violet-50 rounded-[48px] shadow-blue-800 grid grid-cols-[auto_auto_repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(3, auto)] gap-8">
        <CurrentCity currentCity={currentCity}  className="row-span-3 col-span-2" />
        <Forecast currentCity={currentCity} className="col-span-4" />
        <SearchBar setCurrentCity={setCurrentCity} className="col-span-4" />
        <OtherCities cities={otherCities} className="col-span-4" />
    </div>
    )
}

export default WeatherCard;