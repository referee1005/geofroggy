import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavouritePlacesRequest } from "@/actions/home";
import { useRouter } from "next/router";
import Location from "../../public/images/landing/Location.png";
import Location1 from "../../public/images/landing/Location1.png";
import LandingReadMoreButton from "../reusable/LandingReadMoreButton";

function Favourite({ }) {
  const [placekeys, setPlacekeys] = useState([]);
  const [places, setPlaces] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState("Popular");
  const data = useSelector((state) => state.home.favourite_places);
  const dispatch = useDispatch();
  const router = useRouter();
  const [visiblePlacesCount, setVisiblePlacesCount] = useState(
    placekeys.length
  );

  useEffect(() => {
    const updateVisiblePlacesCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1580) {
        setVisiblePlacesCount(placekeys.length); // Show all places
      } else if (screenWidth > 1024) {
        setVisiblePlacesCount(Math.min(placekeys.length, 6)); // Show all places
      } else if (screenWidth > 768) {
        setVisiblePlacesCount(Math.min(placekeys.length, 4)); // Show up to 4 places
      } else if (screenWidth > 480) {
        setVisiblePlacesCount(Math.min(placekeys.length, 2)); // Show up to 2 places
      } else {
        setVisiblePlacesCount(1); // Show only 1 place
      }
    };

    // Set initial visible count and listen for resize events
    updateVisiblePlacesCount();
    window.addEventListener("resize", updateVisiblePlacesCount);

    // Cleanup the listener on component unmount
    return () => window.removeEventListener("resize", updateVisiblePlacesCount);
  }, [placekeys]);

  useEffect(() => {
    dispatch(fetchFavouritePlacesRequest());
  }, [dispatch]);

  useEffect(() => {
    if (data[selectedIndex] !== undefined) setPlaces(data[selectedIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    console.log("favorite places: ", data);

    setPlacekeys(Object.keys(data));
    if (data["Popular"]) setPlaces(data["Popular"]);
  }, [data]);

  return (
    <div className="container-custom flex flex-col">
      <div className="flex flex-col gap-8">
        <div>
          {" "}
          <div>
            <Image
              src={Location}
              className="w-6"
              layout="intrinsic"
              width={100}
              height={100}
              priority={true}
              alt={"Home Image"}
            />
          </div>
          <div className="text-[#195883] text-xl 2xl:text-2xl">
            Top Destinations
          </div>
          <div className="text-[#8CC63E] font-semibold xs:text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
            <div className="flex items-center">
              <span className="mr-2">Froggy Favorites</span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="w-full flex justify-between items-center">
            <div
              className={`cursor-pointer  ${selectedIndex === "Popular" ? "font-semibold text-lg" : ""
                }`}
              onClick={() => setSelectedIndex("Popular")}
            >
              Popular
            </div>
            {placekeys
              .filter((ele) => ele !== "Popular")
              .slice(0, visiblePlacesCount)
              .map((item) => (
                <div
                  className={`cursor-pointer ${selectedIndex === item ? "font-semibold text-lg" : ""
                    }`}
                  onClick={() => setSelectedIndex(item)}
                >
                  {item}
                </div>
              ))}
            <div>
              <select
                className="w-full px-2 py-2 text-md"
                id="subject"
                name="subject"
                type="text"
                aria-label="More"
              >
                <option>More</option>
                {placekeys
                  .filter((ele) => ele !== "Popular")
                  .slice(visiblePlacesCount)
                  .map((option) => (
                    <option className="text-normal sm:text-md" key={option}>
                      {option}
                    </option>
                  ))}
              </select>
            </div>
            <div className="rounded-full px-4 py-2 border-2 border-radius border-black cursor-pointer">
              Explore More Destination
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 2xl:gap-16 relative min-h-64 sm:min-h-64">
          {data[selectedIndex] !== undefined
            ? data[selectedIndex].slice(0, 4).map((item, index) => (
              <div>
                <div
                  key={index}
                  className="relative bg-white shadow-md rounded-3xl overflow-hidden"
                >
                  <div className="aspect-[2/3]">
                    <Image
                      src={item.image}
                      alt={item.image}
                      className="rounded-3xl object-cover"
                      layout="fill"
                      objectFit="cover"
                    // width={1000}
                    // height={1000}
                    />
                  </div>
                </div>
                <div className="font-semibold">{item.title}</div>
                <div className="flex items-center">
                  <div>{item.location} </div>
                  <div className="relative">
                    <Image
                      src={Location1}
                      className="object-contain"
                      layout="responsive"
                      width={50}
                      height={50}
                      priority={true}
                      alt={"Home Image"}
                    />
                  </div>
                </div>
              </div>
            ))
            : []}
        </div>
        <div className="flex justify-end items-center gap-4">
          <div
            className="flex justify-center items-center rounded-full bg-[#8CC63E] w-[44px] h-full aspect-square cursor-pointer"
            onClick={() => {
              // setCurrentIndex(
              //   (currentIndex - 1 + places.length) % places.length
              // );
              setPlaces(
                places.map(
                  (item, index) =>
                    places[(index + places.length - 1) % places.length]
                )
              );
            }}
          >
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.313912 6.70597C-0.104638 6.3155 -0.104638 5.68137 0.313912 5.2909L5.67135 0.292854C6.0899 -0.0976181 6.76963 -0.0976181 7.18818 0.292854C7.60673 0.683327 7.60673 1.31745 7.18818 1.70793L3.65562 5.00039H13.9285C14.5212 5.00039 15 5.44709 15 6C15 6.55291 14.5212 6.99961 13.9285 6.99961H3.65897L7.18483 10.2921C7.60338 10.6825 7.60338 11.3167 7.18483 11.7071C6.76628 12.0976 6.08656 12.0976 5.66801 11.7071L0.310564 6.7091L0.313912 6.70597Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="rounded-full flex justify-center items-center bg-[#195883] w-[44px] h-[44px] aspect-square cursor-pointer"
            onClick={() => {
              setPlaces(
                places.map(
                  (item, index) =>
                    places[(index + places.length + 1) % places.length]
                )
              );
            }}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7063 6.70859C14.0969 6.31797 14.0969 5.68359 13.7063 5.29297L8.70625 0.292969C8.31563 -0.0976562 7.68125 -0.0976562 7.29063 0.292969C6.9 0.683594 6.9 1.31797 7.29063 1.70859L10.5875 5.00234H1C0.446875 5.00234 0 5.44922 0 6.00234C0 6.55547 0.446875 7.00234 1 7.00234H10.5844L7.29375 10.2961C6.90312 10.6867 6.90312 11.3211 7.29375 11.7117C7.68437 12.1023 8.31875 12.1023 8.70938 11.7117L13.7094 6.71172L13.7063 6.70859Z"
                fill="#8CC63E"
              />
            </svg>
          </div>
          <div>
            <LandingReadMoreButton
              title={"View More"}
              backgroundColor={"#E9E9E9"}
              color1="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourite;
