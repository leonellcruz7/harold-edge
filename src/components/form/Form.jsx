import Ring from "@/icons/Ring";
import React from "react";
import TopBorder from "../shared/TopBorder";

const Form = () => {
  return (
    <div className="container">
      <div className="w-full p-4 md:px-8 bg-[#f2f2f2] max-w-[600px] mx-auto shadow-lg py-10">
        <TopBorder />
        <p className="text-center text-blue text-3xl">Are you attending?</p>
        <form action="" className="flex flex-col gap-8 mt-10">
          <input placeholder="Name" className="input" type="text" />
          <input placeholder="Name" className="input" type="text" />
          <input placeholder="Name" className="input" type="text" />
          <input placeholder="Name" className="input" type="text" />
          <button type="submit" className="button ml-auto mt-10">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
