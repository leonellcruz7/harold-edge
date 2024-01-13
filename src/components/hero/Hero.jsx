import React from "react";
import styles from "./styles.module.scss";
import bg from "../../images/herobg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container} id="home">
      <div className="container h-full pt-24 md:pt-36">
        <div className="absolute top-0 left-0 w-screen h-full z-[-1] opacity-[.2] flex items-center justify-center">
          <Image
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
            src={bg}
            alt=""
          />
        </div>
        <div className="bg-blue pt-14 p-4 w-full h-[50%] md:h-[70%] flex items-center justify-center z-[2]">
          <div className={styles.text}>
            <p className={styles.header}>It's a wedding</p>
            <p>Harold</p>
            <div className="flex">
              <p>&</p>
              <p>Edge</p>
            </div>
          </div>
        </div>
        <div className="h-[40%] flex items-center w-full">
          <Countdown />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const ScrollDown = () => {
  return <div></div>;
};
