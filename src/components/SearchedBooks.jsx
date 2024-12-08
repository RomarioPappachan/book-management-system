import { PiDotsThreeOutline } from "react-icons/pi";
import Book from "./Book";

function SearchedBooks() {
  return (
    <div className="h-[550px] bg-[#F1F0E3] overflow-y-auto">
      <div className="py-8 pb-5 flex justify-between items-center">
        <h3 className="text-xl text-black">Search Result</h3>
        <PiDotsThreeOutline className="z-10 text-3xl" />
      </div>

      {/* Searched book list  */}
      <div className="">
        <Book />
        <Book />
      </div>
    </div>
  );
}

export default SearchedBooks;
