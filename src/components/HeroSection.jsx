import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function HeroSection() {
  return (
    <div className="py-8 md:relative">
      <div className="w-full md:w-3/4 lg:w-1/2 md:py-6 flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-[4.2rem] leading-tight text-black">
          Happy reading,
          <br />
          Harvey
        </h1>
        <p className="text-base text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius a,
          labore eos nemo quo. Magnam voluptates, ipsum cupiditate quibusdam
          praesentium commodi voluptas consequuntur sapiente repellendus ratione
          nisi nobis atque!
        </p>
      </div>

      <img
        className="w-full md:w-[40vw] md:absolute top-0 -right-1/3"
        src="/book.png"
        alt="Book"
      />

      <div className="flex items-center justify-center md:justify-start relative">
        <button className="mt-2 px-6 py-2 text-sm rounded-3xl bg-[#354051] text-white absolute -top-10 md:static flex justify-center items-center gap-2">
          Start Reading
          <BsBoxArrowInUpRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
