import React from "react";
import { motion } from "framer-motion";

const Burger = ({ setShowMenu, showMenu }) => {
  const variants = {
    open: { rotate: 0, transition: { duration: 0.5 } },
    close: (custom) => ({ rotate: custom ? 45 : -45, transition: { duration: 0.5 } }),
  };
  const variants2 = {
    open: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
    close: { opacity: 0, transition: { duration: 0.4 } },
  };
  const Path = (props) => (
    <motion.path
      className="  "
      fill="currentColor"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
      initial={showMenu ? "open" : "close"}
      animate={showMenu ? "close" : "open"}
    />
  );
  return (
    <svg
      onClick={() => {
        setShowMenu(!showMenu);
      }}
      className={`text-white fill-current  w-7 h-5  cursor-pointer lg:hidden `}
      viewBox="0 0 23 23"
    >
      <Path
        filter="drop-shadow( 0.5px 0.5px 0.5px  rgba(0, 0, 0, .2))"
        variants={variants2}
        d="M 2 4 L 20 4 "
        key={2}
        stroke="currentColor"
      />
      <Path
        filter="drop-shadow( 0.5px 0.5px 0.5px  rgba(0, 0, 0, .1))"
        custom={true}
        variants={variants}
        d="M 2 10 L 20 10"
        key={1}
        stroke="currentColor"
      />
      <Path
        filter="drop-shadow( 0.5px 0.5px 0.5px  rgba(0, 0, 0, .1))"
        custom={false}
        variants={variants}
        d="M 2 10 L 20 10"
        key={4}
        stroke="currentColor"
      />

      <Path
        filter="drop-shadow( 0.5px 0.5px 0.5px  rgba(0, 0, 0, .2))"
        variants={variants2}
        d="M 2 16 L 20 16"
        key={3}
        stroke="currentColor"
      />
    </svg>
  );
};

export default React.memo(Burger);
