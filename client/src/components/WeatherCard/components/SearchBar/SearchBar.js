const SearchBar = ({ className }) => {
  return (
    <form className={`w-fit h-fit border-4 border-white ${className}`}>
      <input className="w-80" type="text" placeholder="Search for a city" />
      <button className="bg-indigo-600 text-white rounded-lg" type="submit">Search</button>
    </form>
  )
}

export default SearchBar;
