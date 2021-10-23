import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import Button from "./Button";

export default function Footer({ showMenu, setShowMenu }) {
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
    <div className="w-full  py-[30px] px-10 lg:px-0   bg-black">
      <div className="max-w-864 xl:max-w-1080 mx-auto justify-between flex items-center">
        <div className="flex flex-col items-center">
          <Logo wide={false} />
          <p className="text-gray-600 lg:hidden text-center py-5">
            2021 © NZ Marketing Group Limited trading as Munchy. All Rights Reserved.
          </p>
        </div>

        <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
          {links.map((l, i) => (
            <Anchor key={i} to={l.href} {...linkProps}>
              {l.text}
            </Anchor>
          ))}
          <Button type="outlined" spcng="px-7 filter invert" text="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}