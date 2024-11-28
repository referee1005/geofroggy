import React, { useEffect, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VerticalNews from "./topNews/verticalNews";
import HorizontalNews from "./topNews/horizontalNews";
import LatestNews from "./latestNews";
import { useRouter } from "next/router";

function NewsList({ news, latestArticles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false); // To detect screen width
  const router = useRouter();

  useEffect(() => {
    // Function to check the current window width
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenWidth();

    // Add event listener to handle screen resizing
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="mb-16 bg-white ">
      <div className="bg-custom-bg-primary">
        <div className="flex justify-center py-8 border-b-2 border-[#C1C1C1] font-semibold">
          <div
            className="cursor-pointer w-fit"
            onClick={() => router.push(`/news/subscribe`)}
          >
            Sign up for our Geofroggy Newsletter
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 lg:py-16 lg:gap-8 2xl:gap-16">
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <Image
                  src={
                    news[currentIndex] &&
                    news[currentIndex].author["photograph"]
                  }
                  className="w-[50px] h-[50px] rounded-lg"
                  width={50}
                  height={50}
                  alt={news[currentIndex] && news[currentIndex].author.name}
                />
                <div className="flex flex-col justify-between">
                  <div className="font-semibold text-lg">
                    {news[currentIndex] && news[currentIndex].author.name}
                  </div>
                  <div className="text-lg">Author</div>
                </div>
              </div>
              <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                {news[currentIndex] && news[currentIndex].news_title}
              </div>
              <div className="">
                <span className="text-[#8CC63E]">Geography</span> | Geography
              </div>
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <Image
                  src={news[currentIndex] && news[currentIndex].news_image}
                  className="rounded-xl"
                  layout="fill"
                  objectFit="cover"
                  alt={news[currentIndex] && news[currentIndex].news_title}
                />
              </div>
            </div>
          </div>

          {isMobileView ? (
            <div className="lg:hidden mt-8">
              <HorizontalNews
                data={news}
                changeIndex={(value) => setCurrentIndex(value)}
              />
            </div>
          ) : (
            <div className="lg:block hidden">
              <VerticalNews
                data={news}
                changeIndex={(value) => setCurrentIndex(value)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 lg:py-16 ">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
          Latest Articles
        </div>
        <LatestNews data={latestArticles} />
      </div>
    </div>
  );
}

export default NewsList;
