import React from "react";
import CarouselHeroSection from "./CarouselHeroSection";
import Features from "./Features";
import WelcomeTo from "./WelcomeTo";

export default function HeroSection({ showPopup, setShowPopup, userAddress }) {
  return (
    <div className="relative z-[1] pt-[100px] lg:max-w-864 mx-auto xl:max-w-1080  px-10 lg:px-0 pb-10">
      <div className="flex lg:flex-row flex-col items-center">
        <CarouselHeroSection />
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
        />
      </div>

      <Features />
    </div>
  );
}
