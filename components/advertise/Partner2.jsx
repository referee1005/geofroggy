import React from "react";
import Image from "next/image";
import arrow from "../../public/images/advertise/arrow.png";

function Partner2() {
  return (
    <div className="lg:container-custom flex flex-col items-center mb-[80px]">
      <div className="mb-4">
        <Image
          src={arrow}
          className="w-16 sm:w-20 min-h-20"
          layout="responsive" // Keeps the aspect ratio intact
          width={200} // Adjust these values to match your image's original dimensions
          height={200} // Matches the aspect ratio
          priority={true} // Ensures the image loads quickly
          alt="Advert Image"
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="text-lg font-semibold text-center">
          WE Can't WAIT TO MEET YOU
        </div>
        <div className="text-5xl sm:text-7xl font-semibold text-center">
          Let’s Talk
        </div>
        <div className="text-white bg-[#8CC63E] text-lg font-semibold rounded-md px-8 py-4 text-center w-fit">
          Partner with us
        </div>
      </div>
    </div>
  );
}

export default Partner2;
