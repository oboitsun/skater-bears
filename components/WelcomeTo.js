import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Timer from "./Timer";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  connectStoic,
  connectWallet,
  userAddress,
}) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate="show"
      className="text-[32px] lg:text-[40px] lg:leading-[48px] leading-9 xl:text-[64px] xl:leading-[77px] font-extrabold text-crmsn w-full lg:w-[40%] xl:w-[50%] flex-shrink-0"
    >
      <motion.p variants={item} key={1} className="text-white uppercase">
        Welcome to
      </motion.p>
      <motion.p variants={item} key={2} className="uppercase">
        THE skater
      </motion.p>
      <motion.p variants={item} key={3} className="uppercase">
        bears <span className="text-white">club</span>
      </motion.p>
      <motion.div variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div variants={item} key={5} className="flex justify-start items-center">
        <DynamicComponent
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          connectStoic={connectStoic}
          connectWallet={connectWallet}
          userAddress={userAddress}
        />
        <img className="block ml-4" src="/imgs/dfinity.png" alt="dfinity blockchain" />
      </motion.div>
    </motion.div>
  );
}
