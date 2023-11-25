import Ring from "@/icons/Ring";
import React from "react";

const Fourth = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex items-center gap-4 mx-auto max-w-[300px]">
          <div className="line"></div>
          <Ring className="w-10" />
          <div className="line"></div>
        </div>
        <div className="text-center mb-10 mt-4">
          <p>Sweet Captured Moments</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="w-full h-[700px] flex flex-col gap-2">
            <div className="w-full h-[60%] bg-grey"></div>
            <div className="w-full h-[40%] bg-grey"></div>
          </div>
          <div className="w-full h-[700px] flex flex-col gap-2">
            <div className="w-full h-[35%] bg-grey"></div>
            <div className="w-full h-[65%] bg-grey"></div>
          </div>
          <div className="w-full h-[700px] flex flex-col gap-2">
            <div className="w-full h-[55%] bg-grey"></div>
            <div className="w-full h-[45%] bg-grey"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
