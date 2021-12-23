import React from "react";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
import { Link as Anchor } from "react-scroll";
import Socials from "./Socials";
const DynamicComponent = dynamic(() => import("./ConnectWalletMob"), {
  ssr: false,
});
export default function ModalMenu({
  showMenu,
  setShowMenu,
  userAddress,
  setUserAddress,
}) {
  const links = [
    { href: "about-us", text: "About Us" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    { href: "market", text: "Market" },
    { href: "faq", text: "FAQ" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white font-bold lg:text-grey ",
  };
  const cont = {
    show: {
      height: "100vh",
      opacity: 1,
      zIndex: 20,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    hidden: {
      zIndex: 0,
      height: "100vh",
      opacity: 0,
    },
  };
  const item = {
    show: { height: "auto", x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-50vh", opacity: 0 },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={showMenu ? "show" : "hidden"}
      className="bg-crmsn w-full z-20 fixed h-screen top-0 bottom-0 px-10 py-10 flex flex-col justify-between items-center   lg:hidden pt-[122px]"
    >
      {links.map((l, i) => (
        <motion.div key={i} variants={item} className="text-3xl mb-5">
          <Anchor
            onClick={() => {
              setShowMenu(false);
            }}
            to={l.href}
            {...linkProps}
          >
            {l.text}
          </Anchor>
        </motion.div>
      ))}
      <div className="my-auto">
        <DynamicComponent
          userAddress={userAddress}
          setUserAddress={setUserAddress}
          header
        />
      </div>
      <Socials big />
      <img
        className="block w-1/4 mx-auto pt-6"
        src="/imgs/dfinity.png"
        alt="dfinity blockchain"
      />
    </motion.div>
  );
}
