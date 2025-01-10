import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommunityVibesRequest, } from "@/actions/home";
import { useRouter } from "next/router";
import loveLogo from "../../public/images/landing/love-logo.svg";
import stasBgLogo from '../../public/images/landing/stas-background-logo.png';

export const CommunityVibes = ({ }) => {
  const [communityVibes, setCommunityVibes] = useState();
  const [stats, setStats] = useState([]);
  const data = useSelector((state) => state.home.community_vibes);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCommunityVibesRequest());
  }, [dispatch]);

  useEffect(() => {
    console.log("community vibes data: ", data);
    if (data) {
      setCommunityVibes(data);
      const stats = [
        {
          "title": "Cultural Treasure",
          "counter": "200+",
        },
        {
          "title": "Interactive Maps",
          "counter": "500+",
        },
        {
          "title": "Scavenger Hunts",
          "counter": "30+",
        },
        {
          "title": "Happy Customers",
          "counter": "20K+",
        },
      ];
      setStats(stats);
    }
  }, [data]);

  return (
    <div className="container-custom flex flex-col my-[60px]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col sm:flex-row gap-x-10 justify-between sm: gap-y-3 md:w-[50%]">
          <div className="">
            <div>
              <Image
                src={loveLogo}
                className="w-6"
                layout="intrinsic"
                width={100}
                height={100}
                priority={true}
                alt={"Trust Image"}
              />
            </div>
            <div className="text-[#195883] text-[20px] capitalize mt-2">
              Share with your community
            </div>
            {
              communityVibes != undefined && (
                <>
                  <div className="text-[#8CC63E] font-semibold text-[36px] mt-1">
                    <div className="flex items-center">
                      <span className="mr-2">{communityVibes.title}</span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <div className="flex items-center">
                      <span className="mr-2 text-[13px]">{communityVibes.description}</span>
                    </div>
                  </div>

                  <div className="mt-1">
                    <img src={communityVibes.community_image}
                      className="rounded-[24px]" />
                  </div>
                </>
              )
            }

          </div>
        </div>

        <div id="landing-community-bg" className="rounded-[26px] bg-[#195883] grid grid-cols-2 w-full md:w-[50%]">
          {
            stats.map((item, index) => (
              <div key={index} className="grid-item align-center p-5 flex flex-col justify-center border border-white">
                <h2 className="text-[#8CC63E] text-[48px] font-semibold">{item.counter}</h2>
                <p className="text-[20px] font-medium text-white">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default CommunityVibes;
