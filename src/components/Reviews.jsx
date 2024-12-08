/* eslint-disable react/prop-types */
import LoginStatus from "./LoginStatus";
import { PiDotsThreeOutline } from "react-icons/pi";
import ReviewCard from "./ReviewCard";

function Reviews({ searchTerm, isSearchBtnClicked }) {
  return (
    <div className="flex flex-col justify-start gap-4">
      <div>
        <LoginStatus />
      </div>

      <div
        className={`hidden md:block transition-all ease-in-out duration-500 ${
          !isSearchBtnClicked || !searchTerm ? "md:h-[390px]" : "h-0"
        }`}
        // className="hidden md:block md:h-[390px]"
      >
        <span></span>
      </div>

      {/* Reviews  */}
      <div className="z-20">
        <div className="pb-5 flex justify-between items-center">
          <h3 className="text-xl text-black">Users Review</h3>
          <PiDotsThreeOutline className="z-10 text-3xl" />
        </div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;
