import React, { useState, useRef } from "react";

export default function FaqItem({ qstn, answr }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
  }
  return (
    <div className="lg:w-full">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer flex w-full justify-between my-5 "
      >
        <p className="font-extrabold text-xs uppercase text-white">{qstn}</p>
        <img
          className={`transform transition-all ${setActive ? "rotate-180" : "rotate-0"}`}
          src="/imgs/expand-arrow.svg"
          alt="expand"
        />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="text-white transition-all overflow-hidden "
      >
        <p className="pb-5">{answr}</p>
      </div>
      <div className="h-px bg-lghtGray w-full opacity-50 flex-shrink-0"></div>
    </div>
  );
}
