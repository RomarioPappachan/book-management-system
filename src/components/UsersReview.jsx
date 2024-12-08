/* eslint-disable react/prop-types */
import LoginStatus from "./LoginStatus";
import { PiDotsThreeOutline } from "react-icons/pi";
import ReviewCard from "./ReviewCard";

const bookReviews = [
  {
    userName: "James Carter",
    reviewText:
      "A fascinating read with well-developed characters and an intriguing plot. Highly recommended!",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    userName: "Liam Davis",
    reviewText:
      "The story was a bit slow at the beginning, but it picked up pace and delivered a satisfying conclusion.",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    userName: "Ethan Brown",
    reviewText:
      "This book is a masterpiece! The writing style is poetic and immersive. I couldn't put it down.",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    userName: "Michael Garcia",
    reviewText:
      "Good story, but I found the ending a bit predictable. Still worth a read for the journey.",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    userName: "Noah Wilson",
    reviewText:
      "A rollercoaster of emotions! I laughed, cried, and couldn't stop turning the pages.",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    userName: "Benjamin Martinez",
    reviewText:
      "The world-building was phenomenal, but some of the characters felt underdeveloped.",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    userName: "William Hernandez",
    reviewText:
      "A refreshing take on the genre. The plot twists were mind-blowing!",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    userName: "Lucas Anderson",
    reviewText:
      "I loved the dynamic between the main characters. The dialogue felt so real and engaging.",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

function UsersReview({ searchTerm, isSearchBtnClicked }) {
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

        {bookReviews[0] ? (
          bookReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
    </div>
  );
}

export default UsersReview;
