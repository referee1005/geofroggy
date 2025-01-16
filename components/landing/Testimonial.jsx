import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonialRequest } from "@/actions/home";
import { useRouter } from "next/router";
import TestimonialLogo from "../../public/images/landing/testimonial-logo.png";

const TestimonialCarousel = ({ testimonial }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tmpTestimonial, setTmpTestmonial] = useState([])

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (activeIndex == 0) {
      setTmpTestmonial([testimonial[length - 1], testimonial[activeIndex], testimonial[activeIndex + 1]])
    }
    else if (activeIndex == length - 1) {
      setTmpTestmonial([testimonial[length - 2], testimonial[activeIndex], testimonial[0]])
    }
    else setTmpTestmonial([testimonial[activeIndex - 1], testimonial[activeIndex], testimonial[activeIndex + 1]])
  }, [activeIndex, testimonial])

  return (
    <div>
      {/* Testimonials for MD screens */}
      <div className="flex flex-col items-center lg:hidden">
        <motion.div className="relative flex flex-col items-center text-center bg-[#d9d9d9] shadow-lg rounded-[28px] px-8 py-14">
          {/* User Image */}
          <div
            className="absolute -top-20 rounded-full border-[1px] border-black"
            style={{ padding: "8px" }}
          >
            <div className="overflow-hidden rounded-full w-44 h-44">
              <img
                src={testimonial[activeIndex]?.featured_image.thumbnail}
                alt={testimonial[activeIndex]?.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Rating */}
          <div className="flex justify-center gap-1 mt-20">
            {Array.from({ length: testimonial[activeIndex]?.rating }).map(
              (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#FDC341]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.432 8.209 1.192-5.938 5.787 1.401 8.182L12 18.897l-7.34 3.863 1.401-8.182L.122 9.211l8.209-1.192z" />
                </svg>
              )
            )}
          </div>
          {/* Content */}
          <p className="mt-3 text-base text-gray-600">
            {testimonial[activeIndex]?.content}
          </p>
          {/* Title and Designation */}
          <h3 className="mt-4 font-bold text-lg">
            {testimonial[activeIndex]?.title}
          </h3>
          <p className="text-[#195883] text-base">
            {testimonial[activeIndex]?.designation}
          </p>
        </motion.div>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-24 items-center">
          {/* Left Button */}
          <button onClick={handlePrev} className="bg-[#8CC63E] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ">
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
          </button>

          {/* Right Button */}
          <button onClick={handleNext} className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 bg-[#195883] text-[#8CC63E]">
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
          </button>

          {/* View All Button */}
          <button
            onClick={() => router.push("/testimonials")}
            className="bg-gray-200 text-black px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:bg-gray-300"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h8m0 0l-4-4m4 4l-4 4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials for LG screens */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-center gap-8 lg:gap-24">
        {testimonial.map((item, index) => (
          <div
            key={item?.id}
            className={`relative flex flex-col items-center text-center bg-[#d9d9d9] shadow-lg rounded-[28px] px-8 py-14 ${index === 1
              ? "lg:scale-110 lg:z-10 text-opacity-100"
              : "lg:opacity-40 text-opacity-40 lg:-translate-y-10"
              }`}
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
                  src={item?.featured_image.thumbnail}
                  alt={item?.title}
                  width={index === 1 ? 176 : 144}
                  height={index === 1 ? 176 : 144}
                  className="object-cover"
                />
              </div>
            </div>
            {/* Rating */}
            <div className="flex justify-center gap-1 mt-20">
              {Array.from({ length: item?.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#FDC341]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.432 8.209 1.192-5.938 5.787 1.401 8.182L12 18.897l-7.34 3.863 1.401-8.182L.122 9.211l8.209-1.192z" />
                </svg>
              ))}
            </div>
            {/* Content */}
            <p
              className={`mt-3 ${index === 1 ? "text-base" : "text-sm"
                } text-gray-600`}
            >
              {item?.content}
            </p>
            {/* Title and Designation */}
            <h3
              className={`mt-4 ${index === 1 ? "font-bold text-lg" : "font-medium text-sm"
                }`}
            >
              {item?.title}
            </h3>
            <p
              className={`${index === 1
                ? "text-[#195883] text-base"
                : "text-[#8CC63E] text-xs"
                }`}
            >
              {item?.designation}
            </p>
          </div>
        ))}

      </div>
      {/* Navigation Buttons */}
      <div className="hidden lg:flex justify-center gap-4 mt-24 items-center">
        {/* Left Button */}
        <button onClick={handlePrev} className="bg-[#8CC63E] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
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
        </button>

        {/* Right Button */}
        <button onClick={handleNext} className=" w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 bg-[#195883] text-[#8CC63E]">
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
        </button>

        {/* View All Button */}
        <button
          onClick={() => router.push("/testimonials")}
          className="bg-gray-200 text-black px-6 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 hover:bg-gray-300"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h8m0 0l-4-4m4 4l-4 4"
            />
          </svg>
        </button>
      </div>

    </div>
  );
};

export const Testimonial = ({ }) => {
  const [testimonial, setTestimonial] = useState([]);
  const data = useSelector((state) => state.home.testimonial);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchTestimonialRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("testimonial: ", data);
    if (data) {
      setTestimonial(data);
    }
  }, [data]);

  return (
    <div className="container-custom my-10 py-16 px-5 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center">
          <Image
            src={TestimonialLogo}
            className="w-6"
            layout="intrinsic"
            width={100}
            height={100}
            priority={true}
            alt="Cultural Heritage Icon"
          />
        </div>
        <h2 className="text-[#195883] text-lg lg:text-xl font-medium">Testimonial</h2>
        <h1 className="text-[#8CC63E] text-2xl lg:text-4xl font-extrabold mb-48">
          What They Say About Geofroggy
        </h1>
      </div>

      {/* Testimonials */}
      <div className="flex-col lg:flex-row justify-center gap-8 lg:gap-24 hidden">
        {testimonial.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col items-center text-center bg-[#d9d9d9] shadow-lg rounded-[28px] px-8 py-14 ${index === 1
              ? "lg:scale-110 lg:z-10 text-opacity-100"
              : "lg:opacity-40 text-opacity-40 lg:-translate-y-10"
              }`}
          >
            {/* User Image */}
            <div
              className={`absolute rounded-full border-[1px] border-black ${index === 1 ? "-top-24" : "-top-20"}`}
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
            {/* Rating */}
            <div className="flex justify-center gap-1 mt-20">
              {Array.from({ length: item.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#FDC341]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.432 8.209 1.192-5.938 5.787 1.401 8.182L12 18.897l-7.34 3.863 1.401-8.182L.122 9.211l8.209-1.192z" />
                </svg>
              ))}
            </div>
            {/* Content */}
            <p
              className={`mt-3 ${index === 1 ? "text-base" : "text-sm"
                } text-gray-600`}
            >
              {item.content}
            </p>
            {/* Title and Designation */}
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
              {item.designation}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24">
        <TestimonialCarousel testimonial={testimonial} />
      </div>

    </div>
  );
};

export default Testimonial;
