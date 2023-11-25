import React from "react";
import TopBorder from "../shared/TopBorder";

const People = () => {
  return (
    <div id="bridesmaid-groomsmen" className="py-10">
      <div className="container">
        <TopBorder />
        <p className="text-center">Bridesmaids & Groomsmen</p>
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-[360px] md:max-w-[520px] mx-auto gap-y-10 mt-10">
          {Array.from({ length: 6 }).map((item, index) => {
            return <Avatar key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default People;

const Avatar = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[160px] h-[160px] bg-[#fff] shadow-sm rounded-full flex items-center justify-center">
        <div className="w-[146px] h-[146px] bg-grey rounded-full"></div>
      </div>
      <div className="text-center">
        <p className="text-lg text-red font-semibold">Leonell Cruz</p>
        <p className="text-xs text-grey">Groomsmen</p>
      </div>
    </div>
  );
};
