import React from "react";

import { Link as Anchor } from "react-scroll";

export default function Logo({ wide }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  const svg = {
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { scale: 0, opacity: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { scale: 1, opacity: 1, pathLength: 0, transition: { duration: 0.3 } },
    hidden: { scale: 0, opacity: 0, pathLength: 1, transition: { duration: 1 } },
  };
  return (
    <Anchor to="top" {...linkProps} className="block w-[93px] lg:w-[139px] xl:w-[183px]">
      <img
        className="w-full"
        src="/imgs/logo.png"
        width={183}
        height={71}
        alt="SNEAKER BEARS"
      />
    </Anchor>
  );
}
