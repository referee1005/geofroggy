import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchCulturalHeritageRequest } from "@/actions/home";
import { useRouter } from "next/router";
import cuturalHeritageLogo from "../../public/images/landing/cultural-heritage-logo.png";
import primaryLogo from "../../public/images/landing/primary-logo.png";

export const CuturalHeritage = ({ }) => {
  const [culturalHeritage, setCulturalHeritage] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    <div className="container-custom flex flex-col my-[60px] ">
      <div className="flex flex-col md:flex-row gap-8 bg-[#8CC63E] rounded-[39px] px-[49px] md:px-[75px] py-[30px] md:py-[49px]">
        <div className="">
          <div>
            <Image
              src={cuturalHeritageLogo}
              className="w-6"
              layout="intrinsic"
              width={100}
              height={100}
              priority={true}
              alt={"Cutural Heritage Image"}
            />
          </div>
          <div className="text-white text-[20px] 2xl:text-2xl font-medium">
            Disocover Cultural Heritage
          </div>

          {
            culturalHeritage.length > 0 && (
              <div className="text-white">
                <div className="flex items-center font-extrabold text-2xl sm:text-4xl">
                  <span className="mr-2">{culturalHeritage[0].title}</span>
                </div>

                <div className="flex items-center font-extrabold text-xs sm:text-4xl">
                  <span className="mr-2">{culturalHeritage[0].description}</span>
                </div>
              </div>
            )
          }
        </div>

        <div className="flex">
          {
            culturalHeritage.length > 0 && (
              <div>
                <div className="front-component">
                  <div className="bg-transparent border border-white rounded-[28px] frontend-image">
                    <img
                      src={culturalHeritage[0].front_image}
                      className="rounded-[28px] w-[181px] h-[136px] z-2"
                    />
                  </div>
                  <div className="flex gap-x-2">
                    <img
                      src={primaryLogo}
                      className="w-3 h-4"
                    />
                    <div className="text-white text-[13px]">
                      {culturalHeritage[0].front_location}
                    </div>
                  </div>
                </div>

                <div className="background-component relative">
                  <div className="rounded-[35px] background-image">
                    <img
                      src={culturalHeritage[0].front_image}
                      className="rounded-[28px] w-[181px] h-[136px] z-2"
                    />
                  </div>
                  <div className="flex gap-x-2  border border-[#195883] text-[#195883] px-[40px] py-[16px] absolute b-4">
                    <img
                      src={primaryLogo}
                      className="w-3 h-4"
                    />
                    <div className="text-white text-[13px]">
                      {culturalHeritage[0].background_location}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default CuturalHeritage;
