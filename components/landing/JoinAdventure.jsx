import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoinAdventureRequest, } from "@/actions/home";
import { useRouter } from "next/router";
import { FaTelegramPlane } from "react-icons/fa";
import trustLogo from "../../public/images/landing/trust-logo.png";

export const JoinAdventure = ({ }) => {
  const [joinAdventure, setJoinAdventure] = useState([]);
  const data = useSelector((state) => state.home.join_adventure);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchJoinAdventureRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("join adventure data: ", data);
    if (data) {
      setJoinAdventure(data);
    }
  }, [data]);

  return (
    <div className="container-custom flex flex-col my-[60px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-x-4 justify-between md:gap-y-1 lg:max-h-[500px]">
          <div className="first-column w-full md:w-[40%]">
            {
              joinAdventure != undefined && (
                <>
                  <div>
                    <img src={joinAdventure.horizonal_image}
                      className="rounded-[24px] w-full" />
                  </div>

                  <div className="mt-5 text-[20px] font-medium">
                    {joinAdventure.horizonal_caption}
                  </div>
                </>
              )
            }
          </div>

          <div className="second-column flex justify-center w-full md:w-[25%]">
            {
              joinAdventure != undefined && (
                <div className="flex justify-center w-[50%] md:w-full">
                  <img src={joinAdventure.vertical_image} alt="Join the Adventure"
                    className="rounded-[27px]" />
                </div>
              )
            }
          </div>

          <div className="third-column w-full md:w-[35%]">
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
              joinAdventure != undefined && (
                <>
                  <div className="text-[#8CC63E] font-semibold xs:text-2xl md:text-4xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
                    <div className="flex items-center">
                      <span className="mr-2">{joinAdventure.title}</span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <div className="flex items-center">
                      <span className="mr-2">{joinAdventure.description}</span>
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

export default JoinAdventure;
