/* eslint-disable react/prop-types */

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import { HiMenuAlt2 } from "react-icons/hi";
import SearchedBooks from "./components/SearchedBooks";
import PopularBooks from "./components/PopularBooks";
import UsersReview from "./components/UsersReview";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // handleSearch
  async function handleSearchBook() {
    if (!searchTerm) {
      alert("Please enter a book or authors name.");
    } else {
      setIsSearchBtnClicked(true);

      // API call

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}?q=${searchTerm}`
        );
        const data = await response.json();

        setSearchResult(data.items);
      } catch (error) {
        console.error("Error fetching popular books:", error);
      }
    }
  }

  return (
    <div className="w-screen min-h-screen flex bg-[#F1F0E3]">
      <div className="hidden md:block md:w-[8%] py-4 bg-transparent">
        <Sidebar />
      </div>

      {/* center div  */}
      <div className="w-full lg:w-[72%] px-2 md:px-10 py-4">
        {/* Searchbar  */}
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsSearchBtnClicked={setIsSearchBtnClicked}
          handleSearchBook={handleSearchBook}
        />

        {/* Hero Section  */}

        {!isSearchBtnClicked || !searchTerm ? (
          <HeroSection />
        ) : (
          <SearchedBooks searchResult={searchResult} />
        )}

        {/* Popular Section  */}
        <PopularBooks />
      </div>

      {/* User Review bar  */}
      <div className="hidden lg:block lg:w-[20%] p-4 bg-white">
        <UsersReview
          searchTerm={searchTerm}
          isSearchBtnClicked={isSearchBtnClicked}
        />
      </div>

      {/* floating sidebar for mobile */}
      <div className="md:hidden fixed left-4 bottom-4 flex justify-center items-start z-50">
        <span className="w-14 h-14 rounded-full bg-[#EAEDE9] text-[#354051] flex justify-center items-center drop-shadow-md">
          <HiMenuAlt2 className="text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default App;
