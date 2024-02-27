import React from "react";

import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import { TbWorld } from "react-icons/tb";

const FooterComponent = () => {
  return (
    <div
      className="text-white flex md:flex-row flex-col gap-5  items-center justify-around p-12 mt-7"
      style={{ backgroundColor: "rgb(236, 50, 55)" }}
    >
      <a
        href="tel:18002001234"
        target="_blank"
        className="flex flex-row items-center gap-3 hover:cursor-pointer hover:scale-110 transition-all duration-300"
      >
        <IoMdCall className="bg-white text-red-600 rounded-full size-10 p-[0.3rem]" />
        <p className="md:text-2xl font-semibold">
          Toll free <span className="font-bold">1800 200 1234</span>
        </p>
      </a>
      <a
        href="https://www.facebook.com/cripumps"
        target="_blank"
        className="md:text-2xl font-semibold"
      >
        <div className="flex flex-row items-center gap-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
          <FaFacebookF className="bg-white text-red-600 rounded-full size-10 p-[0.2rem] " />
          www.facebook.com/cripumps
        </div>
      </a>
      <a
        href="https://www.crigroups.com/"
        target="_blank"
        className="md:text-2xl font-semibold"
      >
        <div className=" flex flex-row items-center gap-3 hover:cursor-pointer hover:scale-110 transition-all duration-300">
          <TbWorld className="text-white rounded-full size-11 p-[0.2rem]" />
          www.crigroups.com
        </div>
      </a>
    </div>
  );
};

export default FooterComponent;
