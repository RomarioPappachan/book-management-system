/* eslint-disable react/prop-types */
import React from "react";
import { IoSearch } from "react-icons/io5";

function Searchbar({
  searchTerm,
  setSearchTerm,
  setIsSearchBtnClicked,
  handleSearchBook,
}) {
  console.log(searchTerm);

  function handleOnChange(event) {
    const value = event.target.value;
    if (!value) {
      setIsSearchBtnClicked(false);
    }
    setSearchTerm(value);
  }
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-9/12 md:w-10/12  xl:w-11/12 border-b-[1px] border-[#E6E8EC] relative">
        <IoSearch className="absolute left-2 top-1/4 text-xl text-[#354051]" />
        <input
          className="w-full h-10 ps-10 text-xs md:text-sm text-black bg-transparent outline-none placeholder:text-[#A3AAB3]"
          type="search"
          placeholder="Search book name..."
          onChange={handleOnChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchBook();
            }
          }}
        />
      </div>
      <div className="w-3/12 md:w-2/12  xl:w-1/12 flex items-center justify-end">
        <button
          className="h-10 px-4 py-2 text-xs md:text-sm text-white bg-[#9876B5] rounded-md hover:bg-[#a379c8]"
          onClick={() => {
            handleSearchBook();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
