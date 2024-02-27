import React from "react";

import logo from "../assets/images/logo.png";
import trophy from "../assets/images/1.png";
import award from "../assets/images/2.png";

import { GoDotFill } from "react-icons/go";

const TrophyComponent = () => {
  return (
    <div>
      {/*Header */}
      <div className="w-full flex justify-center   items-start p-8">
        {/* images */}
        <a href="https://www.crigroups.com/" target="_blank">
          <div className=" h-[10rem] hover:scale-110 transition-all duration-500">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </a>
      </div>

      {/* Trophy */}
      <div className=" pl-[11rem] flex flex-row justify-between">
        {/* trophy image */}

        <div className="w-[60%] hover:scale-110 transition-all duration-500">
          <img
            src={trophy}
            alt="Trophy Logo"
            className="w-full h-full object-cover overflow-hidden "
          />
        </div>

        {/* award image */}
        <div className="flex flex-col px-[11rem]  text-2xl font-semibold">
          <p className="font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>

          <div className="p-6">
            <div className="flex flex-row gap-2">
              <GoDotFill />
              <p>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <GoDotFill className="size-8" />
              <p>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </div>

            <div className=" mt-10 hover:scale-105 transition-all duration-500 ">
              <img
                src={award}
                alt="award image"
                className="w-full h-full object-cover overflow-hidden -ml-7 "
              />
            </div>
          </div>

          <p className="text-2xl pr-[11rem]">
            Government of India has awarded the{" "}
            <span className="font-bold">
              {" "}
              National Energy Conservation Award 2018
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrophyComponent;
