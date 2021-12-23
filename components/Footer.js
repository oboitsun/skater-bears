import React from "react";

import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import dynamic from "next/dynamic";
import Socials from "./Socials";

const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function Footer({ showPopup, setShowPopup, userAddress }) {
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
    className:
      "cursor-pointer text-white font-bold  transform transition-all hover:scale-110 hover:text-crmsn ",
  };
  return (
    <div className="w-full  py-[30px] px-10 lg:px-0   bg-black relative z-[2] ">
      <div className="max-w-864 xl:max-w-1080 mx-auto justify-between flex items-center">
        <div className="flex flex-col items-center">
          <Logo wide={false} />
          <div className="lg:hidden pt-5">
            {" "}
            <Socials big />
          </div>

          <p className="text-gray-400 lg:hidden text-center py-5">
            2021 © NZ Marketing Group Limited trading as Munchy. All Rights Reserved.
          </p>
        </div>

        <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
          {links.map((l, i) => (
            <Anchor key={i} to={l.href} {...linkProps}>
              {l.text}
            </Anchor>
          ))}
          <DynamicComponent
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            userAddress={userAddress}
          />
        </div>
      </div>
    </div>
  );
}
