/* eslint-disable react/prop-types */

import { PiDotsThreeOutline } from "react-icons/pi";
import Book from "./Book";

function SearchedBooks({ searchResult = [] }) {
  const books = searchResult;

  return (
    <div className="h-[550px] bg-[#F1F0E3] overflow-y-auto">
      <div className="py-8 pb-5 flex justify-between items-center">
        <h3 className="text-xl text-black">Search Result</h3>
        <PiDotsThreeOutline className="z-10 text-3xl" />
      </div>

      {/* Searched book list  */}
      <div className="">
        {books[0] ? (
          books.map((book, index) => <Book key={index} book={book} />)
        ) : (
          <div>No books found</div>
        )}
      </div>
    </div>
  );
}

export default SearchedBooks;
