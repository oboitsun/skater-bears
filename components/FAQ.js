import React from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    qstn: "How do I buy a Skater Bears?",
    answr: `It’s simple, just press the “Connect Wallet” button, and connect with either
  STOIC Wallet or Plug. You will then be able to “Mint” your own Skater Bear
  using the “Mint Now” button. Please note there is a limit of 20 Skater
  Bears per person.`,
  },
  {
    qstn: "What Blockhain and technology are Skater Bears on?",
    answr: `We have minted the Skater Bears on the DFINITY Internet Computer
  blockchain, in which we believe is perfect for the project.`,
  },
  {
    qstn: "What can I do with once I get my Skaters Bears NFT?",
    answr: `At this stage you can collect it, like other NFT’s with the high possibility of 
  the value of it increasing. We believe that not only is it fun, cool artwork,
  but there could be potential in the future to turn Skater Bears into
  potentially a game, or something even larger in the future.`,
  },
  {
    qstn: "How many Skater Bears caan I buy?",
    answr: `You can buy only 20 Skater Bears per person. There will be other ones
  available on the secondary market place in which you can buy and sell
  your Skater Bears as you wish.`,
  },
  {
    qstn: "What wallet do I need to be able to connect to buy?",
    answr: `You can connect using STOIC Wallet or Plug Wallet at this time.`,
  },
  {
    qstn: "What are the future plans for the Skaters Bears project?",
    answr: `We have plans to make a potential game, donations, airdrops and rewards
    - so stay tuned!`,
  },
];
export default function FAQ() {
  return (
    <div id="faq" className="bg-black px-10 py-14  overflow-hidden relative">
      <p className="text-white text-center pb-10 uppercase font-extrabold text-2xl lg:text-[32px] xl:text-[48px] relative z-[1]">
        faq
      </p>
      <div className="flex flex-col lg:grid grid-cols-2 gap-x-5 auto-rows-auto flex-wrap  relative z-[1] max-w-864 xl:max-w-1080 mx-auto">
        <div className="h-px bg-lghtGray w-full  opacity-50 flex-shrink-0"></div>
        <div className="hidden  lg:block h-px bg-lghtGray w-full opacity-50 flex-shrink-0"></div>
        {faqs.map((f, i) => (
          <FaqItem key={i} {...f} />
        ))}
      </div>

      <div className="absolute w-full h-full top-0 left-0">
        <img
          className="w-full h-full object-cover"
          src="/imgs/faq.png"
          alt="hero section"
        />
      </div>
    </div>
  );
}
