import React from "react";
import styles from "./styles.module.scss";
import bg from "../../images/herobg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className="container h-full pt-24 md:pt-28">
        <div className="absolute top-0 left-0 w-screen h-full z-[-1] opacity-[.2] flex items-center justify-center">
          <Image
            width={2000}
            height={2000}
            className="w-full h-full object-cover"
            src={bg}
            alt=""
          />
        </div>
        <div className="bg-blue p-4 w-full h-[60%] z-[2]">
          <div className={styles.text}>
            <p>Harold</p>
            <p>&</p>
            <p>Edge</p>
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

const Countdown = () => {
  const countdown = [
    {
      label: "days",
      value: 100,
    },
    {
      label: "hours",
      value: 2,
    },
    {
      label: "minutes",
      value: 49,
    },
    {
      label: "seconds",
      value: 20,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-center text-blue">
        <p>Celebrate with us</p>
      </div>
      <div className="w-full max-w-[500px] mx-auto h-[100px] border-y-[.2px] border-blue py-10 flex items-center justify-center gap-10">
        {countdown.map((item, index) => {
          const { label, value } = item;
          return (
            <div key={index} className="text-center">
              <p className="text-blue font-semibold text-3xl">{value}</p>
              <p className="text-sm text-grey">{label}</p>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center">
        <button className="button">RSVP</button>
      </div> */}
    </div>
  );
};

const ScrollDown = () => {
  return <div></div>;
};
