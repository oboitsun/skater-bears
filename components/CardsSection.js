import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselCards from "./CarouselCards";
const team = [
  {
    src: "/imgs/postcard1.png",
    name: "Bold Blueberry",
    position: "CEO",
  },
  {
    src: "/imgs/postcard2.png",
    name: "Pineapple",
    position: "Marketing",
  },
  {
    src: "/imgs/postcard3.png",
    name: "Loco Lemmon",
    position: "Developer",
  },
  {
    src: "/imgs/postcard4.png",
    name: "Funky Fig",
    position: "Developer",
  },
];
export default function CardsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 0.1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      id="about-us"
      className="grid gap-10 px-10 lg:px-0 py-10 lg:py-[100px] lg:grid-cols-2 lg:max-w-864 mx-auto xl:max-w-1080 overflow-hidden"
    >
      <div className="w-full place-items-center place-self-center  lg:pr-10 max-w-[375px] mx-auto">
        <CarouselCards />
      </div>
      <motion.div
        ref={ref}
        variants={cont}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="w-full xl:text-[48px] xl:leading-[57px] text-[32px] leading-[38px] font-bold self-center flex flex-col justify-center lg:pt-20  place-self-center"
      >
        <motion.p
          variants={item}
          key={1}
          className="text-black uppercase font-extrabold "
        >
          What is
        </motion.p>
        <motion.p variants={item} key={2} className="text-crmsn uppercase font-extrabold">
          Skater Bears?
        </motion.p>
        <motion.p
          variants={item}
          key={3}
          className="font-medium text-xs lg:text-sm lg:leading-loose lg:max-w-[372px] leading-loose pb-4 lg:py-4 xl:text-base xl:leading-loose xl:max-w-[415px]"
        >
          Skater Bears are 8888 uniquely generated bears who love to skate, all living on
          the block chain. They have multiple traits, different boards and most of all
          love to skate!
        </motion.p>
        <motion.div variants={item} key={4}>
          {" "}
          <Button
            type="outlined"
            addClass="filter invert hover:invert-0"
            text="Get Your Own Bear"
            icon={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
