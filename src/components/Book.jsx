/* eslint-disable react/prop-types */

function Book({ book }) {
  const { volumeInfo } = book || {};
  const title = volumeInfo?.title || "No title available";
  const authors = volumeInfo?.authors?.join(", ") || "No authors available";
  const thumbnail =
    volumeInfo?.imageLinks?.thumbnail || "/default-book-cover.jpg";
  const publishedDate = volumeInfo?.publishedDate;

  // Extract the year from publishedDate
  const year = publishedDate ? publishedDate.split("-")[0] : "Unknown";

  return (
    <div className="flex justify-between items-center py-2 border-b-[1px] ">
      <div className="flex justify-start items-center gap-2">
        <div className="px-4 py-2">
          <img
            className="object-contain h-20 -skew-x-12 shadow drop-shadow-md"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className="text-xl text-black truncate w-[200px] sm:w-auto ">
            {title.length > 25 ? title.substring(0, 50) + "..." : title}
          </h3>
          <p className="text-base text-black text">{authors}</p>
        </div>
      </div>
      <div>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default Book;
