import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchCulturalHeritageRequest } from "@/actions/home";
import { useRouter } from "next/router";
import culturalHeritageLogo from "../../public/images/landing/cultural-heritage-logo.png";
import LandingReadMoreButton from "../reusable/LandingReadMoreButton";

export const CulturalHeritage = ({ }) => {
  const [culturalHeritage, setCulturalHeritage] = useState();
  const data = useSelector((state) => state.home.cultural_heritage);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCulturalHeritageRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("cultural heritage: ", data);
    if (data) {
      setCulturalHeritage(data);
    }
  }, [data]);

  return (
    <div className="container-custom relative flex flex-col my-[60px] py-10 lg:py-20 bg-[#8CC63E] lg:bg-white rounded-[50px] mx-5 md:mx-10 lg:mx-0">
      <div className="relative flex flex-col md:flex-row gap-8 bg-[#8CC63E] rounded-[39px] px-[10px] lg:px-[50px] xl:px-[80px] 2xl:px-[100px] py-[30px] lg:py-[49px] xl:py-[64px] justify-center lg:justify-start">
        <div className="max-w-[100%] md:max-w-[40%] pb-4">
          <div>
            <Image
              src={culturalHeritageLogo}
              className="w-6"
              layout="intrinsic"
              width={100}
              height={100}
              priority={true}
              alt="Cultural Heritage Icon"
            />
          </div>
          {/* Title */}
          <div className="text-white text-[20px] 2xl:text-2xl font-medium mt-2">
            Discover Cultural Heritage
          </div>
          {culturalHeritage && (
            <div className="text-white mt-4">
              <h1 className="font-extrabold text-2xl sm:text-4xl">
                {culturalHeritage?.title}
              </h1>
              <p className="font-normal text-xs mt-2 xl:text-sm 2xl:text-base">
                {culturalHeritage?.description}
              </p>
            </div>
          )}
        </div>
        <div className="absolute bottom-[-25px] left-[50%] lg:left-[200px] translate-x-[-50%] flex justify-center">
          <LandingReadMoreButton
            title={"View More"}
            backgroundColor={"#195883"}
            borderColor={"#195883"}
            color1="white"
          />
        </div>
      </div>

      <div className="lg:absolute top-0 right-0 h-full flex flex-col items-center justify-center lg:pr-36 xl:pr-52 2xl:pr-64 z-5 mt-14 lg:mt-0 scale-80 lg:scale-90 xl:scale-100">
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="rounded-[35px] overflow-hidden h-full">
            <img
              src={culturalHeritage?.background_image}
              className="w-[300px] md:w-[360px] h-full rounded-[28px]"
              alt="Background Cultural Image"
            />
          </div>

          <div className="absolute top-[25%] lg:left-[-120px] xl:left-[-200px] 2xl:left-[-320px] flex flex-col items-center justify-center left-[30%] -translate-x-[160px] lg:-translate-x-[0px]">
            <div className="relative z-10">
              <div className="bg-transparent border border-white rounded-[28px] px-6 py-[18px]">
                <div className="border-8 border-[#8CC63E] rounded-[28px] bg-[#8CC63E]">
                  <img
                    src={culturalHeritage?.front_image}
                    className="rounded-[28px] w-[300px] h-[150px] md:w-[357px] md:h-[181px]"
                    alt="Front Cultural Image"
                  />
                </div>
              </div>
              <div className="flex gap-x-2 justify-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-4 fill-current text-white"
                  viewBox="0 0 24 24"
                  width="12"
                  height="16"
                  aria-label="Location Icon"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white text-[13px]">
                  {culturalHeritage?.front_location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 justify-center items-center border border-[#195883] text-[#195883] bg-white px-4 py-2 rounded-full shadow-lg mt-[-16px] z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-4 fill-current text-[#195883]"
            viewBox="0 0 24 24"
            width="12"
            height="16"
            aria-label="Location Icon"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-[13px]">
            {culturalHeritage?.background_location}
          </span>
        </div>
      </div>


    </div>
  )
}

export default CulturalHeritage;
