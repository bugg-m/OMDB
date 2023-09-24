import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBar = (props) => {
  const { setSearch, search } = props;

  return (
    <div className="w-full flex justify-center items-center">
      <ImSearch />
      <input
        className="text-black px-4 py-2 bg-transparent border-transparent outline-none w-11/12"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
