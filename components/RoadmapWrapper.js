import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function RoadmapWrapper({ children }) {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const cont = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
