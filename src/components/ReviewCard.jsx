function ReviewCard() {
  return (
    <div className="py-2 flex justify-start items-start gap-2">
      <div className="w-2/12 rounded-full border-[1px] border-[#9CA5B0]">
        <img
          className="w-full object-cover rounded-full"
          src="/user-profile-image.jpg"
          alt="User"
        />
      </div>
      <div className="w-10/12">
        <h4 className="text-base text-black">John Smith</h4>
        <p className="mt-1 text-sm text-[#9CA5B0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et provident,
          at corrupti cupiditate nihil ducimus repudiandae voluptas sint
          incidunt consectetur libero quaerat.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
