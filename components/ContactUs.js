import React from "react";
import Button from "./Button";
import FormInput from "./FormInput";

export default function ContactUs() {
  return (
    <div className="px-10 lg:px-0 py-14 bg-crmsn">
      <div className="max-w-864 xl:max-w-1080 mx-auto text-white grid gap-10 lg:grid-cols-[364px,1fr] lg:gap-20">
        <div className="">
          <p className="text-center lg:text-left  uppercase font-extrabold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[76px] mb-4">
            get in touch with us
          </p>
          {/* <p className=" text-center lg:text-left text-xs font-medium leading-loose lg:leading-loose lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p> */}
        </div>
        <form className="w-full flex flex-col gap-5">
          <FormInput plchldr="Name" type="text" />
          <FormInput plchldr="Email" type="text" />
          <textarea
            placeholder="Comments"
            className="p-5 bg-white font-medium placeholder-black text-black rounded-[10px] "
            rows="4"
          ></textarea>
          <FormInput plchldr="Get In Touch With Us" type="submit" />
        </form>
      </div>
    </div>
  );
}
