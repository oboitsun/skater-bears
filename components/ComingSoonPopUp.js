import React, { useEffect } from "react";

export default function ComingSoonPopUp({ showPopup, setShowPopup }) {
  console.log(showPopup);
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    return () => {};
  }, [showPopup]);
  return (
    <div
      className={`${
        showPopup ? "opacity-100 " : "pointer-events-none opacity-0"
      } transition-all duration-300 fixed z-40 bg-black/80 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <div className="w-1/2 max-w-864 h-auto p-10 rounded-xl ">
        <p className="text-white text-7xl text-center">Coming soon!:)</p>
      </div>
    </div>
  );
}
