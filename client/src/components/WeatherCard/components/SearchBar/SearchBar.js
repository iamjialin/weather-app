const SearchBar = ({ className }) => {
  return (
    <form className={`w-fit ml-2 mt-8 rounded-xl border-4 border-white ${className}`}>
      <input className="w-80 h-full pl-4" type="text" placeholder="Search for a city" />
      <button className="bg-indigo-600 h-full px-4 text-white rounded-xl" type="submit">Search</button>
    </form>
  )
}

export default SearchBar;
