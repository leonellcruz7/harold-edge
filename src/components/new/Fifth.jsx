import React from "react";
import map from "../../../public/images/map.png";
import qr from "../../../public/images/qr.png";
import dress from "../../../public/images/dress.png";
import Image from "next/image";

const Fifth = () => {
  const colors = ["#C19984", "#B89069", "#D17C5E", "#B57251", "#D9C0AA"];
  return (
    <div className="bg-[#fff]">
      <Image src={map} />
      <div className="px-4 py-14 text-[#905844]">
        <div className="max-w-[300px] mx-auto">
          <Image src={qr} />
        </div>
        <div className="flex flex-col items-center mt-14">
          <div className="text-center text-4xl">
            <p className="maple">Dress Code</p>
          </div>
          <div className="flex gap-4">
            {colors.map((item, index) => {
              return (
                <div
                  className="w-12 h-12"
                  style={{ backgroundColor: item }}
                  key={index}
                ></div>
              );
            })}
          </div>
          <p className="uppercase tracking-widest font-extraLight mt-4 text-xs text-center">
            (please refrain wearing strong & dark colors)
          </p>
          <div className="max-w-[500px] mt-20">
            <Image src={dress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
