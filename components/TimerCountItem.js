import React from "react";

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl text-white">{time.length > 1 ? time : 0 + time}</p>
      <p className="text-white font-medium text-xs">{text}</p>
    </div>
  );
}
