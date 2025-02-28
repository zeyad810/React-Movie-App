function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-light-100/5 mx-auto mt-10 w-full max-w-3xl rounded-lg px-4 py-3">
      <div className="relative flex items-center">
        <img src="./search.svg" className="absolute left-2 h-5 w-5" alt="" />
        <input
          className="placeholder-light-200 w-full bg-transparent py-2 pl-10 text-base text-gray-200 outline-hidden sm:pr-10"
          type="text"
          value={searchTerm}
          placeholder="Search among Thousand of Movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
