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
import backIcon from "../../../public/images/job/back.png";

function JobDetail({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const postJob = (type) => {
    dispatch(postJobApplyorContactRequest({ type: type, slug: data.slug }));
  };
  return (
    <div className="relative w-full">
      <div className="flex justify-between w-full container-custom pt-16 pb-8 border-b border-[#DDD] relative">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={backIcon}
              alt={"back"}
              className="w-[46px] h-[46px] cursor-pointer min-w-[35px] min-h-[35px]"
              layout="responsive"
              onClick={() => {
                router.back();
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-inter text-xs sm:text-sm lg:text-base text-custom-font-third-content">
              {data.job_posted_by}
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl">
              {data.job_title}
            </div>
            <div className="text-xs sm:text-sm lg:text-base text-custom-font-third-content">
              {data.job_location} · {data.job_type}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end">
          <Button
            variant="outlined"
            className="text-xs sm:text-base border-black text-custom-primary mb-2 sm:mb-0 sm:mr-4 py-2 px-2"
            onClick={() => postJob("contact")}
          >
            Contact
          </Button>
          <Button
            variant="contained"
            className="text-xs sm:text-base bg-custom-primary py-2 px-2"
            onClick={() => postJob("apply")}
          >
            Apply Now!
          </Button>
        </div>

        {/* Green line within the bottom border */}
        <div className="absolute bottom-0 left-16 sm:left-20 md:left-24 lg:left-24 xl:left-32 2xl:left-36 w-32 h-[2px] bg-green-500"></div>
      </div>

      {/* <div className="h-[2px] w-full bg-[#DDDDDD] my-8"></div> */}
      <div className="container-custom flex lg:flex-row flex-col gap-4 2xl:gap-8 py-12">
        <div className="p-4 sm:p-8 lg:w-2/3 2xl:w-3/4 bg-white rounded-lg flex flex-col gap-12">
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
      <div className="mb-[-8px]">
        <div>
          <Image
            src={desktop}
            alt={"back"}
            className="w-[46px] h-[46px] cursor-pointer rounded-lg  min-h-[200px]"
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
