import React from "react";
import TopBorder from "../shared/TopBorder";

const Details = () => {
  return (
    <div id="location">
      <div className="container">
        <div className="w-full h-[300px] bg-blue py-10">
          <TopBorder light />
          <p className="text-center text-3xl text-white">When & Where</p>
        </div>
        <div className="translate-y-[-130px] max-w-[90%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-10">
            {Array.from({ length: 3 }).map((item, index) => {
              return <DetailsCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

const DetailsCard = () => {
  return (
    <div className="w-full h-[400px] bg-[#fff] shadow-md text-center py-12 px-4 flex flex-col justify-between">
      <p className="text-2xl text-blue">The Reception</p>
      <div className="flex flex-col gap-3 text-sm text-grey">
        <p>Monday, February 25, 2024</p>
        <p>1:00 PM - 4:00 PM</p>
        <p>Broadway Pines Clubhouse</p>
      </div>
      <button className="button mx-auto">See Location</button>
    </div>
  );
};
