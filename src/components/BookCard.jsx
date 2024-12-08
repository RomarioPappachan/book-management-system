function BookCard() {
  const bookName = "Book Name Book NameBook NamevBook NameBook Name";
  return (
    <div className="flex flex-col gap-2 z-10">
      <div className="border-gray-400 border-[1px] rounded">
        <img className="w-full h-[250px]" src="vite.svg" alt="" />
      </div>
      <div>
        <h3 className="text-base text-black">{bookName.substring(0, 15)}...</h3>
        <span className="text-xs text-gray-400">Author of the Book</span>
      </div>
    </div>
  );
}

export default BookCard;
