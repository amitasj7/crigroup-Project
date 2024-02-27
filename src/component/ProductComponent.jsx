import React from "react";

import product from "../assets/images/3.png";

const ProductComponent = () => {
  return (
    <div className="flex flex-col mt-[6rem] px-5 gap-5">
      <p className="md:text-2xl  font-semibold ">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>

      <div className="md:px-[11rem] px-[2rem] mx-auto my-auto">
        <img
          src={product}
          alt="Products"
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>

      <div>
        <p className="md:text-2xl text-center  font-semibold pt-20 pb-5">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>

        <div className="border-b-[0.2rem] border-red-700 mx-5 "></div>

        <p className="md:text-2xl font-bold text-center p-4">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>

        <div className="md:text-2xl font-semibold px-[3rem] text-center">
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS |
          PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE |
          METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR
          | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
