import React from "react";
import flowers from "../../images/flowers.jpeg";
import Image from "next/image";

const Third = () => {
  return (
    <div className="relative m-4">
      <div className="container overflow-hidden h-[220px] bg-red w-full flex flex-col justify-center items-center gap-4">
        <p className="text-white text-3xl">Celebrate with us!</p>
        <button className="button">Join us!</button>
      </div>
    </div>
  );
};

export default Third;
