import React from "react";
import events from "../../../public/images/events.png";
import Image from "next/image";

const Sixth = () => {
  return (
    <div id="events" className="px-4 py-24 bg-[#875B48]">
      <div className="max-w-[600px] mx-auto">
        <Image src={events} />
      </div>
    </div>
  );
};

export default Sixth;
