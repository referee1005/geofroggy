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
        <h2 className="text-[#195883] text-lg lg:text-xl font-medium">Recently Added</h2>
        <h1 className="text-[#8CC63E] text-2xl lg:text-4xl font-extrabold mb-16">
          Inspire Connection
        </h1>
      </div>

      {/* Inspire Connections */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16">
        {inspireConnection.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col text-center bg-white shadow-lg rounded-[20px] overflow-hidden w-[300px] lg:w-[350px]`}
          >
            {/* Image Section */}
            <div className="w-full h-[200px] overflow-hidden">
              <Image
                src={item.featured_image.thumbnail}
                alt={item.title}
                width={300} // Adjust the width as required
                height={200} // Adjust the height as required
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div
              className={`flex flex-col items-start justify-center w-full px-4 py-6 ${index === 1 ? "bg-[#195883]" : "bg-[#8CC63E]"
                }`}
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <div className="flex items-center text-sm text-white mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 9V3m-4-3m0 12V8"
                  />
                </svg>
                <span>{item.location}</span>
              </div>
              <p className="text-sm text-white">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InspireConnection;
