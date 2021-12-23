import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const bears = [
  { src: "/imgs/bear1.png", name: "" },
  { src: "/imgs/bear2.png", name: "" },
  { src: "/imgs/bear3.png", name: "" },
  { src: "/imgs/bear4.png", name: "" },
  { src: "/imgs/bear5.png", name: "" },
  { src: "/imgs/bear6.png", name: "" },
  { src: "/imgs/bear7.png", name: "" },
  { src: "/imgs/bear8.png", name: "" },
  { src: "/imgs/bear9.png", name: "" },
  { src: "/imgs/bear10.png", name: "" },
  { src: "/imgs/bear11.png", name: "" },
];

export default function CarouselHeroSection() {
  return (
    <div className=" w-full lg:w-[60%] xl:w-[50%] flex-grow-1 lg:order-1 relative  max-w-[400px] lg:max-w-[450px] mx-auto ">
      <div className=" ">
        <div className="swpr-button swpr-prev">
          <img
            className="transform rotate-180"
            src="/imgs/carousel-arrow.svg"
            alt="prev slide"
          />
        </div>
        <div className="swpr-button swpr-next">
          <img src="/imgs/carousel-arrow.svg" alt="next slide" />
        </div>
        <Swiper
          autoplay={{ delay: 2500 }}
          className=""
          centeredSlides={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swpr-next",
            prevEl: ".swpr-prev",
          }}
        >
          {bears.map((bear, i) => (
            <SwiperSlide key={i} className="w-full">
              <div className="w-full relative  ">
                <div className="absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 pb-[66.67%] rounded-full bg-black/10"></div>
                <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] ">
                  <img className="w-full" src="/imgs/splash-bg.png" alt="splash" />
                </div>
                <img
                  className="z-[3] relative w-full"
                  src={bear.src}
                  alt="NFT Bear"
                  width={192}
                  height={210}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
