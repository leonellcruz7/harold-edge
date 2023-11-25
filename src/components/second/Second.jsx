import classNames from "classnames";
import React from "react";

const Second = () => {
  const content = [
    {
      name: "harold joseph a. cruz",
      description: "text",
      image: "",
    },
    {
      name: "edge villanueva",
      description: "text",
      image: "",
    },
  ];
  return (
    <div id="couple" className="container py-10">
      <div className="flex flex-col gap-4 w-full max-w-[1000px] mx-auto">
        {content.map((item, index) => {
          const { name, description, image } = item;
          const isOdd = index % 2 === 1;
          return (
            <div key={index} className="flex gap-4">
              <div
                className={classNames(
                  "flex-shrink-0 w-[120px] h-[120px] rounded-full bg-white drop-shadow-lg flex items-center justify-center",
                  isOdd && "order-2"
                )}
              >
                <div className="w-[107px] h-[107px] rounded-full bg-blue"></div>
              </div>
              <div
                className={classNames(
                  "py-4 w-full",
                  isOdd && "order-1 flex flex-col items-end text-right"
                )}
              >
                <p className="capitalize md:text-2xl text-blue font-bold">
                  {name}
                </p>
                <p className="text-xs md:text-lg mt-1 text-grey max-w-[700px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  recusandae unde architecto aut dolore! Officia,
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Second;
