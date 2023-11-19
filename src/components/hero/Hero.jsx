import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex items-center justify-center h-[80vh] exmouth text-white text-[100px] md:text-[150px] text-center flex-col md:flex-row md:gap-14 bg-[url('https://picsum.photos/seed/picsum/1920/1280')] bg-no-repeat bg-center">
        <p>Harold</p>
        <p className="mt-[-60px] md:mt-[-50px]">&</p>
        <p>Edge</p>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
