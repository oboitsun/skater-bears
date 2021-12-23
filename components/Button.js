import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Button({
  text = "free trial",
  type = "filled",
  spcng = "px-4",
  addClass,
  icon = true,
  ...props
}) {
  const cmn =
    "group  text-white leading-none font-bold text-sm lg:text-base py-2  flex items-center justify-center rounded-[10px] box-content transitions-all duration-[0.4s]";
  const styles = {
    filled: {
      hovered:
        "hover:border-crmsn border-2 hover:bg-transparent hover:text-crmsn hover:shadow-lg hover:scale-[105%] hover:transform",
      unhovered: " bg-crmsn border-2 border-transparent ",
    },
    outlined: {
      hovered:
        "hover:border-white   hover:bg-crmsn hover:text-white hover:shadow-lg hover:scale-[105%] hover:transform hover:text-white",
      unhovered: "border-2 border-white text-white",
    },
  };

  return (
    <button
      {...props}
      className={`${spcng}   ${cmn} ${styles[type].hovered}   ${
        styles[type].unhovered
      }  ${addClass ? addClass : ""}`}
    >
      <span className=" ">{text}</span>
      {icon && (
        <svg
          className="fill-current transform transition-transform group-hover:bounce-x ml-2.5"
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 8.4875V4C18.75 3.83424 18.6842 3.67527 18.5669 3.55806C18.4497 3.44085 18.2908 3.375 18.125 3.375H17.5V1.5C17.5 1.16848 17.3683 0.850537 17.1339 0.616116C16.8995 0.381696 16.5815 0.25 16.25 0.25H1.25C0.918479 0.25 0.600537 0.381696 0.366117 0.616116C0.131696 0.850537 0 1.16848 0 1.5L0 17.75C0 17.9158 0.065848 18.0747 0.183058 18.1919C0.300269 18.3092 0.45924 18.375 0.625 18.375H18.125C18.2908 18.375 18.4497 18.3092 18.5669 18.1919C18.6842 18.0747 18.75 17.9158 18.75 17.75V13.2625C19.1147 13.1336 19.4306 12.895 19.6544 12.5794C19.8782 12.2639 19.9989 11.8868 20 11.5V10.25C19.9989 9.86316 19.8782 9.48612 19.6544 9.17058C19.4306 8.85504 19.1147 8.61645 18.75 8.4875ZM1.25 1.5H16.25V3.375H1.25V1.5ZM17.5 17.125H1.25V4.625H17.5V8.375H13.125C12.6277 8.375 12.1508 8.57254 11.7992 8.92417C11.4475 9.27581 11.25 9.75272 11.25 10.25V11.5C11.25 11.9973 11.4475 12.4742 11.7992 12.8258C12.1508 13.1775 12.6277 13.375 13.125 13.375H17.5V17.125ZM18.75 11.5C18.75 11.6658 18.6842 11.8247 18.5669 11.9419C18.4497 12.0592 18.2908 12.125 18.125 12.125H13.125C12.9592 12.125 12.8003 12.0592 12.6831 11.9419C12.5658 11.8247 12.5 11.6658 12.5 11.5V10.25C12.5 10.0842 12.5658 9.92527 12.6831 9.80806C12.8003 9.69085 12.9592 9.625 13.125 9.625H18.125C18.2908 9.625 18.4497 9.69085 18.5669 9.80806C18.6842 9.92527 18.75 10.0842 18.75 10.25V11.5Z"
            fill="current"
          />
        </svg>
      )}
    </button>
  );
}
