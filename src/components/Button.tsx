"use client"

import React, { CSSProperties } from "react";
import colorsList from "./colorsList.json";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props  {
    id?: any;
    text?: string;
    Icon?: IconType;
    height?: string ;
    width?: string;
    handleClick?: () => void;
}



function Button({
  id,
  text = "Button",
  Icon = FaArrowRight,
  height = '55',
  width = '180',
  handleClick= ()=>{}
}:Props) {

    const onclickHandle = ()=>{
        handleClick()
    }

  return (
    <>
        <button onClick={handleClick} className="p-0.5 overflow-hidden inline shadow-2xl shadow-[#3a2744] hover:shadow-[#4b2774] rounded-[18px]  group hover:animate-animationOnHover animate-animationOnLeave bg-btn-gradient-rotation">
          <span
            style={{
              "--height": height + "px",
              "--width": width + "px",
               } as CSSProperties}
            className="overflow-hidden  dark:text-white text-black relative rounded-[16px] w-[var(--width)] h-[var(--height)] grid grid-cols-[repeat(100,1%)] grid-rows-[repeat(2,50%)] bg-[#d9d9d9] dark:bg-[#141414] "
          >
            {colorsList.map((k: string, i:number) => (
              <span
                style={{
                  "--shadow-color": k + "60",
                  "--span-background": k + "50",
                } as CSSProperties}
                key={k}
                className="w-full z-10 h-full hover:bg-[var(--span-background)] hover:shadow-btnSpanShadow"
              ></span>
            ))}
            {colorsList.map((k:string, i:number) => (
              <span
                style={{
                  "--shadow-color": k + "60",
                  "--span-background": k + "50",
                } as CSSProperties}
                key={i}
                className="w-full z-10 h-full   hover:bg-[var(--span-background)] hover:shadow-btnSpanShadow"
              ></span>
            ))}

            <span className=" absolute w-full justify-center px-1  flex gap-2 items-center   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {" "}
              {text}
              <Icon className="group-hover:translate-x-1.5 text-sm transition duration-500 " />
            </span>
          </span>
        </button>
    </>
  );
}

export default Button;
