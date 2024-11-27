import React, { useState, useEffect } from "react";
import Image from "next/image";
import AdvertImage from "../../public/images/advertise/advert.png";
import facebook from "../../public/images/advertise/facebook.png";
import instagram from "../../public/images/advertise/instagram.png";
import linkedin from "../../public/images/advertise/linkedin.png";
import twitter from "../../public/images/advertise/twitter.png";
import { useRouter } from "next/router";

// import "@fortawesome/fontawesome-free/css/all.min.css";

function Advert({ body }) {
  const router = useRouter();
  return (
    <>
      <div className="relative font-montserrat">
        <div className="flex justify-end h-full">
          <div className="h-full w-full sm:w-2/3 min-h-96">
            <Image
              src={AdvertImage}
              className="h-screen min-h-96"
              layout="responsive" // Keeps the aspect ratio intact
              width={1920} // Adjust these values to match your image's original dimensions
              height={1080} // Matches the aspect ratio
              priority={true} // Ensures the image loads quickly
              alt="Advert Image"
            />
          </div>
        </div>

        <div className="sm:absolute top-0 h-full flex ml-8 lg:ml-16 xl:ml-24 3xl:ml-40 w-full sm:w-1/2 lg:w-[40%]">
          <div className=" flex flex-col my-auto gap-2 lg:gap-4 2xl:gap-8">
            <div className="font-semibold text-sm lg:text-base 3xl:text-lg">
              Advertise with us
            </div>
            <div className="font-semibold text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl">
              {body.body_title}
            </div>
            <div className="text-sm lg:text-lg 3xl:text-xl w-2/3">
              {body.body_description}
            </div>
            <div className="flex flex-col font-semibold lg:gap-4 text-sm lg:text-lg 3xl:text-xl">
              <div>Phone : {body.phone}</div>
              <div>Fax : {body.fax}</div>
            </div>
            <div className="flex gap-8">
              <div
                onClick={() => router.push("https://www.twitter.com/geofroggy")}
                className="cursor-pointer"
              >
                <Image
                  src={twitter}
                  width={100}
                  height={100}
                  className="w-[30px]"
                />
              </div>
              <div
                onClick={() =>
                  router.push("https://www.facebook.com/geofroggy")
                }
                className="cursor-pointer"
              >
                <Image
                  src={facebook}
                  width={100}
                  height={100}
                  className="w-[30px]"
                />
              </div>
              <div
                onClick={() =>
                  router.push("https://www.instagram.com/geofroggy")
                }
                className="cursor-pointer"
              >
                <Image
                  src={instagram}
                  width={100}
                  height={100}
                  className="w-[30px]"
                />
              </div>
              <div
                onClick={() =>
                  router.push("https://www.linkedin.com/geofroggy")
                }
                className="cursor-pointer"
              >
                <Image
                  src={linkedin}
                  width={100}
                  height={100}
                  className="w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advert;
