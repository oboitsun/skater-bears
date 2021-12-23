import React from "react";
import RoadMapBear from "./RoadMapBear";
import RoadMapParagraph from "./RoadMapParagraph";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function Roadmap() {
  const cont = {
    show: { transition: { staggerChildren: 0.5, delayChildren: 0.6 } },
    hidden: {},
  };
  const roadmap = [
    {
      bg: "bg-[#F3FFF0]",
      bearSrc: "/imgs/bear7.png",
      arrow: {
        src: "/imgs/arrow-down.png",
        w: 201,
        h: 240,
        pos: " w-[20%] top-[80%] left-[40%]",
      },
      cols: "grid-cols-[42%,1fr]",
      odd: true,
      month: "Octo-bear 2021",
      p: `The vision of Skater Bears begins, and preparation for the project is
      underway.`,
    },
    {
      bg: "bg-[#FFF6F0]",
      bearSrc: "/imgs/bear10.png",
      arrow: {
        src: "/imgs/arrow-down.png",
        w: 201,
        h: 240,
        pos: " w-[20%] top-[70%] right-[25%] scale-x-[-1]",
      },
      cols: "grid-cols-[1fr,42%]",
      odd: false,
      month: "Novem-bear 2021",
      p: `Development, design is underway for the project and the first set of bears
      start to be minted!`,
    },
    {
      bg: "bg-[#F0FAFF]",
      bearSrc: "/imgs/bear5.png",
      arrow: {
        src: "/imgs/arrow-last.png",
        w: 315,
        h: 306,
        pos: "w-[25%] top-[80%] left-[46%]",
      },
      cols: "grid-cols-[42%,1fr]",
      odd: true,
      month: "decem-bear 2021",
      p: `The final amount of bears are minted and are now available on the
      marketplace.`,
    },
    {
      bg: "bg-[#F7F7F7]",
      bearSrc: "/imgs/bear6.png",
      arrow: false,
      cols: "grid-cols-[1fr,42%]",
      odd: false,
      month: "JANUARY 2022",
      p: `Future development, airdrops, rewards and potential game is in the works.`,
    },
  ];
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });

  const item = {
    show: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.5, delayChildren: 0.5 },
    },
    hidden: { opacity: 0, transition: { duration: 1 } },
  };
  const item1 = {
    show: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      id="roadmap"
      className="py-14 px-10 lg:px-0 max-w-864 xl:max-w-1080 mx-auto flex flex-col items-center"
    >
      <p className="text-[32px] font-extrabold uppercase text-center">Roadmap </p>

      {roadmap.map((point, i) => (
        <motion.div
          key={i}
          variants={item}
          className={`w-full flex flex-col lg:grid ${point.cols} gap-x-20 items-center gap-y-6 mb-10 relative`}
        >
          <motion.div
            variants={item1}
            key={2}
            className={`w-full flex  mx-auto justify-center ${
              !point.odd && "lg:col-start-2 row-start-1"
            }`}
          >
            <RoadMapBear delay={i} src={point.bearSrc} bg={point.bg} odd={point.odd} />
          </motion.div>
          <motion.div
            variants={item1}
            key={22}
            className={`${!point.odd && "lg:col-start-1 row-start-1"}`}
          >
            <RoadMapParagraph odd={point.odd} month={point.month} paragraph={point.p} />
          </motion.div>
          {point.arrow && (
            <motion.div
              variants={item}
              className={`hidden lg:block absolute ${point.arrow.pos} transform -translate-x-1/2`}
            >
              <img
                className="w-full block"
                src={point.arrow.src}
                alt="arrow"
                width={point.arrow.w}
                height={point.arrow.h}
              />
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
