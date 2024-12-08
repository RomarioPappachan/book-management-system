function Book() {
  return (
    <div className="flex justify-between items-center py-2 border-b-[1px] ">
      <div className="flex justify-start items-center gap-2">
        <div className="px-4 py-2">
          <img
            className="object-contain h-20 -skew-x-12 shadow drop-shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRZHjoUiWbWqUZfQC9eVpZmVCh2kcaS9ACQ&s"
            alt="Book"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className="text-xl text-black truncate w-[200px] sm:w-auto">
            The Illustrated Battle Cry of Freedom
          </h3>
          <p className="text-base text-black text">James M. McPherson</p>
        </div>
      </div>
      <div>
        <p>2003</p>
      </div>
    </div>
  );
}

export default Book;
