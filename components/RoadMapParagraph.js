import React from "react";

export default function RoadMapParagraph({ month, paragraph, odd }) {
  return (
    <div className={`text-center lg:text-left ${!odd && "lg:col-start-1 row-start-1"}`}>
      <p className="text-crmsn font-extrabold uppercase text-2xl lg:text-[32px] xl:text-5xl lg:pb-5">
        {month}
      </p>
      <p className="text-black font-medium text-xs leading-loose lg:text-sm lg:leading-loose xl:text-base xl:leading-loose">
        {paragraph}
      </p>
    </div>
  );
}
