import React, { useEffect, useState, useRef } from "react";
import header from "../../public/images/ambassador/header.webp";
import desktop from "../../public/images/job/desktop.png";
import play from "../../public/images/ambassador/play.png";
import up_right from "../../public/images/ambassador/up_right.png";
import Image from "next/image";
import { Button } from "@mui/material";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { useRouter } from "next/router";
import { formatDate1 } from "@/helpers";
import { useDispatch, useSelector } from "react-redux";
import { postJobApplyorContactRequest } from "@/actions/job";

function JobDetail({ data }) {
  const dispatch = useDispatch();
  const viewServicesRef = useRef(null);

  const postJob = (type) => {
    dispatch(postJobApplyorContactRequest({ type: type, slug: data.slug }));
  };
  return (
    <div className="relative w-full">
      <div className="relative bg-white">
        <div className="absolute container-custom justify-center flex flex-col h-full gap-2 sm:gap-4 lg:gap-8 z-10 w-[55%]">
          <div className="font-montserrat_alternates font-semibold flex flex-col ">
            <div className="text-xl sm:text-3xl lg:text-[50px] xl:text-[60px] 3xl:text-[80px] text-[#183B56]" style={{ lineHeight: 1.1 }}>
              Be a Guide
            </div>
            <div className="text-xl sm:text-3xl lg:text-[50px] xl:text-[60px] 3xl:text-[80px] text-[#183B56]" style={{ lineHeight: 1.1 }}>
              Be a Storyteller
            </div>
          </div>
          <div className="text-[#90C745] text-xl sm:text-3xl lg:text-[50px] 3xl:text-[70px] font-montserrat font-semibold leading-[1.1]" style={{ lineHeight: 1.1 }}>
            Be a Geofroggy Ambassador
          </div>
          <div className="flex flex-row  gap-2 lg:gap-4">
            {/* View Services Button (Reference for Height) */}
            <div className="flex items-center">
              <div
                className="text-white bg-[#8CC63E] text-xs sm:text-base lg:text-[16px] font-semibold rounded-full px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4 2xl:px-8 2xl:py-4 w-fit flex items-center justify-center cursor-pointer whitespace-nowrap"
                style={{ lineHeight: '1rem' }}>
                VIEW SERVICES
              </div>
              <div className="flex justify-center items-center rounded-full px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4 bg-[#8CC63E]">
                <svg className="w-4 h-4 lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_428_3152)">
                    <path d="M16 0.681406V11.0315C16 11.4078 15.6949 11.7129 15.3186 11.7129C14.9423 11.7129 14.6372 11.4078 14.6372 11.0315V2.32659L1.16328 15.8005C1.03019 15.9335 0.855844 16 0.681437 16C0.507031 16 0.332687 15.9335 0.199594 15.8005C-0.0665312 15.5343 -0.0665312 15.1029 0.199594 14.8368L13.6735 1.36281H4.96853C4.59222 1.36281 4.28713 1.05772 4.28713 0.681406C4.28713 0.305094 4.59222 2.40019e-09 4.96853 2.40019e-09H15.3186C15.6949 -3.12476e-05 16 0.305094 16 0.681406Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_428_3152">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex justify-center items-center text-sm sm:text-sm lg:text-lg font-semibold rounded-full text-center ml-0 lg:ml-8" >
              <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-12 lg:h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9823 17.5578C18.8476 16.9069 17.9277 17.4401 17.9277 18.7477V28.3973C17.9277 29.7062 18.8476 30.2387 19.9823 29.5884L28.4165 24.7515C29.5515 24.1004 29.5515 23.0456 28.4165 22.3946L19.9823 17.5578Z" fill="#90C746" />
                <mask id="path-2-inside-1_428_5581" fill="white">
                  <path d="M23.5976 47.1951C17.3391 47.1951 11.337 44.709 6.91156 40.2836C2.48616 35.8582 -1.74099e-07 29.856 0 23.5976C1.74099e-07 17.3391 2.48616 11.337 6.91156 6.91156C11.337 2.48616 17.3391 -7.46314e-08 23.5976 0V1.31821C17.6887 1.31821 12.0219 3.66549 7.84368 7.84368C3.66549 12.0219 1.31821 17.6887 1.31821 23.5976C1.31821 29.5064 3.66549 35.1732 7.84368 39.3514C12.0219 43.5296 17.6887 45.8769 23.5976 45.8769V47.1951Z" />
                </mask>
                <path d="M23.5976 47.1951C17.3391 47.1951 11.337 44.709 6.91156 40.2836C2.48616 35.8582 -1.74099e-07 29.856 0 23.5976C1.74099e-07 17.3391 2.48616 11.337 6.91156 6.91156C11.337 2.48616 17.3391 -7.46314e-08 23.5976 0V1.31821C17.6887 1.31821 12.0219 3.66549 7.84368 7.84368C3.66549 12.0219 1.31821 17.6887 1.31821 23.5976C1.31821 29.5064 3.66549 35.1732 7.84368 39.3514C12.0219 43.5296 17.6887 45.8769 23.5976 45.8769V47.1951Z" fill="white" stroke="#90C746" stroke-width="2" mask="url(#path-2-inside-1_428_5581)" />
              </svg>

              <div className="hidden sm:block lg:ml-2">Play Reel</div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <Image
            src={header}
            alt={"back"}
            className="cursor-pointer rounded-lg min-h-[250px] h-screen"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
      {/* <div className="h-[2px] w-full bg-[#DDDDDD] my-8"></div> */}
      <div className="container-custom py-8 sm:py-12 lg:py-16">
        {/* <div className="p-4 sm:p-8 lg:w-2/3 2xl:w-3/4 bg-white  flex flex-col gap-12">
          <Image
            src={data.banner}
            alt={"back"}
            className="w-[46px] h-[46px] cursor-pointer rounded-lg  min-h-[150px]"
            layout="responsive"
            width={200}
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
        </div> */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center leading-tight">
            Join the Geofroggy Ambassador Triad – Be the Voice of Your Country!
          </h1>

          <p className="mb-6 text-lg text-gray-700 text-center">
            Are you passionate about sharing your culture with the world? Do you
            want to make a global impact while building connections and gaining
            valuable experience? If so, we need YOU to become a Geofroggy
            Ambassador!
          </p>

          <p className="mb-8 text-gray-700 text-center">
            As an Ambassador Triad Member, you'll take on an influential role in
            representing your country, fostering connections, and making meaningful
            contributions to our vibrant global community.
          </p>

          <div className="bg-gray-100 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
              Why Become a Geofroggy Ambassador?
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Make a Global Impact",
                  description:
                    "Connect your country to the world by promoting cultural understanding and showcasing its unique richness.",
                },
                {
                  title: "Expand Your Network",
                  description:
                    "Collaborate with like-minded explorers, creators, and influencers worldwide.",
                },
                {
                  title: "Enhance Your Skills",
                  description:
                    "Gain experience in content creation, storytelling, community management, and digital marketing.",
                },
                {
                  title: "Showcase Your Country",
                  description:
                    "Share authentic stories, must-visit spots, and hidden treasures with a global audience.",
                },
                {
                  title: "Exclusive Experience",
                  description:
                    "Be part of something bigger and recognized as a leader in your community.",
                },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-center">
            Your Role as a Geofroggy Ambassador:
          </h2>

          <ul className="max-w-3xl mx-auto space-y-3 text-gray-700 text-lg">
            <li className="bg-gray-100 p-4 rounded-md">
              <strong>Content Creation:</strong> Share stories, images, and insights
              about your country.
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <strong>Community Growth:</strong> Engage with users and foster an
              interactive space.
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <strong>Monitoring & Moderation:</strong> Ensure content aligns with
              our values of respect and inclusivity.
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <strong>Sponsorship Outreach:</strong> Identify potential sponsors
              aligned with our mission.
            </li>
            <li className="bg-gray-100 p-4 rounded-md">
              <strong>Collaboration:</strong> Partner with fellow ambassadors to
              create engaging content.
            </li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-center">
            Who We're Looking For:
          </h2>

          <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
            {[
              "Passionate individuals who love sharing their culture.",
              "Active community members and social media users.",
              "Strong communication and organizational skills.",
              "Excited to contribute to the Geofroggy community.",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md text-gray-700 text-lg"
              >
                {text}
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-center">
            Ready to Represent Your Country? Apply Today!
          </h2>

          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
            Be part of a movement that connects people through geography and
            culture. Apply now and take your place as an official Geofroggy
            Ambassador!
          </p>

          <p className="mt-8 text-center text-lg text-gray-900 font-semibold">
            If you're interested, send an email to{" "}
            <a
              href="mailto:gap@geofroggy.com"
              className="text-blue-600 hover:underline"
            >
              gap@geofroggy.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="relative">
            {/* Background Image */}
            <Image
              src={desktop}
              alt="Background"
              className="w-full h-auto min-h-[250px]"
              layout="responsive"
              width={1000}
              height={500}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-transparent">
              <p className="text-base lg:text-lg font-bold text-gray-700">For more details</p>
              <h1 className="text-4xl 2xl:text-6xl font-bold text-gray-900 tracking-widest">Let’s Talk</h1>
              <button className="text-sm sm:text-base lg:text-lg px-4 py-2 lg:px-6 lg:py-3 text-white bg-[#245073] rounded-md tracking-widest">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default JobDetail;
