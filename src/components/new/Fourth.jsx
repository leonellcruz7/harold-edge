import Image from "next/image";
import React from "react";

import w from "../../../public/images/w.jpg";

const Fourth = () => {
  return (
    <div
      id="details"
      className="px-4 py-14 text-center flex flex-col items-center gap-10 text-[#31464D]"
    >
      <div className="max-w-[400px]">
        <Image src={w} />
      </div>
      {/* <Carousel
        responsive={responsive}
        containerClass="w-full max-w-[500px]"
        showDots
      >
        {images.map((item, index) => {
          return (
            <div className="h-[700px] flex items-center" key={index}>
              <Image src={item} className="" />
            </div>
          );
        })}
      </Carousel> */}

      <div className="flex flex-col gap-8 uppercase josefin font-medium">
        <p className="maple text-6xl">Details</p>
        <p>february 25, 2024 | Saturday | 4 pm</p>
        <p>Flor’s garden, antipolo rizal</p>
        <p>Guests are encouraged to arrive two hours early.</p>
        <p className="cursive normal-case text-[30px]">
          Connect with nature Catch up with friends Savor a cup of coffee!
        </p>
      </div>
    </div>
  );
};

export default Fourth;
