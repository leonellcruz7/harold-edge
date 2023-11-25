import React from "react";

const Details = () => {
  return (
    <div>
      <div className="container">
        <div className="w-full h-[300px] bg-blue"></div>
        <div className="translate-y-[-100px] max-w-[90%] mx-auto">
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
  return <div className="w-full min-h-[300px] bg-[#fff] shadow-md"></div>;
};
