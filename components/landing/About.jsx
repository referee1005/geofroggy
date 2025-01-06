import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchLandingAboutusRequest } from "@/actions/home";
import { useRouter } from "next/router";
import world_icon from "../../public/images/landing/World.png";
import group_icon from "../../public/images/landing/Group.png";
import LandingReadMoreButton from "../reusable/LandingReadMoreButton";

function AboutUs({}) {
  const data = useSelector((state) => state.home.aboutus);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchLandingAboutusRequest());
  }, [dispatch]);

  return (
    <div className="flex md:flex-row flex-col container-custom py-16 lg:py-24 2xl:py-32">
      <div className="md:w-[50%] flex items-center justify-center">
        <div className="z-10">
          {" "}
          <div
            className={`rounded-full border-2 border-radius p-4 xl:p-6 3xl:p-8 border-[#8CC63E]`}
          >
            <Image
              src={data.front_image}
              className={`cursor-pointer rounded-full object-cover w-96 h-96 aspect-square z-10`}
              layout="intrinsic"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="z-1">
          <div
            className={`rounded-full border-2 border-radius p-2 xl:p-4 3xl:p-6 border-[#195883] -translate-x-[30%]`}
          >
            <Image
              src={data.back_image}
              className={`cursor-pointer rounded-full object-cover w-64 h-64 aspect-square z-1`}
              layout="intrinsic"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 2xl:gap-4 ">
        <div>
          <Image
            src={group_icon}
            className="w-6"
            layout="intrinsic"
            width={100}
            height={100}
            priority={true}
            alt={"Home Image"}
          />
        </div>
        <div className="text-[#195883] text-xl 2xl:text-2xl">About Us</div>
        <div className="text-[#8CC63E] font-semibold xs:text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
          <div className="flex items-center">
            <span className="mr-2">Discover The World</span>
            <div className="relative">
              <Image
                src={world_icon}
                className="object-contain"
                layout="responsive"
                width={50}
                height={50}
                priority={true}
                alt={"Home Image"}
              />
            </div>
          </div>
          <div>Around You On Finger Tips</div>
        </div>
        <div className="text-sm lg:text-base">{data.text}</div>
        <div>
          {" "}
          <LandingReadMoreButton
            title={"Read More"}
            backgroundColor={"#8CC63E"}
            color1="white"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
