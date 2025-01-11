import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchInspireConnectionRequest } from "@/actions/home";
import { useRouter } from "next/router";
import SubscriptionLogo from "../../public/images/landing/subscription-logo.png";

export const Subscription = ({ }) => {
  return (
    <div className="container-custom flex flex-col items-center justify-center pt-16 px-5 lg:px-20 mb-[-120px]">
      <div className="w-full border border-white p-4 rounded-[22px]">
        <div className="rounded-[22px] border-[1px] w-full h-120 flex flex-col items-center justify-center" id="landing-subscription-bg">
          {/* Subscription Card */}
          <div className="relative flex items-center justify-center w-[54px] h-[54px] bg-[#8CC63E] rounded-full p-[12px] mb-[-27px]">
            <Image
              src={SubscriptionLogo} // Replace with the correct icon path
              alt="Newsletter Icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-white bg-opacity-60 rounded-lg shadow-xl w-[90%] max-w-[600px] p-8 text-center">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4 text-[36px]">
              Subscribe To Our Newsletter
            </h2>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#8CC63E] hover:bg-[#6fae36] text-white px-6 py-2 rounded-md font-medium shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Subscription;
