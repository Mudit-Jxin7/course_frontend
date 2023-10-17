const SearchBar = () => {
  return (
    <center className="relative mt-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
      />
    </center>
  );
};

export default SearchBar;
