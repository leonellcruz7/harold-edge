import Image from "next/image";
import React from "react";
import image1 from "../../../public/images/fourth.jpg";
import Carousel from "react-multi-carousel";

const Fourth = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      id="details"
      className="px-4 py-14 text-center flex flex-col items-center gap-10 text-[#31464D]"
    >
      <Carousel
        responsive={responsive}
        containerClass="w-full max-w-[500px]"
        showDots
      >
        <Image src={image1} className="" />
        <Image src={image1} className="" />
        <Image src={image1} className="" />
        <Image src={image1} className="" />
      </Carousel>

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
