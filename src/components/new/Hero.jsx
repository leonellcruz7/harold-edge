import React from "react";
import heroFaded from "../../../public/images/hero.png";
import heroImage from "../../../public/images/heroSide.png";
import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className="h-[95vh] overflow-hidden pt-20 bg-[#31484C]">
      <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center">
        <div className="lg:order-2 z-10 h-[35%] lg:h-full lg:w-[45%] flex items-center justify-center">
          <div className="w-[350px] lg:w-[500px] relative text-white maple flex items-center justify-center translate-y-[40px]">
            <p className="cursive text-5xl font-extralight absolute -top-12 left-6 rotate-[-10deg]">
              It's a wedding
            </p>
            <div>
              <p className="text-6xl lg:text-[100px] leading-[90%]">Harold</p>
              <p className="text-6xl lg:text-[100px] leading-[90%]">
                <span className="josefin">&</span> Edge
              </p>
              <p className="josefin text-center text-sm lg:text-[20px] mt-2">
                25th FEBRUARY, 2024
              </p>
            </div>
          </div>
        </div>
        <div className="lg:order-1 w-full h-[65%] lg:h-full lg:w-[55%] flex items-end">
          <div className="relative flex items-end">
            <Image
              src={heroImage}
              className={
                "translate-y-[100px] xl:translate-y-[200px] hidden lg:block w-full h-full"
              }
              alt=""
            />
            <Image
              src={heroFaded}
              className={"md:translate-y-[400px] lg:hidden w-full h-full"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
