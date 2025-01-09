import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommunityVibesRequest, } from "@/actions/home";
import { useRouter } from "next/router";
import { FaTelegramPlane } from "react-icons/fa";
import trustLogo from "../../public/images/landing/trust-logo.png";

export const CommunityVibes = ({ }) => {
  const [communityVibes, setCommunityVibes] = useState([]);
  const data = useSelector((state) => state.home.join_adventure);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCommunityVibesRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("join adventure data: ", data);
    if (data) {
      setCommunityVibes(data);
    }
  }, [data]);

  return (
    <div className="container-custom flex flex-col my-[60px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-x-10 justify-between sm: gap-y-3">
          <div className="first-column">
            {
              communityVibes != undefined && (
                <>
                  <div>
                    <img src={communityVibes.horizonal_image}
                      className="rounded-[24px]" />
                  </div>

                  <div className="mt-5 text-[20px] font-medium">
                    {communityVibes.horizonal_caption}
                  </div>
                </>
              )
            }
          </div>

          <div className="second-column">
            {
              communityVibes != undefined && (
                <div>
                  <img src={communityVibes.vertical_image}
                    className="rounded-[27px]" />
                </div>
              )
            }
          </div>

          <div className="third-column">
            <div>
              <Image
                src={trustLogo}
                className="w-6"
                layout="intrinsic"
                width={100}
                height={100}
                priority={true}
                alt={"Trust Image"}
              />
            </div>
            <div className="text-[#195883] text-xl 2xl:text-2xl capitalize">
              fun Interaction
            </div>
            {
              communityVibes != undefined && (
                <>
                  <div className="text-[#8CC63E] font-semibold xs:text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
                    <div className="flex items-center">
                      <span className="mr-2">{communityVibes.title}</span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <div className="flex items-center">
                      <span className="mr-2">{communityVibes.description}</span>
                    </div>
                  </div>
                </>
              )
            }

            <div className="items-center flex mt-5">
              <div className="flex items-center cursor-pointer bg-[#195883] border rounded-[22px] p-[14px_24px_14px_31px] w-[175px] h-[44px] text-[13px] text-white gap-x-2">
                <div>
                  Create Account
                </div>
                <div className="flex justify-center items-center">
                  <FaTelegramPlane className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default CommunityVibes;
