"use client";

import { useState } from "react";

import Image from "next/image"; // new  version of next does not accept fill and other properiedades

export const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>("");

  return (
    <div className=" flex flex-col justify-between items-start min-h-[100vh] h-full max-w-[70px] w-full border-r shrink-0">
      <div className=" w-full">
    

        <div className="group border-t flex flex-col justify-center items-center py-5 px-0 self-stretch gap-5">
          <button
            className={`flex w-10 h-10 justify-center  items-center hover:bg-blue-50  rounded-md tooltip tooltip-right   not-after`}
            data-tip="Home"
            onMouseEnter={() => setHoveredIcon("home")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {" "}
         
          </button>

          <button
            className={`flex w-10 h-10 justify-center items-center hover:bg-blue-50  rounded-md tooltip tooltip-right  not-after`}
            data-tip="Stats"
            onMouseEnter={() => setHoveredIcon("layers")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {" "}
         
          </button>

          <button
            className={`flex w-10 h-10 justify-center items-center hover:bg-blue-50  rounded-md tooltip tooltip-right  `}
            data-tip="Projects"
            onMouseEnter={() => setHoveredIcon("chart")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {" "}
           
          </button>
          <button
            className={`flex w-10 h-10 justify-center items-center hover:bg-blue-50  rounded-md tooltip tooltip-right  not-after`}
            data-tip="Users"
            onMouseEnter={() => setHoveredIcon("users")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {" "}
         
          </button>
        </div>
      </div>
      <div className=" flex py-5 px-0 justify-center flex-col items-center gap-5 self-stretch ">
        <button
          className={`flex w-[30px] h-[30px] justify-center items-center hover:bg-blue-50 rounded-md tooltip tooltip-right  not-after`}
          data-tip="Support"
          onMouseEnter={() => setHoveredIcon("bouy")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
       
        </button>

        <button
          className={`flex w-[30px] h-[30px] justify-center items-center hover:bg-blue-50  rounded-md tooltip tooltip-right not-after`}
          data-tip="Settings"
          onMouseEnter={() => setHoveredIcon("settings")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
        uhj
        </button>
        <button
          className="flex w-[40px] h-[40px] radius flex-col justify-center items-center  tooltip tooltip-right not-after"
          data-tip="Account"
        >
          <Image src="/Avatar.jpg" width={35} height={35} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
