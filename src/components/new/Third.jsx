import React from "react";

const Third = () => {
  return (
    <div className="bg-[#905944] px-6 py-14 text-center text-white">
      <p className="cursive text-6xl">Save the Date!</p>
      <p>25th FEBRUARY, 2024</p>
      <div className="mt-10">
        <Countdown />
      </div>
    </div>
  );
};

export default Third;

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
      <div className="text-center text-white">
        <p>Celebrate with us</p>
      </div>
      <div className="w-full max-w-[500px] mx-auto h-[100px] border-y-[.2px] border-white py-10 flex items-center justify-center gap-10">
        {countdown.map((item, index) => {
          const { label, value } = item;
          return (
            <div key={index} className="text-center">
              <p className="text-white font-semibold text-3xl">{value}</p>
              <p className="text-sm text-white">{label}</p>
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
