import { useState } from "react";

const SearchBar = ({ setCurrentCity, className }) => {
  const [valueInput, setValueInput] = useState('')

  const handleInputChange = (e) => {
    setValueInput(e.target.value);
  }

  const handleSearch = () => {
    setCurrentCity(valueInput);
  }

  return (
    <div className={`w-fit ml-2 mt-8 rounded-xl border-4 border-white ${className}`}>
      <input className="w-80 h-full pl-4" value={valueInput} onChange={handleInputChange} type="text" placeholder="Search for a city" />
      <button className="bg-indigo-600 h-full px-4 text-white rounded-xl" type="button" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;
