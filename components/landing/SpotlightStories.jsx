import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpotlightStoriesRequest } from "@/actions/home";
import { useRouter } from "next/router";
import scriptLogo from "../../public/images/landing/script.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SpotlightStories = ({ }) => {
  const [spotlightStories, setSpotlightStories] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = useSelector((state) => state.home.sportlight_stories);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchSpotlightStoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("spotlight stories: ", data);
    if (data) {
      setSpotlightStories(data);
    }
  }, [data]);

  return (
    <div className="container-custom flex flex-col my-[60px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between sm: gap-y-3">
          <div className="">
            <div>
              <Image
                src={scriptLogo}
                className="w-6"
                layout="intrinsic"
                width={100}
                height={100}
                priority={true}
                alt={"Script Image"}
              />
            </div>
            <div className="text-[#195883] text-xl 2xl:text-2xl">
              Cultural stories
            </div>
            <div className="text-[#8CC63E] font-semibold xs:text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
              <div className="flex items-center">
                <span className="mr-2">Spotlight Stories</span>
              </div>
            </div>
          </div>

          <div className="items-center flex cursor-pointer">
            <div className="flex items-center border rounded-[22px] p-[14px_24px_14px_31px] w-[192px] h-[44px] text-[13px]">
              Explore More Places
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-y-[50px] md:gap-x-[50px]">
          <div className="left-side md:w-[55%]">
            {spotlightStories.length > 0 && (
              <>
                <div className="selected-image-component">
                  <div className="selected-image-wrapper overflow-hidden rounded-[28px]">
                    <Image
                      src={spotlightStories[selectedIndex].featured_image.large}
                      alt={spotlightStories[selectedIndex].image_caption || 'Spotlight image'}
                      className="w-full max-h-[400px] object-cover"
                      width={800} // Ensure the width and height are defined for clarity
                      height={400}
                      priority // Add priority for the first image to load faster
                    />
                  </div>
                  <div className="image-caption text-[#195883] text-[13px] mt-[11px]">
                    {spotlightStories[selectedIndex].image_caption}
                  </div>
                </div>

                <div className="description mt-5">
                  <div className="flex gap-x-5">
                    <div className="text-base font-bold">
                      {spotlightStories[selectedIndex].title}
                    </div>
                    <div className="text-[10px] items-center flex gap-x-3">
                      <div>24 Aug 2024</div>
                      <div>4min Read</div>
                    </div>
                  </div>

                  <div className="content text-xs mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="items-center flex cursor-pointer mt-5">
                  <div className="flex items-center border rounded-[22px] p-[14px_24px_14px_31px] w-[192px] h-[44px] text-[13px]">
                    Read More
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="right-side md:w-[45%] h-[500px]">
            <Swiper
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              direction="vertical" // Enable vertical sliding
              spaceBetween={10} // Space between slides
              pagination={{ clickable: true }} // Enable pagination
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay configuration
              loop={true}
              speed={1500}
              modules={[Pagination, Autoplay]} // Required modules
              className="h-full"
            >
              {
                spotlightStories.length > 0 && (
                  spotlightStories.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-x-[20px] pr-2">
                        <div className="flex items-center justify-center" onClick={() => setSelectedIndex(index)}>
                          <img src={item.featured_image.thumbnail} className="rounded-[28px] max-w-none" />
                        </div>

                        <div>
                          <div className="text-base font-bold">
                            {item.title}
                          </div>
                          <div className="flex meta-info text-[10px] mt-2">
                            <div>
                              24 Aug 2024
                            </div>
                            <div>
                              4min Read
                            </div>
                          </div>
                          <div className="text-xs mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etm.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                )
              }
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SpotlightStories;
