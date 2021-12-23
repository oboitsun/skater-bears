import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards, Autoplay]);

export default function CarouselCards() {
  const [interval, setCurrInterval] = useState(null);
  const [carousel, setCarousel] = useState(false);
  const [slide, setSlide] = useState(0);
  const [rtl, setRtl] = useState(false);
  useEffect(() => {
    carousel && carousel.slideNext();
  }, [carousel]);
  useEffect(() => {
    const intr = setInterval(() => {
      carousel && !rtl && carousel?.slideNext();
      carousel && rtl && carousel?.slidePrev();
    }, 3000);
    setCurrInterval(intr);
    return clearInterval(interval);
  }, [rtl, slide]);
  return (
    <div className="w-full ">
      <Swiper
        modules={[Controller]}
        onReachBeginning={() => {
          setRtl(false);
        }}
        onReachEnd={() => {
          setRtl(true);
        }}
        effect={"cards"}
        onSlideChange={(e) => {
          setSlide(e.activeIndex);
        }}
        grabCursor={true}
        onSwiper={(swiper) => {
          setCarousel(swiper);
        }}
        controller={{ control: carousel }}
        className="mySwiper carousel2"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center w-full h-full">
            <img className="w-full" src="/imgs/postcard1.png" alt="card" />
            <p className="font-bold text-xs lg:text-2xl text-center my-auto"></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center w-full h-full">
            <img className="w-full" src="/imgs/postcard2.png" alt="card" />
            <p className="font-bold text-xs lg:text-2xl text-center my-auto"></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center w-full h-full">
            <img className="w-full" src="/imgs/postcard3.png" alt="card" />
            <p className="font-bold text-xs lg:text-2xl text-center my-auto"></p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center w-full h-full">
            <img className="w-full" src="/imgs/postcard4.png" alt="card" />
            <p className="font-bold text-xs lg:text-2xl text-center my-auto"></p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
