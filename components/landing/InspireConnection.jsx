import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchInspireConnectionRequest } from "@/actions/home";
import { useRouter } from "next/router";
import InspireConnectionLogo from "../../public/images/landing/inspire-connection-logo.png";

export const InspireConnection = ({ }) => {
  const [inspireConnection, setInspireConnection] = useState([]);
  const data = useSelector((state) => state.home.inspireConnection);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchInspireConnectionRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("InspireConnection: ", data);
    if (data) {
      setInspireConnection(data);
    }
  }, [data]);

  return (
    <div className="container-custom my-10 px-5 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-3">
        <div className="flex justify-center">
          <Image
            src={InspireConnectionLogo}
            className="w-6"
            layout="intrinsic"
            width={100}
            height={100}
            priority={true}
            alt="Cultural Heritage Icon"
          />
        </div>
        <h2 className="text-[#195883] text-xl font-medium">Recently Added</h2>
        <h1 className="text-[#8CC63E] text-4xl font-extrabold mb-16">
          Inspire Connection
        </h1>
      </div>

      {/* Inspire Connections */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 w-full max-w-[1200px] mx-auto overflow-hidden px-4">
        {inspireConnection.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div
              key={item.id}
              className={`relative flex flex-col text-center bg-white shadow-lg rounded-[20px] overflow-hidden w-[90%] sm:w-[300px] lg:w-[350px] border-[1px] border-[#BABABA]`}
            >
              {/* Image Section */}
              <div className="absolute left-[25px] top-[20px] flex justify-center items-center h-[200px] w-[80%] sm:w-[250px] lg:w-[300px] overflow-hidden bg-gray-100 rounded-[18px]">
                <img
                  src={item.featured_image.thumbnail}
                  alt={item.title}
                  className="object-cover h-full w-full z-10"
                />
              </div>

              {/* Content Section */}
              <div
                className={`flex flex-col items-start justify-center w-full px-8 pt-16 py-8 mt-44 ${index === 1 ? "bg-[#195883]" : "bg-[#8CC63E]"
                  }`}
              >
                <h3 className="text-white mb-2 text-center w-full text-[13px]">{item.title}</h3>
                <div className="flex items-center text-white mb-2 w-full justify-center">
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
                  <span className="font-bold pl-1 pr-2 text-[13px]">
                    {item.location}
                  </span>
                  <span className="text-[10px] text-white flex">{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};


export default InspireConnection;
