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
            Your presence on our special day means the world to us, and your
            love is the greatest gift. But if you wish to contribute, we
            sincerely appreciate money towards starting our new chapter
          </p>
          <p>
            However, your thoughtfulness is what truly matters, and you are
            welcome to choose any gift that feels right to you.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center">
        <Image alt="" src={gifts} />
      </div>
    </div>
  );
};

export default Seventh;
