import React, { useEffect, useState } from "react";
import header from "../../../public/images/job/header.png";
import desktop from "../../../public/images/job/desktop.png";
import Image from "next/image";
import { Button } from "@mui/material";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { useRouter } from "next/router";
import { formatDate1 } from "@/helpers";
import { useDispatch, useSelector } from "react-redux";
import { postJobApplyorContactRequest } from "@/actions/job";

function JobDetail({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const postJob = (type) => {
    dispatch(postJobApplyorContactRequest({ type: type, slug: data.slug }));
  };
  return (
    <div className="relative w-full">
      <div className="relative flex bg-white">
        <div className="container-custom justify-center flex-1 flex flex-col gap-8">
          <div className="text-[90px] font-semibold text-[#183B56] leading-[1.1]">
            Represent Geofroggy to the{" "}
            <span className="text-[#8CC63E]">World.</span>
          </div>
          <div className="text-[#5A7184] text-xl">
            Enthusiastically extend extensive customer service before
            best-of-breed convergence completely.
          </div>
          <div className="text-white bg-[#8CC63E] text-lg font-semibold rounded-md px-8 py-4 text-center w-fit">
            Apply Now!
          </div>
        </div>
        <div className="w-[60%]">
          <Image
            src={header}
            alt={"back"}
            className="cursor-pointer rounded-lg min-h-[150px] h-screen"
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
      </div>
      {/* <div className="h-[2px] w-full bg-[#DDDDDD] my-8"></div> */}
      <div className="container-custom flex lg:flex-row flex-col gap-4 2xl:gap-8 py-32">
        <div className="p-4 sm:p-8 lg:w-2/3 2xl:w-3/4 bg-white  flex flex-col gap-12">
          <Image
            src={data.banner}
            alt={"back"}
            className="w-[46px] h-[46px] cursor-pointer rounded-lg  min-h-[150px]"
            layout="responsive"
            width={1000}
            height={500}
          />
          <div>
            <div className="font-semibold mb-4">Job Title</div>
            <div className="text-2xl text-custom-font-content">
              {data.job_title}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4">Job Description</div>
            <div className="text-custom-font-content">
              {data.job_description}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4">Responsibilities</div>
            {data.job_responsibilities !== undefined &&
              data.job_responsibilities.map((item) => (
                <div className="mb-6 flex gap-2 text-custom-font-content">
                  <div className="">
                    <RadioButtonUncheckedOutlinedIcon sx={{ fontSize: 10 }} />
                  </div>
                  <div>{item}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 sm:p-8 flex-1 bg-white rounded-lg flex flex-col gap-8 h-fit">
          <div className="font-semibold">Job Details</div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-custom-font-third-content text-sm">
                Job Creation Date
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {formatDate1(data.job_creation_date)}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Recruitment Period
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_recruitment_period}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Recruitment Quota
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_quota}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Job Type
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_type}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Experiences
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_experiences}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Location
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_location}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Salary
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {`$${data.job_salary} USD`}
              </div>
            </div>
            <div>
              <div className="text-custom-font-third-content text-sm">
                Hiring Manager
              </div>
              <div className="font-semibold text-custom-font-secondary-content">
                {data.job_hiring_manager}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="relative">
            {/* Background Image */}
            <Image
              src={desktop}
              alt="Background"
              className="w-full h-auto"
              layout="responsive"
              width={1000}
              height={500}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-transparent">
              <p className="text-xl text-gray-700">For more details</p>
              <h1 className="text-4xl font-bold text-gray-900 tracking-widest">Let’s Talk</h1>
              <button className="px-6 py-3 text-white bg-[#245073] rounded-md tracking-widest">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
