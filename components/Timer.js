import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const today = Date.now();
  const dayX = new Date(Date.UTC(2023, 10, 10, 0, 0, 0)).getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return dayX < today ? (
    <p className="font-fright text-xl lg:text-4xl text-white pb-4 uppercase font-bold">
      Ready to Mint now!
    </p>
  ) : (
    <div className=" flex items-center  mb-4 lg:mb-6 lg:mt-4">
      <p className="font-medium text-white text-xs flex-shrink-0 pr-4">
        Time till
        <br /> launch:
      </p>
      <div className="grid grid-cols-[repeat(4,min-content)] gap-4 text-white ">
        <TimerCountItem time={timeLeft.days} text="Days" />
        <TimerCountItem time={timeLeft.hours} text="Hours" />
        <TimerCountItem time={timeLeft.minutes} text="Minutes" />
        <TimerCountItem time={timeLeft.seconds} text="Seconds" />
      </div>
    </div>
  );
}
