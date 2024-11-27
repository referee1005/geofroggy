import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../reusable/CustomButton";

function Partner1({ plans }) {
  const [selectedPlan, setPlan] = useState(null);
  const selectPlan = (index) => {
    setPlan(index);
  };
  return (
    <div className="lg:container-custom flex flex-col items-center  mb-[80px]">
      <div className="flex flex-col items-center gap-4 my-[80px]">
        <div className="font-semibold">Choose the type best suits you</div>
        <div className="text-2xl ms:text-3xl sm:text-4xl lg:text-5xl font-semibold ms:w-[80%] lg:w-2/3 text-center">
          We help small businesses with big ideas
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 px-16 ms:px-28 lm:px-32 sm:px-0 lg:px-16 xl:px-24 2xl:px-48 3xl:px-64">
        {plans.map((item, index) => (
          <div
            className={`flex flex-col gap-2 ms:gap-4 sm:gap-2 md:gap-4 items-center px-4 py-8 lg:px-6 lg:py-12 xl:px-8 xl:py-16 3xl:py-20 ${
              selectedPlan === index ? "bg-[#195883]" : ""
            } rounded-xl`}
            onClick={() => selectPlan(index)}
          >
            <Image
              src={item.plan_icon}
              width={100}
              height={100}
              className="w-[48px] lg:w-[64px]"
            />
            <div
              className={`text-center text-sm lg:text-base ${
                selectedPlan === index ? "text-white" : ""
              }`}
            >
              {item.plan_description}
            </div>
            <div
              className={`font-semibold text-sm md:text-base lg:text-lg ${
                selectedPlan === index ? "text-white" : ""
              } text-center`}
            >
              {item.plan_title}
            </div>
            <button
              className={`text-[#8CC63E] border-[#8CC63E] border-2 px-2 py-1 lg:px-4 lg:py-2 rounded-full`}
              aria-label="Join Us Button"
              // onClick={click}
            >
              <div className="inline text-sm lg:text-base">
                {"Submit Request"}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner1;
