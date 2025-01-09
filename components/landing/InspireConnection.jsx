import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchInspireConnectionRequest } from "@/actions/home";
import { useRouter } from "next/router";
import InspireConnectionLogo from "../../public/images/landing/inspire-connection-logo.png";

export const InspireConnection = ({ }) => {
  const [InspireConnection, setInspireConnection] = useState([]);
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
    <div className="container-custom my-10 py-16 px-5 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
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
        <h2 className="text-[#195883] text-lg lg:text-xl font-medium">Recently Added</h2>
        <h1 className="text-[#8CC63E] text-2xl lg:text-4xl font-extrabold mb-48">
          Inspire Connection
        </h1>
      </div>

      {/* Inspire Connections */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24">
        {InspireConnection.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center text-center bg-[#d9d9d9] shadow-lg rounded-[28px] px-8 py-14 ${index === 1
              ? "lg:scale-110 lg:z-10 text-opacity-100"
              : "lg:opacity-40 text-opacity-40 lg:-translate-y-10"
              }`}
            style={{
              marginTop: index === 0 ? "-4px" : index === 2 ? "-4px" : "0px",
            }}
          >
            {/* User Image */}
            <div
              className={`absolute rounded-full border-[1px] border-black ${index === 1 ? "-top-24" : "-top-20"
                }`}
              style={{
                padding: index === 1 ? "8px" : "6px", // Add gap between image and border
              }}
            >
              <div
                className={`overflow-hidden rounded-full ${index === 1 ? "w-44 h-44" : "w-36 h-36"
                  }`}
              >
                <Image
                  src={item.featured_image.thumbnail}
                  alt={item.title}
                  width={index === 1 ? 176 : 144}
                  height={index === 1 ? 176 : 144}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <p
              className={`mt-24 ${index === 1 ? "text-base" : "text-sm"
                } text-gray-600`}
            >
              {item.title}
            </p>

            {/* Title and Location */}
            <h3
              className={`mt-4 ${index === 1 ? "font-bold text-lg" : "font-medium text-sm"
                }`}
            >
              {item.title}
            </h3>
            <p
              className={`${index === 1 ? "text-[#195883] text-base" : "text-[#8CC63E] text-xs"
                }`}
            >
              {item.location}
            </p>
            <p className="text-gray-500 text-xs">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InspireConnection;
