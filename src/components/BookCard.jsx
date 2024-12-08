/* eslint-disable react/prop-types */

import React from "react";

function BookCard({ book }) {
  const { volumeInfo } = book || {};
  const title = volumeInfo?.title || "No title available";
  const authors = volumeInfo?.authors?.join(", ") || "No authors available";
  const thumbnail =
    volumeInfo?.imageLinks?.thumbnail || "/default-book-cover.jpg";

  return (
    <div className="flex flex-col gap-2 z-10">
      <div className="rounded drop-shadow-md">
        <img
          className="w-full h-[250px] rounded drop-shadow-md"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div>
        <h3 className="text-base text-black">
          {title.length > 15 ? title.substring(0, 18) + "..." : title}
        </h3>
        <span className="text-xs text-gray-400">{authors}</span>
      </div>
    </div>
  );
}

export default BookCard;
