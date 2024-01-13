import Image from "next/image";
import React from "react";
import gifts from "../../../public/images/gifts.jpg";

const Seventh = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="w-full flex items-center">
        <div className="max-w-[400px] mx-auto px-4 py-24 text-justify text-[#2F464E] flex flex-col gap-6 font-medium text-xl">
          <p className="maple text-4xl md:text-5xl">A note on gifts</p>
          <p>
            The most important gift to us is having you share our special day.
          </p>
          <p>
            but if you wish to contribute some other way, We would love a few
            pennies in our pot for starting our next chapter after tying the
            knot.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center">
        <Image src={gifts} />
      </div>
    </div>
  );
};

export default Seventh;
