import React from "react";
import Modal from "../Modal";

const Nineth = ({ handleShowRsvp }) => {
  return (
    <>
      <div className="px-4 py-14 bg-[#2F464E] text-center text-white">
        <p className="maple text-4xl">See you there?</p>
        <p className="uppercase">RSVP on or before February 1, 2024</p>
        <div className="mt-10 flex gap-4 flex-col sm:flex-row max-w-[600px] mx-auto">
          <button className="button orange" onClick={handleShowRsvp}>
            i&apos;m so going
          </button>
        </div>
      </div>
    </>
  );
};

export default Nineth;
