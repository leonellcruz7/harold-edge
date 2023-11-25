import Ring from "@/icons/Ring";
import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="w-full p-4 bg-[#f2f2f2] max-w-[600px] mx-auto shadow-lg">
        <div className="flex items-center gap-4 mx-auto max-w-[300px]">
          <div className="line"></div>
          <Ring className="w-10" />
          <div className="line"></div>
        </div>
        <form action=""></form>
      </div>
    </div>
  );
};

export default Form;
