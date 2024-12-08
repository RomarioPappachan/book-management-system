import BookCard from "./components/BookCard";
import HeroSection from "./components/HeroSection";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import { PiDotsThreeOutline } from "react-icons/pi";
import { HiMenuAlt2 } from "react-icons/hi";
import Reviews from "./components/Reviews";
import { useState } from "react";
import SearchedBooks from "./components/SearchedBooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);

  // handleSearch
  function handleSearchBook() {
    if (!searchTerm) {
      alert("Please enter a book or authors name.");
    } else {
      setIsSearchBtnClicked(true);
      alert("Clicked search button");
    }
  }

  return (
    <div className="w-screen min-h-screen flex bg-[#F1F0E3]">
      <div className="hidden md:block md:w-[8%] py-4 bg-transparent">
        <Sidebar />
      </div>

      {/* center div  */}
      <div className="w-full md:w-[72%] px-2 md:px-10 py-4">
        {/* Searchbar  */}
        <Searchbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearchBook={handleSearchBook}
        />

        {/* Hero Section  */}

        {!isSearchBtnClicked || !searchTerm ? (
          <HeroSection />
        ) : (
          <SearchedBooks />
        )}

        {/* Popular Section  */}
        <div className="py-5">
          <div className="pb-5 flex justify-between items-center">
            <h3 className="text-xl text-black">Popular Now</h3>
            <PiDotsThreeOutline className="z-10 text-3xl" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 sm:gap-x-6 md:gap-x-10 gap-y-4 md::gap-y-8">
            {/* Cards  */}
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>

      {/* User Review bar  */}
      <div className="hidden md:block md:w-[20%] p-4 bg-white">
        <Reviews
          searchTerm={searchTerm}
          isSearchBtnClicked={isSearchBtnClicked}
        />
      </div>

      {/* floating navbar for mobile */}
      <div className="md:hidden fixed left-4 bottom-4 flex justify-center items-start z-50">
        <span className="w-14 h-14 rounded-full bg-[#EAEDE9] text-[#354051] flex justify-center items-center drop-shadow-md">
          <HiMenuAlt2 className="text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default App;
