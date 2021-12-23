import React from "react";

export default function FormInput({ type, plchldr }) {
  const cmnStyles = "w-full rounded-[10px]  text-medium";
  const submitStyles = "border-2";
  return type !== "submit" ? (
    <input
      required
      className={`${cmnStyles} block text-black placeholder-black  bg-white  p-5`}
      type={type}
      placeholder={plchldr}
    />
  ) : (
    <input
      required
      className={`${cmnStyles} block bg-transparent border-2 p-3   text-white`}
      type={type}
      value={plchldr}
    />
  );
}
