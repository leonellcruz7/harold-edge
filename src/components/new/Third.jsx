import React, { useEffect, useState } from "react";

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
  const [count, setCount] = useState(null);
  const countdown = [
    {
      label: "days",
      value: count?.days,
    },
    {
      label: "hours",
      value: count?.hours,
    },
    {
      label: "minutes",
      value: count?.minutes,
    },
    {
      label: "seconds",
      value: count?.seconds,
    },
  ];
  useEffect(() => {
    const targetDate = new Date(2024, 1, 25, 0, 0, 0); // February 25, 2024 00:00:00

    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCount({ days, hours, minutes, seconds });
      } else {
        document.getElementById("countdown").innerHTML = "Countdown expired!";
      }
    }

    // Update the countdown every second (1000 milliseconds)
    setInterval(updateCountdown, 1000);

    // Initial call to set the initial countdown value
    updateCountdown();
  }, []);
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
