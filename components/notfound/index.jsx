import React from "react";
import Image from "next/image";
import image from "../../public/images/notfound/image.png";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  return (
    <div className="container-custom flex md:flex-row flex-col md:gap-0 gap-8 h-full">
      <div className="flex flex-col gap-16 flex-1 h-full items-center my-auto">
        <div className="w-2/3 text-center">
          <div className="text-[#CCCCCC] text-[100px] lg:text-[200px]">404</div>
          <div className="flex flex-col gap-8">
            <div className="text-sm lg:text-base text-[#7f7f7f]">
              The page you are looking for was moved, removed, renamed or might
              never existed.
            </div>
            <div className="flex justify-center">
              <button
                className={`bg-[#8CC63E] border-[#8CC63E] text-white border-2 px-2 py-1 lg:px-12 lg:py-4 rounded-full`}
                aria-label="Join Us Button"
                onClick={() => router.push("/")}
              >
                <div className="inline text-base lg:text-xl">
                  {"Back to Homepage"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full  md:w-[50%] min-h-96">
        <Image
          src={image}
          className="h-screen min-h-96"
          layout="responsive" // Keeps the aspect ratio intact
          width={1920} // Adjust these values to match your image's original dimensions
          height={1080} // Matches the aspect ratio
          priority={true} // Ensures the image loads quickly
          alt="Advert Image"
        />
      </div>
    </div>
  );
}

export default NotFound;
