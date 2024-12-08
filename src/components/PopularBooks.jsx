/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { PiDotsThreeOutline } from "react-icons/pi";
import BookCard from "./BookCard";

function PopularBooks() {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}?q=bestseller&orderBy=newest`
        );
        const data = await response.json();

        setPopularBooks(data.items);
      } catch (error) {
        console.error("Error fetching popular books:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="py-5">
      <div className="pb-5 flex justify-between items-center">
        <h3 className="text-xl text-black">Popular Now</h3>
        <PiDotsThreeOutline className="z-10 text-3xl" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-4 lg:gap-x-6 2xl:gap-x-10">
        {/* Cards  */}

        {popularBooks[0] ? (
          popularBooks.map((book, index) => {
            {
              return <BookCard key={index + 1} book={book} />;
            }
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default PopularBooks;
