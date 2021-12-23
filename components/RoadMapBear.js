import React from "react";
import { motion } from "framer-motion";
export default function RoadMapBear({ src, bg, odd, delay }) {
  return (
    <motion.div
      animate={{ rotate: 4 }}
      transition={{
        repeatType: "reverse",
        repeat: "Infinity",
        duration: 4,

        delay: delay * 0.5,
      }}
      className={`overflow-hidden hover:-translate-y-10 transition-transform ${
        odd ? "right-[3%]" : "left-[3%]"
      } relative lg:w-full  w-[55%]  h-full  transform ${
        !odd && "scale-x-[-1] lg:col-start-2 row-start-1"
      }`}
    >
      <div
        className={`${bg} absolute w-[90%] pb-[90%] top-[9%] left-[9%] rounded-full border`}
      ></div>

      <img className="block w-full relative z-[1]" src={src} alt="bear roadmap" />
    </motion.div>
  );
}
