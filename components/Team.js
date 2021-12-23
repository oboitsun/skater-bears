import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const team = [
  {
    src: "/imgs/postcard1.png",
    name: "FUZZ",
    position: "CEO",
  },
  {
    src: "/imgs/postcard2.png",
    name: "BROWNIE",
    position: "Marketing",
  },
  {
    src: "/imgs/postcard3.png",
    name: "ICE CUP",
    position: "Developer",
  },
  {
    src: "/imgs/postcard4.png",
    name: "BREEZE",
    position: "Designer",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: {
      x: 0,
      scale: [1, 1.3, 1],
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.5 },
    },
    hidden: { x: "-100%", scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };
  const item1 = {
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: "-50px", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <div id="team" className="bg-lghtGray py-14 lg:py-[100px] xl:py-[120px]">
      <div className="px-10 max-w-864 xl:max-w-1080 lg:px-0 mx-auto">
        <p className="text-crmsn font-extrabold uppercase text-4xl text-center">team</p>
        <p className="text-black font-medium   text-xs lg:text-xl leading-loose text-center">
          {` Some of the Skater Bears who have joined forces to make this happen…`}
        </p>
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-6 mt-6 lg:grid-cols-4 lg:grid-rows-1 lg:mt-10"
        >
          {team.map((t, i) => (
            <motion.div variants={item} key={i} className="flex flex-col w-full">
              <div className="w-full relative z-[1] hover:scale-105 transition-transform">
                <img
                  className="w-full"
                  src={t.src}
                  alt={t.name}
                  width={239}
                  height={253}
                />
              </div>
              <motion.p
                variants={item1}
                className="text-black font-bold text-sm py-0.5 lg:text-base xl:text-2xl z-[0]"
              >
                {t.name}
              </motion.p>
              <motion.p
                variants={item1}
                className="text-crmsn font-bold text-xs lg:text-sm xl:text-base z-[0]"
              >
                {t.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
